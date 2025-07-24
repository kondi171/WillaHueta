<template>
  <section class="home">
    <About />
    <News />
    <article class="services">
      <Services />
    </article>
    <!-- <Header /> -->
  </section>
</template>

<script setup lang="ts">
import Header from "../headers/Header.vue";
import About from "./About.vue";
import News from "./News.vue";
import Services from "./Services.vue";
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;

.home {
  display: flex;
  flex-direction: column;
  gap: 6vh;
  background-color: #f8f6f3;

  .services {
    h2 {
      margin: 0 10vmin;
    }
  }
}
</style>
