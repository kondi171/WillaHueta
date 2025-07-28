<template>
  <div class="highlight" data-aos="zoom-in-down">
    <span>
      Najlepsza cena tylko poprzez bezpośredni kontakt z recepcją hotelu.
    </span>
    <router-link to="/kontakt" class="contact-btn">
      Kontakt
      <font-awesome-icon icon="fa-solid fa-arrow-right" class="icon" />
    </router-link>
  </div>
</template>

<script setup lang="ts">
import "aos/dist/aos.css";
import AOS from "aos";
import { onMounted } from "vue";

onMounted(() => {
  AOS.init({
    duration: 800,
    once: false,
  });

  setTimeout(() => {
    AOS.refresh();
  }, 1000);
});
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;
@use "@/assets/scss/placeholders.scss" as *;

.highlight {
  font-size: 3vmin;
  font-weight: bold;
  color: $primaryColor;
  margin: 5vmin auto;
  text-align: center;
  span {
    display: block;
    margin-bottom: 2vmin;
  }
  .contact-btn {
    @extend %follow-btn;
    font-size: 3vmin;
    .icon {
      font-size: 3vmin;
    }
  }
}
</style>
