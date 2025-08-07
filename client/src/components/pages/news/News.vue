<template>
  <section class="news-page">
    <h3>Wszystkie aktualności</h3>
    <div class="news-list">
      <Article v-for="news in paginatedNews" :key="news.id" :news="news" />
    </div>

    <div class="pagination">
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

const newsList = ref<ArticleType[]>([
  {
    id: 1,
    title: "Wieczór Jazzowy - 12 lipca",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-07-12",
    image: "/img/notitle.png",
  },
  {
    id: 2,
    title: "Nowe menu w restauracji",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-06-05",
    image: "none",
  },
  {
    id: 3,
    title: "Wieczór Jazzowy - 12 lipca",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-07-12",
    image: "none",
  },
  {
    id: 4,
    title: "Nowe menu w restauracji",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-06-05",
    image: "/img/hotel-01.jpg",
  },
  {
    id: 5,
    title: "Wieczór Jazzowy - 12 lipca",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-07-12",
    image: "/img/hotel-02.jpg",
  },
  {
    id: 6,
    title: "Nowe menu w restauracji",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-06-05",
    image: "none",
  },
  {
    id: 7,
    title: "Wieczór Jazzowy - 12 lipca",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-07-12",
    image: "none",
  },
  {
    id: 8,
    title: "Nowe menu w restauracji",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-06-05",
    image: "/img/hotel-01.jpg",
  },
  {
    id: 1,
    title: "Wieczór Jazzowy - 12 lipca",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-07-12",
    image: "/img/notitle.png",
  },
  {
    id: 2,
    title: "Nowe menu w restauracji",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-06-05",
    image: "none",
  },
  {
    id: 3,
    title: "Wieczór Jazzowy - 12 lipca",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-07-12",
    image: "none",
  },
  {
    id: 4,
    title: "Nowe menu w restauracji",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-06-05",
    image: "/img/hotel-01.jpg",
  },
  {
    id: 5,
    title: "Wieczór Jazzowy - 12 lipca",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-07-12",
    image: "/img/hotel-02.jpg",
  },
  {
    id: 6,
    title: "Nowe menu w restauracji",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-06-05",
    image: "none",
  },
  {
    id: 7,
    title: "Wieczór Jazzowy - 12 lipca",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-07-12",
    image: "none",
  },
  {
    id: 8,
    title: "Nowe menu w restauracji",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-06-05",
    image: "/img/hotel-01.jpg",
  },
  {
    id: 1,
    title: "Wieczór Jazzowy - 12 lipca",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-07-12",
    image: "/img/notitle.png",
  },
  {
    id: 2,
    title: "Nowe menu w restauracji",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-06-05",
    image: "none",
  },
  {
    id: 3,
    title: "Wieczór Jazzowy - 12 lipca",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-07-12",
    image: "none",
  },
  {
    id: 4,
    title: "Nowe menu w restauracji",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-06-05",
    image: "/img/hotel-01.jpg",
  },
  {
    id: 5,
    title: "Wieczór Jazzowy - 12 lipca",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-07-12",
    image: "/img/hotel-02.jpg",
  },
  {
    id: 6,
    title: "Nowe menu w restauracji",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-06-05",
    image: "none",
  },
  {
    id: 7,
    title: "Wieczór Jazzowy - 12 lipca",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-07-12",
    image: "none",
  },
  {
    id: 8,
    title: "Nowe menu w restauracji",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-06-05",
    image: "/img/hotel-01.jpg",
  },
  {
    id: 1,
    title: "Wieczór Jazzowy - 12 lipca",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-07-12",
    image: "/img/notitle.png",
  },
  {
    id: 2,
    title: "Nowe menu w restauracji",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-06-05",
    image: "none",
  },
  {
    id: 3,
    title: "Wieczór Jazzowy - 12 lipca",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-07-12",
    image: "none",
  },
  {
    id: 4,
    title: "Nowe menu w restauracji",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-06-05",
    image: "/img/hotel-01.jpg",
  },
  {
    id: 5,
    title: "Wieczór Jazzowy - 12 lipca",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-07-12",
    image: "/img/hotel-02.jpg",
  },
  {
    id: 6,
    title: "Nowe menu w restauracji",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-06-05",
    image: "none",
  },
  {
    id: 7,
    title: "Wieczór Jazzowy - 12 lipca",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-07-12",
    image: "none",
  },
  {
    id: 8,
    title: "Nowe menu w restauracji",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-06-05",
    image: "/img/hotel-01.jpg",
  },
  {
    id: 1,
    title: "Wieczór Jazzowy - 12 lipca",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-07-12",
    image: "/img/notitle.png",
  },
  {
    id: 2,
    title: "Nowe menu w restauracji",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-06-05",
    image: "none",
  },
  {
    id: 3,
    title: "Wieczór Jazzowy - 12 lipca",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-07-12",
    image: "none",
  },
  {
    id: 4,
    title: "Nowe menu w restauracji",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-06-05",
    image: "/img/hotel-01.jpg",
  },
  {
    id: 5,
    title: "Wieczór Jazzowy - 12 lipca",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-07-12",
    image: "/img/hotel-02.jpg",
  },
  {
    id: 6,
    title: "Nowe menu w restauracji",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-06-05",
    image: "none",
  },
  {
    id: 7,
    title: "Wieczór Jazzowy - 12 lipca",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-07-12",
    image: "none",
  },
  {
    id: 8,
    title: "Nowe menu w restauracji",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium architecto eligendi, voluptas reiciendis possimus quia sequi doloremque earum itaque unde rerum ullam officiis? Numquam corporis incidunt impedit excepturi labore maxime reiciendis, obcaecati distinctio placeat, eius rem reprehenderit porro laboriosam dolores magnam architecto! Culpa, blanditiis tempore. Maiores, reprehenderit excepturi, autem magnam illo vero corporis provident ullam cumque dolores facere odio iste nostrum sapiente? Nemo nostrum deleniti modi quos magnam, earum quasi, aut, commodi dolorum quis natus culpa corporis fuga. Saepe repellat, cumque dolorum expedita explicabo sapiente adipisci ipsam impedit! Voluptates iure nihil maxime recusandae labore. Nemo inventore repellat quisquam id?",
    date: "2024-06-05",
    image: "/img/hotel-01.jpg",
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
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;

.news-page {
  padding: 0 15vmin;

  h3 {
    font-family: $supportFont;
    font-size: 4vmin;
    color: $primaryColor;
    margin: 4vmin 0;
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
