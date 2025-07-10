<script setup lang="ts">
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const leftNavItems = [
  { label: 'Hotel', icon: 'hotel' },
  { label: 'Restauracja', icon: 'utensils' },
  { label: 'Sale', icon: 'people-group' },
  { label: 'Wesela', icon: 'champagne-glasses' },
  { label: 'Catering', icon: 'concierge-bell' },
  { label: 'Imprezy', icon: 'calendar-day' },
];

const rightNavItems = [
  { label: 'Aktualności', icon: 'newspaper' },
  { label: 'Historia', icon: 'clock' },
  { label: 'Kontakt', icon: 'envelope' },
];

const hoveredItem = ref<string | null>(null);
</script>

<template>
  <nav class="navbar">
    <div class="nav-side">
      <ul class="nav-list">
        <li
          class="nav-item"
          v-for="item in leftNavItems"
          :key="item.label"
          @mouseenter="hoveredItem = item.label"
          @mouseleave="hoveredItem = null"
          :class="{ blurred: hoveredItem && hoveredItem !== item.label }"
        >
          <font-awesome-icon :icon="['fas', item.icon]" class="nav-icon" />
          {{ item.label }}
        </li>
      </ul>
    </div>

    <div class="nav-logo">
      <img src="@/assets/img/logo.png" alt="Logo Hueta" />
    </div>

    <div class="nav-side">
      <ul class="nav-list">
        <li
          class="nav-item"
          v-for="item in rightNavItems"
          :key="item.label"
          @mouseenter="hoveredItem = item.label"
          @mouseleave="hoveredItem = null"
          :class="{ blurred: hoveredItem && hoveredItem !== item.label }"
        >
          <font-awesome-icon :icon="['fas', item.icon]" class="nav-icon" />
          {{ item.label }}
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;
@use "sass:color";

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2vmin;
  z-index: 1000;
  box-shadow: 0 1vmin 2vmin 0 rgba(0, 0, 0, 0.5);
  background-color: #ffffff70;
  backdrop-filter: blur(10px);
  border-bottom: 2px solid $primaryColor;

  .nav-side {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }

  .nav-logo {
    flex-basis: 10%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 50px;
      max-height: 8vh;
      object-fit: contain;
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
      transition-duration: .4s;

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
    }
  }
}
</style>
