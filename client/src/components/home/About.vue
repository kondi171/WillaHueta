<template>
  <article class="about">
    <h2>O nas</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascullis
      pelequa vel uscet a placerat, nec al, eit sascipiculquem, spedias et
      aute nixi, bibendum lus tur, fillal tizcls, non a sdalex aheteen
      involio nuheeratu, noq efut-eusendeneen elyendo a.
    </p>
   <router-link to="/historia" class="history-link">Poznaj naszą historię</router-link>
  </article>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;

.about {
  max-width: 800px;
  margin: 6vmin 10vmin 0 10vmin;

  h2 {
    font-family: $supportFont;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: $primaryColor;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #333;
    margin-bottom: 1rem;
  }

  .history-link {
    text-decoration: underline;
    color: $primaryColor;
    font-weight: bold;
    font-size: 1rem;
    transition: 0.3s;

    &:hover {
      color: $secondaryColor;
    }
  }
}
</style>
