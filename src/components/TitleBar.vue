<template>
  <section id="title-bar">
    <span :style="{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }">
      <div class="box">
        <span id="logo">Address-Inspector</span>
      </div>
      <div class="box">
        <Menu />
      </div>
      <div class="box">
        <span />
      </div>
    </span>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Menu from "../components/Menu.vue";

export default Vue.extend({
  name: "TitleBar",
  components: {
    Menu,
  },
});
</script>

<style scoped>
#logo {
  font-size: 40px;
  color: white;
  font-family: Papyrus;
}
.box {
  flex: 1;
  display: flex;
  justify-content: center;
}
.box:first-child > span {
  margin-right: auto;
}
.box:last-child > span {
  margin-left: auto;
}
</style>