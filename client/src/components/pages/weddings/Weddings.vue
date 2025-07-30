<template>
  <section class="weddings-page">
    <TextBlock>
      <h3>Wesele w Willi Hueta</h3>
      <p>
        Ślub jest jednym z najważniejszych wydarzeń w naszym życiu. Willa Hueta
        to idealne miejsce na organizację tak wyjątkowego wydarzenia jakim jest
        wesele. Ponad stuletnia rezydencja neorenesansowa z 1908 roku, która po
        gruntownej renowacji odzyskała dawny blask, stała się tym samym jedną z
        najładniejszych obiektów w naszym mieście.
        <strong> Z nami zorganizujesz swoje wymarzone wesele.</strong>
      </p>
    </TextBlock>
    <TextBlock :reverse="true">
      <p>
        Oferujemy na potrzeby przyjęcia weselnego i imprez okolicznościowych
        dwie Sale: Sala Restauracyjna - zlokalizowana w zabytkowej,
        odrestaurowanej części mogąca pomieścić do 70 osób, klimatyczne wnętrza,
        kryształowe żyrandole, elegancki wystrój, fortepian - idealne miejsce do
        zorganizowania małego, kameralnego przyjęcia weselnego.
      </p>
    </TextBlock>
    <TextBlock>
      <p>
        Sala Bankietowa - zlokalizowana w nowej części budynku, może pomieścić
        do 120 osób, nowoczesna klimatyzowana z parkietem do tańczenia z
        bezpośrednim dostępem do dziedzińca i ogródka restauracyjnego, bez
        filarów.
      </p>
    </TextBlock>
    <TextBlock :reverse="true">
      <p>
        W wyjątkowym klimacie naszej Restauracji gwarantujemy miłą i
        profesjonalną obsługę, piękny wystrój sali, smaczne dania. Nasz Szef
        Kuchni przygotuje specjalne dla Państwa dania sięgające do tradycji
        polskiej i międzynarodowej.
      </p>
    </TextBlock>
    <Gallery :images="hotelImages" />
    <CentralBlock>
      <h3>Nasze pakiety</h3>
      <img
        src="@/assets/img/pages/weddings/silver.png"
        alt="Pakiet Srebrny"
        @click="selectedPackage = 'silver'"
      />
      <img
        src="@/assets/img/pages/weddings/gold.png"
        alt="Pakiet Złoty"
        @click="selectedPackage = 'gold'"
      />
    </CentralBlock>

    <Modal
      v-if="selectedPackage"
      @close="selectedPackage = null"
      @prev="prevPackage"
      @next="nextPackage"
    >
      <component :is="currentComponent" />
    </Modal>

    <ListBlock>
      <div class="section">
        <h3>W ramach pakietu weselnego oferujemy:</h3>
        <ul>
          <li>
            Wykwintne menu z bogatym wyborem dań głównych oraz zimnych i
            gorących przekąsek
          </li>
          <li>Kompozycja serwet i świec, dekoracyjne pokrowce na krzesła</li>
          <li>Czerwony dywan</li>
          <li>Powitanie chlebem i solą</li>
          <li>Całonocna obsługa kelnerska</li>
          <li>Specjalne menu dla dzieci</li>
          <li>
            Konsultacja kosmetyczna i zabieg pielęgnacyjny dla Pary Młodej
          </li>
          <li>Promocyjne ceny na alkohol</li>
        </ul>
      </div>
      <div class="section">
        <h3>Usługi dodatkowo płatne:</h3>
        <ul>
          <li>Fontanna czekoladowa, alkoholowa</li>
          <li>Candy bar</li>
          <li>Wiejski stół</li>
          <li>Drink-bar</li>
          <li>Profesjonalna opieka nad dziećmi, animacje</li>
          <li>Ikebany, dekoracje kwiatowe, dekoracje tematyczne</li>
        </ul>
      </div>
    </ListBlock>
    <ImageBlock>
      <template #image>
        <img
          src="@/assets/img/pages/weddings/transport.jpg"
          alt="Samochód marki Mercedes - Bus do przewozu gości weselnych"
        />
      </template>
      <h3>Transport</h3>
      <p>
        Posiadamy nowoczesny, elegancki samochód marki mercedes bus do przewozu
        gości weselnych - 22 osobowy
      </p>
    </ImageBlock>

    <Highlight />
  </section>
</template>

<script setup lang="ts">
import "aos/dist/aos.css";
import AOS from "aos";

import { ref, computed, onMounted } from "vue";
import Gallery from "@/components/common/Gallery.vue";
import Highlight from "@/components/common/Highlight.vue";
import Modal from "@/components/common/Modal.vue";
import SilverPackage from "./SilverPackage.vue";
import GoldPackage from "./GoldPackage.vue";

import hotel1 from "@/assets/img/pages/hotel/hotel-01.jpg";
import hotel2 from "@/assets/img/pages/hotel/hotel-02.jpg";
import TextBlock from "../../common/blocks/TextBlock.vue";
import CentralBlock from "../../common/blocks/CentralBlock.vue";
import ImageBlock from "../../common/blocks/ImageBlock.vue";
import ListBlock from "../../common/blocks/ListBlock.vue";

const hotelImages = [
  hotel1,
  hotel2,
  hotel1,
  hotel2,
  hotel1,
  hotel2,
  hotel1,
  hotel2,
];

const selectedPackage = ref<null | "silver" | "gold">(null);

const currentComponent = computed(() => {
  if (selectedPackage.value === "silver") return SilverPackage;
  if (selectedPackage.value === "gold") return GoldPackage;
  return null;
});

const nextPackage = () => {
  selectedPackage.value =
    selectedPackage.value === "silver" ? "gold" : "silver";
};

const prevPackage = () => {
  selectedPackage.value = selectedPackage.value === "gold" ? "silver" : "gold";
};
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

.weddings-page {
  overflow: hidden;
}
</style>
