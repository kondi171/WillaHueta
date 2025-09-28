<template>
  <article class="news">
    <h3 data-aos="fade-right">Aktualności</h3>
    <div class="news-list">
      <Article
        v-for="(news, index) in latestNews"
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
        :data-aos="computedAos"
      />
    </div>
    <div class="news-btn-wrapper">
      <router-link to="/aktualnosci" class="news-btn">
        Pokaż wszystkie aktualności
        <font-awesome-icon icon="fa-solid fa-arrow-right" class="icon" />
      </router-link>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import Article from "./../news/Article.vue";
import { useAnimate } from "../../../hooks/useAnimate";

interface ArticleType {
  id: number;
  title: string;
  text: string;
  date: string;
  image: string;
}

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

const layoutReverse = ref(false);
const latestNews = computed(() => newsList.value.slice(0, 2));

const { computedAos } = useAnimate(false);
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;
@use "@/assets/scss/placeholders.scss" as *;

.news {
  width: 100%;
  padding: 0 5vmin;

  h3 {
    @extend %title-header;
    text-align: right;
    margin-right: 5vmin;
    margin-left: 0;
    margin-bottom: 5vmin;
  }

  .news-list {
    display: flex;
    flex-direction: column;
    gap: 5vmin;
  }

  .news-btn-wrapper {
    margin-top: 4vmin;
    margin-bottom: 4vmin;
    display: flex;
    justify-content: flex-start;

    .news-btn {
      @extend %follow-btn;
      font-size: 2vmin;
      .icon {
        font-size: 2vmin;
      }
    }
  }

  @media (max-width: $tabletBreakpoint) {
    h3 {
      font-size: 4vmin;
      margin-bottom: 3vmin;
    }
  }

  @media (max-width: $mobileBreakpoint) {
    h3 {
      font-size: 5vmin;
      margin-bottom: 2vmin;
    }

    .news-btn {
      font-size: 3vmin;
      .icon {
        font-size: 3vmin;
      }
    }
  }

  @media (max-width: $xSmallBreakpoint) {
    h3 {
      font-size: 6vmin;
      margin-bottom: 2vmin;
    }

    .news-btn {
      font-size: 4vmin;
      .icon {
        font-size: 4vmin;
      }
    }
  }
}
</style>
