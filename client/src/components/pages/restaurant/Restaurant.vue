<template>
  <section class="restaurant-page" data-aos="fade-right">
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
    <Gallery :images="retaurantImages" />
    <CentralBlock>
      <h3>Nasze Menu</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi sunt
        enim deleniti reiciendis molestiae saepe expedita voluptatem iusto
        voluptas debitis dolorem obcaecati dolore, quas eos repellat tempora
        distinctio. Quae facilis laborum soluta itaque illum molestiae
        consequatur corrupti, nisi eos ab vitae veniam molestias deleniti velit
        maxime ad! Amet, est. Ipsam.
      </p>
    </CentralBlock>
    <Menu />
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
import CentralBlock from "../../common/blocks/CentralBlock.vue";

const retaurantImages = [restaurant1, restaurant2, restaurant3];

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
}
</style>
