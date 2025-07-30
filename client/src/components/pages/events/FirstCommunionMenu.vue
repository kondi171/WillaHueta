<template>
  <section class="event-menu">
    <h2 class="title">Menu na przyjęcie po Komunii</h2>
    <div class="not-available">Oferta będzie dostępna wkrótce!</div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;
@use "@/assets/scss/placeholders.scss" as *;

.event-menu {
  .title {
    position: sticky;
    top: 0;
    background-image: url("@/assets/img/backgrounds/support-background.webp");
    font-family: $supportFont;
    background-size: cover;
    background-position: -1vmin 0vmin;
    text-align: center;
    background-color: $bgColor;
    padding: 2vmin 2vmin;
    border-bottom: 2px solid $primaryColor;
    z-index: 1;
    font-size: 4vmin;
    color: $supportColor;
    margin-bottom: 4vmin;
  }
  .subtitle {
    font-size: 2.5vmin;
    font-weight: 600;
    text-align: center;
    color: $secondaryColor;
    margin: 1vmin;
  }
  .image {
    width: 100%;
    img {
      width: 50%;
      margin: 0 25%;
    }
  }
  .section {
    padding: 1vmin 6vmin 2vmin 6vmin;
    border: 2px solid $primaryColor;
    border-radius: 5px;
    margin: 2vmin;
    background-color: #cad4d2;
    h3 {
      font-size: 3vmin;
      text-align: center;
    }
    .price {
      text-align: center;
      font-size: 2.5vmin;
    }
    &:first-of-type {
      margin-top: -3vmin;
    }
    &:last-of-type {
      margin-bottom: -3vmin;
    }
  }
  strong {
    display: block;
    font-size: 1.5vmin;
    font-weight: 600;
    color: $secondaryColor;
    margin: 1vmin 1vmin 1vmin 0;
    font-style: italic;
  }
  .not-available {
    font-weight: bold;
    text-align: center;
    font-size: 4vmin;
    margin: 2vmin 0;
    color: $secondaryColor;
  }
  hr {
    border: none;
    height: 2px;
    background: linear-gradient(to right, $primaryColor, transparent);
    margin: 3vmin 0;
    opacity: 0.5;
    margin: 5vmin 0;
  }
}
</style>
