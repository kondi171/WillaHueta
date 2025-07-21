<template>
  <div class="coffee-breaks">
    <h2 class="title">Przerwy kawowe</h2>
    <div class="offer" v-for="(offer, i) in offers" :key="i">
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
.coffee-breaks {
  max-width: 600px;
  margin: 0 auto;
  padding: 2vmin;
  background: #fafafa;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);

  .title {
    text-align: center;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #5a5a5a;
  }

  .offer {
    border: 1px solid #ddd;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    margin-bottom: 1.25rem;
    background: #fff;

    .header {
      display: flex;
      justify-content: space-between;
      font-weight: 600;
      font-size: 1.1rem;
      margin-bottom: 0.75rem;

      .base {
        color: #333;
      }

      .price {
        color: #2e7d32;
      }
    }

    .extras {
      list-style: none;
      padding-left: 0;
      margin: 0 0 0.5rem 0;

      li {
        display: flex;
        align-items: center;
        font-size: 0.95rem;
        color: #444;
        margin-bottom: 0.35rem;

        .checkmark {
          color: #2e7d32;
          margin-right: 0.5rem;
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
