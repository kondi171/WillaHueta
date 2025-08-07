<template>
  <section class="hotel-page">
    <SubNav :items="navItems" />

    <section id="intro">
      <TextBlock>
        <h3>Witamy w naszym hotelu ⭐⭐⭐⭐</h3>
        <p>
          Willa Hueta to klimatyczny Hotel czterogwiazdkowy w obiekcie
          zabytkowym, usytuowany tylko 0,5km od ścisłego centrum Kielc i 3km od
          Centrum Targowego. Wyjątkowy styl hotelu uzupełniają nowoczesne
          rozwiązania przygotowane specjalnie nawet dla najbardziej wymagających
          gości. Na terenie obiektu znajduje się podziemny, monitorowany
          parking. Hotel jest wyposażony w windę i przystosowany dla osób
          niepełnosprawnych.
        </p>
      </TextBlock>
      <TextBlock :reverse="true">
        <p>
          Po wyczerpującym dniu zapraszamy Państwa do skorzystania z usług
          naszego Centrum Rekreacji, w którym można zażyć kąpieli w jacuzzi. Dla
          aktywnych proponujemy siłownię hotelową. Naszym głównym celem jest
          zadbanie o Państwa wypoczynek i komfort. Profesjonalny personel Hotelu
          jest zawsze do dyspozycji i służy pomocą. Zadowolenie naszych Gości
          jest dla nas najważniejsze i najbardziej motywujące.
        </p>
      </TextBlock>

      <CentralBlock>
        Oddajemy do Państwa dyspozycji
        <strong>12 luksusowych, klimatyzowanych pokoi</strong>, wyposażonych w
        mini-barek, sejf i łazienki z wanną lub prysznicem. Pokoje posiadają
        stały, bezprzewodowy dostęp do Internetu. Wyjątkowy styl hotelu
        uzupełniają nowoczesne rozwiązania przygotowane specjalnie nawet dla
        najbardziej wymagających gości.
      </CentralBlock>
    </section>
    <section id="gallery">
      <Gallery :images="hotelImages" />
    </section>
    <section id="offer">
      <Highlight id="offer" />
    </section>
    <ListBlock>
      <div class="section">
        <h3>Cena pokoju zawiera:</h3>
        <ul>
          <li>Wygodne, szerokie łóżka z pościelą antyalergiczną</li>
          <li>Łazienkę z kabiną prysznicową lub wanną</li>
          <li>Sejf</li>
          <li>TV LCD</li>
          <li>Mini-barek</li>
          <li>Bezprzewodowy internet</li>
          <li>Klimatyzacja</li>
          <li>Balkon lub taras</li>
        </ul>
      </div>
      <div class="section">
        <h3>Usługi dodatkowe dla gości hotelu:</h3>
        <ul>
          <li>Budzenie</li>
          <li>Usługi rezerwacyjne w innych hotelach</li>
          <li>Zamawianie Taxi</li>
          <li>Podstawowe usługi biurowe</li>
          <li>Informacja turystyczna</li>
          <li>Usługi bagażowe</li>
          <li>Usługi pralnicze</li>
          <li>Wypożyczalnia rowerów</li>
          <li>Parking podziemny, monitorowany</li>
        </ul>
      </div>
    </ListBlock>
  </section>
</template>

<script setup lang="ts">
import "aos/dist/aos.css";
import AOS from "aos";

import TextBlock from "@/components/common/blocks/TextBlock.vue";
import CentralBlock from "@/components/common/blocks/CentralBlock.vue";
import ListBlock from "@/components/common/blocks/ListBlock.vue";
import Gallery from "@/components/common/Gallery.vue";
import Highlight from "@/components/common/Highlight.vue";

import hotel1 from "@/assets/img/pages/hotel/hotel-01.jpg";
import hotel2 from "@/assets/img/pages/hotel/hotel-02.jpg";

import { onMounted } from "vue";
import SubNav from "../navs/SubNav.vue";

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

const navItems = [
  { label: "Wstęp", target: "#intro" },
  { label: "Galeria", target: "#gallery" },
  { label: "Oferta", target: "#offer" },
];

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

.hotel-page {
  .parallax {
    background-image: url("@/assets/img/pages/hotel/hotel-header.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 6rem 2rem; // przykładowy padding dla lepszej czytelności
    color: white; // jeśli tło ciemne
  }
  @media (max-width: 768px) {
    .parallax {
      background-attachment: scroll;
    }
  }
}
</style>
