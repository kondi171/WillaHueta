<script setup lang="ts"></script>
<template>
  <header class="header">
    <h1>
      <span class="text-primary">Willa</span>
      <span class="text-secondary">Hueta</span>
    </h1>
  </header>
</template>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;
@keyframes scroll-background {
  0% {
    background-position: center 0;
    transform: scale(1);
  }
  100% {
    background-position: center 100%;
    transform: scale(2);
  }
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  // background-color: $blackColor;
  background-image: url("@/assets/img/hotel.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center 0;
  overflow: hidden;

  h1 {
    color: $primaryColor;
    // background-color: #ffffff05;
    // backdrop-filter: blur(10px);
    padding: 2vmin;
    border-radius: 2vmin;
    text-align: center;

    background-image: linear-gradient(90deg, $primaryColor 0%, $secondaryColor 50%, $primaryColor);
    background-clip: text;
    color: transparent;

    span {
      font-family: $fancyFont;
      font-size: 15vmin;
      line-height: 1;
      display: block;
      &:first-of-type {
        font-size: 5vmin;
      }
    }
  }
}
</style>
