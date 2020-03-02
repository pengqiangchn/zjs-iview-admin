import Vue from 'vue';
import { DAY_MS } from '@/libs/common-type';

const ls = {
  setAccessToken(token) {
    Vue.ls.set('access_token', token, DAY_MS);
  },
  getAccessToken() {
    return Vue.ls.get('access_token');
  },
  removeAccessToken() {
    Vue.ls.remove('access_token');
  }
};

export default ls;
