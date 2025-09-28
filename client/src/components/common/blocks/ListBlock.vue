<template>
  <div class="list-block" :data-aos="finalAos">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useAnimate } from "../../../hooks/useAnimate";

const props = defineProps({
  options: {
    type: Object as () => { desktop?: string; mobile?: string },
    default: () => ({ desktop: "zoom-in-down", mobile: "fade-up" }),
  },
  forceMobileFade: {
    type: Boolean,
    default: false,
  },
});

const { computedAos } = useAnimate(false, props.options);

const finalAos = computed(() =>
  props.forceMobileFade ? props.options.mobile : computedAos.value
);
</script>

<style lang="scss">
@use "@/assets/scss/variables.scss" as *;
@use "@/assets/scss/placeholders.scss" as *;

.list-block {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 6vmin auto;
  width: 80vw;
  font-size: clamp(18px, 2vw, 22px);
  line-height: 2.2;
  color: $textColor;

  .section {
    font-size: 2vmin;
    line-height: 1.6;

    h3 {
      font-size: 2.5vmin;
      color: $primaryColor;
      margin-bottom: 1vmin;
      font-family: $fancyFont;
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

@media (max-width: $tabletBreakpoint) {
  .list-block {
    width: 80vw;
    justify-content: center;
    gap: 4vmin;

    .section {
      font-size: 3vmin;

      h3 {
        font-size: 3.5vmin;
      }
    }
  }
}

@media (max-width: $mobileBreakpoint) {
  .list-block {
    flex-direction: column;
    align-items: flex-start;
    width: 85vw;
    margin: 4vmin auto;
    padding: 0 4vmin;
    gap: 3vmin;

    .section {
      width: 100%;
      font-size: clamp(15px, 3vw, 18px);

      h3 {
        font-size: clamp(20px, 4vw, 26px);
      }

      ul {
        padding-left: 4vmin;
        li {
          margin: 2vmin 0;
        }
      }
    }
  }
}

@media (max-width: $mobileBreakpoint) and (orientation: landscape) {
  .list-block {
    font-size: clamp(20px, 2.6vw, 24px);
    line-height: 2;

    .section h3 {
      font-size: clamp(24px, 3.5vw, 30px);
      margin: 3vmin 0;
      text-align: center;
    }
  }
}
</style>
