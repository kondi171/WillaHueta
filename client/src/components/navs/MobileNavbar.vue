<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import MobileOverlay from "./MobileOverlay.vue";

const route = useRoute();
const isOpen = ref(false);

const toggleMenu = () => (isOpen.value = !isOpen.value);

watch(isOpen, (val) => {
  if (val) {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = scrollBarWidth + "px";
  } else {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }
});

const routeNames: Record<string, string> = {
  hotel: "Hotel",
  restauracja: "Restauracja",
  sale: "Sale Konferencyjne",
  wesela: "Wesela",
  catering: "Catering",
  imprezy: "Imprezy",
  aktualnosci: "Aktualności",
  historia: "Historia",
  kontakt: "Kontakt",
};

const currentTitle = computed(
  () => routeNames[route.name as string] || "Willa Hueta"
);
</script>

<template>
  <nav class="mobile-navbar">
    <div class="mobile-left">
      <router-link to="/">
        <img src="@/assets/img/landing/logo-navbar.png" alt="Logo" />
      </router-link>
    </div>
    <div class="mobile-center">
      <span class="mobile-title">{{ currentTitle }}</span>
    </div>
    <div class="mobile-right">
      <button class="hamburger" @click="toggleMenu" aria-label="Toggle menu">
        <span class="line" :class="{ 'is-open': isOpen }"></span>
        <span class="line" :class="{ 'is-open': isOpen }"></span>
        <span class="line" :class="{ 'is-open': isOpen }"></span>
      </button>
    </div>
  </nav>

  <MobileOverlay v-if="isOpen" @close="toggleMenu" />
</template>
<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;
.mobile-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4vmin;
  z-index: 500;

  .mobile-left img {
    height: 7vh;
    object-fit: contain;
  }

  .mobile-center {
    flex: 1;
    text-align: center;
    .mobile-title {
      font-size: 5vmin;
      color: #fff;
      font-weight: bold;
      font-family: $fancyFont;
    }
  }

  .mobile-right {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 600;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 35px;
    height: 28px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 601;

    .line {
      width: 100%;
      height: 4px;
      background-color: #fff;
      border-radius: 2px;
      transition: transform 0.3s ease, opacity 0.3s ease;
    }

    .line.is-open:nth-child(1) {
      transform: translateY(12px) rotate(45deg);
    }
    .line.is-open:nth-child(2) {
      opacity: 0;
    }
    .line.is-open:nth-child(3) {
      transform: translateY(-12px) rotate(-45deg);
    }
  }
  @media (orientation: landscape) {
    height: 18vh;
    .mobile-left img {
      height: 13vh;
    }
    .mobile-center .mobile-title {
      font-size: 7vmin;
    }
  }
}
</style>
