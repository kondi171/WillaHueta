<template>
  <div class="card">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@use "@/assets/scss/variables.scss" as *;

.card {
  flex: 1 1 20rem;
  max-width: 22rem;
  background-color: $bgColor;
  border-radius: 1vmin;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: clamp(1.5rem, 3vmin, 3rem);
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin: 1vmin;

  font-size: clamp(16px, 2.2vmin, 20px);
  line-height: 1.6;

  h5 {
    margin: 0 0 2vmin 0;
    font-size: clamp(18px, 2.5vmin, 24px);
    font-weight: bold;
    color: $primaryColor;
    text-align: center;

    .label {
      display: block;
      font-size: clamp(20px, 3vmin, 26px);
    }

    .price {
      display: block;
      color: $secondaryColor;
      margin-top: 1vmin;
      font-size: clamp(18px, 2.5vmin, 22px);
    }
  }

  p {
    margin: 1.5vmin 0;

    .section-title {
      font-size: clamp(16px, 2.2vmin, 20px);
      font-weight: bold;
      color: $primaryColor;
      margin-bottom: 0.8vmin;
      display: block;
    }

    .section-description {
      font-size: clamp(15px, 2vmin, 18px);
      color: $textColor;
    }
  }

  ul {
    margin: 1vmin 0 0;
    padding-left: 2.5vmin;
    list-style-type: disc;
    color: $textColor;
    font-size: clamp(15px, 2vmin, 18px);

    li {
      margin-bottom: 1vmin;
      &::marker {
        color: $primaryColor;
      }
    }
  }
}
</style>
