<template>
  <div
    class="text-block"
    :class="{ 'text-block--reverse': reverse }"
    :data-aos="computedAos"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useAnimate } from "../../../hooks/useAnimate";

const props = defineProps({
  reverse: { type: Boolean, default: false },
});

const { computedAos } = useAnimate(props.reverse);
</script>

<style lang="scss">
@use "@/assets/scss/variables.scss" as *;
@use "@/assets/scss/placeholders.scss" as *;

.text-block {
  padding: 0 15vmin;
  font-size: clamp(18px, 2vw, 22px);
  width: 70vw;
  margin: 4vmin 0;
  text-align: justify;
  line-height: 2.8;

  h3 {
    font-size: clamp(24px, 3vw, 30px);
    color: $primaryColor;
    font-weight: bold;
    font-family: $fancyFont;
    text-align: left;
    margin: 2vmin 10vmin;
  }

  p {
    font-size: clamp(17px, 1.8vw, 20px);
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

@media (max-width: $tabletBreakpoint) {
  .text-block {
    width: 80vw;
    padding: 0 10vmin;
    font-size: clamp(18px, 2.2vw, 22px);
    line-height: 2.5;

    h3 {
      font-size: clamp(22px, 2.8vw, 28px);
      margin: 2vmin 6vmin;
    }

    p {
      font-size: clamp(16px, 2vw, 19px);
      margin: 0 3vmin;
    }
  }
}

@media (max-width: $mobileBreakpoint) {
  .text-block {
    width: 85vw;
    padding: 0 4vmin;
    margin: 3vmin auto;
    font-size: clamp(18px, 3vw, 22px);
    line-height: 1.8;

    h3 {
      font-size: clamp(20px, 4vw, 26px);
      margin: 6vmin 0;
      text-align: center;
    }

    p {
      font-size: clamp(15px, 3vw, 18px);
      margin: 2vmin 0;
    }

    &.text-block--reverse {
      margin-left: auto;

      h3 {
        text-align: center;
        margin: 2vmin 0;
      }
    }
  }
}

@media (max-width: $mobileBreakpoint) and (orientation: landscape) {
  .text-block {
    font-size: clamp(20px, 2.6vw, 24px);
    line-height: 2;

    h3 {
      font-size: clamp(24px, 3.5vw, 30px);
      margin: 3vmin 0;
      text-align: center;
    }

    p {
      font-size: clamp(18px, 2.4vw, 20px);
      margin: 1.5vmin 0;
    }
  }
}
</style>
