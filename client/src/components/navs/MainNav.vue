<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import MobileNavbar from "./MobileNavbar.vue";
import DesktopNavbar from "./DesktopNavbar.vue";

const width = ref(window.innerWidth);

const onResize = () => {
  width.value = window.innerWidth;
};

onMounted(() => window.addEventListener("resize", onResize));
onBeforeUnmount(() => window.removeEventListener("resize", onResize));

const isMobile = computed(() => width.value <= 767);
</script>

<template>
  <component :is="isMobile ? MobileNavbar : DesktopNavbar" />
</template>

<style scoped lang="scss"></style>
