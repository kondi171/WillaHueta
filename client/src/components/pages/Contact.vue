<template>
  <section class="contact-page">
    <div class="contact-wrapper">
      <div class="contact-column" data-aos="fade-right">
        <p>
          ul. Juliusza Słowackiego 25<br />
          25-365 Kielce<br />
          <a href="mailto:recepcja@willahueta.pl">recepcja@willahueta.pl</a
          ><br />
          <a href="http://www.willahueta.pl" target="_blank"
            >www.willahueta.pl</a
          >
        </p>
      </div>

      <div class="contact-column" data-aos="fade-up">
        <h4 class="label">Telefony</h4>
        <p>tel.stac. 412 412 888</p>
        <p>tel.kom. 789 808 214</p>
        <p>tel.kom. 572 187 950</p>
      </div>

      <div class="contact-column" data-aos="fade-left">
        <h4 class="label">GPS</h4>
        <p>
          N: 50° 51' 50"<br />
          E: 20° 37' 52"
        </p>
      </div>
    </div>
    <div id="map" class="map" data-aos="fade-up"></div>
  </section>
</template>
<script setup lang="ts">
import { onMounted } from "vue";

const googleKey = import.meta.env.VITE_GOOGLE_KEY;
const latitude = 50.8637955878958;
const longitude = 20.631358783981696;
const initMap = () => {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      center: { lat: latitude, lng: longitude },
      zoom: 14,
    }
  );

  new google.maps.Marker({
    position: { lat: latitude, lng: longitude },
    map,
    title: "Nasza lokalizacja",
  });
};

onMounted(() => {
  const scriptId = "google-maps-script";
  if (!document.getElementById(scriptId)) {
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = `https://maps.googleapis.com/maps/api/js?${googleKey}&callback=initMap`;
    script.async = true;
    window.initMap = initMap;
    document.head.appendChild(script);
  } else {
    initMap();
  }
});

declare global {
  interface Window {
    initMap: () => void;
  }
}
</script>
<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;

.contact-page {
  padding: 5vmin 15vmin;
  overflow-x: hidden;
  .contact-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10vmax;

    .contact-column {
      line-height: 250%;
      text-align: center;
      flex: 0 1 30vmin;

      h4 {
        text-transform: uppercase;
      }

      p {
        margin: 0.5vmin 0;
        font-family: $textFont;
        color: $textColor;
        font-size: 2.5vmin;
      }

      .label {
        font-weight: bold;
        font-family: $fancyFont;
        font-size: 2.7vmin;
        color: $primaryColor;
      }

      a {
        color: $primaryColor;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .map {
    width: 100%;
    height: 70vh;
    border: 2px solid $primaryColor;
    border-radius: 8px;
    margin-top: 4vmin;
  }

  @media (max-width: $mobileBreakpoint) {
    padding: 0;

    .contact-wrapper {
      .contact-column {
        flex-basis: 90%;
        font-size: 4vmin;
        line-height: 300%;

        .label {
          font-size: 6vmin;
        }

        p {
          margin: 2vw 0;
          font-size: 6vmin;
        }
        &:first-of-type {
          margin-top: 10vmin;
        }
        &:last-of-type {
          margin-bottom: 10vmin;
        }
      }
    }

    .map {
      width: 100%;
      height: 80vh;
      border: none;
      border-radius: 0;
      margin-top: 2vmin;
    }
  }
}
</style>
