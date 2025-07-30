<template>
  <div
    class="image-block"
    :class="{ 'image-block--reverse': reverse }"
    :data-aos="reverse ? 'fade-left' : 'fade-right'"
  >
    <div class="image">
      <slot name="image" />
    </div>
    <div class="text">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

defineProps({
  reverse: {
    type: Boolean,
    default: false,
  },
});

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

.image-block {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5vmin;
  line-height: 250%;
  margin: 5vmin 15vmin;

  h3 {
    font-size: 3vmin;
    color: $primaryColor;
    font-weight: bold;
    font-family: $fancyFont;
    text-align: right;
    margin-top: 2vmin;
    margin-right: 5vmin;
  }

  .text {
    width: 55%;
    font-size: 2vmin;
    text-align: justify;
    color: $textColor;

    h2 {
      font-size: 9vmin;
      font-family: $fancyFont;
    }

    p {
      margin: 2vmin 0;
    }

    strong {
      color: $secondaryColor;
    }
  }

  .image {
    width: 45%;

    img {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 2vmin;
      box-shadow: 0 1vmin 2vmin rgba(0, 0, 0, 0.3);
    }
    .no-shadow {
      box-shadow: none;
      background-color: red;
    }
  }

  &.image-block--reverse {
    flex-direction: row-reverse;

    h3 {
      text-align: left;
      margin-left: 5vmin;
      margin-right: 0;
    }
  }
  // &:last-of-type {
  //     img {
  //       box-shadow: none;
  //     }
  //   }
  .no-shadow {
    box-shadow: none;
  }
}
</style>
