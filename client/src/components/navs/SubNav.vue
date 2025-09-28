<template>
  <nav class="sub-nav">
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="[
          'dot-wrapper',
          `dot-${index + 1}`,
          { active: activeSection === item.target },
        ]"
      >
        <button class="dot" @click="scrollToSection(item.target)">
          <span class="label">{{ item.label }}</span>
          <span class="number">{{ index + 1 }}</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";

const props = defineProps<{
  items: { label: string; target: string }[];
}>();

const activeSection = ref<string>("");

const observer = ref<IntersectionObserver | null>(null);

onMounted(() => {
  const sections = props.items
    .map((item) => document.querySelector(item.target))
    .filter(Boolean) as HTMLElement[];

  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = `#${entry.target.id}`;
        }
      });
    },
    {
      root: null,
      rootMargin: "-40% 0% -50% 0%",
      threshold: 0.01,
    }
  );

  sections.forEach((section) => observer.value?.observe(section));
});

onBeforeUnmount(() => {
  observer.value?.disconnect();
});

const scrollToSection = (selector: string) => {
  const el = document.querySelector(selector);
  if (el) {
    const offset = 180;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;

.sub-nav {
  position: fixed;
  top: 0;
  left: 2vmin;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 100;
  animation: slideInLeft 0.7s ease forwards;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
  }

  .dot-wrapper {
    position: relative;

    .dot {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: $bgColor;
      border: 0.2vmin solid #ccc;
      color: #777;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 0.3vmin 0.8vmin rgba(0, 0, 0, 0.15);
      overflow: visible;
      margin: 1.5vmin 1vmin;
      width: 5vmin;
      height: 5vmin;
      z-index: 6;

      .number {
        font-size: 1.5vmin;
        z-index: 1;
      }

      .label {
        position: absolute;
        left: 110%;
        top: 50%;
        transform: translateY(-50%) translateX(-1vmin);
        opacity: 0;
        white-space: nowrap;
        background: $bgColor;
        color: $textColor;
        border-radius: 0.5vmin;
        padding: 1vmin 2vmin;
        font-size: 2vmin;
        box-shadow: 0 0.5vmin 1vmin rgba(0, 0, 0, 0.4);
        transition: opacity 0.3s ease, transform 0.3s ease;
        pointer-events: none;
      }

      &:hover .label,
      .dot-wrapper.active & .label {
        opacity: 1;
        transform: translateY(-50%) translateX(1vmin);
      }
    }

    &.active .dot {
      background-color: $primaryColor;
      animation: pulse 1s ease-in-out infinite;
      color: $bgColor;
      border-color: $bgColor;
    }
  }
}
@media (max-width: $mobileBreakpoint) {
  .sub-nav {
    display: none !important;
  }
}
@keyframes pulse {
  0% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1.2);
  }
}
@keyframes slideInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
