<template>
  <div class="menu-wrapper">
    <h1 class="menu-title">{{ title }}</h1>
    <div class="menu-grid" v-if="!isBuffet">
      <div class="menu-card" v-for="(item, i) in menus" :key="i">
        <h2 class="menu-heading">{{ item.label }}</h2>
        <div
          class="menu-section"
          v-for="section in sections"
          :key="section.key"
        >
          <h3>{{ section.title }}</h3>
          <p>{{ item[section.key] }}</p>
        </div>
      </div>
    </div>
    <div class="buffet" v-else>
      <div v-for="(prop, i) in menus" :key="i" class="buffet-proposal">
        <h2>{{ prop.label }} – {{ prop.price }}</h2>
        <div
          class="buffet-section"
          v-for="(values, section) in prop.sections"
          :key="section"
        >
          <h3>{{ section }}</h3>
          <ul>
            <li v-for="(el, idx) in values" :key="idx">{{ el }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface MenuItem {
  label: string;
  soup?: string;
  main?: string;
  drink?: string;
  [key: string]: any;
}

const props = defineProps<{
  title: string;
  menus: MenuItem[];
  isBuffet?: boolean;
  sections?: { key: string; title: string }[];
}>();

const defaultSections = [
  { key: "soup", title: "Zupa" },
  { key: "main", title: "Danie główne" },
  { key: "drink", title: "Napoje" },
];

const sections = props.sections ?? defaultSections;
const isBuffet = props.isBuffet ?? false;
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;
@use "@/assets/scss/placeholders.scss" as *;

.menu-wrapper {
  max-width: 70vw;
  margin: 0 auto;
  padding: 2vmin;
  background-color: #fdfdfd;

  .menu-title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    color: $secondaryColor;
  }

  .menu-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
  }

  .menu-card,
  .buffet-proposal {
    flex: 1 1 280px;
    max-width: 320px;
    background-color: $bgColor;
    border-radius: 1vmin;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 2vmin;
    border: 1px solid #ccc;

    h2 {
      font-size: 3vmin;
      margin-bottom: 2vmin;
      color: $blackColor;
      text-align: center;
    }
  }

  .menu-section,
  .buffet-section {
    margin-bottom: 2vmin;

    h3 {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 600;
      color: $primaryColor;
    }

    p,
    ul {
      margin: 0.5rem 0 0;
      color: $textColor;
      font-size: 0.95rem;
    }

    ul {
      padding-left: 1.5rem;
      list-style-type: disc;

      li {
        margin-bottom: 0.35rem;
        &::marker {
          color: $primaryColor;
        }
      }
    }
  }

  .buffet {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
  }
}
</style>
