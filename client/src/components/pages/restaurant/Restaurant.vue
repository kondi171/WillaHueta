<template>
  <section class="restaurant-page">
    <SubNav :items="navItems" />
    <section id="intro">
      <TextBlock>
        <h3>Witamy w naszej restauracji ⭐⭐⭐⭐</h3>
        <p>
          Zapraszamy do Willi Hueta - miejsca, gdzie tradycja spotyka się z
          nowoczesnym smakiem. Nasza restauracja to przestrzeń, w której
          starannie dobrane składniki, kreatywne kompozycje dań oraz przyjazna
          atmosfera tworzą wyjątkowe doświadczenie kulinarne. Specjalizujemy się
          w kuchni polskiej i regionalnej, stawiając na lokalne produkty oraz
          sezonowe menu, które zaspokoi gusta zarówno miłośników klasycznych
          smaków, jak i poszukiwaczy kulinarnych nowości. Elegancki wystrój
          wnętrz oraz profesjonalna obsługa sprawiają, że każda wizyta w naszej
          restauracji jest okazją do niezapomnianych chwil.
        </p>
      </TextBlock>
      <TextBlock :reverse="true">
        <p>
          Willa Hueta to nie tylko doskonałe miejsce na codzienny posiłek, ale
          także idealna przestrzeń na wyjątkowe okazje - od kameralnych spotkań
          po uroczyste bankiety i wesela. Dbamy o każdy detal, oferując szeroki
          wybór dań, które łączą tradycję z nowoczesnymi technikami kulinarnymi.
          Nasza restauracja dysponuje komfortową salą oraz przytulnym tarasem,
          gdzie można delektować się wyśmienitymi smakami w otoczeniu pięknej
          przyrody. Zapraszamy do odkrywania kulinarnych inspiracji i relaksu w
          Willi Hueta - miejscu, które z pasją tworzy smak i atmosferę na
          najwyższym poziomie.
        </p>
      </TextBlock>
    </section>
    <section id="gallery">
      <Gallery :images="retaurantImages" />
    </section>
    <section id="menu">
      <ImageBlock :reverse="true">
        <template #image>
          <img
            class="no-shadow restaurant-logo"
            src="@/assets/img/pages/restaurant/logo.jpg"
            alt="Logo Restauracji Hueta"
          />
        </template>
        <p class="center">
          <strong>Uwaga!</strong><br />
          Informacje dotyczące wykazu alergenów i produktów powodujących alergię
          lub reakcę nietolerancji do wzglądu u Managera <br /><br />
          Willa Hueta<br />
          Ul. Juliusza Słowackiego 25, 25-365 Kielce <br /><br />
          Tel. 789 808 214 , recepcja@wilahueta.pl, www.willahueta.pl <br />
          Znajdź nas na FB www.facebook.com / Willa Hueta
        </p>
        <img
          class="line"
          src="@/assets/img/pages/restaurant/line.png"
          alt="Linia odstępu"
        />
        <h3 class="menu-title">Nasze Menu</h3>
      </ImageBlock>
      <Menu />
    </section>
  </section>
</template>

<script setup lang="ts">
import "aos/dist/aos.css";
import AOS from "aos";
import { onMounted } from "vue";
import Gallery from "@/components/common/Gallery.vue";
import Menu from "./Menu.vue";

import restaurant1 from "@/assets/img/pages/restaurant/restaurant-01.png";
import restaurant2 from "@/assets/img/pages/restaurant/restaurant-02.png";
import restaurant3 from "@/assets/img/pages/restaurant/restaurant-03.png";
import TextBlock from "../../common/blocks/TextBlock.vue";
import ImageBlock from "../../common/blocks/ImageBlock.vue";
import SubNav from "../../navs/SubNav.vue";

const retaurantImages = [restaurant1, restaurant2, restaurant3];

const navItems = [
  { label: "Wstęp", target: "#intro" },
  { label: "Galeria", target: "#gallery" },
  { label: "Menu", target: "#menu" },
];

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

.restaurant-page {
  overflow: hidden;
  .restaurant-logo {
    max-width: 50%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
  .line {
    width: 100%;
  }
  strong {
    font-size: 3vmin;
  }
  .center {
    line-height: 200%;
    text-align: center;
    text-transform: uppercase;
  }
  .menu-title {
    text-align: center;
    font-family: $fancyFont;
    font-size: 10vmin;
  }
}
</style>
