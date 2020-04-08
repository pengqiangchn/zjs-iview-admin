import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app,
    user
  },
  getters: {
    menuList: state => state.app.menuList,
    userInfo: state => state.user.info,
    roles: state => state.user.roles
  }
});
