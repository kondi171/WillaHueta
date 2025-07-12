<template>
  <div class="sub-header">
    <h1>{{ displayName }}</h1>
    <img :src="headerImage" :alt="displayName" class="header-image" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const routeNames: Record<string, string> = {
  hotel: 'Hotel',
  restauracja: 'Restauracja',
  sale: 'Sale Konferencyjne',
  wesela: 'Wesela',
  catering: 'Usługi Cateringowe',
  imprezy: 'Imprezy Okolicznościowe',
  aktualnosci: 'Aktualności',
  historia: 'Nasza Historia',
  kontakt: 'Kontakt',
};

const routeImages: Record<string, string> = {
  hotel: new URL('@/assets/img/pages/hotel/hotel-header.jpg', import.meta.url).href,
  restauracja: new URL('@/assets/img/pages/restaurant/restaurant-header.jpg', import.meta.url).href,
  sale: new URL('@/assets/img/pages/conference/conference-header.jpg', import.meta.url).href,
  wesela: new URL('@/assets/img/pages/weddings/weddings-header.jpg', import.meta.url).href,
  catering: new URL('@/assets/img/pages/catering/catering-header.jpg', import.meta.url).href,
  imprezy: new URL('@/assets/img/pages/events/events-header.jpg', import.meta.url).href,
  aktualnosci: new URL('@/assets/img/pages/news/news-header.jpg', import.meta.url).href,
  historia: new URL('@/assets/img/pages/history/history-header.jpg', import.meta.url).href,
  kontakt: new URL('@/assets/img/pages/contact/contact-header.jpg', import.meta.url).href,
};

const displayName = computed(() => {
  return routeNames[route.name as string] || 'Podstrona';
});

const headerImage = computed(() => {
  return routeImages[route.name as string] || '';
});
</script>

<style scoped>
.sub-header {
  margin-top: 10vmin;
  padding: 5vmin;
  background-color: #ffffffc7;
  text-align: center;
  border-bottom: 2px solid #ccc;
  font-family: 'YourFont', sans-serif;
}

.header-image {
  width: 100%;
  height: auto;
  max-height: 60vh;
  object-fit: cover;
  margin-top: 2vmin;
  border-radius: 1rem;
}
</style>
