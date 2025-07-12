<script setup lang="ts">
import { useRoute } from "vue-router";
import MainHeader from "./headers/MainHeader.vue";
import SubHeader from "./headers/SubHeader.vue";
import Nav from "./Nav.vue";
import Footer from "./footer/Footer.vue";

const route = useRoute();
</script>

<template>
  <div class="landing">
    <div class="wrapper">
      <MainHeader v-if="route.name === 'home'" />
      <SubHeader v-else />
      <Nav />
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.landing {
  background-image: url("@/assets/img/backgrounds/home-background.png");

  .wrapper {
    display: flex;
    flex-direction: column;
    // height: 100vh;
  }
}
</style>
