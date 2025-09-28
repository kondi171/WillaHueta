<template>
  <header class="hero-header">
    <transition name="background-fade" mode="out-in">
      <div
        class="background-image"
        :key="currentSlideIndex"
        :class="scaleDirection === 'in' ? 'zoom-in' : 'zoom-out'"
        :style="{ backgroundImage: `url(${currentSlide.image})` }"
      ></div>
    </transition>

    <div class="overlay">
      <transition name="fade" mode="out-in">
        <div
          :key="currentSlideIndex"
          class="slide-content"
          :class="slideAlignment"
        >
          <h1 class="title">
            <span
              v-if="currentSlide.titleTop"
              class="title-top"
              :class="fadeDirection === 'left' ? 'fade-left' : 'fade-right'"
              >{{ currentSlide.titleTop }}</span
            >

            <span
              v-if="currentSlide.titleBottom"
              class="title-bottom"
              :class="fadeDirection === 'right' ? 'fade-left' : 'fade-right'"
              >{{ currentSlide.titleBottom }}</span
            >

            <span
              v-if="currentSlide.description"
              class="title-description"
              :class="fadeDirection === 'left' ? 'fade-left' : 'fade-right'"
              >{{ currentSlide.description }}</span
            >
          </h1>

          <div v-if="currentSlideIndex === 0" class="stars">
            <span
              v-for="n in 4"
              :key="n"
              class="star wave"
              :class="`delay-${n + 2}`"
              >★</span
            >
          </div>
        </div>
      </transition>
    </div>
    <div class="progress-bar-container">
      <div class="progress-bar" :key="currentSlideIndex"></div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from "vue";

const slides = [
  {
    titleTop: "Willa",
    titleBottom: "Hueta",
    description: "",
    image: new URL("@/assets/img/landing/header.jpg", import.meta.url).href,
  },
  {
    titleTop: "",
    titleBottom: "Hotel",
    description: "Luksusowe pokoje i apartamenty w zabytkowej willi.",
    image: new URL("@/assets/img/landing/hotel-header.jpg", import.meta.url)
      .href,
  },
  {
    titleTop: "",
    titleBottom: "Restauracja",
    description: "Wykwintna kuchnia i nastrojowe wnętrza.",
    image: new URL(
      "@/assets/img/landing/restaurant-header.jpg",
      import.meta.url
    ).href,
  },
  {
    titleTop: "Sale",
    titleBottom: "Konferencyjne",
    description: "Nowoczesne przestrzenie do organizacji spotkań biznesowych.",
    image: new URL(
      "@/assets/img/landing/conference-header.jpg",
      import.meta.url
    ).href,
  },
  {
    titleTop: "",
    titleBottom: "Wesela",
    description: "Magiczna oprawa najważniejszego dnia w życiu.",
    image: new URL("@/assets/img/landing/weddings-header.jpg", import.meta.url)
      .href,
  },
  {
    titleTop: "Usługi",
    titleBottom: "Cateringowe",
    description: "Profesjonalna obsługa kulinarna wszelkich wydarzeń.",
    image: new URL("@/assets/img/landing/catering-header.jpg", import.meta.url)
      .href,
  },
  {
    titleTop: "Imprezy",
    titleBottom: "Okolicznościowe",
    description: "Organizacja niezapomnianych uroczystości i eventów.",
    image: new URL("@/assets/img/landing/events-header.jpg", import.meta.url)
      .href,
  },
];

const currentSlideIndex = ref(0);
const currentSlide = ref(slides[0]);
const scaleDirection = ref("in");
let interval: ReturnType<typeof setInterval>;

const fadeDirection = computed(() => {
  if (currentSlideIndex.value === 0) return "center";
  return currentSlideIndex.value % 2 === 0 ? "left" : "right";
});

const slideAlignment = computed(() => {
  if (fadeDirection.value === "center") return "align-center";
  return fadeDirection.value === "left"
    ? "align-left-bottom"
    : "align-right-bottom";
});

onMounted(() => {
  interval = setInterval(() => {
    currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.length;
    currentSlide.value = slides[currentSlideIndex.value];

    scaleDirection.value = scaleDirection.value === "in" ? "out" : "in";
  }, 7000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;

.hero-header {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-position: center;
    z-index: 0;
  }

  .zoom-in {
    animation: zoomIn 7s ease forwards;
  }

  .zoom-out {
    animation: zoomOut 7s ease forwards;
  }

  .overlay {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.65);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4vmin;
  }

  .slide-content {
    width: 100%;
    color: white;
    padding: 2vmin;
  }

  .align-center {
    text-align: center;
    align-self: center;
    margin-top: 10vmin;
  }

  .align-left-bottom {
    text-align: left;
    align-self: flex-end;
  }

  .align-right-bottom {
    text-align: right;
    align-self: flex-end;
  }

  .title {
    display: flex;
    flex-direction: column;
    line-height: 1;
    color: white;
    user-select: none;
    text-shadow: 0 0 1vmin rgba(0, 0, 0, 0.7);

    &-top {
      font-family: $supportFont;
      font-size: 12vmin;
      font-weight: 300;
    }

    &-bottom {
      font-family: $fancyFont;
      font-size: 18vmin;
      font-weight: 700;
      letter-spacing: 0.05em;
    }

    &-description {
      font-family: $supportFont;
      font-size: 4vmin;
      font-weight: 600;
      color: gold;
      z-index: 10;
      margin: 0 2vmin;
      text-shadow: 0 0 1vmin rgba(0, 0, 0, 0.9), 0 0 2vmin rgba(0, 0, 0, 0.6),
        0 0 3vmin rgba(0, 0, 0, 0.4);
      filter: drop-shadow(0 0 1vmin gold);
    }
  }

  .stars {
    display: flex;
    justify-content: center;
    gap: 1.5vmin;

    .star {
      font-size: 10vmin;
      color: gold;
      filter: drop-shadow(0 0 1vmin gold);
      opacity: 0;
      animation: fadeIn 0.8s ease forwards, waveSmooth 4s ease-in-out infinite;
    }
    @for $i from 1 through 6 {
      .delay-#{$i} {
        animation-delay: #{($i * 0.3)}s;
      }
    }
  }
}

.progress-bar-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.2vmin;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: 2;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  width: 100%;
  background-color: gold;
  transform-origin: left;
  animation: progressSlide 7s linear forwards;
}
.fade-left {
  animation: fadeInLeft 0.9s ease forwards;
}

.fade-right {
  animation: fadeInRight 0.9s ease forwards;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.background-fade-enter-active,
.background-fade-leave-active {
  transition: opacity 1s ease, filter 1s ease;
}
.background-fade-enter-from,
.background-fade-leave-to {
  opacity: 0;
  filter: blur(10px);
}
.background-fade-enter-to,
.background-fade-leave-from {
  opacity: 1;
  filter: blur(0px);
}

@media (max-width: $xLargeBreakpoint) {
  .hero-header {
    .title {
      &-top {
        font-size: 9vmin;
      }
      &-bottom {
        font-size: 14vmin;
      }
      &-description {
        font-size: 3.5vmin;
      }
    }

    .stars .star {
      font-size: 8vmin;
    }
  }
}

@media (max-width: $mobileBreakpoint) {
  .hero-header {
    .overlay {
      padding: 6vmin 2vmin;
    }

    .slide-content {
      text-align: center !important;
      align-self: center !important;
    }

    .title {
      &-top {
        font-size: 7vmin;
      }
      &-bottom {
        font-size: 11vmin;
      }
      &-description {
        font-size: 3vmin;
        margin: 2vmin 0;
      }
    }

    .stars .star {
      font-size: 6vmin;
    }
  }
}

@media (max-width: $xSmallBreakpoint) {
  .hero-header {
    .overlay {
      padding: 8vmin 2vmin;
    }

    .title {
      &-top {
        font-size: 8vmin;
      }
      &-bottom {
        font-size: 9vmin;
        letter-spacing: 0.02em;
      }
      &-description {
        font-size: 6vmin;
        line-height: 1.3;
        margin: 3vmin 0;
      }
    }

    .stars {
      gap: 1vmin;
      .star {
        font-size: 10vmin;
      }
    }

    .progress-bar-container {
      height: 0.4vmin;
    }
  }
}

@keyframes zoomIn {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

@keyframes zoomOut {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes waveSmooth {
  0%,
  100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-0.8vmin);
  }
  50% {
    transform: translateY(-1.2vmin);
  }
  75% {
    transform: translateY(-0.8vmin);
  }
}

@keyframes progressSlide {
  0% {
    transform: scaleX(0);
    opacity: 1;
  }
  95% {
    transform: scaleX(1);
    opacity: 1;
  }
  100% {
    transform: scaleX(1);
    opacity: 0;
  }
}
</style>
