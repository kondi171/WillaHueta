<template>
  <div class="button-wrapper" :class="{ visible: showButton }">
    <button class="button" @click="scrollToTop">
      <font-awesome-icon icon="arrow-up" class="icon" />
    </button>

    <div class="rotating-container">
      <svg viewBox="0 0 120 120" class="orbit-svg">
        <defs>
          <path
            id="orbitPath"
            d="M60,60 m-30,0 a30,30 0 1,1 60,0 a30,30 0 1,1 -60,0"
          />
        </defs>

        <text class="text-willa">
          <textPath xlink:href="#orbitPath" startOffset="0%">
            • Willa • Hueta
          </textPath>
        </text>
        <text class="text-hueta">
          <textPath xlink:href="#orbitPath" startOffset="50%">
            • Willa • Hueta
          </textPath>
        </text>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const showButton = ref(false);

const handleScroll = () => {
  showButton.value = window.scrollY > 200;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;

.button-wrapper {
  position: fixed;
  bottom: 0;
  right: 2vmin;
  width: 22vmin;
  height: 22vmin;
  z-index: 5;

  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;

  &.visible {
    opacity: 1;
    pointer-events: auto;
  }

  &:has(.button:hover) {
    .rotating-container {
      animation-play-state: paused;

      text {
        fill: $secondaryColor;
      }
    }
  }
}

.rotating-container {
  width: 100%;
  height: 100%;
  animation: rotate 12s linear infinite;
  transform-origin: center center;
  pointer-events: none;
}

.orbit-svg {
  width: 100%;
  height: 100%;

  text {
    font-size: 0.8vmin;
    fill: $primaryColor;
    font-weight: bold;
    letter-spacing: 2px;
    transition: fill 0.3s ease;
  }
}

.button {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 8vmin;
  width: 8vmin;
  transform: translate(-50%, -50%);
  cursor: pointer;
  padding: 1vmin;
  border-radius: 50%;
  background-color: transparent;
  border: 0.3vmin solid $primaryColor;
  box-shadow: inset 0 0 1vmin rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  z-index: 10;

  .icon {
    color: $primaryColor;
    font-size: 3vmin;
    transition: all 0.3s ease;
  }

  &:hover {
    background-color: $secondaryColor;
    border-color: $bgColor;

    .icon {
      color: $bgColor;
      transform: scale(1.2);
    }
  }

  &:active {
    transform: translate(-50%, -50%) translateY(2px);
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: $tabletBreakpoint) {
  .button-wrapper {
    width: 28vmin;
    height: 28vmin;
    right: 2vmin;

    .button {
      width: 10vmin;
      height: 10vmin;

      .icon {
        font-size: 4vmin;
      }
    }
  }
  .orbit-svg text {
    font-size: 1.2vmin;
  }
}

@media (max-width: $mobileBreakpoint) {
  .button-wrapper {
    width: 32vmin;
    height: 32vmin;
    right: 2vmin;

    .button {
      width: 12vmin;
      height: 12vmin;

      .icon {
        font-size: 5vmin;
      }
    }
  }
  .orbit-svg text {
    font-size: 1.8vmin;
  }
}
</style>
