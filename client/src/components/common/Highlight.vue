<template>
  <div class="highlight" data-aos="zoom-in-up">
    <span>
      Najlepsza cena tylko poprzez bezpośredni kontakt z recepcją hotelu.
    </span>
    <router-link to="/kontakt" class="contact-btn">
      Kontakt
      <font-awesome-icon icon="fa-solid fa-arrow-right" class="icon" />
    </router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;
@use "@/assets/scss/placeholders.scss" as *;

.highlight {
  font-size: clamp(1.6rem, 2.5vw, 2.5rem);
  font-weight: bold;
  color: $primaryColor;
  margin: clamp(2rem, 5vw, 6rem) auto;
  text-align: center;
  max-width: 90%;

  span {
    display: block;
    margin-bottom: clamp(1rem, 2vw, 2.5rem);
    line-height: 1.4;
  }

  .contact-btn {
    @extend %follow-btn;
    font-size: clamp(1rem, 2vw, 1.5rem);
    padding: clamp(0.6rem, 1.5vw, 1rem) clamp(1.2rem, 3vw, 2rem);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    .icon {
      font-size: clamp(0.9rem, 1.5vw, 1.2rem);
    }
  }
}

@media (max-width: $xSmallBreakpoint) {
  .highlight {
    font-size: clamp(1.4rem, 3vw, 1.8rem);

    .contact-btn {
      width: 80%;
      justify-content: center;
      padding: 0.5rem 1rem;
    }
  }
}
</style>
