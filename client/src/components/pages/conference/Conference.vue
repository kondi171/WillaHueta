<template>
  <section class="conference-page">
    <SubNav :items="navItems" />
    <section id="intro">
      <TextBlock :reverse="true">
        <h3>Witamy w naszych Salach</h3>
        <p>
          Serdecznie zapraszamy do zapoznania się z ofertą kompleksu
          nowoczesnych sal konferencyjnych. Specjalizujemy się w organizowaniu
          eventów, szkoleń, konferencji, zjazdów, sympozjów, imprez
          integracyjnych oraz spotkań okolicznościowych wraz z kompleksową
          obsługą techniczną, gastronomiczną i hotelową. Do Państwa dyspozycji
          oddajemy 4 nowoczesne, klimatyzowane, wielofunkcyjne sale
          konferencyjne. Każda sala jest wyposażona w wysokiej jakości sprzęt
          multimedialny.
        </p>
      </TextBlock>
      <TextBlock>
        <h3>Dostępne Sale Konferencyjne</h3>
        <p>
          <strong>SALA KRYSZTAŁOWA</strong> - 187 m2 mieszcząca do 200 osób
          <br />
          <strong>SALA PERŁOWA</strong> - 141 m2 mieszcząca do 100 osób<br />
          <strong>SALA DIAMENTOWA</strong> - 46 m2 mieszcząca do 40 osób<br />
          <strong>SALA BRYLANTOWA</strong> - 16 m2 mieszcząca do 10 osób
          usytuowana w części hotelowej<br />
        </p>
      </TextBlock>
    </section>
    <section id="gallery">
      <Gallery :images="hotelImages" />
    </section>
    <section id="equipment">
      <CentralBlock>
        <h3>Wyposażenie Sali</h3>
        Właściwe wyposażenie sali konferencyjnej jest kluczem do zakończenia
        sukcesem wszelkich wydarzeń, które są w niej organizowane. Wszystkie z
        Naszych sal konferencyjnych, niezależnie od specyfikacji czy
        umiejscowienia, wyposażone są tak, aby gwarantować komfortowe warunki
        dla prowadzenia, spotkań firmowych, konferencji, szkoleń czy też imprez
        okolicznościowych. Willa Hueta oddaje do Państwa dyspozycji kompleksowe
        wyposażenie sal konferencyjnych o najwyższym standardzie.
      </CentralBlock>
      <ListBlock>
        <div class="section">
          <h3>Wyposażenie wliczone w cenę sali:</h3>
          <ul>
            <li>Zmieniacz slajdów</li>
            <li>Wskaźnik</li>
            <li>Ekran</li>
            <li>Flipchart</li>
            <li>Internet bezprzewodowy</li>
          </ul>
        </div>
        <div class="section">
          <h3>Wyposażenie dodatkowo płatne:</h3>
          <ul>
            <li>Rzutnik multimedialny</li>
            <li>Laptop</li>
            <li>Odtwarzacz DVD</li>
            <li>Nagłośnienie</li>
            <li>Mikrofony</li>
          </ul>
        </div>
      </ListBlock>
      <CentralBlock>
        Powyższe elementy wyposażenia sal konferencyjnych w znaczący sposób
        ułatwiają zarówno zorganizowanie, jak i późniejsze przeprowadzanie
        spotkań biznesowych czy szkoleniowych prezentacji. Wymienione multimedia
        są raczej proste w obsłudze co bez wątpienia ułatwia pracę.
      </CentralBlock>
    </section>
    <section id="conferencePlan">
      <CentralBlock>
        <h3>Plan Sal</h3>
        <p>
          Hotel Willa Hueta w swojej ofercie posiada cztery sale konferencyjne,
          pozwalającymi na dowolną aranżację przestrzeni i zorganizowanie
          wydarzeń do 200 uczestników.
        </p>
        <ConferencePlan />
      </CentralBlock>

      <TextBlock :reverse="true">
        <p>
          Największa Sala Kryształowa, daje możliwość realizowania wydarzeń
          biznesowych do 200 osób, takich jak kongresy, szkolenia, sympozja czy
          też inne duże konferencje. Sala wyposażona jest w nowoczesny
          projektor, ekran, nagłośnienie, zapewniony jest dostęp do dziennego
          światła dzięki oszklonej ścianie, jak również zaciemnienie za sprawą
          specjalnych zasłon. Sala Kryształowa równie dobrze sprawdza się jako
          miejsce na imprezę okolicznościową, taką jak przyjęcie weselne,
          impreza biznesowa czy też inne wydarzenie tego typu, bowiem posiada
          ona parkiet oraz podest pod orkiestrę czy też stanowisko prowadzącego.
          Powierzchnia tej Sali wynosi 187 m2.
        </p>
      </TextBlock>
      <TextBlock>
        <p>
          Kreowanie w sposób elastyczny przestrzeni zapewnia Nam system
          przesuwanych i dźwiękoszczelnych ścianek, za pośrednictwem których
          mamy możliwość bez przeszkód zorganizować dwa odrębne wydarzenia.
        </p>
      </TextBlock>
      <TextBlock :reverse="true">
        <p>
          Dwie kolejne sale konferencyjne to Sala Perłowa o powierzchni 141 m2
          oraz Sala Diamentowa mająca 46 m2. Sale te mieszczą odpowiednio 100
          oraz 40 osób i umożliwiają obsługę bardziej kameralnych wydarzeń. Sale
          zlokalizowane są w swoim bezpośrednim sąsiedztwie.
        </p>
      </TextBlock>
      <TextBlock>
        <p>
          Sala Brylantowa mierząca 16 m2 mieści do 10 osób i jest usytuowana w
          zabytkowej hotelowej części na poddaszu obiektu. Sala ta to idealne
          miejsce na organizacje małych spotkań biznesowych, rozmów
          kwalifikacyjnych.
        </p>
      </TextBlock>
    </section>
    <section id="additionalServices">
      <CentralBlock>
        <h3>Usługi Dodatkowe</h3>
      </CentralBlock>
      <div class="cards-grid">
        <div
          v-for="(item, i) in menu"
          :key="i"
          data-aos="fade-up"
          :data-aos-delay="i * 150"
        >
          <Card>
            <h5>
              <span class="label">{{ item.label }}</span>
              <span class="price">{{ item.price }}</span>
            </h5>
            <p>
              <span class="section-title">Zupa</span>
              <span class="section-description">{{ item.soup }}</span>
            </p>
            <p>
              <span class="section-title">Danie Główne</span>
              <span class="section-description">{{ item.main }}</span>
            </p>
            <p>
              <span class="section-title">Napoje</span>
              <span class="section-description">{{ item.drink }}</span>
            </p>
          </Card>
        </div>
      </div>
      <CentralBlock>
        <div class="text">
          <h3>Przykładowe propozycje lunchowe</h3>
          <p>
            Na życzenie gości przygotowujemy propozycje wegetariańskie, rybne
            lub inne.
          </p>
        </div>
      </CentralBlock>
      <div class="cards-grid">
        <div
          v-for="(prop, i) in buffetProposals"
          :key="i"
          data-aos="fade-up"
          :data-aos-delay="i * 150"
        >
          <Card>
            <h5>
              <span class="label">{{ prop.label }}</span>
              <span class="price">{{ prop.price }}</span>
            </h5>
            <div v-for="(values, section) in prop.sections" :key="section">
              <p>
                <span class="section-title">{{ section }}</span>
              </p>
              <ul>
                <li v-for="(el, idx) in values" :key="idx">{{ el }}</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
      <CentralBlock>
        <div class="text">
          <h3>Desery</h3>
          <p>
            Szarlotka, sernik, panna cotta z musem czekoladowym, puchar lodów na
            sałatce owocowej do wyboru <span class="green">25 zł</span>.
          </p>
        </div>
      </CentralBlock>
      <CentralBlock>
        <h3>Przerwy kawowe</h3>
      </CentralBlock>
      <CoffeeBreaks />

      <Highlight />
    </section>
  </section>
</template>

<script setup lang="ts">
import { useAOS } from "../../../hooks/useAOS";
useAOS();
import Gallery from "../../common/Gallery.vue";
import Card from "./Card.vue";
import CoffeeBreaks from "./CoffeeBreaks.vue";

import hotel1 from "@/assets/img/pages/hotel/hotel-01.jpg";
import hotel2 from "@/assets/img/pages/hotel/hotel-02.jpg";
import Highlight from "../../common/Highlight.vue";
import TextBlock from "../../common/blocks/TextBlock.vue";
import CentralBlock from "../../common/blocks/CentralBlock.vue";
import ListBlock from "../../common/blocks/ListBlock.vue";
import ConferencePlan from "./ConferencePlan.vue";
import SubNav from "../../navs/SubNav.vue";

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

const navItems = [
  { label: "Wstęp", target: "#intro" },
  { label: "Galeria", target: "#gallery" },
  { label: "Wyposażenie", target: "#equipment" },
  { label: "Plan Sal", target: "#conferencePlan" },
  { label: "Usługi Dodatkowe", target: "#additionalServices" },
];

const menu = [
  {
    label: "Menu I",
    price: "40,00 zł/os",
    soup: "Włoskie minestrone z pianą z sera ricotta",
    main: "Grillowany filet z kurczaka w sosie curry podawany z dzikim ryżem oraz warzywami w maślanej emulsji",
    drink: "Sok/woda",
  },
  {
    label: "Menu II",
    price: "40,00 zł/os",
    soup: "Zupa z polskich pomidorów z kwaśną śmietaną i makaronem farfalle",
    main: "Morszczuk pieczony w cytrusach z dodatkiem świeżych ziół, ziemniaku puree, surówka z pora",
    drink: "Sok/woda",
  },
  {
    label: "Menu III",
    price: "40,00 zł/os",
    soup: "Żur na własnym zakwasie z białą kiełbasą i jajem",
    main: "Rolada wieprzowa faszerowana szpinakiem z sosem pomidorowym, ziemniakami opiekanymi i mixem świeżych sałat z sosem winegret",
    drink: "Sok/woda",
  },
  {
    label: "Menu IV",
    price: "40,00 zł/os",
    soup: "Krem z zielonych warzyw z prażonymi migdałami",
    main: "Penne z kurczakiem w aromatycznym sosie tymiankowym z dodatkiem różyczek brokuła",
    drink: "Sok/woda",
  },
  {
    label: "Menu V",
    price: "45,00 zł/os",
    soup: "Krem z białych warzyw z grillowanym bekonem",
    main: "Grillowana pierś z kurczaka zapieczona z soterowanym szpinakiem i serem mozzarella podawana z ziemniaczanym gratin",
    drink: "Sok/woda",
  },
  {
    label: "Menu VI",
    price: "45,00 zł/os",
    soup: "Francuska zupa cebulowa z ziołowymi grzankami",
    main: "Makron tagliatelle z łososiem norweskim, oliwkami w sosie prowansalskim z dodatkiem świeżo tartego parmezanu",
    drink: "Sok/woda",
  },
];
const buffetProposals = [
  {
    label: "Propozycja I",
    price: "90,00 zł/os",
    sections: {
      "Dania gorące w bufecie": [
        "Żurek świętokrzyski z jajem",
        "Domowe pierogi ze szpinakiem i serem kozim",
        "Grillowana pierś z kurczaka w sosie koperkowym",
        "Ziemniaczki pieczone w mundyrkach",
      ],
      "Zakąski zimne": [
        "Schab Pieczony, nadziewany śliwką i morelą wędzoną",
        "Karczek pieczony w ziołach i musztardzie",
        "Pasztet w cieście francuskim",
        "Roladki z tortilli z warzywnym ratatuj",
        "Caprese",
        "Sałatka z paluszków krabowych",
        "Wybór ciast z naszej cukierni",
      ],
    },
  },
  {
    label: "Propozycja II",
    price: "100,00 zł/os",
    sections: {
      "Dania gorące w bufecie": [
        "Zupa cebulowa z grzankami",
        "Pieczeń wieprzowa w sosie cygańskim lub własnym",
        "Ziemniaczki opiekane w ziołach i pieczone buraczki",
        "Makaron penne z grillowanym indykiem i brokułami",
      ],
      "Zakąski zimne": [
        "Mięsa z kieleckiej wędzarni: aromatyczna karkówka, boczek rolowany i schab nadziewany",
        "Galantyna z kurczaka",
        "Babeczki z ciasta kruchego z różnymi nadzieniami",
        "Fantazja śledziowa",
        "Mix świeżych sałat z warzywami sezonowymi",
        "Wybór ciast z naszej cukierni",
      ],
    },
  },
  {
    label: "Propozycja III",
    price: "110,00 zł/os",
    sections: {
      "Dania gorące w bufecie": [
        "Flaczki wołowe z parmezanem",
        "Pręga wołowa duszona w ciemnym piwie",
        "Kluseczki gnocchi, warzywa z pary w maślanej polewie",
        "Gulasz węgierski z dziczyzny z ciepłą bagietką",
      ],
      "Zakąski zimne": [
        "Wachlarz mięs pieczonych",
        "Rolada z kaczki",
        "Rolada szpinakowa z wędzonym łososiem",
        "Pasztet w cieście francuskim",
        "Tymbaliki drobiowe",
        "Ryba po japońsku",
        "Sałatka brokułowa z kozim serem",
        "Sałatka szwedzka",
        "Wybór ciast z naszej cukierni",
      ],
    },
  },
];
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;
@use "@/assets/scss/placeholders.scss" as *;

.conference-page {
  .cards-grid {
    margin: 2vmin 15vmin;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    justify-content: center;
    h4 {
      text-align: center;
      font-size: 1.6rem;
      margin-bottom: 1.5rem;
      color: $secondaryColor;
    }

    > div {
      display: flex;
      margin: 2.5vmin 0;
    }
  }
  .green {
    color: #2e7d32;
    font-weight: bold;
  }
}
</style>
