<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const route = useRoute();
const hoveredItem = ref<string | null>(null);

const leftNavItems = [
  { label: "Hotel", icon: "hotel", to: "/hotel" },
  { label: "Restauracja", icon: "utensils", to: "/restauracja" },
  { label: "Sale", icon: "people-group", to: "/sale" },
  { label: "Wesela", icon: "champagne-glasses", to: "/wesela" },
  { label: "Imprezy", icon: "calendar-day", to: "/imprezy" },
  { label: "Catering", icon: "concierge-bell", to: "/catering" },
];

const rightNavItems = [
  { label: "Aktualności", icon: "newspaper", to: "/aktualnosci" },
  { label: "Historia", icon: "clock", to: "/historia" },
  { label: "Kontakt", icon: "envelope", to: "/kontakt" },
];
</script>

<template>
  <!-- DESKTOP NAVBAR -->
  <nav class="desktop-navbar">
    <div class="nav-side">
      <ul class="nav-list">
        <li
          class="nav-item"
          v-for="item in leftNavItems"
          :key="item.label"
          @mouseenter="hoveredItem = item.label"
          @mouseleave="hoveredItem = null"
          :class="{
            blurred: hoveredItem && hoveredItem !== item.label,
            active: route.path === item.to,
          }"
        >
          <router-link :to="item.to" class="nav-link">
            <font-awesome-icon :icon="['fas', item.icon]" class="nav-icon" />
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </div>

    <div
      class="nav-logo desktop-logo"
      :class="{ blurred: hoveredItem && hoveredItem !== 'logo' }"
    >
      <router-link
        to="/"
        class="nav-link"
        @mouseenter="hoveredItem = 'logo'"
        @mouseleave="hoveredItem = null"
      >
        <img src="@/assets/img/landing/logo-desktop.png" alt="Logo Hueta" />
      </router-link>
    </div>

    <div class="nav-side">
      <ul class="nav-list">
        <li
          class="nav-item"
          v-for="item in rightNavItems"
          :key="item.label"
          @mouseenter="hoveredItem = item.label"
          @mouseleave="hoveredItem = null"
          :class="{
            blurred: hoveredItem && hoveredItem !== item.label,
            active: route.path === item.to,
          }"
        >
          <router-link :to="item.to" class="nav-link">
            <font-awesome-icon :icon="['fas', item.icon]" class="nav-icon" />
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;

.desktop-navbar {
  position: fixed;
  height: 10vh;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2vmin;
  z-index: 400;
  box-shadow: 0 1vmin 2vmin rgba(0, 0, 0, 0.5);
  background-color: #ffffff70;
  backdrop-filter: blur(10px);
  border-bottom: 2px solid $primaryColor;

  .nav-side {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }

  .nav-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;

    &.desktop-logo {
      img {
        height: 7vh;
        max-height: 8vh;
        object-fit: contain;
        transition-duration: 0.4s;

        &:hover {
          transform: scale(1.2);
        }
      }
      &.blurred {
        img {
          opacity: 0.3;
          filter: blur(1px);
          transform: scale(0.95);
        }
      }
    }
  }

  .nav-list {
    display: flex;
    flex-wrap: nowrap;
    gap: 4vmin;
    list-style: none;
    margin: 0;
    padding: 0;

    .nav-item {
      cursor: pointer;
      font-size: 2.5vmin;
      color: $primaryColor;
      position: relative;
      font-family: $supportFont;
      display: flex;
      align-items: center;
      gap: 1vmin;
      transition-duration: 0.4s;

      &:hover {
        transform: scale(1.1);
        color: $secondaryColor;
      }

      &.blurred {
        opacity: 0.3;
        filter: blur(1px);
        transform: scale(0.9);
      }

      .nav-icon {
        font-size: 2.5vmin;
      }

      .nav-link {
        display: flex;
        align-items: center;
        gap: 1vmin;
        color: $primaryColor;
        text-decoration: none;
        transition: 0.3s;

        &:hover {
          color: $secondaryColor;
        }

        &.active {
          font-weight: bold;
        }
      }

      &.active {
        color: $secondaryColor;
        .nav-link {
          color: $secondaryColor;
          transform: translateY(-10px) scale(1.1);
        }
      }
    }
  }
}
</style>
