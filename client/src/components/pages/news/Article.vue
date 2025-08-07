<template>
  <div
    :class="['news-item', { 'no-image': news.image === 'none' }]"
    data-aos="fade-up"
  >
    <template v-if="news.image !== 'none'">
      <img :src="news.image" :alt="news.title" class="news-image" />
    </template>
    <div class="news-content">
      <h3>{{ news.title }}</h3>
      <p>{{ news.text }}</p>
      <small>{{ formattedDate }}</small>
    </div>
  </div>
</template>

<script setup lang="ts">
import AOS from "aos";
import "aos/dist/aos.css";
import { computed, onMounted } from "vue";
interface ArticleType {
  id: number;
  title: string;
  text: string;
  date: string;
  image: string;
}

const props = defineProps<{ news: ArticleType }>();

const formattedDate = computed(() => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(props.news.date).toLocaleDateString("pl-PL", options);
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

.news-item {
  display: flex;
  gap: 2vmin;
  background-color: $bgColor;
  padding: 4vmin;
  border: 1px solid #ddd;
  border-radius: 1vmin;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  .news-image {
    width: 40%;
    height: auto;
    max-height: 30vmin;
    object-fit: cover;
    border-radius: 1vmin;
    flex-shrink: 0;
  }

  .news-content {
    flex: 1;
    margin-left: 2vmin;

    h3 {
      font-size: 4vmin;
      margin-bottom: 2vmin;
    }

    p {
      font-size: 2.5vmin;
      line-height: 200%;
      color: $textColor;
      margin-bottom: 2vmin;
    }

    small {
      font-size: 2vmin;
      color: $secondaryColor;
    }
  }
  &.no-image {
    display: flex;

    .news-image {
      display: none;
    }

    .news-content {
      margin-left: 0;
    }
  }
}
</style>
