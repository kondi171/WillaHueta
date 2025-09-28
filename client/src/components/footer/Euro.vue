<template>
  <div class="footer-euro" :data-aos="computedAos">
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
import { useAnimate } from "../../hooks/useAnimate";

const props = defineProps({
  reverse: { type: Boolean, default: false },
});

const { computedAos } = useAnimate(props.reverse);
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;

.footer-euro {
  display: flex;
  flex-direction: column;
  width: 45vw;
  font-size: 2vmin;
  .euro-image {
    text-align: center;
    img {
      width: 100%;
    }
  }
  .euro-text {
    font-family: $textFont;
    color: $textColor;
    text-align: justify;
    font-style: italic;
    letter-spacing: 0.5vmin;
    line-height: 200%;
    margin-top: 4vmin;
  }
}
@media (max-width: $mobileBreakpoint) {
  .footer-euro .euro-text {
    font-size: 3.5vmin;
    margin: 4vmin 5vmin 0 5vmin;
  }
}
</style>
