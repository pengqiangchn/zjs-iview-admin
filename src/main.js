import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import IView from 'view-design';
import 'view-design/dist/styles/iview.css';
import 'lib-flexible';

Vue.config.productionTip = false;

Vue.use(IView);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
