<template>
  <section id="menu">
    <table :style="{ marginLeft: 'auto', marginRight: 'auto' }">
      <thead>
        <tr>
          <th>
            <a href="#welcome-page">Willkommen</a>
          </th>
          <th>
            <a href="#addresses-page">Adressen</a>
          </th>
          <th>
            <a href="#control-page">Einstellungen</a>
          </th>
        </tr>
      </thead>
    </table>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Menu",
});
</script>

<style scoped>
a {
  color: white;
  font-size: 40px;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
th {
  padding-left: 15px;
  padding-right: 15px;
}
</style>