// import Vue from 'vue';
import lsUser from '@/storage/user';
import store from '@/store/index';

const Init = () => {
  const token = lsUser.getAccessToken();
  if (token) {
    //需要查询并更新数据
    store.commit('GetUserInfo', 'admin');
  }
};

export default Init;
