<template>
  <section class="event-menu">
    <h2 class="title">Menu na przyjęcie po Komunii</h2>
    <div class="not-available">Oferta będzie dostępna wkrótce!</div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;
@use "@/assets/scss/placeholders.scss" as *;

.event-menu {
  @extend %event-modal;
}
</style>
