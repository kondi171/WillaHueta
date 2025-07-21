import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/components/home/Home.vue';
import Hotel from '@/components/pages/Hotel.vue';
import News from '@/components/pages/News.vue';
import History from '@/components/pages/History.vue';
import Restaurant from '../components/pages/Restaurant.vue';
import Conference from '../components/pages/conference/Conference.vue';
import Weddings from '../components/pages/weddings/Weddings.vue';
import Events from '../components/pages/Events.vue';
import Contact from '../components/pages/Contact.vue';
import Catering from '../components/pages/Catering.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/hotel',
    name: 'hotel',
    component: Hotel
  },
  {
    path: '/restauracja',
    name: 'restauracja',
    component: Restaurant
  },
  {
    path: '/sale',
    name: 'sale',
    component: Conference
  },
  {
    path: '/wesela',
    name: 'wesela',
    component: Weddings
  },
  {
    path: '/imprezy',
    name: 'imprezy',
    component: Events
  },
  {
    path: '/catering',
    name: 'catering',
    component: Catering
  },
  {
    path: '/aktualnosci',
    name: 'aktualnosci',
    component: News
  },
  {
    path: '/historia',
    name: 'historia',
    component: History
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: Contact
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;