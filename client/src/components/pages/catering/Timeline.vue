<template>
  <div class="timeline">
    <div class="container left" data-aos="fade-up-right">
      <div class="content">
        <h2>Styczeń - Festiwal Smaku</h2>
        <a
          href="https://echodnia.eu/swietokrzyskie/trwa-10-festiwal-smaku-sprawdzilismy-co-serwuja-kieleckie-restauracje-monte-carlo-i-spektrum-smaku-w-willi-hueta-wideo-zdjecia/ar/c17-16024355"
          target="_blank"
          class="href-btn"
        >
          Czytaj
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="icon" />
        </a>
        <a
          href="https://echodnia.eu/swietokrzyskie/trwa-10-festiwal-smaku-sprawdzilismy-co-serwuja-kieleckie-restauracje-monte-carlo-i-spektrum-smaku-w-willi-hueta-wideo-zdjecia/ar/c17-16024355"
          target="_blank"
          class="href-btn"
        >
          Czytaj
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="icon" />
        </a>
      </div>
    </div>
    <div class="container right" data-aos="fade-up-left">
      <div class="content">
        <h2>Marzec - Degustacja win</h2>
        <a
          href="https://echodnia.eu/swietokrzyskie/wieczor-australijski-i-degustacja-wina-w-kieleckiej-willi-hueta-wideo/ar/c13-13986167"
          target="_blank"
          class="href-btn"
        >
          Czytaj
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="icon" />
        </a>
      </div>
    </div>
    <div class="container left" data-aos="fade-up-right">
      <div class="content">
        <h2>Kwiecień - Diamenty Miesięcznika Forbes</h2>
        <a
          href="http://willahueta.pl/aktualnosci/wszystkie/wpis/14"
          target="_blank"
          class="href-btn"
        >
          Czytaj
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
@use "@/assets/scss/placeholders.scss" as *;

.timeline {
  position: relative;
  margin: 2vmin auto;
  h2 {
    font-size: 2.5vmin;
    color: $primaryColor;
    font-weight: bold;
    font-family: $fancyFont;
    text-align: right;
    margin-bottom: 2vmin;
    margin-right: 5vmin;
  }
  .href-btn {
    @extend %follow-btn;
    margin: 0 1vmin;
    font-size: 3vmin;
    .icon {
      font-size: 3vmin;
    }
  }
  &::after {
    content: "";
    position: absolute;
    width: 0.5vmin;
    background-color: $supportColor;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .container {
    padding: 2vmin 4vmin;
    position: relative;
    background-color: inherit;
    width: 50%;

    &.left {
      left: 0;
    }

    &.right {
      left: 50%;
    }

    &::after {
      content: "";
      position: absolute;
      width: 1.2vmin;
      height: 1.2vmin;
      background-color: white;
      top: 10vmin;
      border-radius: 50%;
      box-shadow: 0 0 0 3px $supportColor;
      z-index: 1;
    }

    &.left::after {
      right: -0.6vmin;
    }

    &.right::after {
      left: -0.6vmin;
    }

    .content {
      padding: 2vmin 4vmin;
      background-color: white;
      position: relative;
      border-radius: 6px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
  }
}

@media screen and (max-width: 768px) {
  .timeline::after {
    left: 31px;
  }

  .timeline .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;

    &.right {
      left: 0%;
    }

    &::after {
      left: 15px;
    }
  }
}
</style>
