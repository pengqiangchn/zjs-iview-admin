import { login, logout, getUserInfo } from '@/api/user';
import lsUser from '@/storage/user';

const user = {
  state: {
    userName: '',
    token: '',
    roles: [],
    info: {}
  },
  mutations: {
    setUserName(state, name) {
      state.userName = name;
    },
    setToken(state, token) {
      state.token = token;
    },
    setRoles(state, roles) {
      state.roles = roles;
    },
    setInfo(state, info) {
      state.info = info;
    }
  },
  actions: {
    GetUserInfo({ commit }, userCode) {
      return new Promise((resolve, reject) => {
        getUserInfo(userCode)
          .then(res => {
            const data = res.data;
            commit('setRoles', data.roles);
            commit('setInfo', data);
            resolve(data);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then(res => {
            const data = res.data;
            lsUser.setAccessToken(data);
            commit('setToken', res.token);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    Logout({ state, commit }) {
      return new Promise(resolve => {
        logout(state.token)
          .then(() => {
            resolve();
          })
          .catch(() => {
            resolve();
          })
          .finally(() => {
            commit('setToken', '');
            commit('setRoles', []);
            lsUser.removeAccessToken();
          });
      });
    }
  }
};

export default user;
