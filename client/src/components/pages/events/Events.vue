<template>
  <section class="events-page">
    <SubNav :items="navItems" />
    <section id="intro">
      <TextBlock :reverse="true">
        <h3>Zorganizuj z nami przyjęcie!</h3>
        <p>
          Serdecznie zapraszamy do Naszej restauracji Spektrum Smaku w Willi
          Hueta, gdzie czekają na Państwa wyborne dania, wina oraz desery
          klasycznej kuchni polskiej, jak i francuskiej. Przygotowywanie tak
          wykwintnych potraw to sztuka, a nasz Szef Kuchni opanował ją do
          perfekcji. Fuzja kuchni polskiej i francuskiej tworzy niepowtarzalny
          smak, który poruszy najbardziej wymagające podniebienia.
        </p>
      </TextBlock>
      <TextBlock>
        <p>
          Sztuka podania oraz wygląd dań jest kluczem do sukcesu przy
          organizowaniu przyjęć okolicznościowych czy też spotkań biznesowych.
          Wizyta w Spektrum Smaku zapewni gościom niezapomniane wrażenia
          kulinarne i wizualne.
        </p>
      </TextBlock>
    </section>
    <section id="gallery">
      <Gallery :images="hotelImages" />
    </section>

    <section id="offer">
      <CentralBlock>
        <h3>Nasze Menu</h3>
        <div class="menu-btns-group">
          <button class="btn" @click="selectedMenu = 'communion'">
            <span class="visible">Menu na Komunie</span
            ><span class="invisible">Kliknij!</span>
          </button>
          <button class="btn" @click="selectedMenu = 'console'">
            <span class="visible">Menu Konsolacyjne</span
            ><span class="invisible">Kliknij!</span>
          </button>
          <button class="btn" @click="selectedMenu = 'occasional'">
            <span class="visible">Menu Okazjonalne</span
            ><span class="invisible">Kliknij!</span>
          </button>
        </div>
      </CentralBlock>
      <Modal
        v-if="selectedMenu"
        @close="selectedMenu = null"
        @prev="prevMenu"
        @next="nextMenu"
      >
        <component :is="currentComponent" />
      </Modal>
      <CentralBlock>
        <h3>Oferujemy:</h3>
      </CentralBlock>
      <ListBlock>
        <div class="section">
          <ul>
            <li>Śniadania, lunche, obiady, kolacje</li>
            <li>Imprezy rodzinne</li>
            <li>
              Imprezy okolicznościowe - wesela, chrzciny, komunie, konsolacje,
              bierzmowania
            </li>
            <li>Bankiety, spotkania biznesowe, imprezy firmowe</li>
            <li>Oprawę muzyczną (fortepian)</li>
            <li>Profesjonalną obsługę kelnerską</li>
            <li>Możliwość podziału sali za pomocą parawanów</li>
            <li>Kącik dla dzieci</li>
          </ul>
        </div>
      </ListBlock>
      <Highlight />
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Gallery from "../../common/Gallery.vue";
import Modal from "../../common/Modal.vue";
import Highlight from "../../common/Highlight.vue";

import hotel1 from "@/assets/img/pages/hotel/hotel-01.jpg";
import hotel2 from "@/assets/img/pages/hotel/hotel-02.jpg";
import FirstCommunionMenu from "./FirstCommunionMenu.vue";
import ConsoleMenu from "./ConsoleMenu.vue";
import OccasionalMenu from "./OccasionalMenu.vue";
import TextBlock from "../../common/blocks/TextBlock.vue";
import CentralBlock from "../../common/blocks/CentralBlock.vue";
import ListBlock from "../../common/blocks/ListBlock.vue";
import SubNav from "../../navs/SubNav.vue";

const hotelImages = [
  hotel1,
  hotel2,
  hotel1,
  hotel2,
  hotel1,
  hotel2,
  hotel1,
  hotel2,
];

const selectedMenu = ref<null | "communion" | "console" | "occasional">(null);
const menuOrder = ["communion", "console", "occasional"] as const;

const navItems = [
  { label: "Wstęp", target: "#intro" },
  { label: "Galeria", target: "#gallery" },
  { label: "Oferta", target: "#offer" },
];

const currentComponent = computed(() => {
  if (selectedMenu.value === "communion") return FirstCommunionMenu;
  if (selectedMenu.value === "console") return ConsoleMenu;
  if (selectedMenu.value === "occasional") return OccasionalMenu;
  return null;
});

const nextMenu = () => {
  const currentIndex = menuOrder.indexOf(selectedMenu.value!);
  const nextIndex = (currentIndex + 1) % menuOrder.length;
  selectedMenu.value = menuOrder[nextIndex];
};

const prevMenu = () => {
  const currentIndex = menuOrder.indexOf(selectedMenu.value!);
  const prevIndex = (currentIndex - 1 + menuOrder.length) % menuOrder.length;
  selectedMenu.value = menuOrder[prevIndex];
};
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;
@use "@/assets/scss/placeholders.scss" as *;

.events-page {
  .menu-btns-group {
    display: flex;
    width: 80%;
    margin: 2vmin 10%;
    justify-content: space-evenly;

    .btn {
      margin: 1vw auto;
      font-family: $fancyFont;
      font-size: 2vmin;
      color: $primaryColor;
      font-weight: bold;
      width: 30vmin;
      background-color: transparent;
      border: 5px solid transparent;
      padding: 2vmin;
      box-shadow: 5px 5px 0 0 $primaryColor, -5px -5px 0 0 $primaryColor;
      text-align: center;
      transition-duration: 0.4s;

      span.invisible {
        display: none;
      }

      span.visible {
        display: block;
      }

      &:hover {
        cursor: pointer;
        background-color: $secondaryColor;
        box-shadow: -10px -10px 0 0 $secondaryColor,
          10px 10px 0 0 $secondaryColor;
        border-color: $bgColor;
        transition-duration: 0.4s;

        & span.invisible {
          display: block;
          color: $bgColor;
        }

        & span.visible {
          display: none;
        }
      }
    }

    @media (max-width: $mobileBreakpoint) {
      flex-direction: column;
      width: 90%;
      margin: 2vmin 5%;
      gap: 2vmin;

      .btn {
        width: 80%;
        border-width: 3px;
        box-shadow: 3px 3px 0 0 $primaryColor, -3px -3px 0 0 $primaryColor;
        font-size: 3vmin;
        &:hover {
          box-shadow: -6px -6px 0 0 $secondaryColor, 6px 6px 0 0 $secondaryColor;
        }
      }
    }
  }
}
</style>
