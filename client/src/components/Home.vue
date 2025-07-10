<template>
  <section class="home">
    <article class="about">
      <h2>O nas</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascullis
        pelequa vel uscet a placerat, nec al, eit sascipiculquem, spedias et
        aute nixi, bibendum lus tur, fillal tizcls, non a sdalex ahete–en
        involio nuheeratu, noq efut-eusendeneen elyendo a.
      </p>
      <a href="/historia" class="history-link">Poznaj naszą historię</a>
    </article>

    <article class="news">
      <h2>Aktualności</h2>
      <div class="news-items">
        <div class="news-item">
          <h3>Wieczór Jazzowy – 12 lipca</h3>
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
      <div class="news-button-wrapper">
        <a href="/aktualnosci" class="news-button">
          Pokaż wszystkie aktualności
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="icon" />
        </a>
      </div>
    </article>
    <article class="services">
        <Services />
    </article>
  </section>
</template>

<script setup lang="ts">
 import Services from './Services.vue';
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;

.home {
  display: flex;
  flex-direction: column;
  gap: 6vh;
//   padding: 6vh 10vw;
  background-color: #f8f6f3;

  h2 {
    font-family: $supportFont;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: $primaryColor;
  }

  .about {
    max-width: 800px;
    margin: 6vmin 10vmin 0 10vmin;
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

  .news {
    margin: 0 10vmin;
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

    .news-button-wrapper {
      margin-top: 2rem;
      display: flex;
      justify-content: flex-start;
    }

    .news-button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      background-color: $primaryColor;
      color: #fff;
      font-weight: bold;
      font-size: 1rem;
      border-radius: 0.5rem;
      text-decoration: none;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: $secondaryColor;
      }

      .icon {
        font-size: 1rem;
      }
    }
  }
  .services {
    // margin-bottom: 6vmin;
    h2 {
        margin: 0 10vmin;
    }
  }
}
</style>
