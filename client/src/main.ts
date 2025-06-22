import { createApp } from 'vue'
// import './assets/scss/variables.scss';
import './assets/scss/fonts.scss';
import './assets/scss/main.scss';
import App from './App.vue'
import { createPinia } from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faX, faArrowsRotate } from '@fortawesome/free-solid-svg-icons'

const app = createApp(App);
app.use(createPinia());
library.add(faX, faArrowsRotate);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
