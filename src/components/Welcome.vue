<template>
  <section id="welcome">
    <div class="welcomewords" :style="{ paddingTop: '200px' }">Willkommen bei meiner Aufgabe</div>
    <div class="welcomewords">für die MT AG...</div>
    <div class="textbox">
      Dies ist eine Single-Page Website zur Demonstration der mir zugeteilten Aufgabe.
      Hierfür wurde eine Datenbank mit Adressen angelegt, welche über einen Spring Boot Server zugreifbar wird.
      Das Resultat daraus kann im Abschnitt 'Adressen' dieser Website eingesehen werden.
    </div>

    <div class="textbox">
      <a href="#addresses-page">Zu den Adressen</a>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Welcome",
});
</script>

<style scoped>
.welcomewords {
  text-align: left;
  font-weight: bold;
  color: white;
  font-size: 60px;
  padding-left: 5%;
}
.textbox {
  text-align: justify;
  color: white;
  font-size: 30px;
  padding-top: 20px;
  padding-left: 5%;
  padding-right: 33%;
}
a {
  border: white solid;
  background: rgba(0, 0, 0, 0.1);
  color: white;
  text-decoration: none;
}
a:hover {
  background: rgba(0, 0, 0, 0.4);
  color: white;
}
</style>