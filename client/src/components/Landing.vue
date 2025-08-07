<script setup lang="ts">
import { useRoute } from "vue-router";
import MainNav from "./navs/MainNav.vue";
import MainHeader from "./headers/MainHeader.vue";
import Header from "./headers/Header.vue";
import SubHeader from "./headers/SubHeader.vue";
import Footer from "./footer/Footer.vue";
import TopButton from "./common/TopButton.vue";

const route = useRoute();
</script>

<template>
  <div class="landing">
    <div class="wrapper">
      <MainHeader v-if="route.name === 'home'" />
      <SubHeader v-else />
      <MainNav />
    </div>
    <router-view />
    <TopButton />
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.landing {
  background-image: url("@/assets/img/backgrounds/home-background.png");

  .wrapper {
    display: flex;
    flex-direction: column;
  }
}
</style>
