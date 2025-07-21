<template>
  <teleport to="body">
    <div
      class="modal-backdrop"
      :class="animationClass"
      @click.self="handleClose"
    >
      <font-awesome-icon
        @click="handleClose"
        icon="fa-solid fa-x"
        class="modal-close icon"
      />
      <span class="arrow left" @click.stop="animateModalChange('prev')">
        <font-awesome-icon icon="fa-solid fa-angle-left" class="icon" />
      </span>
      <span class="arrow right" @click.stop="animateModalChange('next')">
        <font-awesome-icon icon="fa-solid fa-angle-right" class="icon" />
      </span>
      <div class="modal-content">
        <div class="modal-body" :class="modalAnimation">
          <slot />
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["close", "prev", "next"]);

const animationClass = ref("fade-in");
const modalAnimation = ref("");
const isAnimating = ref(false);

function handleClose() {
  if (isAnimating.value) return;
  animationClass.value = "scale-out";
  isAnimating.value = true;
  setTimeout(() => {
    emit("close");
    animationClass.value = "fade-in";
    isAnimating.value = false;
  }, 300);
}

function animateModalChange(direction) {
  if (isAnimating.value) return;
  isAnimating.value = true;
  modalAnimation.value = "change-modal-out";

  setTimeout(() => {
    emit(direction);
    modalAnimation.value = "change-modal-in";
    setTimeout(() => {
      modalAnimation.value = "";
      isAnimating.value = false;
    }, 300);
  }, 300);
}

function handleKeyDown(event) {
  switch (event.key) {
    case "Escape":
      handleClose();
      break;
    case "ArrowLeft":
      animateModalChange("prev");
      break;
    case "ArrowRight":
      animateModalChange("next");
      break;
  }
}

onMounted(() => {
  document.body.style.overflow = "hidden";
  window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  document.body.style.overflow = "";
  window.removeEventListener("keydown", handleKeyDown);
});
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;
@use "@/assets/scss/placeholders.scss" as *;

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
  box-sizing: border-box;
}

.modal-content {
  background-color: $bgColor;
  max-width: 600px;
  max-height: 90vh;
  width: 100%;
  overflow-y: auto;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
}

.modal-close {
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

/* ===== Modal Fade / Scale Animacje ===== */

.fade-in {
  animation: fadeIn 0.3s ease forwards;
}
.fade-out {
  animation: fadeOut 0.3s ease forwards;
}
.scale-out {
  animation: scaleOut 0.3s ease forwards;
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

@keyframes scaleOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.change-modal-out {
  animation: modalOut 0.3s ease forwards;
}
.change-modal-in {
  animation: modalIn 0.3s ease forwards;
}

@keyframes modalOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes modalIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
