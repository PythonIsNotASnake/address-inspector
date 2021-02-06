<template>
  <section id="singlepage">
    <div v-if="$isMobile()"></div>
    <div v-else>
      <WelcomeView />
      <AddressesView />
      <ControlView />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import VueMobileDetection from "vue-mobile-detection";
import AddressesView from "../views/AddressesView.vue";
import WelcomeView from "../views/WelcomeView.vue";
import ControlView from "../views/ControlView.vue";

export default Vue.extend({
  name: "Settings",
  components: {
    AddressesView,
    WelcomeView,
    ControlView,
  },
});
Vue.use(VueMobileDetection);
</script>

<style scoped>
</style>