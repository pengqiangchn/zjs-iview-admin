import { getUserMenuList } from '@/libs/util';

const app = {
  state: {
    menuList: []
  },
  mutations: {
    setMenus(state, menuList) {
      //根据权限,筛选当前数据
      state.menuList = menuList;
    }
  },
  actions: {
    SetUserMenuList({ commit }, { routes, roles }) {
      var menuList = getUserMenuList(routes, roles);
      commit('setMenus', menuList);
    }
  }
};

export default app;
