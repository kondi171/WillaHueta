<template>
  <div class="list-block" data-aos="zoom-in-down">
    <slot />
  </div>
</template>

<script setup lang="ts">
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

<style lang="scss">
@use "@/assets/scss/variables.scss" as *;
@use "@/assets/scss/placeholders.scss" as *;

.list-block {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 6vmin 0;

  .section {
    font-size: 2vmin;
    line-height: 1.6;

    h3 {
      font-size: 2.5vmin;
      color: $primaryColor;
      margin-bottom: 1vmin;
    }

    ul {
      list-style-type: disc;
      padding-left: 2vmin;

      li {
        margin-bottom: 0.5vmin;
        color: $textColor;
        &::marker {
          color: $primaryColor;
        }
      }
    }
  }
}
</style>
