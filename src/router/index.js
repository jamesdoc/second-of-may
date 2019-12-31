import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Rsvp from '../views/Rsvp.vue';
import Haiku from '../views/Haiku.vue';
import Gift from '../views/Gift.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/rsvp',
    name: 'rsvp',
    component: Rsvp,
  },
  {
    path: '/haiku',
    name: 'haiku',
    component: Haiku,
  },
  {
    path: '/gift',
    name: 'gift',
    component: Gift,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
