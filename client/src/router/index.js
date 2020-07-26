import Vue from 'vue';
import VueRouter from 'vue-router';
import Chaistands from '../views/Chaistands.vue';
import CreateChaistand from '../views/CreateChaistand.vue';
import Chaistand from '../views/Chaistand.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Chaistands',
    component: Chaistands,
  },
  {
    path: '/create',
    name: 'CreateChaistand',
    component: CreateChaistand,
  },
  {
    path: '/chaistand/:id',
    name: 'Chaistand',
    component: Chaistand,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
