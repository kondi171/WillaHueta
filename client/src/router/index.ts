import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/components/pages/home/Home.vue';
import Hotel from '@/components/pages/Hotel.vue';
import News from '@/components/pages/news/News.vue';
import History from '@/components/pages/History.vue';
import Restaurant from '../components/pages/restaurant/Restaurant.vue';
import Conference from '../components/pages/conference/Conference.vue';
import Weddings from '../components/pages/weddings/Weddings.vue';
import Events from '../components/pages/events/Events.vue';
import Contact from '../components/pages/Contact.vue';
import Catering from '../components/pages/catering/Catering.vue';

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
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});

export default router;