<template>
  <div class="menu">
    <div
      class="menu-category"
      v-for="category in menuCategories"
      :key="category.name"
      data-aos="fade-left"
    >
      <h4>
        <span class="line left">
          <span class="diamond"></span>
        </span>
        <span class="title">{{ category.name }}</span>
        <span class="line right">
          <span class="diamond"></span>
        </span>
      </h4>
      <ul>
        <li
          v-for="item in category.items"
          :key="item.name"
          class="menu-item"
          data-aos="fade-up"
        >
          <div class="menu-item-info">
            <span class="menu-item-name">{{ item.name }}</span>
            <span v-if="item.description" class="menu-item-description">{{
              item.description
            }}</span>
          </div>
          <div class="menu-item-price">
            {{ item.weight ? item.weight + " / " : "" }}{{ item.price }} PLN
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAOS } from "../../../hooks/useAOS";
useAOS();
const menuCategories = [
  {
    name: "Przystawki",
    items: [
      {
        name: "Krewetki ",
        weight: "150g",
        price: 39,
        description: "Duszone na maśle z białym winem",
      },
      {
        name: "Pielmieni nadziewane mięsem",
        description: "Podane z kwaśną śmietaną i świeżymi ziołami",
        weight: "250g",
        price: 37,
      },
      {
        name: "Tatar z jelenia / wołowy",
        description: "Podany z domowymi piklami i jajkiem przepiórczym",
        weight: "120g",
        price: 39,
      },
    ],
  },
  {
    name: "Sałaty",
    items: [
      {
        name: "Burrata z pomidorami koktajlowymi",
        description:
          "Z szynką prosciutto, jabłuszkami kaparowymi, marynowanymi oliwkami i pesto pietruszkowym",
        weight: "270g",
        price: 39,
      },
      {
        name: "Cezar z grillowanym kurczakiem",
        description: "Z grzanką maślaną i chipsem z boczku",
        weight: "270g",
        price: 39,
      },
      {
        name: "Łosoś pieczony",
        description:
          "Marynowany w oliwie sezamowej podany na sałatach, zielona fasolka szparagowa, pomidory koktailowe, sos francuski cytrynowy",
        weight: "270g",
        price: 43,
      },
    ],
  },
  {
    name: "Zupy",
    items: [
      {
        name: "Krem z pomidorów i pieczonej papryki",
        description: "Z mozzarellą, pesto pietruszkowym i jogurtem naturalnym",
        weight: "200ml",
        price: 18,
      },
      {
        name: "Rosół z bażanta",
        description: "Z lanymi kluseczkami",
        weight: "200ml",
        price: 18,
      },
      {
        name: "Żurek na zakwasie",
        description: "Z jajkiem i chipsem z boczku",
        weight: "200ml",
        price: 18,
      },
    ],
  },
  {
    name: "Dania główne",
    items: [
      {
        name: "Risotto",
        weight: "200g",
        price: 32,
        description: "Z zielonymi szparagami i parmezanem",
      },
      {
        name: "Makaron Linguinie",
        description:
          "Z pesto pistacjowo - bazyliowym, serem parmezan, chipsem z prosciutto i prażonymi pistacjami",
        weight: "200g",
        price: 63,
      },
      {
        name: "Schab z kością",
        description:
          "Podany z kiszoną kapustą w panko, pure pietruszkowym, sosem musztardowym i kapustą czerwoną",
        weight: "200g",
        price: 63,
      },
      {
        name: "Kotlet schabowy z kością",
        description: "Z kremowym pure i kapustą duszoną",
        weight: "200g",
        price: 53,
      },
      {
        name: "Konfitowana noga z kaczki",
        description:
          "Podana z soczewicą, pieczonymi burakami, sosem morelowym, pure z marchewki i chipsem z topinamburu",
        weight: "170g",
        price: 67,
      },
      {
        name: "Policzki wołowe",
        description:
          "Z pure z kiszoną kapustą, marchewką glazurowaną i sosem z czerwonego wina",
        weight: "170g",
        price: 70,
      },
      {
        name: "Łosoś pieczony z masłem",
        description:
          "Podany z risotto, grillowanymi warzywami i sosem cytrynowym",
        weight: "170g",
        price: 83,
      },
    ],
  },
  {
    name: "Desery",
    items: [
      {
        name: "Semifreddo z marakują",
        description: "Z owocami sezonowymi i bitą śmietaną",
        weight: "150g",
        price: 25,
      },
      {
        name: "Beza z mascarpone",
        description: "Z sosem z czerwonej porzeczki",
        weight: "170g",
        price: 27,
      },
      {
        name: "Suflet czekoladowy",
        description: "Podany z lodami waniliowymi i sosem malinowym",
        weight: "150g",
        price: 29,
      },
    ],
  },
  {
    name: "Napoje zimne",
    items: [
      {
        name: "Sok ze świeżych owoców",
        weight: "250ml",
        price: 25,
        description: "",
      },
      {
        name: "Coca-Cola, Sprite, Fanta, Kinley",
        weight: "250ml",
        price: 9,
        description: "",
      },
      {
        name: "Woda mineralna Buskowianka",
        weight: "250ml",
        price: 9,
        description: "Niegazowana / Gazowana",
      },
      {
        name: "Woda mineralna Kropla Beskidu",
        weight: "250ml",
        price: 9,
        description: "Niegazowana / Gazowana",
      },
      {
        name: "Cappy sok",
        weight: "250ml",
        price: 9,
        description: "Pomarańczowy / Jabłkowy",
      },
    ],
  },
  {
    name: "Napoje gorące",
    items: [
      { name: "Espresso", price: 12, weight: "", description: "" },
      { name: "Americano", price: 15, weight: "", description: "" },
      { name: "Cappuccino", price: 15, weight: "", description: "" },
      { name: "Latte", price: 15, weight: "", description: "" },
      {
        name: "Kawa biała z mlekiem zbożowym",
        price: 17,
        weight: "",
        description: "",
      },
      { name: "Herbata", price: 16, weight: "", description: "" },
    ],
  },
  {
    name: "Drinki",
    items: [
      { name: "Aperol Spritz", price: 37, weight: "", description: "" },
      { name: "Mojito", price: 29, weight: "", description: "" },
      { name: "Cuba Libre", price: 28, weight: "", description: "" },
    ],
  },
  {
    name: "Aperitif",
    items: [
      { name: "Martini Bianco", price: 23, weight: "100ml", description: "" },
      { name: "Martini Rosso", price: 23, weight: "100ml", description: "" },
      {
        name: "Martini Extra Dry",
        price: 23,
        weight: "100ml",
        description: "",
      },
    ],
  },
  {
    name: "Wódka",
    items: [
      { name: "Belweder", price: 25, weight: "40ml", description: "" },
      { name: "Chopin", price: 23, weight: "40ml", description: "" },
      { name: "Baczewski", price: 20, weight: "40ml", description: "" },
      { name: "Finlandia", price: 20, weight: "40ml", description: "" },
      { name: "Stumbras", price: 17, weight: "40ml", description: "" },
    ],
  },
  {
    name: "Piwo",
    items: [
      { name: "Żywiec lane", price: 12, weight: "300ml", description: "" },
      { name: "Żywiec lane", price: 16, weight: "500ml", description: "" },
      { name: "Heineken", price: 15, weight: "500ml", description: "" },
      { name: "Piwa smakowe", price: 12, weight: "300ml", description: "" },
      {
        name: "Piwo bezalkoholowe Żywiec",
        price: 12,
        weight: "300ml",
        description: "",
      },
    ],
  },
];
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;
@use "@/assets/scss/placeholders.scss" as *;

.menu {
  padding: 5vmin 15vmin;
  background-image: url("@/assets/img/pages/restaurant/menu-background.jpg");
  background-size: 5%;
  .menu-category {
    margin-bottom: 5vmin;

    h4 {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      font-family: $supportFont;
      font-size: 4.5vmin;
      color: $primaryColor;
      font-weight: bold;
      text-transform: uppercase;
      margin: 0 auto 2vmin auto;
      gap: 1.5vmin;
      .title {
        text-align: center;
        position: relative;
        z-index: 1;
      }

      .line {
        flex: 1;
        height: 3px;
        background-color: $primaryColor;
        position: relative;

        .diamond {
          position: absolute;
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
          width: 2.5vmin;
          height: 2.5vmin;
          background-color: white;
          border: 3px solid $primaryColor;
        }

        &.left .diamond {
          left: -1.2vmin;
        }

        &.right .diamond {
          right: -1.2vmin;
        }
      }
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      .menu-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5vmin 0;
        position: relative;
        padding-left: 3.5vmin;

        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
          width: 1vmin;
          height: 1vmin;
          border: 2px solid $textColor;
          background-color: transparent;
        }

        .menu-item-info {
          .menu-item-name {
            font-weight: 500;
            font-size: 3.5vmin;
            color: #222;
            display: block;
          }

          .menu-item-description {
            font-size: 2.5vmin;
            color: #666;
            font-style: italic;
          }
        }

        .menu-item-price {
          font-size: 3.2vmin;
          font-weight: 500;
          color: #111;
          white-space: nowrap;
        }
      }
    }
  }
}
@media (max-width: $mobileBreakpoint) {
  .menu {
    padding: 5vmin 10vmin;
    .menu-category {
      h4 {
        width: 70%;
      }
    }
    .menu-item {
      margin: 4vmin 0;

      .menu-item-info {
        margin-left: 2vmin;
      }
    }
  }
}
</style>
