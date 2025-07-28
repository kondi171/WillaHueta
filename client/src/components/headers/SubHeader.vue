<template>
  <div
    class="sub-header"
    v-if="headerImage"
    :key="headerImage"
    data-aos="zoom-in-up"
  >
    <img class="background" :src="headerImage" :alt="displayName.title" />
    <div class="overlay">
      <h1>{{ displayName.title }}</h1>
      <p class="subtitle" v-if="displayName.subtitle">
        {{ displayName.subtitle }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import "aos/dist/aos.css";
import AOS from "aos";

const route = useRoute();

const routeNames: Record<string, { title: string; subtitle?: string }> = {
  hotel: {
    title: "Hotel",
    subtitle: "Komfort i luksus w sercu miasta",
  },
  restauracja: {
    title: "Restauracja",
    subtitle: "Wyśmienite smaki i wyjątkowa atmosfera",
  },
  sale: {
    title: "Sale Konferencyjne",
    subtitle: "Idealne miejsce na Twoje wydarzenia",
  },
  wesela: {
    title: "Wesela",
    subtitle: "Romantyczna oprawa Twojego dnia",
  },
  catering: {
    title: "Usługi Cateringowe",
    subtitle: "Profesjonalna obsługa kulinarna",
  },
  imprezy: {
    title: "Imprezy Okolicznościowe",
    subtitle: "Zorganizuj niezapomniane wydarzenie",
  },
  aktualnosci: {
    title: "Aktualności",
    subtitle: "Bądź na bieżąco z naszymi wydarzeniami",
  },
  historia: {
    title: "Historia",
    subtitle: "Poznaj naszą tradycję i wartości",
  },
  kontakt: {
    title: "Kontakt",
    subtitle: "Jesteśmy do Twojej dyspozycji",
  },
};

const routeImages: Record<string, string> = {
  hotel: new URL("@/assets/img/pages/hotel/hotel-header.jpg", import.meta.url)
    .href,
  restauracja: new URL(
    "@/assets/img/pages/restaurant/restaurant-header.jpg",
    import.meta.url
  ).href,
  sale: new URL(
    "@/assets/img/pages/conference/conference-header.jpg",
    import.meta.url
  ).href,
  wesela: new URL(
    "@/assets/img/pages/weddings/weddings-header.jpg",
    import.meta.url
  ).href,
  catering: new URL(
    "@/assets/img/pages/catering/catering-header.jpg",
    import.meta.url
  ).href,
  imprezy: new URL(
    "@/assets/img/pages/events/events-header.jpg",
    import.meta.url
  ).href,
  aktualnosci: new URL(
    "@/assets/img/pages/news/news-header.jpg",
    import.meta.url
  ).href,
  historia: new URL(
    "@/assets/img/pages/history/history-header.jpg",
    import.meta.url
  ).href,
  kontakt: new URL(
    "@/assets/img/pages/contact/contact-header.jpg",
    import.meta.url
  ).href,
};

const displayName = computed(() => {
  return (
    routeNames[route.name as string] || {
      title: "Podstrona",
      subtitle: "",
    }
  );
});

const headerImage = computed(() => {
  return routeImages[route.name as string] || "";
});

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

.sub-header {
  position: relative;
  width: 95vw;
  height: 50vh;
  overflow: hidden;
  border-radius: 1rem;
  margin: 15vmin 2.5vw 0 2.5vw;

  .background {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.6);
    display: block;
  }

  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $bgColor;
    text-align: center;
    text-shadow: 0 0 1vmin rgba(0, 0, 0, 0.6);

    h1 {
      font-size: 8vmin;
      font-family: $fancyFont;
      margin: 0;
    }

    .subtitle {
      margin-top: 1vmin;
      font-size: 4vmin;
      font-family: $supportFont;
      font-weight: 400;
      color: $supportColor;
    }
  }
}
</style>
