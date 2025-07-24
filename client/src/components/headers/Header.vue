<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

const vantaRef = ref<HTMLElement | null>(null);
let vantaEffect: any = null;

onMounted(() => {
  if (!vantaEffect && vantaRef.value) {
    vantaEffect = NET({
      el: vantaRef.value,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x485e88,
      backgroundColor: 0x02735e,
      points: 15.0,
      maxDistance: 18.0,
      spacing: 14.0,
    });
  }
});

onBeforeUnmount(() => {
  if (vantaEffect) vantaEffect.destroy();
});
</script>

<template>
  <header class="vanta-header" ref="vantaRef">
    <h1>
      <span>Willa</span>
      <span>Hueta</span>
    </h1>
  </header>
</template>

<style scoped lang="scss">
.vanta-header {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    position: relative;
    z-index: 1;
    text-align: center;
    font-family: "YourFancyFont", sans-serif;
    color: white;
    span {
      display: block;
      font-size: 10vmin;
      &:first-of-type {
        font-size: 4vmin;
      }
    }
  }
}
</style>
