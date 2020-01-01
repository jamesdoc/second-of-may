import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Rsvp from '../views/Rsvp.vue';
import Haiku from '../views/Haiku.vue';
import Gift from '../views/Gift.vue';
import ThankYou from '../views/ThankYou.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
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
  {
    path: '/thankyou',
    name: 'thankyou',
    component: ThankYou,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
