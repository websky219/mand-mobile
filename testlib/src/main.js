import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import MandMobile from './assets/mand-mobile.umd.js';
import './assets/mand-mobile.css';
Vue.use(MandMobile);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');