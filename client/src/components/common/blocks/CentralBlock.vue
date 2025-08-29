<template>
  <div class="central-block" data-aos="fade-up">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@use "@/assets/scss/variables.scss" as *;
@use "@/assets/scss/placeholders.scss" as *;

.central-block {
  margin: 6vmin auto;
  width: 80vw;
  font-size: 2.5vmin;
  line-height: 250%;
  color: $textColor;
  text-align: justify;
  text-align-last: center;

  h3 {
    font-size: 4vmin;
    color: $primaryColor;
    font-weight: bold;
    font-family: $fancyFont;
    text-align: center;
  }

  strong {
    color: $secondaryColor;
  }
  img {
    margin: 5vmin 5vmin;
    transition: transform 0.4s;
    &:hover {
      cursor: pointer;
      transform: scale(1.2);
    }
  }
}
</style>
