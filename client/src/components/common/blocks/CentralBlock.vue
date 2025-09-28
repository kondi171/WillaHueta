<template>
  <div class="central-block" data-aos="fade-up">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@use "@/assets/scss/variables.scss" as *;
@use "@/assets/scss/placeholders.scss" as *;

.central-block {
  margin: 6vmin auto;
  width: 80vw;
  font-size: clamp(18px, 2vw, 22px);
  line-height: 2.8;
  color: $textColor;
  text-align: justify;
  text-align-last: center;

  h3 {
    font-size: clamp(24px, 3vw, 30px);
    color: $primaryColor;
    font-weight: bold;
    font-family: $fancyFont;
    text-align: center;
  }

  p {
    font-size: clamp(17px, 1.8vw, 20px);
  }

  strong {
    color: $secondaryColor;
  }

  img {
    margin: 5vmin;
    transition: transform 0.4s;
    max-width: 100%;
    height: auto;

    &:hover {
      cursor: pointer;
      transform: scale(1.2);
    }
  }
}

@media (max-width: $tabletBreakpoint) {
  .central-block {
    width: 80vw;
    font-size: 5vmin;
    line-height: 2.5;

    h3 {
      font-size: 3.5vmin;
    }

    img {
      margin: 4vmin auto;
      display: block;
    }
  }
}

@media (max-width: $mobileBreakpoint) {
  .central-block {
    width: 85vw;
    font-size: clamp(18px, 3vw, 22px);
    line-height: 1.8;
    margin: 4vmin auto;
    padding: 0 4vmin;

    h3 {
      font-size: clamp(20px, 4vw, 26px);
      margin: 6vmin 0;
      text-align: center;
    }

    p {
      font-size: clamp(15px, 3vw, 18px);
      margin: 2vmin 0;
      font-size: 20vmin;
    }

    img {
      margin: 3vmin auto;
      max-width: 100%;
      display: block;
    }
  }
}

@media (max-width: $mobileBreakpoint) and (orientation: landscape) {
  .central-block {
    font-size: clamp(20px, 2.6vw, 24px);
    line-height: 2;

    h3 {
      font-size: clamp(24px, 3.5vw, 30px);
      margin: 3vmin 0;
      text-align: center;
    }

    p {
      font-size: clamp(18px, 2.4vw, 20px);
      margin: 1.5vmin 0;
    }
  }
}
</style>
