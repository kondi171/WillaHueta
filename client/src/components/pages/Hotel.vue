<template>
  <section class="hotel-page">
    <div class="block-text-only">
      <div class="text">
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
      </div>
    </div>

    <div class="block-text-only block-text-only--reverse">
      <div class="text">
        <p>
          Po wyczerpującym dniu zapraszamy Państwa do skorzystania z usług
          naszego Centrum Rekreacji, w którym można zażyć kąpieli w jacuzzi. Dla
          aktywnych proponujemy siłownię hotelową. Naszym głównym celem jest
          zadbanie o Państwa wypoczynek i komfort. Profesjonalny personel Hotelu
          jest zawsze do dyspozycji i służy pomocą. Zadowolenie naszych Gości
          jest dla nas najważniejsze i najbardziej motywujące.
        </p>
      </div>
    </div>

    <div class="description">
      Oddajemy do Państwa dyspozycji
      <strong>12 luksusowych, klimatyzowanych pokoi</strong>, wyposażonych w
      mini-barek, sejf i łazienki z wanną lub prysznicem. Pokoje posiadają
      stały, bezprzewodowy dostęp do Internetu. Wyjątkowy styl hotelu
      uzupełniają nowoczesne rozwiązania przygotowane specjalnie nawet dla
      najbardziej wymagających gości.
    </div>
    <Gallery :images="hotelImages" />
    <div class="highlight">
      <span>
        Najlepsza cena tylko poprzez bezpośredni kontakt z recepcją hotelu.
      </span>
      <router-link to="/kontakt" class="contact-btn">
        Kontakt
        <font-awesome-icon icon="fa-solid fa-arrow-right" class="icon" />
      </router-link>
    </div>
    <div class="sections">
      <div class="section">
        <h2>Cena pokoju zawiera:</h2>
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
        <h2>Usługi dodatkowe dla gości hotelu:</h2>
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
    </div>
  </section>
</template>

<script setup lang="ts">
import Gallery from "../Gallery.vue";

import hotel1 from "@/assets/img/pages/hotel/hotel-01.jpg";
import hotel2 from "@/assets/img/pages/hotel/hotel-02.jpg";

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
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;
@use "@/assets/scss/placeholders.scss" as *;

.hotel-page {
  .block-text-only {
    padding: 0 15vmin;
    @extend %block-text-only;
    &--reverse {
      @extend %block-text-only--reverse;
    }
  }

  .description {
    margin: 6vmin auto;
    width: 80vw;
    font-size: 2.5vmin;
    line-height: 250%;
    color: $textColor;
    text-align: justify;
    text-align-last: center;
    strong {
      color: $secondaryColor;
    }
  }

  .sections {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 6vmin 0;
    .section {
      font-size: 2vmin;
      line-height: 1.6;

      h2 {
        font-size: 2.5vmin;
        color: $primaryColor;
        margin-bottom: 1vmin;
      }

      ul {
        list-style-type: disc;
        padding-left: 2vmin;
        li {
          margin-bottom: 0.5vmin;
          &::marker {
            color: $primaryColor;
          }
        }
      }
    }
  }
  .highlight {
    font-size: 3vmin;
    font-weight: bold;
    color: $primaryColor;
    margin: 5vmin auto;
    text-align: center;
    span {
      display: block;
      margin-bottom: 2vmin;
    }
    .contact-btn {
      @extend %follow-btn;
      font-size: 3vmin;
      .icon {
        font-size: 3vmin;
      }
    }
  }
}
</style>
