<script setup lang="ts">
import Landing from "./components/Landing.vue";
import "aos/dist/aos.css";
import AOS from "aos";
import { onMounted } from "vue";

onMounted(() => {
  AOS.init({
    duration: 800,
    once: false,
  });

  setTimeout(() => {
    AOS.refresh();
  }, 1000);
});
</script>

<template>
  <Landing />
</template>

<style lang="scss">
@use "@/assets/scss/variables.scss" as *;
</style>
