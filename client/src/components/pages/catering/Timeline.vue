<template>
  <div class="timeline">
    <div
      v-for="(item, index) in timelineItems"
      :key="index"
      :class="['timeline-container', index % 2 === 0 ? 'left' : 'right']"
    >
      <div class="timeline-icon">
        <font-awesome-icon :icon="item.icon" data-aos="fade-up" />
      </div>

      <div
        class="timeline-body"
        :data-aos="index % 2 === 0 ? 'fade-left' : 'fade-right'"
      >
        <h4 class="timeline-title">{{ item.title }}</h4>
        <p>{{ item.text }}</p>
        <a
          :href="item.link"
          class="read-more-btn"
          target="_blank"
          rel="noopener"
        >
          Czytaj dalej
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="icon" />
        </a>
      </div>

      <div
        class="timeline-date"
        :data-aos="index % 2 === 0 ? 'fade-left' : 'fade-right'"
      >
        {{ item.date }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAOS } from "../../../hooks/useAOS";
useAOS();

interface TimelineItem {
  title: string;
  text: string;
  date: string;
  link: string;
  icon?: string;
}

const timelineItems = ref<TimelineItem[]>([
  {
    title: "Festiwal Smaku",
    text: "W 2020 roku Willa Hueta wzięła udział w Festiwalu Smaku w Kielcach, oferując dania takie jak tatar z jelenia oraz wykwintne desery. Wydarzenie cieszyło się dużym zainteresowaniem, a restauracja przygotowała specjalne menu w atrakcyjnych cenach.",
    date: "Styczeń",
    link: "https://echodnia.eu/swietokrzyskie/trwa-10-festiwal-smaku-sprawdzilismy-co-serwuja-kieleckie-restauracje-monte-carlo-i-spektrum-smaku-w-willi-hueta-wideo-zdjecia/ar/c17-16024355",
    icon: "utensils",
  },
  {
    title: "Degustacja win",
    text: "Willa Hueta w Kielcach zorganizowała wieczór poświęcony kuchni australijskiej oraz degustacji win. Goście mieli okazję spróbować potraw inspirowanych Australią oraz poznać różnorodne wina z tego regionu",
    date: "Marzec",
    link: "https://echodnia.eu/swietokrzyskie/wieczor-australijski-i-degustacja-wina-w-kieleckiej-willi-hueta-wideo/ar/c13-13986167",
    icon: "champagne-glasses",
  },
  {
    title: "Diamenty Miesięcznika Forbes",
    text: "W Willi Hueta odbyła się cykliczna uroczystość uhonorowania wyróżnieniem Diamenty Forbesa najszybciej rozwijająych się firm w regionie.",
    date: "Kwiecień",
    link: "http://willahueta.pl/aktualnosci/wszystkie/wpis/14",
    icon: "gem",
  },
]);
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;
@use "@/assets/scss/placeholders.scss" as *;

.timeline {
  position: relative;
  padding: 2vmin;

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 3px;
    height: 100%;
    border-radius: 50%;
    background-color: $blackColor;
    opacity: 0.3;
    z-index: 1;
  }

  &-container {
    position: relative;
    width: 50%;
    padding: 2vmin 3vmin;
    margin-bottom: 4vmin;

    .timeline-icon {
      position: absolute;
      top: 50%;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: $bgColor;
      border: 1px solid grey;
      color: $primaryColor;
      font-size: 2.7vmin;
      line-height: 50px;
      text-align: center;
      transform: translateY(-50%);
      z-index: 3;
    }

    .timeline-body {
      display: block;
      background-color: $bgColor;
      border-radius: 1vmin;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      padding: 2vmin 4vmin;
      position: relative;
      color: $blackColor;
      text-decoration: none;
      margin: 0 2vmin;
      transition-duration: 0.4s;

      p {
        font-size: 2vmin;
        margin: 0 3vmin;
        line-height: 220%;
      }

      &:before {
        content: "";
        position: absolute;
        top: calc(50% - 15px);
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
        z-index: 2;
      }

      .read-more-btn {
        @extend %follow-btn;
        margin-top: 1vmin;
        font-size: 2vmin;
        padding: 1vmin 2vmin;
        .icon {
          font-size: 2vmin;
        }
      }
    }

    .timeline-title {
      color: $primaryColor;
      font-family: $supportFont;
      font-size: 3.5vmin;
      font-weight: bold;
      width: 80%;
      margin: 0 auto;
      margin-bottom: 1vmin;
      border-bottom: 2px solid $primaryColor;
    }

    .timeline-date {
      position: absolute;
      top: calc(50% - 3vmin);
      transform: translateY(-50%);
      z-index: 2;
      white-space: nowrap;
      background: $bgColor;
      color: $primaryColor;
      border-radius: 0.5vmin;
      padding: 0 2vmin;
      font-size: 2vmin;
      box-shadow: 0 0.5vmin 1vmin rgba(0, 0, 0, 0.4);
      font-weight: bold;
    }

    &.left {
      left: 0;

      .timeline-body:before {
        right: -15px;
        border-left: 15px solid $bgColor;
      }

      .timeline-icon {
        right: -27px;
      }

      .timeline-date {
        right: -20vmin;
      }
    }

    &.right {
      left: 50%;

      .timeline-body:before {
        left: -15px;
        border-right: 15px solid $bgColor;
      }

      .timeline-icon {
        left: -27px;
      }

      .timeline-date {
        left: -20vmin;
      }
    }
  }

  .timeline-container,
  .timeline-icon,
  .timeline-date {
    transition-duration: 0.8s;
  }
}

[data-aos] {
  transition-property: transform, opacity !important;
}
</style>
