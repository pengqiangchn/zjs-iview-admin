import BasicLayout from '@/views/Shared/_Layout';

const routes = [
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
          icon: 'md-home'
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
  }
];

export default routes;
