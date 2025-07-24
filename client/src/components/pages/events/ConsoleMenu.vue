<template>
  <section class="event-menu">
    <h2 class="title">Menu na przyjęcie Konsolacyjne</h2>
    <div class="info-sections">
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
        <!-- <hr /> -->
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
        <!-- <hr /> -->
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
        <!-- <hr /> -->
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
        <!-- <hr /> -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;
@use "@/assets/scss/placeholders.scss" as *;

.event-menu {
  .title {
    position: sticky;
    top: 0;
    background-image: url("@/assets/img/backgrounds/stressed_linen.webp");
    font-family: $supportFont;
    background-size: cover;
    background-position: -1vmin 0vmin;
    text-align: center;
    background-color: $bgColor;
    padding: 2vmin 2vmin;
    border-bottom: 2px solid $primaryColor;
    z-index: 1;
    font-size: 4vmin;
    color: $supportColor;
    margin-bottom: 4vmin;
  }
  .subtitle {
    font-size: 2.5vmin;
    font-weight: 600;
    text-align: center;
    color: $secondaryColor;
    margin: 1vmin;
  }
  .image {
    width: 100%;
    img {
      width: 50%;
      margin: 0 25%;
    }
  }
  .info-sections {
    @extend %info-sections;
    padding: 0 4vmin;
    .section {
      padding: 1vmin 2vmin 2vmin 2vmin;
      border: 2px solid $primaryColor;
      border-radius: 5px;
      margin: 2vmin 0;
      background-color: darken($color: $bgColor, $amount: 10px);
      h3 {
        font-size: 3vmin;
        text-align: center;
      }
      .price {
        text-align: center;
        font-size: 2.5vmin;
      }
      &:first-of-type {
        margin-top: -3vmin;
      }
      &:last-of-type {
        margin-bottom: -3vmin;
      }
    }
    span {
      color: $secondaryColor;
      font-weight: bold;
      font-style: italic;
    }
    h4 {
      color: $primaryColor;
      font-size: 2.5vmin;
      margin: 1vmin;
      // text-align: center;
    }
  }
  strong {
    display: block;
    font-size: 1.5vmin;
    font-weight: 600;
    color: $secondaryColor;
    margin: 1vmin 1vmin 1vmin 0;
    font-style: italic;
  }
  hr {
    border: none;
    height: 2px;
    background: linear-gradient(to right, $primaryColor, transparent);
    margin: 3vmin 0;
    opacity: 0.5;
    margin: 5vmin 0;
  }
}
</style>
