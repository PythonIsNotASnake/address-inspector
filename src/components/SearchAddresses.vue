<template>
  <div :style="{paddingLeft: 'auto', paddingRight:'auto'}">
    <FormulateForm v-model="formValues" type="group">
      <fieldset>
        <legend :style="{ color: 'white', marginBottom: '10px' }">Suchen</legend>

        <FormulateInput
          type="text"
          name="id"
          placeholder="123"
          label="ID der zu suchenden Adresse:"
          validation="required"
          :validation-messages="{required:'Pflichtfeld'}"
        />
        <br />
        <FormulateInput
          v-if="!formValues.id"
          type="submit"
          label="Suchen"
          @click="findAddress()"
          disabled
        />
        <FormulateInput v-else type="submit" label="Suchen" @click="findAddress()" />
        <div v-if="address" :style="{ color: 'white', fontSize: '1.2rem' }">
          <br />
          {{ address.zipCode }} {{ address.city }} {{ address.street }}
        </div>
      </fieldset>
    </FormulateForm>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import VueFormulate from "@braid/vue-formulate";

export default Vue.extend({
  name: "SearchAddresses",
  data: function () {
    return { formValues: {}, address: {} };
  },
  methods: {
    findAddress: async function () {
      let id = this.formValues.id;
      axios
        .get("/api/address/" + id)
        .then((res) => {
          if (!res.data) {
            alert("Eine Adresse mit der ID " + id + " existiert nicht.");
          } else {
            this.address = res.data;
          }
        })
        .catch(function (error) {
          alert("Bei der Bearbeitung der Anfrage ist ein Fehler aufgetreten.");
          console.log(error);
        });
    },
  },
});
Vue.use(VueFormulate);
</script>

<style lang="scss" scoped>
.formulate-input {
  font-size: 1.5rem;
  color: white;
}
fieldset {
  background: rgba(0, 0, 0, 0.4);
  border: 0;
  margin-bottom: 2em;
  border-radius: 0.25em;
  border: 1px solid white;
}
.formulate-form {
  max-width: max-content;
  margin: 0 auto;
  padding: 1em;
  border-radius: 0.5em;
}
</style>