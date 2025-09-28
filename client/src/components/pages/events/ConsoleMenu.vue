<template>
  <section class="event-menu">
    <h2 class="title">Menu na przyjęcie Konsolacyjne</h2>
    <ListBlock>
      <div class="section">
        <h3>Zestaw konsolacyjny w Willi Hueta I:</h3>
        <strong class="price">Koszt 70,00 / osoba</strong>
        <ul>
          <li>Menu serwowane indywidualnie</li>
          <li>Krem z białych warzyw z oliwą truflową</li>
          <li>
            Soczysta pieczeń wieprzowa w sosie cygańskim podawana z risotto oraz
            zestawem surówek
          </li>
          <li>Szarlotka na ciepło z nutą wanilii</li>
          <li>Woda / Sok</li>
          <li>Kawa / Herbata</li>
        </ul>
      </div>
      <div class="section">
        <h3>Zestaw konsolacyjny w Willi Hueta II:</h3>
        <strong class="price">Koszt 80,00 / osoba</strong>
        <ul>
          <li>Menu serwowane indywidualnie</li>
          <li>
            Krem z pomidorów pelati z prażonymi migdałami i pleśniowym serem
          </li>
          <li>
            Pieczeń wieprzowa w sosie własnym podane z puree chrzanowym i
            czerwonym burakiem w miodzie
          </li>
          <li>Kremowy sernik z sosem malinowym</li>
          <li>Woda / Sok</li>
          <li>Kawa / Herbata</li>
        </ul>
      </div>
      <div class="section">
        <h3>Zestaw konsolacyjny w Willi Hueta III:</h3>
        <strong class="price">Koszt 90,00 / osoba</strong>
        <ul>
          <li>Menu serwowane indywidualnie</li>
          <li>Zupa leśna z farfalle</li>
          <li>
            Policzki wołowe duszone w winie z kapustą zasmażaną i ziemniakami w
            stylu polskim
          </li>
          <li>Mus malinowy na ciepło z waniliowym orzeźwieniem</li>
          <li>Woda / Sok</li>
          <li>Kawa / Herbata <span style="color: red">(????)</span></li>
        </ul>
      </div>

      <div class="section">
        <h3>Zestaw konsolacyjny w Willi Hueta IV:</h3>
        <strong class="price">Koszt 120,00 / osoba</strong>
        <ul>
          <li>Menu serwowane indywidualnie</li>
          <li>Zupa fancuska cebulowa</li>
          <li>
            Polędwiczka wieprzowa faszerowana serem kozim i pomidorami suszonymi
            podawana na sosie hiszpańskim
          </li>
          <li>Kluseczki gnocchi oraz bukiet jarzyn w maślanej polewie</li>
          <li>Patera ciast domowych</li>
          <li>Kawa / Herbata <span style="color: red">(????)</span></li>
        </ul>
        <h4>Zakąski zimne</h4>
        <ul>
          <li>Patera mięs pieczonych (schab, karczek, boczek)</li>
          <li>Pasztet w cieście francuskim</li>
          <li>Roladki z tortilli z warzywnym ratatuj</li>
          <li>Mix sałat z warzywami sezonowymi i sosem winegret</li>
          <li>Słoneczne pomidory z bazylią</li>
          <li>Woda / Sok</li>
        </ul>
      </div>
    </ListBlock>
  </section>
</template>

<script setup lang="ts">
import ListBlock from "../../common/blocks/ListBlock.vue";
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;
@use "@/assets/scss/placeholders.scss" as *;

.event-menu {
  @extend %event-modal;
}
</style>
