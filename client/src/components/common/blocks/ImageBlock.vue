<template>
  <div
    class="image-block"
    :class="{ 'image-block--reverse': reverse }"
    :data-aos="computedAos"
  >
    <div class="image"><slot name="image" /></div>
    <div class="text"><slot /></div>
  </div>
</template>
<script setup lang="ts">
import { useAnimate } from "../../../hooks/useAnimate";
const props = defineProps({ reverse: { type: Boolean, default: false } });
const { computedAos } = useAnimate(props.reverse);
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
}
@media (max-width: $tabletBreakpoint) {
  .image-block {
    margin: 4vmin auto;
    padding: 0 4vmin;
    gap: 3vmin;
    h3 {
      font-size: 3vmin;
      margin-right: 3vmin;
    }
    .text {
      width: 60%;
      font-size: 3vmin;
      h2 {
        font-size: 7vmin;
      }
    }
    .image {
      width: 50%;
    }
  }
}

@media (max-width: $mobileBreakpoint) {
  .image-block {
    flex-direction: column;
    padding: 0 2vmin;
    gap: 3vmin;
    width: 80vw;
    font-size: clamp(18px, 3vw, 22px);
    line-height: 2;
    margin: 4vmin auto;
    h3 {
      font-size: 18px;
      margin: 2vmin 0;
      text-align: center;
    }
    .text {
      width: 100%;
      font-size: 16px;
      order: -1;
      h2 {
        font-size: 28px;
        text-align: center;
      }
    }
    .image {
      width: 100%;
      img {
        max-width: 100%;
        height: auto;
        border-radius: 1vmin;
        box-shadow: 0 0.5vmin 1vmin rgba(0, 0, 0, 0.2);
      }
    }
    &.image-block--reverse {
      flex-direction: column;
      h3 {
        text-align: center;
        margin: 2vmin 0;
      }
    }
  }
}
//
</style>
