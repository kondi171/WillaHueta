<script setup lang="ts">
import { defineEmits, ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

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

const emit = defineEmits<{
  (e: "close"): void;
}>();

const animationClass = ref("fade-in");
const isAnimating = ref(false);

const handleClose = () => {
  if (isAnimating.value) return;
  animationClass.value = "fade-out";
  isAnimating.value = true;
  setTimeout(() => {
    emit("close");
    animationClass.value = "fade-in";
    isAnimating.value = false;
  }, 300);
};
</script>

<template>
  <div class="overlay-menu" :class="animationClass" @click.self="handleClose">
    <font-awesome-icon
      @click="handleClose"
      icon="fa-solid fa-x"
      class="close-btn icon"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1 }"
      :leave="{ opacity: 0 }"
      :duration="400"
    />

    <router-link to="/" class="overlay-logo" @click="handleClose">
      <img
        src="@/assets/img/landing/logo-mobile.png"
        alt="Logo Hueta"
        v-motion
        :initial="{ opacity: 0, y: -100 }"
        :enter="{ opacity: 1, y: 0 }"
        :leave="{ opacity: 0, y: -100 }"
        :duration="400"
      />
    </router-link>

    <ul class="mobile-nav-list">
      <li v-for="(item, i) in leftNavItems" :key="item.label">
        <router-link :to="item.to" @click="handleClose">
          <div
            class="mobile-icon-wrapper"
            v-motion
            :initial="{ opacity: 0, x: -100 }"
            :enter="{ opacity: 1, x: 0 }"
            :leave="{ opacity: 0, x: -100 }"
            :delay="i * 100"
            :duration="400"
          >
            <font-awesome-icon :icon="['fas', item.icon]" class="mobile-icon" />
          </div>
          <span
            v-motion
            :initial="{ opacity: 0, x: 100 }"
            :enter="{ opacity: 1, x: 0 }"
            :leave="{ opacity: 0, x: 100 }"
            :delay="i * 100"
            :duration="400"
          >
            {{ item.label }}
          </span>
        </router-link>
      </li>
    </ul>

    <hr
      v-motion
      :initial="{ opacity: 0, scaleX: 0 }"
      :enter="{ opacity: 1, scaleX: 1 }"
      :leave="{ opacity: 0, scaleX: 0 }"
      :delay="leftNavItems.length * 100"
      :duration="400"
    />

    <ul class="mobile-nav-list">
      <li v-for="(item, i) in rightNavItems" :key="item.label">
        <router-link :to="item.to" @click="handleClose">
          <div
            class="mobile-icon-wrapper"
            v-motion
            :initial="{ opacity: 0, x: -100 }"
            :enter="{ opacity: 1, x: 0 }"
            :leave="{ opacity: 0, x: -100 }"
            :delay="i * 100 + leftNavItems.length * 100"
            :duration="400"
          >
            <font-awesome-icon :icon="['fas', item.icon]" class="mobile-icon" />
          </div>
          <span
            v-motion
            :initial="{ opacity: 0, x: 100 }"
            :enter="{ opacity: 1, x: 0 }"
            :leave="{ opacity: 0, x: 100 }"
            :delay="i * 100 + leftNavItems.length * 100"
            :duration="400"
          >
            {{ item.label }}
          </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;

.overlay-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 500;
  padding-top: 20vh;
  overflow-y: auto;

  .close-btn {
    position: fixed;
    top: 6vmin;
    right: 6vmin;
    font-size: 10vmin;
    color: $bgColor;
    cursor: pointer;
    z-index: 1000;
    user-select: none;
    transition: transform 0.3s ease, color 0.3s ease;
    &:hover {
      transform: rotate(180deg);
    }
  }

  .overlay-logo {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 501;
    img {
      height: 20vh;
      object-fit: contain;
      transition: transform 0.3s ease;
      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .mobile-nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
    margin-top: 5vmin;

    li {
      margin: 15px 0;
      .mobile-icon-wrapper {
        width: 8vmin;
        display: flex;
        justify-content: center;
        align-items: center;
        .mobile-icon {
          font-size: 7vmin;
        }

        &:hover a {
          color: $secondaryColor;
        }

        &.active a {
          color: $secondaryColor;
          transform: scale(1.05);
        }
      }
      a {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-decoration: none;
        color: #fff;
        font-size: 6vmin;
        font-weight: bold;
        gap: 4vmin;
      }
    }
  }

  hr {
    width: 60%;
    border: 1px solid #fff;
    margin: 3vmin 0;
  }
}

.fade-in {
  animation: fadeIn 0.3s ease forwards;
}
.fade-out {
  animation: fadeOut 0.3s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
