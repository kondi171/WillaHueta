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
} from "@fortawesome/free-solid-svg-icons";

const app = createApp(App);
app.use(router);
app.use(createPinia());
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
  faArrowUp
);

app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");