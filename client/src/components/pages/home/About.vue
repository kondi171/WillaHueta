<template>
  <article class="about">
    <TextBlock>
      <h3>O Nas</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab voluptatum
        recusandae accusantium. Odio recusandae, necessitatibus eaque, quaerat
        cumque libero pariatur fugit ut velit soluta eum porro ea quibusdam
        labore cupiditate corporis? Aperiam dignissimos, illo impedit ad, minima
        praesentium, id fugit quod distinctio ut provident adipisci quo
        incidunt? Enim, ipsa fugit.
      </p>
      <router-link to="/historia" class="history-link">
        <span class="visible">Poznaj naszą historię!</span
        ><span class="invisible">Warto!</span>
      </router-link>
    </TextBlock>
  </article>
</template>

<script setup lang="ts">
import TextBlock from "../../common/blocks/TextBlock.vue";
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;

.about {
  .history-link {
    display: flex;
    width: 80%;
    margin: 4vmin 10vmin 0 10vmin;
    justify-content: space-evenly;
    font-family: $fancyFont;
    font-size: 2vmin;
    color: $primaryColor;
    font-weight: bold;
    width: 30vmin;
    background-color: transparent;
    border: 5px solid transparent;
    box-shadow: 5px 5px 0 0 $primaryColor, -5px -5px 0 0 $primaryColor;
    text-align: center;
    transition-duration: 0.4s;
    text-decoration: none;
    span.invisible {
      display: none;
    }

    span.visible {
      display: block;
    }

    &:hover {
      cursor: pointer;
      background-color: $secondaryColor;
      box-shadow: -10px -10px 0 0 $secondaryColor, 10px 10px 0 0 $secondaryColor;
      border-color: $bgColor;
      transition-duration: 0.4s;

      & span.invisible {
        display: block;
        color: $bgColor;
      }

      & span.visible {
        display: none;
      }
    }
  }
}
</style>
