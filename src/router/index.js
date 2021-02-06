import Vue from 'vue'
import VueRouter from 'vue-router'
import SinglePage from '../views/SinglePage.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: SinglePage,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
