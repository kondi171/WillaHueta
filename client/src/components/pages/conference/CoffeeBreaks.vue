<template>
  <div class="coffee-breaks" data-aos="fade-up">
    <div class="offer" v-for="(offer, i) in offers" :key="i" data-aos="fade-up">
      <div class="header">
        <div class="base">W ofercie:</div>
        <div class="price">{{ offer.price }}</div>
      </div>
      <ul class="extras">
        <li v-for="(extra, idx) in offer.extras" :key="idx">
          <span class="checkmark">✔️</span> {{ extra }}
        </li>
      </ul>
      <div v-if="offer.note" class="note">{{ offer.note }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAOS } from "../../../hooks/useAOS";
useAOS();
interface Offer {
  price: string;
  extras: string[];
  note?: string;
}

const offers: Offer[] = [
  { price: "20,00 zł/os.", extras: ["Kawa / Herbata"] },
  { price: "30,00 zł/os.", extras: ["Kawa / Herbata", "Sok / woda"] },
  {
    price: "40,00 zł/os.",
    extras: ["Kawa / Herbata", "Sok / woda", "Ciastka kruche"],
    note: "całodzienna",
  },
  {
    price: "50,00 zł/os.",
    extras: [
      "Kawa / Herbata",
      "Sok / woda",
      "Ciastka kruche / owoce",
      "Zestaw kanapek",
    ],
    note: "całodzienna",
  },
];
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;

.coffee-breaks {
  max-width: 30vw;
  margin: 0 auto;
  padding: 2vmin;
  background: $bgColor;
  border-radius: 0.5vmin;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);

  .title {
    text-align: center;
    font-weight: 700;
    margin-bottom: 1.5vmin;
    color: $textColor;
  }

  .offer {
    border: 1px solid #ddd;
    padding: 2.5vmin;
    border-radius: 0.5vmin;
    margin-bottom: 2vmin;
    background-color: #fff;

    .header {
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      font-size: 2.5vmin;
      margin-bottom: 1vmin;

      .base {
        color: $textColor;
      }

      .price {
        color: #2e7d32;
      }
    }

    .extras {
      list-style: none;
      padding-left: 0;
      margin: 0 0 0.5vmin 0;

      li {
        display: flex;
        align-items: center;
        font-size: 2vmin;
        color: #444;
        margin-bottom: 1vmin;

        .checkmark {
          color: #2e7d32;
          margin-right: 1vmin;
          font-weight: bold;
        }
      }
    }

    .note {
      font-size: 0.85rem;
      color: #666;
      font-style: italic;
      text-align: right;
    }
  }
}
</style>
