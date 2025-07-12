<template>
  <article class="news">
    <h2>Aktualności</h2>
    <div class="news-items">
      <div class="news-item">
        <h3>Wieczór Jazzowy - 12 lipca</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ulta-bueneru nouls.
        </p>
        <small>15 czerwca 2024</small>
      </div>
      <div class="news-item">
        <h3>Nowe menu w restauracji</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ulermorper augue.
        </p>
        <small>5 czerwca 2024</small>
      </div>
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
// brak logiki
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;
@use "@/assets/scss/placeholders.scss" as *;

.news {
  margin: 0 10vmin;

  h2 {
    font-family: $supportFont;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: $primaryColor;
  }

  .news-items {
    display: flex;
    flex-wrap: wrap;
    gap: 4vw;

    .news-item {
      flex: 1 1 300px;
      background-color: #fff;
      padding: 2vh 2vw;
      border: 1px solid #ddd;
      border-radius: 0.5rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

      h3 {
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
      }

      p {
        font-size: 1rem;
        color: #555;
        margin-bottom: 0.5rem;
      }

      small {
        font-size: 0.9rem;
        color: #999;
      }
    }
  }

  .news-btn-wrapper {
    margin-top: 2rem;
    display: flex;
    justify-content: flex-start;
  }

  .news-btn {
    @extend %follow-btn;
  }
}
</style>
