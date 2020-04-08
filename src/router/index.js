import Vue from 'vue';
import VueRouter from 'vue-router';
import iView from 'view-design';
import routes from './router-config.js';
import lsUser from '@/storage/user';
import { hasOneOf } from '@/libs/util.js';

const PAGE_LOGIN = 'login';
const PAGE_DEFAULT = 'home';
const PAGE_WHITELIST = [PAGE_LOGIN, 'register', 'registerResult'];

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  const token = lsUser.getAccessToken();
  if (!token && to.name !== PAGE_LOGIN) {
    //如果没登录,并且当前跳转界面不是登录页面
    next(
      //跳转登录页面
      { name: PAGE_LOGIN }
    );
  } else if (!token && PAGE_WHITELIST.includes(to.name)) {
    //如果未登录,跳转是白名单,则跳转
    next();
  } else if (token && to.name === PAGE_LOGIN) {
    //如果已经登陆了,跳转是登录界面,则跳转到主页
    next({ name: PAGE_DEFAULT });
  } else {
    //虽然menu进行了判断,隐藏了功能菜单,但是如果手打地址的话会存在风险.
    //所以进行跳转,判断权限并跳转
    turnTo(to, Vue.$store.getters.roles, next);
    next();
  }
});

router.afterEach(() => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});

/**
 * @description
 * @param {*} to 需跳转路由
 * @param {*} access 用户权限数据
 * @param {*} next
 */
const turnTo = (to, access, next) => {
  if (canTurnTo(to.name, access, routes)) {
    //有权限 则继续访问
    next();
  } else {
    //无权限则重定向 401.
    next({ replace: true, name: 'error_401' });
    next();
  }
};

/**
 * @description 用户是否可跳转页面
 * @param {String} name 跳转页面路由name
 * @param {Array} roles 用户权限数组
 * @param {*} routes: 路由列表 通过name找到对应路由信息
 * @returns
 */
const canTurnTo = (name, roles, routes) => {
  const permission = list => {
    return list.some(route => {
      if (route.children && route.children.length) {
        return permission(route.children);
      } else if (route.name === name) {
        //找到name对应route,如果有meta.roles 则判断权限
        return route.meta && route.meta.roles ? hasOneOf(roles, route.meta.access) : true;
      }
    });
  };

  return permission(routes);
};

export default router;
