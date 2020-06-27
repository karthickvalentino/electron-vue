<template>
  <v-app id="app">
    <LeftNavigation :menu="toggle" />
    <TopNavigation v-on:menu="toggleMenu" />
    <v-main>
      <v-container class="fill-height" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LeftNavigation from "./components/LeftNavigation";
import TopNavigation from "./components/TopNavigation";

export default {
  name: "kfr",
  data: () => ({
    toggle: null
  }),
  components: {
    LeftNavigation,
    TopNavigation
  },
  methods: {
    toggleMenu(val) {
      this.toggle = val;
    }
  }
};
</script>

<style>
/* CSS */
</style>
