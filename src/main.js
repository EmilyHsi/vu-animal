import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App';
import router from './router';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import InfiniteLoading from 'vue-infinite-loading';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(VueAwesomeSwiper);
Vue.use(InfiniteLoading);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
});