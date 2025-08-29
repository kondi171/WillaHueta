import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/scss/fonts.scss";
import "./assets/scss/main.scss";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faFlag,
  faPhone,
  faMobileAlt,
  faEnvelope,
  faX,
  faArrowRight,
  faHotel,
  faUtensils,
  faPeopleGroup,
  faChampagneGlasses,
  faConciergeBell,
  faCalendarDay,
  faNewspaper,
  faClock,
  faAngleLeft,
  faAngleRight,
  faTheaterMasks,
  faChalkboardTeacher,
  faArrowUp,
  faGem,
} from "@fortawesome/free-solid-svg-icons";

// 🔹 AOS
import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);

app.use(router);
app.use(createPinia());

// 🔹 FontAwesome
library.add(
  faFacebook,
  faInstagram,
  faMapMarkerAlt,
  faFlag,
  faPhone,
  faMobileAlt,
  faEnvelope,
  faHotel,
  faUtensils,
  faPeopleGroup,
  faChampagneGlasses,
  faConciergeBell,
  faCalendarDay,
  faNewspaper,
  faClock,
  faEnvelope,
  faArrowRight,
  faAngleLeft,
  faAngleRight,
  faX,
  faTheaterMasks,
  faChalkboardTeacher,
  faArrowUp,
  faGem,
);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");

AOS.init({
  duration: 800,
  offset: 200,
  easing: "ease-in-out",
  once: false,
  // mirror: true 
});