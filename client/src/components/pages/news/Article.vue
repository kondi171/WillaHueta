<template>
  <div
    :class="['news-item', side, { 'no-image': news.image === 'none' }]"
    :data-aos="computedAos"
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
import { computed } from "vue";
import { useAnimate } from "../../../hooks/useAnimate";

interface ArticleType {
  id: number;
  title: string;
  text: string;
  date: string;
  image: string;
}

const props = defineProps<{ news: ArticleType; side: "left" | "right" }>();

const formattedDate = computed(() => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(props.news.date).toLocaleDateString("pl-PL", options);
});

// hook do animacji
const reverse = computed(() => props.side === "right");
const { computedAos } = useAnimate(reverse.value, {
  desktop: reverse.value ? "fade-left" : "fade-right",
  mobile: "fade-up",
});
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;
@use "sass:color";

.news-item {
  display: flex;
  gap: 2vmin;
  // width: 90%;
  margin: 2vmin 0;
  padding: 4vmin;
  border-radius: 1vmin;
  border: 1px solid #ddd;
  background-color: $bgColor;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);

  &:first-of-type {
    margin-top: 0;
  }

  &.left {
    margin-right: auto;
  }

  &.right {
    margin-left: auto;
    background-color: color.adjust($bgColor, $lightness: -10%);
  }

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
    .news-content {
      margin-left: 0;
    }
  }

  @media (max-width: $tabletBreakpoint) {
    flex-direction: column;
    align-items: center;
    padding: 3vmin;

    &.left,
    &.right {
      margin: 2vmin auto;
    }

    .news-image {
      width: 100%;
      max-height: 40vmin;
      margin-bottom: 2vmin;
    }

    .news-content {
      margin-left: 0;

      h3 {
        font-size: 5vmin;
      }

      p {
        font-size: 3vmin;
      }

      small {
        font-size: 2.5vmin;
      }
    }
  }

  @media (max-width: $mobileBreakpoint) {
    padding: 2vmin;

    .news-image {
      max-height: 50vmin;
    }

    .news-content {
      h3 {
        font-size: 6vmin;
      }
      p {
        font-size: 3.5vmin;
      }
      small {
        font-size: 3vmin;
      }
    }
  }

  @media (max-width: $xSmallBreakpoint) {
    padding: 2vmin;

    .news-image {
      max-height: 55vmin;
    }

    .news-content {
      h3 {
        font-size: 7vmin;
      }
      p {
        font-size: 4vmin;
      }
      small {
        font-size: 3.5vmin;
      }
    }
  }
}
</style>
