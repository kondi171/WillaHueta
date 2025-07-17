<template>
  <section class="restaurant-page">
    <div class="block-text-only">
      <div class="text">
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
      </div>
    </div>
    <div class="block-text-only block-text-only--reverse">
      <div class="text">
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
      </div>
    </div>
    <Gallery :images="retaurantImages" />
    <div class="central-block">
      <h3>Nasze Menu</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi sunt
        enim deleniti reiciendis molestiae saepe expedita voluptatem iusto
        voluptas debitis dolorem obcaecati dolore, quas eos repellat tempora
        distinctio. Quae facilis laborum soluta itaque illum molestiae
        consequatur corrupti, nisi eos ab vitae veniam molestias deleniti velit
        maxime ad! Amet, est. Ipsam.
      </p>
    </div>
    <div class="menu">
      <div
        class="menu-category"
        v-for="category in menuCategories"
        :key="category.name"
      >
        <h4>{{ category.name }}</h4>
        <ul>
          <li v-for="item in category.items" :key="item.name" class="menu-item">
            <div class="menu-item-info">
              <span class="menu-item-name">{{ item.name }}</span>
              <span class="menu-item-description">{{ item.description }}</span>
            </div>
            <div class="menu-item-price">
              {{ item.weight }} / {{ item.price }} zł
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Gallery from "../common/Gallery.vue";

import restaurant1 from "@/assets/img/pages/restaurant/restaurant-01.png";
import restaurant2 from "@/assets/img/pages/restaurant/restaurant-02.png";
import restaurant3 from "@/assets/img/pages/restaurant/restaurant-03.png";

const retaurantImages = [restaurant1, restaurant2, restaurant3];

const menuCategories = [
  {
    name: "Przystawki",
    items: [
      {
        name: "Burak pieczony Ⓥ",
        description: "Podany z konfiturą z warzyw i kawiorem ogórkowym",
        price: 27,
        weight: "200g",
      },
      {
        name: "Ser kozi chavoux",
        description: "Podany z bakłażanem, boczniakiem i sosem wiśniowym",
        price: 39,
        weight: "200g",
      },
      {
        name: "Kurczak maślany",
        description: "Podany z grillowanym boczkiem i sałatą rzymską",
        price: 38,
        weight: "250g",
      },
      {
        name: "Tatar z jelenia",
        description: "Podany z domowymi piklami i jajkiem przepiórki",
        price: 39,
        weight: "200g",
      },
      {
        name: "Łosoś marynowany na zimno",
        description: "Podany z sałatami",
        price: 37,
        weight: "200g",
      },
      {
        name: "Pieczywo",
        description: "Własnego wypieku",
        price: 10,
        weight: "300g",
      },
    ],
  },
  {
    name: "Dania główne",
    items: [
      {
        name: "Udo z kaczki marynowane",
        description: "Podane z pieczonymi owocami",
        price: 77,
        weight: "350g",
      },
      {
        name: "Kotlet schabowy z kością",
        description: "Podany z pure ziemniaczanym i kapustą w stylu polskim",
        price: 57,
        weight: "390g",
      },
      {
        name: "Policzki wieprzowe",
        description: "Podane z dynią, pure z musztardą i sosem cydrowym",
        price: 79,
        weight: "350g",
      },
      {
        name: "Polędwica wołowa",
        description: "Podana z boczniakami i kalafiorem",
        price: 79,
        weight: "300g",
      },
      {
        name: "Łosoś",
        description: "Podany z gratin, sosem szczawiowym i kwaśną śmietaną",
        price: 83,
        weight: "350g",
      },
      {
        name: "Pstrąg",
        description: "Podany z kluseczkami francuskimi i brukselką",
        price: 68,
        weight: "300g",
      },
      {
        name: "Risotto Ⓥ",
        description: "Podawane z borowikiem",
        price: 32,
        weight: "250g",
      },
    ],
  },
  {
    name: "Zupy",
    items: [
      {
        name: "Zupa francuska cebulowa",
        description: "Podana z grzanką",
        price: 25,
        weight: "300ml",
      },
      {
        name: "Consome",
        description: "Podane z kluseczkami francuskimi",
        price: 28,
        weight: "300ml",
      },
      {
        name: "Krem z buraka Ⓥ",
        description: "",
        price: 28,
        weight: "300ml",
      },
    ],
  },
  {
    name: "Desery",
    items: [
      {
        name: "Beza",
        description: "Z kremem śmietanowym i marakują",
        price: 29,
        weight: "150g",
      },
      {
        name: "Brownie",
        description: "Z kremem kawowym",
        price: 29,
        weight: "150g",
      },
      {
        name: "Suflet czekoladowy",
        description: "Z sosem malinowym",
        price: 32,
        weight: "150g",
      },
    ],
  },
  {
    name: "Napoje zimne",
    items: [
      {
        name: "Sok ze świeżych owoców",
        price: 25,
        weight: "250ml",
        description: "",
      },
      {
        name: "Coca-Cola, Sprite, Fanta, Kinley",
        price: 9,
        weight: "250ml",
        description: "",
      },
      {
        name: "Kropla niegazowana / gazowana",
        price: 9,
        weight: "330ml",
        description: "",
      },
      {
        name: "Cappy pomarańczowy, jabłkowy, porzeczkowy, multiwitamina, grejpfrutowy",
        price: 9,
        weight: "250ml",
        description: "",
      },
      {
        name: "Fuzetea",
        price: 9,
        weight: "250ml",
        description: "",
      },
    ],
  },
  {
    name: "Napoje gorące",
    items: [
      { name: "Espresso", price: 9, weight: "", description: "" },
      { name: "Amerikano", price: 10, weight: "", description: "" },
      { name: "Capuccino", price: 12, weight: "", description: "" },
      { name: "Latte", price: 15, weight: "", description: "" },
      { name: "Herbata / Tea", price: 15, weight: "", description: "" },
    ],
  },
  {
    name: "Drinki",
    items: [
      { name: "Aperol Spritz", price: 35, weight: "", description: "" },
      { name: "Mojito", price: 28, weight: "", description: "" },
      { name: "Cuba Libre", price: 28, weight: "", description: "" },
      { name: "Whisky Sour", price: 35, weight: "", description: "" },
    ],
  },
  {
    name: "Aperetifs",
    items: [
      { name: "Martini Bianco", price: 25, weight: "100ml", description: "" },
      { name: "Martini Rosso", price: 25, weight: "100ml", description: "" },
      {
        name: "Martini Extra Dry",
        price: 25,
        weight: "100ml",
        description: "",
      },
      { name: "Jägermeister", price: 25, weight: "40ml", description: "" },
    ],
  },
  {
    name: "Brandy / Cognac",
    items: [
      { name: "Metaxa 5", price: 25, weight: "40ml", description: "" },
      { name: "Metaxa 7", price: 30, weight: "40ml", description: "" },
    ],
  },
  {
    name: "Whisky",
    items: [
      {
        name: "Johnnie Walker Red",
        price: 22,
        weight: "40ml",
        description: "",
      },
      {
        name: "Johnnie Walker Black",
        price: 26,
        weight: "40ml",
        description: "",
      },
      {
        name: "Johnnie Walker Gold",
        price: 50,
        weight: "40ml",
        description: "",
      },
      {
        name: "Ballantine’s Finest",
        price: 22,
        weight: "40ml",
        description: "",
      },
      {
        name: "Chivas Regal 12 years",
        price: 50,
        weight: "40ml",
        description: "",
      },
      {
        name: "Jack Daniel’s Old No.7",
        price: 25,
        weight: "40ml",
        description: "",
      },
    ],
  },
  {
    name: "Rum",
    items: [
      { name: "Bacardi Superior", price: 22, weight: "40ml", description: "" },
      { name: "Bacardi Black", price: 25, weight: "40ml", description: "" },
    ],
  },
  {
    name: "Tequila",
    items: [
      { name: "Sierra Silver", price: 25, weight: "40ml", description: "" },
      { name: "Sierra Gold", price: 25, weight: "40ml", description: "" },
    ],
  },
  {
    name: "Wódka",
    items: [
      { name: "Finlandia", price: 20, weight: "40ml", description: "" },
      { name: "Belweder", price: 25, weight: "40ml", description: "" },
      { name: "Chopin", price: 28, weight: "40ml", description: "" },
      { name: "Stumbras", price: 15, weight: "40ml", description: "" },
    ],
  },
  {
    name: "Gin",
    items: [
      { name: "Bombay Sapphire", price: 23, weight: "40ml", description: "" },
    ],
  },
  {
    name: "Piwo",
    items: [
      { name: "Żywiec", price: 12, weight: "300ml", description: "" },
      { name: "Żywiec", price: 15, weight: "500ml", description: "" },
      { name: "Heineken", price: 12, weight: "330ml", description: "" },
      {
        name: "Grimbergen Blanche",
        price: 18,
        weight: "330ml",
        description: "",
      },
      {
        name: "Grimbergen Blonde",
        price: 18,
        weight: "330ml",
        description: "",
      },
      {
        name: "Grimbergen Double",
        price: 18,
        weight: "330ml",
        description: "",
      },
    ],
  },
];
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;
@use "@/assets/scss/placeholders.scss" as *;

.restaurant-page {
  .block-text-only {
    padding: 0 15vmin;
    @extend %block-text-only;
    &--reverse {
      @extend %block-text-only--reverse;
    }
  }
  .central-block {
    @extend %central-block;
    h3 {
      margin-bottom: 2vmin;
      text-align: right;
      margin-left: auto;
      width: 40%;
    }
  }
  .menu {
    padding: 55vmin 15vmin 5vmin 15vmin;
    background-image: url("@/assets/img/pages/restaurant/menu.jpg");
    background-size: cover;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);

    h3 {
      font-family: $fancyFont;
      font-size: 6vmin;
      color: $primaryColor;
      text-align: center;
      margin-bottom: 3vmin;
    }

    .menu-category {
      margin-bottom: 3vmin;

      h4 {
        position: relative;
        width: 30%;
        font-family: $supportFont;
        font-size: 4.5vmin;
        color: $blackColor;
        background-color: $bgColor;
        margin-bottom: 2vmin;
        padding-left: 3vmin;

        &::after {
          content: "";
          position: absolute;
          top: 0;
          right: calc(-3vmin + 1px);
          width: 3vmin;
          height: 100%;
          background-color: $bgColor;
          clip-path: polygon(0 0, 100% 50%, 0 100%);
        }
      }

      ul {
        list-style: none;
        padding: 0;

        .menu-item {
          display: flex;
          justify-content: space-between;
          padding: 1vmin 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);

          &:last-child {
            border-bottom: none;
          }

          .menu-item-info {
            max-width: 70%;

            .menu-item-name {
              font-weight: 700;
              font-size: 3.5vmin;
              color: $bgColor;
              display: block;
            }

            .menu-item-description {
              font-size: 2.7vmin;
              color: $bgColor;
              font-style: italic;
            }
          }

          .menu-item-price {
            font-size: 3.5vmin;
            font-weight: 700;
            color: $bgColor;
            white-space: nowrap;
            flex-shrink: 0;
          }
        }
      }
    }

    @media (max-width: 768px) {
      padding: 3vmin 5vmin;

      h3 {
        font-size: 5vmin;
      }

      .menu-category {
        h4 {
          font-size: 4vmin;
        }

        .menu-item {
          flex-direction: column;
          align-items: flex-start;

          .menu-item-info {
            max-width: 100%;

            .menu-item-name {
              font-size: 4vmin;
            }

            .menu-item-description {
              font-size: 3vmin;
            }
          }

          .menu-item-price {
            margin-top: 0.5em;
            font-size: 4vmin;
          }
        }
      }
    }
  }
}
</style>
