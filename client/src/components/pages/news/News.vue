<template>
  <section class="news-page">
    <h3 data-aos="fade-right">Wszystkie aktualności</h3>
    <div class="news-list">
      <Article
        v-for="(news, index) in paginatedNews"
        :key="news.id"
        :news="news"
        :side="
          layoutReverse
            ? index % 2 === 0
              ? 'left'
              : 'right'
            : index % 2 === 0
            ? 'right'
            : 'left'
        "
      />
    </div>

    <div class="pagination" v-if="totalPages > 1">
      <button
        v-for="page in totalPages"
        :key="page"
        :class="{ active: page === currentPage }"
        @click="changePage(page)"
      >
        {{ page }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Article from "./Article.vue";

interface ArticleType {
  id: number;
  title: string;
  text: string;
  date: string;
  image: string;
}

const ARTICLES_PER_PAGE = 4;
const currentPage = ref(1);
const layoutReverse = ref(true);

const newsList = ref<ArticleType[]>([
  {
    id: 1,
    title: "Aktualność 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit placeat inventore, id magni commodi facere fugit nam corrupti impedit adipisci illum nemo quo soluta ipsum excepturi, sequi distinctio rem voluptatibus voluptates omnis asperiores! Adipisci nesciunt alias ea nisi pariatur autem, facere dignissimos. Error libero, nesciunt voluptatum ullam modi ratione quasi?",
    date: "2025-08-10",
    image: "https://picsum.photos/seed/1/600/400",
  },
  {
    id: 2,
    title: "Aktualność 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit placeat inventore, id magni commodi facere fugit nam corrupti impedit adipisci illum nemo quo soluta ipsum excepturi, sequi distinctio rem voluptatibus voluptates omnis asperiores! Adipisci nesciunt alias ea nisi pariatur autem, facere dignissimos. Error libero, nesciunt voluptatum ullam modi ratione quasi?",
    date: "2025-08-09",
    image: "https://picsum.photos/seed/2/600/400",
  },
  {
    id: 3,
    title: "Aktualność 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit placeat inventore, id magni commodi facere fugit nam corrupti impedit adipisci illum nemo quo soluta ipsum excepturi, sequi distinctio rem voluptatibus voluptates omnis asperiores! Adipisci nesciunt alias ea nisi pariatur autem, facere dignissimos. Error libero, nesciunt voluptatum ullam modi ratione quasi?",
    date: "2025-08-08",
    image: "none",
  },
  {
    id: 4,
    title: "Aktualność 4",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit placeat inventore, id magni commodi facere fugit nam corrupti impedit adipisci illum nemo quo soluta ipsum excepturi, sequi distinctio rem voluptatibus voluptates omnis asperiores! Adipisci nesciunt alias ea nisi pariatur autem, facere dignissimos. Error libero, nesciunt voluptatum ullam modi ratione quasi?",
    date: "2025-08-07",
    image: "https://picsum.photos/seed/4/600/400",
  },
  {
    id: 5,
    title: "Aktualność 5",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit placeat inventore, id magni commodi facere fugit nam corrupti impedit adipisci illum nemo quo soluta ipsum excepturi, sequi distinctio rem voluptatibus voluptates omnis asperiores! Adipisci nesciunt alias ea nisi pariatur autem, facere dignissimos. Error libero, nesciunt voluptatum ullam modi ratione quasi?",
    date: "2025-08-06",
    image: "https://picsum.photos/seed/5/600/400",
  },
]);

const totalPages = computed(() =>
  Math.ceil(newsList.value.length / ARTICLES_PER_PAGE)
);

const sortedNews = computed(() =>
  [...newsList.value].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
);

const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * ARTICLES_PER_PAGE;
  return sortedNews.value.slice(start, start + ARTICLES_PER_PAGE);
});

const changePage = (page: number) => {
  currentPage.value = page;
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;
@use "@/assets/scss/placeholders.scss" as *;

.news-page {
  padding: 0 15vmin;

  h3 {
    @extend %title-header;
    margin: 5vmin 0;
  }

  .news-list {
    display: flex;
    flex-direction: column;
    gap: 3vmin;
  }

  .pagination {
    margin: 4vmin auto;
    display: flex;
    justify-content: center;
    gap: 1vmin;
    flex-wrap: wrap;

    button {
      width: 6vmin;
      height: 6vmin;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid $primaryColor;
      background-color: #fff;
      color: $primaryColor;
      border-radius: 2vmin;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.4s ease;

      &.active,
      &:hover {
        background-color: $primaryColor;
        color: #fff;
      }
    }
  }
}
</style>
