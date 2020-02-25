import Vue from 'vue';
import VueRouter from 'vue-router';
import iView from 'view-design';
import routes from './router-config.js';
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
    // next({ replace: true, name: 'error_401' });
    next();
  }
};

/**
 * @description 用户是否可跳转页面
 * @param {String} name 跳转页面路由name
 * @param {Array} access 用户权限数组
 * @param {*} routes: 路由列表 通过name找到对应路由信息
 * @returns
 */
const canTurnTo = (name, access, routes) => {
  const permissionjudge = list => {
    return list.some(route => {
      if (route.children && route.children.length) {
        return permissionjudge(route.children);
      } else if (route.name === name) {
        //找到name对应route,如果有mata.access 则判断权限
        if (route.meta && route.meta.access) {
          return hasOneOf(access, route.meta.access);
        } else {
          return true;
        }
      }
    });
  };

  return permissionjudge(routes);
};

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  const token = '123';
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
    //进行跳转
    let access = ['user'];
    turnTo(to, access, next);
  }
});

router.afterEach(() => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});

export default router;
