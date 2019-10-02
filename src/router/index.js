
import Vue from 'vue';
import VueRouter from 'vue-router';

import animalsIndex from '@/components/customer/animalsIndex';

Vue.use(VueRouter)

export default new VueRouter({
    routes:
    [
        {
            path: '/',
            component: animalsIndex,
        },
    ],
});