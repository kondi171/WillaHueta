<template>
  <div class="card">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@use "@/assets/scss/variables.scss" as *;

.card {
  flex: 1 1 20vw;
  max-width: 20vw;
  background-color: $bgColor;
  border-radius: 1vmin;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2vmin;
  border: 1px solid #ccc;

  h5 {
    margin: 0 0 2vmin 0;
    font-size: 2vmin;
    font-weight: bold;
    color: $primaryColor;
    text-align: center;

    .label {
      display: block;
      font-size: 3vmin;
    }

    .price {
      display: block;
      color: $secondaryColor;
      margin-top: 1vmin;
    }
  }

  p {
    margin: 1vmin 0;
    span {
      display: block;
    }

    .section-title {
      font-size: 2vmin;
      font-weight: bold;
      color: $primaryColor;
      margin-bottom: 0.5vmin;
    }

    .section-description {
      font-size: 2vmin;
      color: $textColor;
    }
  }

  ul {
    margin: 0.5vmin 0 0;
    padding-left: 2vmin;
    list-style-type: disc;
    color: $textColor;
    font-size: 2vmin;

    li {
      margin-bottom: 1vmin;
      &::marker {
        color: $primaryColor;
      }
    }
  }
}
</style>
