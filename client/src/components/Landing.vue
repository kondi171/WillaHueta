<script setup lang="ts">
import Header from "./Header.vue";
import Nav from "./Nav.vue";
import Footer from "./footer/Footer.vue";
import Home from "./Home.vue";
</script>

<template>
  <div class="landing">
    <div class="wrapper">
      <Header />
      <Nav />
    </div>
    <Home />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.landing {
  background-image: url("@/assets/img/bg/so-white.png");
  .wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
}
</style>
