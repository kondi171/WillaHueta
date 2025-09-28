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
    justify-content: center;
    align-items: center;
    font-family: $fancyFont;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    background-color: transparent;
    border: 0.5vmin solid transparent;
    box-shadow: 0.5vmin 0.5vmin 0 0 $primaryColor,
      -0.5vmin -0.5vmin 0 0 $primaryColor;
    transition: all 0.4s;
    margin: 4vmin auto 0 auto;
    width: 30vmin;
    font-size: 2vmin;
    color: $primaryColor;
    span.invisible {
      display: none;
    }
    span.visible {
      display: block;
    }

    &:hover {
      cursor: pointer;
      background-color: $secondaryColor;
      box-shadow: -1vmin -1vmin 0 0 $secondaryColor,
        1vmin 1vmin 0 0 $secondaryColor;
      border-color: $bgColor;

      & span.invisible {
        display: block;
        color: $bgColor;
      }
      & span.visible {
        display: none;
      }
    }
    @media (max-width: $xLargeBreakpoint) {
      width: 40vmin;
      font-size: 2.5vmin;
      margin: 3vmin auto 0 auto;
    }

    // @media (max-width: 992px) {
    //   width: 50vmin;
    //   font-size: 3vmin;
    // }

    @media (max-width: $mobileBreakpoint) {
      width: 70%;
      font-size: 4vmin;
      margin: 2vmin auto 0 auto;
    }

    @media (max-width: $xSmallBreakpoint) {
      width: 60%;
      font-size: 3vmin;
      padding: 1vmin 0;
      margin: 4vmin auto 0 auto;
      box-shadow: 0.5vmin 0.5vmin 0 0 $primaryColor,
        -0.5vmin -0.5vmin 0 0 $primaryColor;

      &:hover {
        box-shadow: -1vmin -1vmin 0 0 $secondaryColor,
          1vmin 1vmin 0 0 $secondaryColor;
      }
    }
  }
}
</style>
