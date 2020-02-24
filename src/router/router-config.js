import BasicLayout from '@/views/shared/_Layout';

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    component: BasicLayout,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
          icon: 'md-home',
          access: ['admin', 'user']
        },
        component: () => import('@/views/Home')
      },
      {
        path: '/about',
        name: 'about',
        meta: {
          title: '关于',
          icon: 'md-help-circle'
        },
        component: () => import('@/views/About')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      title: '无权限访问'
    },
    component: () => import('@/views/error-page/401.vue')
  }
];

export default routes;
