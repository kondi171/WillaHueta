<template>
  <div
    class="text-block"
    :class="{ 'text-block--reverse': reverse }"
    :data-aos="reverse ? 'fade-right' : 'fade-left'"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  reverse: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss">
@use "@/assets/scss/variables.scss" as *;
@use "@/assets/scss/placeholders.scss" as *;

.text-block {
  padding: 0 15vmin;
  font-size: 2vmin;
  width: 70vw;
  margin: 4vmin 0;
  text-align: justify;
  line-height: 300%;
  h3 {
    font-size: 4vmin;
    color: $primaryColor;
    font-weight: bold;
    font-family: $fancyFont;
    text-align: left;
    margin: 2vmin 10vmin;
  }

  p {
    font-size: 2.5vmin;
    color: $textColor;
    margin: 0 5vmin;
  }

  strong {
    color: $secondaryColor;
  }

  &.text-block--reverse {
    margin-left: auto;
    text-align: justify;
    h3 {
      text-align: right;
      margin-right: 5vmin;
      margin-left: 0;
    }
  }
}
</style>
