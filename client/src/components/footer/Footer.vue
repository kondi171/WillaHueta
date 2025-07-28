<template>
  <footer class="footer">
    <div class="main-footer">
      <Contact />
      <div class="faded-vertical-line"></div>
      <Euro />
    </div>
    <div class="author">
      Copyright 2025 &copy; Willa Hueta | Designed by
      <a href="https://konrad-nowak.netlify.app" target="_blank"
        >Konrad 'WebKing' Nowak</a
      >
    </div>
  </footer>
</template>
<script setup lang="ts">
import Contact from "./Contact.vue";
import Euro from "./Euro.vue";
import "aos/dist/aos.css";
import AOS from "aos";
import { onMounted } from "vue";

onMounted(() => {
  AOS.init({
    duration: 800,
    once: false,
  });

  setTimeout(() => {
    AOS.refresh();
  }, 1000);
});
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;

.main-footer {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5vmin 10vmin;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("@/assets/img/footer/footer-underlay-v1.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: luminosity;
    background-color: $bgColor;
    opacity: 0.3;
    z-index: -1;
  }
  .faded-vertical-line {
    width: 2px;
    align-self: stretch;
    background: linear-gradient(
      to bottom,
      transparent,
      $textColor,
      transparent
    );
    margin-right: 10vmin;
  }
}

.author {
  font-size: 2vmin;
  background-color: $blackColor;
  color: $bgColor;
  font-weight: bold;
  text-align: center;
  padding: 2vmin;
  font-family: $fancyFont;
  border-top: 0.3vmin solid $primaryColor;
  a {
    text-decoration: none;
    color: $bgColor;
    font-family: $fancyFont;
    transition-duration: 0.4s;
    &:hover {
      color: $supportColor;
    }
  }
}
</style>
