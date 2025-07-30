<template>
  <section class="history-page">
    <ImageBlock>
      <template #image>
        <img
          src="@/assets/img/pages/history/history-01.jpg"
          alt="Pierwsze retro zdjęcie Willi Władysława Hueta"
        />
      </template>
      <h3>Powstanie Willi Hueta</h3>
      <p>
        Potężna neorenesansowa willa na rogu ul. Prostej i Słowackiego została
        wybudowana w latatch 1908-1910. Według własnego projektu wybudował ją na
        terenie odkupionym od folwarku Psiarnia Władysław Huet , nauczyciel
        języka francuskiego w Szkole Handlowej, czyli dzisiejszym liceum im. J.
        Śniadeckiego. "Gazeta Kielecka" donosiła wtedy, że "Huet wznosi dom
        piętrowy, odstąpiony od ulicy, z kwietnikiem. Ma to być cacko po
        wykończeniu". Rzeczywiście powstał piękny budynek o powierzchni około
        1400 m. kw.
      </p>
    </ImageBlock>
    <ImageBlock :reverse="true">
      <template #image>
        <img
          src="@/assets/img/pages/history/history-02.jpg"
          alt="Drugie retro zdjęcie Willi Władysława Hueta"
        />
      </template>
      <h3>Nauczyciel, Artysta, Wizjoner</h3>
      <p>
        Władysław Huet urodził się 7 grudnia 1868 roku w Czernicach, gmina
        Osjaków, powiat wieluński. Jego przodkowie, protestanci, aby uniknąć
        prześladowań religijnych, uciekli z Francji w końcu XVIII wieku do
        Polski, gdzie panowała wolność wyznaniowa. Studia rysunku, malarstwa i
        grafiki Huet ukończył w Akademii Sztuk Pięknych w Monachium. Po powrocie
        do Polski uczył rysunku odręcznego w Sosnowcu, a od 1905 roku w
        7-klasowej Szkole Handlowej Stowarzyszenia Kupców Polskich w Kielcach,
        czyli późniejszym Państwowym Gimnazjum imienia Jana Śniadeckiego. Sam
        zaprojektował i wybudował dom u zbiegu ulic Słowackiego i Prostej, który
        swą stylistyką nawiązywał do budowli francuskich.
      </p>
    </ImageBlock>
    <ImageBlock>
      <template #image>
        <img
          src="@/assets/img/pages/history/history-03.jpg"
          alt="Retro zdjęcie Pałacu Hueta"
        />
      </template>
      <h3>Pałac Hueta</h3>
      <p>
        Z tego względu willę szybko zaczęto nazywać Pałacem Hueta. W 1912 roku
        założył Drużynę Skautową, która w 1916 roku przerodziła się w Pierwszą
        Kielecką Drużynę Harcerską imienia Dionizego Czachowskiego. Drużyną
        opiekował się aż do śmierci. Zmarł w wieku niespełna 54 lat, 13 maja
        1923 roku na dur brzuszny, który panował wówczas w Kielcach. Żona Helena
        z Niedźwieckich zmarła w 1935 roku. Obydwoje małżonkowie pochowani na
        Starym Cmentarzu w Kielcach. Władysław Huet był jedną z ciekawszych
        postaci wywodzących się ze środowiska kieleckiego przełomu XIX i XX
        wieku. Willa Hueta od lat popadała w ruinę ale od 2007 roku ma nowego
        właściciela, który całkowicie odnowił obiekt pod okiem Wojewódzkiego
        Konserwatora Zabytków. Odtworzono m.in. liczne detale architektoniczne
        elewacji i wnętrza. Od czerwca 2013 roku w budynku działa Hotel,
        Restauracja i nowoczesne Centrum Konferencyjne.
      </p>
    </ImageBlock>
    <ImageBlock :reverse="true">
      <template #image>
        <img
          class="no-shadow"
          src="@/assets/img/pages/history/history-04.jpg"
          alt="Władysław Huet"
        />
      </template>
      <h3>Biogram Hueta</h3>
      <p>
        Urodził się 16.XII.1868 r. na Podolu, gdzie jego ojciec był leśniczym.
        Jego francuscy przodkowie protestanci, aby uniknąć przesladowań
        religijnych uciekli z Francji w końcu XVIII w. do Polski, gdzie panowała
        wolność wyznaniowa.
        <br />
        Studia rysunku, malarstwa i grafiki ukończyl w Akademii Sztuk Pięknych w
        Monachium. Po powrocie do kraju uczył rysunku, odręcznego w Sosnowcu, a
        od roku 1905 w 7-klasowej Szkole Handlowej Stowarzyszenia Kupców
        Polskich w Kielcach, pózniejszym od 1919 roku Państwowym Gimnazjum im.
        Jana Śniadeckiego. Jego zasługą było założenie i rozwój Drużyny
        Skautowej w 1912 r., która w 1916 r. przerodziła się w Pierwszą Kielecką
        Drużynę Harcerską im. Dionizego Czachowskiego. Nosił krzyż harcerski nr
        342, będąc jej opiekunem aż do śmierci w roku 1923.
        <br />
        Jako człowiek niewątpliwie zamożny wybudował w roku 1913 według własnego
        projektu dom przy ul. Hipotecznej nr 34, a obecnie J. Słowackiego nr 25.
        Oryginalny ten budynek - pałacyk, odbiegał w swej koncepcji i wystroju
        od innych tego typu budowli przypominając bardziej pałacyki francuskie.
        Nazywano go też powszechnie „Pałacem Huêta".
        <br />
        W pamięci uczniów pozostał jako posiadacz konia kłusaka, którego używał
        do lekkiego zaprzęgu, co wówczas było ewenementem w skali miasta.
        <br />
        Utalentowany artysta nie pozostawił po sobie jednak dużej spuścizny
        malarskiej. Serdeczny przyjaciel młodzieży i wielki polski patriota
        zmarł niespodziewanie 18.V.1923 r. w wieku niepełnych 55 lat na tyfus
        plamisty, jaki panował wówczas w Kielcach. Pochowany na starym
        cmentarzu, żegnany serdecznie przez grono nauczycielskie i uczniów, w
        imieniu których przemówienie pożegnalne wygłosił uczeń klasy VII —
        Bogumił Dworak.
      </p>
    </ImageBlock>
  </section>
</template>

<script setup lang="ts">
import ImageBlock from "../common/blocks/ImageBlock.vue";
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;
@use "@/assets/scss/placeholders.scss" as *;

.history-page {
  margin: 5vmin 10vmin;
}
</style>
