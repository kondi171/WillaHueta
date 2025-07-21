<template>
  <div class="gallery">
    <h3>Galeria</h3>
    <div :class="['photos', { 'blur-others': hoverIndex !== null }]">
      <div
        v-for="(img, index) in images"
        :key="index"
        class="photo-wrapper"
        @mouseenter="hoverIndex = index"
        @mouseleave="hoverIndex = null"
        @click="openModal(index)"
      >
        <img
          :src="img"
          alt="Zdjęcie hotelu"
          class="gallery-image"
          :class="{ 'no-blur': hoverIndex === index }"
        />
        <div class="overlay" :class="{ visible: hoverIndex === index }">
          Zobacz
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="icon" />
        </div>
      </div>
    </div>
  </div>

  <div
    v-if="isModalVisible"
    class="modal"
    :class="modalAnimationClass"
    @click.self="closeModal"
  >
    <span class="closeBtn" @click="closeModal">
      <font-awesome-icon icon="fa-solid fa-x" class="icon" />
    </span>

    <span class="arrow left" @click.stop="prevImage">
      <font-awesome-icon icon="fa-solid fa-angle-left" class="icon" />
    </span>

    <img
      class="modal-content"
      :class="animationClass"
      :src="currentImage"
      alt="Enlarged image"
    />

    <span class="arrow right" @click.stop="nextImage">
      <font-awesome-icon icon="fa-solid fa-angle-right" class="icon" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps<{
  images: string[];
}>();

const isModalOpen = ref(false); // otwarcie i animacja obrazu
const isModalVisible = ref(false); // faktyczna obecność .modal w DOM
const modalAnimationClass = ref("modal-fade-in");

const currentIndex = ref(0);
const hoverIndex = ref<number | null>(null);
const animationClass = ref("fade-in");
const isAnimating = ref(false);

const currentImage = computed(() => props.images[currentIndex.value]);

function openModal(index: number) {
  currentIndex.value = index;
  isModalOpen.value = true;
  isModalVisible.value = true;
  modalAnimationClass.value = "modal-fade-in";
  animationClass.value = "fade-in";
}

function closeModal() {
  if (isAnimating.value) return;
  isAnimating.value = true;

  modalAnimationClass.value = "modal-fade-out";
  animationClass.value = "scale-out";

  setTimeout(() => {
    isModalOpen.value = false;
    isModalVisible.value = false;
    animationClass.value = "fade-in";
    isAnimating.value = false;
  }, 400); // dłużej, żeby tło też zdążyło zniknąć
}

function changeImage(direction: "next" | "prev") {
  if (isAnimating.value) return;
  isAnimating.value = true;
  animationClass.value = "fade-out";

  setTimeout(() => {
    currentIndex.value =
      direction === "next"
        ? (currentIndex.value + 1) % props.images.length
        : (currentIndex.value - 1 + props.images.length) % props.images.length;
    animationClass.value = "fade-in";
    isAnimating.value = false;
  }, 300);
}

function nextImage() {
  changeImage("next");
}

function prevImage() {
  changeImage("prev");
}

function handleKeyDown(event: KeyboardEvent) {
  if (!isModalOpen.value) return;

  switch (event.key) {
    case "ArrowRight":
      nextImage();
      break;
    case "ArrowLeft":
      prevImage();
      break;
    case "Escape":
      closeModal();
      break;
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
});
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;

.gallery {
  background-color: $blackColor;
  background-image: url("@/assets/img//backgrounds/gallery-background.webp");
  background-attachment: fixed;
  padding: 10vmin;
  padding-bottom: 15vmin;
  clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 90%);

  h3 {
    font-size: 7vmin;
    font-family: $fancyFont;
    color: $bgColor;
    text-align: center;
    margin-bottom: 2vmin;
  }

  .photos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
    width: 80vw;

    &.blur-others {
      .photo-wrapper img:not(.no-blur) {
        filter: blur(3px) brightness(0.6);
        transition: filter 0.3s ease;
      }
    }

    .photo-wrapper {
      position: relative;
      width: 20%;
      margin: 1vmin;
      cursor: pointer;
      border-radius: 8px;
      overflow: hidden;
      transition: transform 0.3s ease;

      img {
        display: block;
        width: 100%;
        border-radius: 8px;
        transition: filter 0.3s ease;
      }

      &:hover {
        transform: scale(1.05);
      }

      .overlay {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.9);
        color: $supportColor;
        font-size: 3vmin;
        font-weight: 600;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 0.5em 1em;
        border-radius: 6px;
        pointer-events: none;
        user-select: none;
        font-family: $supportFont;
        opacity: 0;
        visibility: hidden;
        transition: opacity 150ms ease, transform 150ms ease,
          visibility 0ms linear 150ms;

        .icon {
          margin-left: 1vmin;
        }

        &.visible {
          opacity: 1;
          visibility: visible;
          transform: translate(-50%, -50%) scale(1);
          transition-delay: 0s;
        }
      }
    }
  }
}

.modal {
  display: flex;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: blur(2px);
  justify-content: center;
  align-items: center;
  z-index: 999;

  &.modal-fade-in {
    animation: fadeBackgroundIn 0.4s ease forwards;
  }

  &.modal-fade-out {
    animation: fadeBackgroundOut 0.4s ease forwards;
  }

  &-content {
    max-width: 70vw;
    max-height: 70vh;
    object-fit: contain;
    border-radius: 10px;
    box-shadow: 0 0 40px #000;
    transition: all 0.3s ease;
  }

  .animated {
    animation: fadeInScale 0.3s ease;
  }

  .closeBtn {
    position: fixed;
    top: 2vmin;
    right: 4vmin;
    font-size: 5vmin;
    color: $supportColor;
    cursor: pointer;
    z-index: 1000;
    user-select: none;
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      transform: rotate(180deg);
      color: $primaryColor;
    }
  }

  .arrow {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    font-size: 8vmin;
    color: $supportColor;
    cursor: pointer;
    user-select: none;
    z-index: 1000;
    transition-duration: 0.4s;

    &.left {
      left: 5vw;
      &:hover {
        translate: -10px;
      }
    }

    &.right {
      right: 5vw;
      &:hover {
        translate: 10px;
      }
    }

    &:hover {
      color: $primaryColor;
    }
  }

  .fade-in {
    animation: fadeIn 0.3s ease forwards;
  }
  .fade-out {
    animation: fadeOut 0.3s ease forwards;
  }
  .scale-out {
    animation: scaleOut 0.3s ease forwards;
  }
}

// Animacje obrazu
@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(1.05);
  }
}
@keyframes scaleOut {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.9);
  }
}

// Animacje tła
@keyframes fadeBackgroundIn {
  from {
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    background-color: rgba(0, 0, 0, 0.8);
  }
}

@keyframes fadeBackgroundOut {
  from {
    background-color: rgba(0, 0, 0, 0.8);
  }
  to {
    background-color: rgba(0, 0, 0, 0);
  }
}
</style>
