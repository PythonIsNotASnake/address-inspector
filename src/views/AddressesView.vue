<template>
  <section id="addresses-page">
    <div
      :style="{ backgroundImage: `url(${backgroundUrl})`, height: '950px', width: 'auto', position:'relative' }"
    >
      <div class="background">
        <TitleBar />
        <SearchAddresses />
        <Addresses />
        <span :style="{ position: 'absolute', bottom: '25px', right: '25px' }">
          <a href="#app">Home</a>
        </span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Addresses from "../components/Addresses.vue";
import SearchAddresses from "../components/SearchAddresses.vue";
import TitleBar from "../components/TitleBar.vue";
import backgroundUrl from "../assets/shipsfhd.png";

export default Vue.extend({
  name: "AddressesView",
  components: {
    Addresses,
    TitleBar,
    SearchAddresses,
  },
  data: function () {
    return {
      backgroundUrl,
    };
  },
});
</script>

<style scoped>
a {
  border: white solid;
  background: rgba(0, 0, 0, 0.1);
  color: white;
  text-decoration: none;
  font-size: 30px;
}
a:hover {
  background: rgba(0, 0, 0, 0.4);
  color: white;
}
.background {
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>