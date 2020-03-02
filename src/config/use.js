import Vue from 'vue';
import VueStorage from 'vue-ls';
import config from '@/config/index';

import iView from 'view-design';
import 'view-design/dist/styles/iview.css';
import 'lib-flexible';

Vue.use(VueStorage, config.storageOptions);
Vue.use(iView);
