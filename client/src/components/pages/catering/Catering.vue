<template>
  <section class="catering-page">
    <div class="block-text-only block-text-only--reverse">
      <div class="text">
        <h3>Nasz Catering</h3>
        <p>
          Jesteśmy dynamiczną firmą cateringową, która z pasją i zaangażowaniem
          tworzy wyjątkowe doświadczenia kulinarne. Nasza misja polega na
          dostarczaniu najwyższej jakości dań i obsługi, które zaspokoją nawet
          najbardziej wymagające podniebienia.
        </p>
      </div>
    </div>
    <div class="block-text-only">
      <div class="text">
        W Willa Hueta stawiamy na świeże, sezonowe składniki i kreatywne
        podejście do kulinariów. Nasz doświadczony zespół kucharzy, cukierników
        i profesjonalnych kelnerów dba o to, aby każde danie było nie tylko
        smaczne, ale także pięknie podane, tworząc wspaniałą estetykę na stole.
      </div>
    </div>
    <div class="block-text-only block-text-only--reverse">
      <div class="text">
        Niezależnie od tego, czy planujesz kameralne spotkanie rodzinne,
        eleganckie przyjęcie firmowe czy olśniewającą uroczystość, z nami masz
        pewność, że Twoje wydarzenie będzie niezapomniane. Dopasowujemy się do
        indywidualnych preferencji i potrzeb klienta, tworząc menu, które spełni
        oczekiwania nawet najbardziej wymagających gości.
      </div>
    </div>
    <div class="block-text-only">
      <div class="text">
        Nasze usługi cateringowe obejmują pełną gamę możliwości, w tym
        przygotowanie dań głównych, przekąsek, deserów oraz profesjonalną
        obsługę kelnerską. Działamy na terenie Województwo Świętokrzyskie,
        zapewniając nie tylko doskonałe jedzenie, ale także kompleksową
        logistykę i organizację.
      </div>
    </div>
    <div class="block-text-only block-text-only--reverse">
      <div class="text">
        Niezależnie od skali imprezy, nasza ekipa zadba o najdrobniejsze detale,
        aby zapewnić Ci pełen komfort i satysfakcję. Willa Hueta to gwarancja
        doskonałej jakości, świeżości i smaku, którym zachwycisz swoich gości.
      </div>
    </div>
    <Gallery :images="hotelImages" />
    <div class="central-block">
      Zapraszamy do kontaktu i współpracy z nami. Razem stworzymy niezapomniane
      doświadczenie kulinarne, które będzie się jeszcze długo wspominać!
    </div>
    <Highlight />
    <div class="central-block">
      <h3>Wydarzenia Cykliczne</h3>
      <Timeline />
    </div>
    <div class="central-block">
      <h3>Spotkania Klubowe</h3>
    </div>
    <div class="cards-wrapper">
      <div class="card">
        <h3 class="card-title">
          Nowe, luksusowe mercedesy i pokaz mody w kieleckiej Willi Hueta
        </h3>
        <a
          href="http://willahueta.pl/aktualnosci/wszystkie/wpis/14"
          target="_blank"
          class="href-btn"
        >
          Zobacz więcej
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="icon" />
        </a>
      </div>
      <div class="card">
        <h3 class="card-title">
          Elegancki wieczór w Willi Hueta. Pokaz mody i wyszukane potrawy
          gotowane na żywo
        </h3>
        <a
          href="http://willahueta.pl/aktualnosci/wszystkie/wpis/14"
          target="_blank"
          class="href-btn"
        >
          Zobacz więcej
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="icon" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import hotel1 from "@/assets/img/pages/hotel/hotel-01.jpg";
import hotel2 from "@/assets/img/pages/hotel/hotel-02.jpg";
import Gallery from "@/components/common/Gallery.vue";
import Highlight from "@/components/common/Highlight.vue";
import Timeline from "./Timeline.vue";
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

.catering-page {
  .block-text-only {
    padding: 0 15vmin;
    @extend %block-text-only;
    &--reverse {
      @extend %block-text-only--reverse;
    }
  }
  .central-block {
    @extend %central-block;
  }
  .info-sections {
    @extend %info-sections;
  }
  .cards-wrapper {
    margin: 0 auto;
    padding: 2vmin;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .card {
      width: 30vw;
      height: 27vh;
      background-color: $bgColor;
      padding: 2vmin;
      border-radius: 1vmin;
      border: 1px solid #ccc;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;

      h3 {
        font-family: $supportFont;
        font-size: 3vmin;
        color: $primaryColor;
        margin: 0;
      }

      .href-btn {
        @extend %follow-btn;
        font-size: 3vmin;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;

        .icon {
          font-size: 3vmin;
        }
      }
    }
  }
}
</style>
