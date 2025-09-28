<template>
  <footer class="footer">
    <div class="main-footer">
      <Contact />
      <div class="faded-vertical-line"></div>
      <Euro />
    </div>
    <div class="author">
      Copyright 2025 &copy; Willa Hueta | Designed by
      <a href="https://konrad-nowak.netlify.app" target="_blank"
        >Konrad 'WebKing' Nowak</a
      >
    </div>
  </footer>
</template>
<script setup lang="ts">
import Contact from "./Contact.vue";
import Euro from "./Euro.vue";
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;

.main-footer {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5vmin 10vmin;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("@/assets/img/footer/footer-underlay.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: luminosity;
    background-color: $bgColor;
    opacity: 0.3;
    z-index: -1;
  }
  .footer-contact {
    .banner {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 2vmin;

      &-img img {
        max-width: 25vmin;
        height: auto;
      }

      &-text {
        font-size: 8vmin;
        text-align: center;
      }
    }
  }

  .faded-vertical-line {
    width: 2px;
    align-self: stretch;
    background: linear-gradient(
      to bottom,
      transparent,
      $textColor,
      transparent
    );
    margin-right: 10vmin;
  }
}

.author {
  font-size: 2vmin;
  background-color: $blackColor;
  color: $bgColor;
  font-weight: bold;
  text-align: center;
  padding: 2vmin;
  font-family: $fancyFont;
  border-top: 0.3vmin solid $primaryColor;
  a {
    text-decoration: none;
    color: $bgColor;
    font-family: $fancyFont;
    transition-duration: 0.4s;
    &:hover {
      color: $supportColor;
    }
  }
}

@media (max-width: $mobileBreakpoint) {
  .main-footer {
    flex-direction: column;
    padding: 6vmin 4vmin;

    .faded-vertical-line {
      display: none;
    }
  }

  .footer-contact {
    width: 100%;

    .banner {
      flex-direction: column;
      align-items: center;
      text-align: center;

      &-img img {
        width: 25vmin;
        height: auto;
      }

      &-text {
        margin: 2vmin 0 0;
        font-size: 8vmin;
      }
    }

    .contact-info-wrapper {
      flex-direction: column;
      align-items: center;
      text-align: center;

      .info-section {
        margin: 3vmin 0;

        h6 {
          font-size: 4vmin;
        }
        .line {
          font-size: 3.5vmin;
        }
      }
    }
  }

  .footer-euro {
    width: 100%;
    .euro-image img {
      max-width: 70%;
      height: auto;
    }
    .euro-text {
      font-size: 3.5vmin;
      letter-spacing: normal;
      line-height: 160%;
      margin-top: 3vmin;
      padding: 0 2vmin;
      text-align: center;
    }
  }

  .footer-socials {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4vmin;
    margin-top: 4vmin;

    a {
      width: 4rem;
      height: 4rem;
      font-size: 32px;
      padding: 2rem;

      span {
        display: none;
      }
    }
  }

  .author {
    font-size: 3.5vmin;
    padding: 4vmin 2vmin;
  }
}
</style>
