<script setup lang="ts">
const hotel = [
  '12 luksusowych pokoi', 'Klimatyzacja', 'Mini barek', 'Sejf', 'Monitorowany Parking', 'WiFi', 'Winda',
  'Łazienka wyposażona w wannę lub prysznic', 'Wygodne łóżka z pościelą antyalergiczną', 'Telewizor', 'Balkon lub Taras'
];
const restaurant = [
  'Przystawki', 'Dania Główne', 'Zupy', 'Desery', 'Napoje Zimne', 'Napoje Gorące',
  'Whisky', 'Tequila', 'Wódka', 'Aperetifs', 'Gin', 'Piwo', 'Brandy Cognac'
];
const conference = [
  'Zmieniacz slajdów', 'Wskaźnik', 'Ekran', 'Flipchart', 'Internet', 'Rzutnik',
  'Laptop', 'Odtwarzacz DVD', 'Nagłośnienie', 'Mikrofony'
];
const weddings = [
  'Czerwony Dywan', 'Wykwitne menu', 'Powitanie Chlebem i solą', 'Całonocna obsługa kelnerska',
  'Specjalne Menu dla dzieci', 'Konsultacja oraz zabiegi pielęgnacyjne dla pary młodej',
  'Fontanna Czekoladowa lub Alkoholowa', 'Candy Bar', 'Wiejski Stół',
  'Profesjonalna opieka nad dziećmi', 'Dekoracje', 'Transport'
];
const events = [
  'Śniadania, Lunche, Obiady, Kolacje', 'Imprezy rodzinne', 'Chrzciny', 'Komunie',
  'Konsolacje', 'Bierzmowania', 'Imprezy firmowe'
];
const catering = [
  '???', '???', '???', '???', '???', '???'
];

const rows = [
  { id: 0, name: 'Hotel', tags: [...hotel], reverse: false },
  { id: 1, name: 'Restauracja', tags: [...restaurant], reverse: true },
  { id: 2, name: 'Sale Konferencyjne', tags: [...conference], reverse: false },
  { id: 3, name: 'Wesela', tags: [...weddings], reverse: true },
  { id: 4, name: 'Imprezy Okolicznościowe', tags: [...events], reverse: false },
  { id: 5, name: 'Usługi Cateringowe', tags: [...catering], reverse: true }
];
</script>

<template>
  <div class="scroller-wrapper">
    <h2>Nasze Usługi</h2>
    <div
      v-for="row in rows"
      :key="row.id"
      class="tag-row"
      :class="{ reverse: row.reverse }"
    >
      <div class="row-header">
        <h4>{{ row.name }}</h4>
        <hr />
      </div>
      <div class="tag-track">
        <div v-for="(tag, i) in [...row.tags, ...row.tags]" :key="i" class="tag">
          {{ tag }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;

.scroller-wrapper {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: $textColor;
  padding: 2vmin;

  h2 {
    font-family: $supportFont;
    color: white;
    text-align: center;
    font-size: 3vmin;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 2vmin;
  }

  .tag-row {
    overflow: hidden;
    white-space: nowrap;
    padding: 2vmin 0;
    border-radius: 8px;
    cursor: default;

    mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
    mask-repeat: no-repeat;
    mask-size: 100% 100%;

    &:nth-child(even) {
      // background-color: rgba(255, 255, 255, 0.05);
    }

    .row-header {
      padding: 0 2vmin;
      color: white;
      text-transform: uppercase;
      letter-spacing: 1px;

      h4 {
        margin: 0 0 1vmin 10vmin;
        font-size: 2vmin;
        transition: color 0.3s ease;
      }

      hr {
        border: none;
        border-top: 1px solid rgba(255, 255, 255, 0.3);
        margin: 0 auto 1rem;
        width: 100%;
        transition: border-color 0.3s ease;
      }
    }

    .tag-track {
      display: inline-flex;
      transform: translateX(0%);
      will-change: transform;
      transition: transform 0.3s ease-out;
      animation: scroll-left 20s linear infinite;

      .tag {
        color: white;
        background-color: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 0.5rem 1rem;
        margin: 0 0.5rem;
        border-radius: 20px;
        font-family: monospace;
        font-size: 1rem;
        transition: all 0.3s ease;
      }
    }

    &.reverse .tag-track {
      animation: scroll-right 20s linear infinite;
    }

    &:hover {
      .row-header h4 {
        color: $primaryColor;
      }

      .row-header hr {
        border-color: $primaryColor;
      }

      .tag-track {
        animation-play-state: paused;

        .tag {
          color: $primaryColor;
          border-color: $primaryColor;
          background-color: rgba($primaryColor, 0.1);
        }
      }
    }
  }
}

@keyframes scroll-left {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-50%);
  }
}

@keyframes scroll-right {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0%);
  }
}
</style>
