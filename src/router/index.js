import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Главная',
    meta: { layout: 'main' },
    component: () => import('@/views/index.vue'),
  },
  {
    path: '/test',
    name: 'Главная',
    meta: { layout: 'main' },
    component: () => import('@/views/test.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
