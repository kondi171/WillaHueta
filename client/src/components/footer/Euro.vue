<template>
  <div class="footer-euro" data-aos="fade-right">
    <div class="euro-image">
      <img
        src="@/assets/img/footer/Euro-Project.png"
        alt="Logo Projektu Unii Europejskiej"
      />
    </div>
    <span class="euro-text">
      Projekt pn. Przystosowania unikalnego w skali regionu obiektu zabytkowego
      na cele hotelarskie - adaptacja Pałacu Hueta współfinansowany przez Unię
      Europejską z Europejskiego Funduszu Rozwoju Regionalnego w ramach
      Regionalnego Programu Operacyjnego Województwa Świętokrzyskiego na lata
      2007-2013. Beneficjent: Przedsiębiorstwo Handlowo-Usługowe Dariusz Mróz
      25-456 Kielce, ul. Mikołaja Gomółki 82.
    </span>
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

.footer-euro {
  display: flex;
  flex-direction: column;
  width: 45vw;
  .euro-image {
    text-align: center;
  }
  .euro-text {
    font-family: $textFont;
    color: $textColor;
    text-align: justify;
    font-style: italic;
    letter-spacing: 0.5vmin;
    line-height: 200%;
    font-size: 2vmin;
    margin-top: 4vmin;
  }
}
</style>
