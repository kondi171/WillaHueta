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
      scale: 0.5,
      scaleMobile: 1.0,
      color: 0x485e88,
      backgroundColor: 0x000000,
      points: 11.0,
      maxDistance: 25.0,
      spacing: 20.0,
    });

    const canvas = vantaRef.value.querySelector("canvas");
    if (canvas) {
      (canvas as HTMLCanvasElement).style.background = "transparent";
    }
  }
});

onBeforeUnmount(() => {
  if (vantaEffect) vantaEffect.destroy();
});
</script>

<template>
  <header class="header">
    <div class="vanta-layer" ref="vantaRef" />
    <div class="image-overlay" />
    <div class="content">
      <h1>
        <span>Willa</span>
        <span>Hueta</span>
      </h1>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.vanta-layer {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.image-overlay {
  position: absolute;
  inset: 0;
  background-image: url("@/assets/img/landing/header2.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  opacity: 0.7;
  z-index: 1;
  pointer-events: none;
}

.content {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
  text-align: center;

  h1 {
    font-size: 10vmin;
    span:first-of-type {
      font-size: 4vmin;
      display: block;
    }
  }
}
</style>
