<template>
  <section id="control-page">
    <div
      :style="{ backgroundImage: `url(${backgroundUrl})`, height: '950px', width: 'auto', position:'relative' }"
    >
      <div class="background">
        <TitleBar />

        <span :style="{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }">
          <div class="box">
            <AddAddresses />
          </div>
          <div class="box">
            <DeleteAddresses />
          </div>
        </span>

        <span :style="{ position: 'absolute', bottom: '25px', right: '25px' }">
          <a href="#app">Home</a>
        </span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import TitleBar from "../components/TitleBar.vue";
import AddAddresses from "../components/AddAddresses.vue";
import DeleteAddresses from "../components/DeleteAddresses.vue";
import backgroundUrl from "../assets/cityfhd.png";

export default Vue.extend({
  name: "ControlView",
  components: {
    TitleBar,
    AddAddresses,
    DeleteAddresses,
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
.box {
  flex: 1;
  display: flex;
}
.box:first-child {
  justify-content: flex-end;
}
.box:last-child {
  justify-content: flex-start;
}
</style>