import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

//正式需要注释
import './mock/index';

import '@/config/use';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {}
}).$mount('#app');
