<script setup lang="ts">
import { ref, onMounted, nextTick, onBeforeUnmount, type Ref } from "vue";
import { useRouter } from "vue-router";
import { useAOS } from "../../../hooks/useAOS";

useAOS();

type Row = {
  id: number;
  name: string;
  tags: string[];
  reverse: boolean;
  duration: number;
};

const router = useRouter();
const SPEED = 50;

const hotel = [
  "12 luksusowych pokoi",
  "Klimatyzacja",
  "Mini barek",
  "Sejf",
  "Monitorowany Parking",
  "WiFi",
  "Winda",
  "Łazienka wyposażona w wannę lub prysznic",
  "Wygodne łóżka z pościelą antyalergiczną",
  "Telewizor",
  "Balkon lub Taras",
];
const restaurant = [
  "Przystawki",
  "Dania Główne",
  "Zupy",
  "Desery",
  "Napoje Zimne",
  "Napoje Gorące",
  "Whisky",
  "Tequila",
  "Wódka",
  "Aperetifs",
  "Gin",
  "Piwo",
  "Brandy Cognac",
  "Przystawki",
];
const conference = [
  "Zmieniacz slajdów",
  "Wskaźnik",
  "Ekran",
  "Flipchart",
  "Internet",
  "Rzutnik",
  "Laptop",
  "Odtwarzacz DVD",
  "Nagłośnienie",
  "Mikrofony",
];
const weddings = [
  "Czerwony Dywan",
  "Wykwitne menu",
  "Powitanie Chlebem i solą",
  "Całonocna obsługa kelnerska",
  "Specjalne Menu dla dzieci",
  "Konsultacja oraz zabiegi pielęgnacyjne dla pary młodej",
  "Fontanna Czekoladowa lub Alkoholowa",
  "Candy Bar",
  "Wiejski Stół",
  "Profesjonalna opieka nad dziećmi",
  "Dekoracje",
  "Transport",
];
const events = [
  "Śniadania, Lunche, Obiady, Kolacje",
  "Imprezy rodzinne",
  "Chrzciny",
  "Komunie",
  "Konsolacje",
  "Bierzmowania",
  "Imprezy firmowe",
];
const catering = [
  "???",
  "???",
  "???",
  "???",
  "???",
  "???",
  "???",
  "???",
  "???",
  "???",
  "???",
  "???",
  "???",
  "???",
  "???",
  "???",
];

const rows = ref<Row[]>([
  { id: 0, name: "Hotel", tags: [...hotel], reverse: false, duration: 12 },
  {
    id: 1,
    name: "Restauracja",
    tags: [...restaurant],
    reverse: true,
    duration: 12,
  },
  {
    id: 2,
    name: "Sale Konferencyjne",
    tags: [...conference],
    reverse: false,
    duration: 12,
  },
  { id: 3, name: "Wesela", tags: [...weddings], reverse: true, duration: 12 },
  {
    id: 4,
    name: "Imprezy Okolicznościowe",
    tags: [...events],
    reverse: false,
    duration: 12,
  },
  {
    id: 5,
    name: "Usługi Cateringowe",
    tags: [...catering],
    reverse: true,
    duration: 12,
  },
]);

const getRoute = (id: number) => {
  switch (id) {
    case 0:
      return "/hotel";
    case 1:
      return "/restauracja";
    case 2:
      return "/sale";
    case 3:
      return "/wesela";
    case 4:
      return "/imprezy";
    case 5:
      return "/catering";
    default:
      return "/";
  }
};
const navigate = (id: number) => {
  router.push(getRoute(id));
};

const trackRefs: Ref<(HTMLElement | null)[]> = ref([]);

const measure = () => {
  trackRefs.value.forEach((el, index) => {
    if (!el) return;
    const halfWidth = el.scrollWidth / 2;
    const duration = Math.max(4, halfWidth / SPEED);
    rows.value[index].duration = duration;
  });
};

onMounted(async () => {
  await nextTick();
  requestAnimationFrame(() => requestAnimationFrame(measure));
  // @ts-ignore
  if (document.fonts?.ready) {
    // @ts-ignore
    document.fonts.ready.then(measure).catch(() => {});
  }
  window.addEventListener("resize", measure, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", measure);
});
</script>

<template>
  <div class="scroller-wrapper" data-aos="fade-up">
    <h3 data-aos="fade-right">Nasze Usługi</h3>

    <div
      @click="navigate(row.id)"
      v-for="(row, index) in rows"
      :key="row.id"
      class="tag-row"
      :class="{ reverse: row.reverse }"
      data-aos="fade-up"
    >
      <div class="row-header">
        <h4>{{ row.name }}</h4>
        <hr />
      </div>
      <div
        class="tag-track"
        :ref="(el) => (trackRefs[index] = el as HTMLElement)"
        :style="{ ['--dur' as any]: rows[index].duration + 's' }"
      >
        <template v-for="repeat in 3" :key="repeat">
          <div v-for="(tag, i) in row.tags" :key="`${repeat}-${i}`" class="tag">
            {{ tag }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;
@use "@/assets/scss/placeholders.scss" as *;

.scroller-wrapper {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: $textColor;
  padding: 2vmin;

  h3 {
    @extend %title-header;
    color: $bgColor;
  }

  .tag-row {
    overflow: hidden;
    white-space: nowrap;
    padding: 2vmin 0;
    border-radius: 8px;

    mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 8%,
      black 92%,
      transparent 100%
    );
    -webkit-mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 8%,
      black 92%,
      transparent 100%
    );
    mask-repeat: no-repeat;
    mask-size: 100% 100%;

    .row-header {
      padding: 0 2vmin;
      color: white;
      text-transform: uppercase;
      letter-spacing: 1px;
      cursor: pointer;

      h4 {
        margin: 0 0 1vmin 10vmin;
        font-size: 2.5vmin;
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
      flex-wrap: nowrap;
      will-change: transform;

      animation-name: marquee;
      animation-duration: var(--dur, 20s);
      animation-timing-function: linear;
      animation-iteration-count: infinite;

      .tag {
        flex-shrink: 0;
        color: white;
        background-color: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 1vmin 3vmin;
        margin: 0 1vmin;
        border-radius: 2vmin;
        font-size: 2vmin;
        font-family: $supportFont;
        font-weight: light;
        transition: border-color 0.3s ease, background-color 0.3s ease;
      }
    }

    &.reverse .tag-track {
      animation-direction: reverse;
    }

    &:hover {
      cursor: pointer;

      .row-header h4 {
        color: $secondaryColor;
      }
      .row-header hr {
        border-color: $secondaryColor;
      }

      .tag-track {
        animation-play-state: paused;
      }

      .tag {
        border-color: $secondaryColor;
        background-color: rgba($secondaryColor, 0.1);
      }
    }
  }
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
