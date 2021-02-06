<template>
  <div id="addressStyle">
    <div v-if="addressList!=null">
      <table id="myTable">
        <thead>
          <tr>
            <th @click="sortColumn('id',0)">ID</th>
            <th @click="sortColumn('zipCode',1)">Postleitzahl</th>
            <th @click="sortColumn('city',2)">Ort</th>
            <th @click="sortColumn('street',3)">Straße</th>
            <th @click="refreshTable()">
              <img class="button" src="../assets/refresh.png" alt="RefreshButton" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="address in addressList" :key="address.id">
            <td>{{address.id}}</td>
            <td>{{address.zipCode}}</td>
            <td>{{address.city}}</td>
            <td>{{address.street}}</td>
            <td @click="deleteEntry(address.id)" :style="{ cursor: 'pointer' }">
              <img class="button" src="../assets/delete.png" alt="DeleteButton" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  name: "Addresses",
  data: function () {
    return {
      addressList: [],
      currentSortDir: ["desc", "desc", "desc", "desc"],
    };
  },
  created: function () {
    fetch("/api/address/all")
      .then((res) => res.json())
      .then((res) => {
        this.addressList = res;
      });
  },
  methods: {
    refreshTable: function () {
      axios
        .get("/api/address/all")
        .then((res) => {
          this.addressList = res.data;
        })
        .catch(function (error) {
          alert("Bei der Bearbeitung der Anfrage ist ein Fehler aufgetreten.");
          console.log(error);
        });
    },

    deleteEntry: function (id) {
      axios
        .delete("/api/address/" + id)
        .then((res) => {
          console.log(res);
          this.refreshTable();
        })
        .catch(function (error) {
          alert("Bei der Bearbeitung der Anfrage ist ein Fehler aufgetreten.");
          console.log(error);
        });
    },

    compare: function (key, order = "asc", columnNumber) {
      for (let i = 0; i < this.currentSortDir.length; i++) {
        if (i === columnNumber) {
          this.currentSortDir[columnNumber] = order;
        } else {
          this.currentSortDir[i] = "desc";
        }
      }

      return function innerSort(a, b) {
        var varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
        var varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
          comparison = 1;
        } else if (varA < varB) {
          comparison = -1;
        }
        return order === "desc" ? comparison * -1 : comparison;
      };
    },

    sortColumn: function (columnName, columnNumber) {
      if (this.currentSortDir[columnNumber] === "asc") {
        this.addressList.sort(this.compare(columnName, "desc", columnNumber));
      } else if (this.currentSortDir[columnNumber] === "desc") {
        this.addressList.sort(this.compare(columnName, "asc", columnNumber));
      }
    },
  },
};
</script>

<style scoped>
table {
  border-spacing: 1px;
}
thead {
  background-color: black;
  color: white;
}
th {
  cursor: pointer;
  padding: 10px;
}
th:hover {
  text-decoration: underline;
}
td {
  padding: 10px;
  color: white;
}

#myTable {
  font-size: 25px;
  margin-left: auto;
  margin-right: auto;
  background: rgba(0, 0, 0, 0.4);
}
.button {
  width: 2rem;
}
</style>