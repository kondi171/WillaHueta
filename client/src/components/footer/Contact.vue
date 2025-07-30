<template>
  <section class="footer-contact" data-aos="fade-left">
    <div class="banner">
      <div class="banner-img">
        <img src="@/assets/img/landing/logo.png" alt="Willa Hueta Logo" />
      </div>
      <h5 class="banner-text">Willa Hueta</h5>
    </div>
    <div class="contact-info-wrapper">
      <div class="info-section">
        <h6>Lokalizacja:</h6>
        <div class="line">
          <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="icon" />
          <span class="text">ul. Juliusza Słowackiego 25</span>
        </div>
        <div class="line">
          <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="icon" />
          <span class="text">25-365 Kielce</span>
        </div>
        <div class="line">
          <font-awesome-icon :icon="['fas', 'flag']" class="icon" />
          <span class="text">PL</span>
        </div>
      </div>

      <div class="info-section">
        <h6>Kontakt:</h6>
        <div class="line">
          <font-awesome-icon :icon="['fas', 'phone']" class="icon" />
          <span class="text">412 412 888</span>
        </div>
        <div class="line">
          <font-awesome-icon :icon="['fas', 'mobile-alt']" class="icon" />
          <span class="text">789 808 214</span>
        </div>
        <div class="line">
          <font-awesome-icon :icon="['fas', 'envelope']" class="icon" />
          <span class="text">recepcja@willahueta.pl</span>
        </div>
      </div>
    </div>
    <Socials />
  </section>
</template>

<script setup lang="ts">
import Socials from "./Socials.vue";
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
.footer-contact {
  width: 45vw;
  .banner {
    display: flex;
    align-items: center;
    margin-bottom: 2vmin;
    &-img {
      img {
        width: 15vmin;
        height: 15vmin;
      }
    }
    &-text {
      font-family: $fancyFont;
      font-size: 6vmin;
      display: block;
      width: 100%;
      margin-left: 4vmin;
      color: $primaryColor;
    }
  }
  .contact-info-wrapper {
    display: flex;
    .info-section {
      &:first-of-type {
        margin-right: 4vmin;
      }
      h6 {
        font-size: 3vmin;
        margin-bottom: 1vmin;
        color: $textColor;
        font-family: $fancyFont;
      }
      .line {
        margin: 1vmin 0;
        font-size: 2.5vmin;
        color: $primaryColor;
        font-family: $textFont;
        .text {
          color: $textColor;
          margin-left: 1vmin;
        }
      }
    }
  }
}
</style>
