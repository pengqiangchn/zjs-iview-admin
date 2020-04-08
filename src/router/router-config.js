import BasicLayout from '@/views/shared/_Layout';
Boolean;
/**
 * meta:{
 *  title:{String}
 *    显示标题栏、菜单栏、面包屑显示文字；
 *  isHide:{Boolean:false}
 *    菜单栏中是否显示,默认为false;
 *  roles:{String[]}
 *    可访问页面的权限,如果未设定,则不判断权限,当前路由设置会影响子路由;
 *  icon:({String:iview.icon| 自定义图标 }})
 *    设置菜单栏、面包屑图标；
 *    自定义图标--- 暂缓
 *
 *
 *
 *
 * }
 *
 */

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      isHide: false,
      roles: ['admin']
    },
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    component: BasicLayout,
    meta: {
      isHide: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
          icon: 'md-home'
        },
        component: () => import('@v/Home')
      }
    ]
  },
  {
    path: '/components',
    name: 'components',
    component: BasicLayout,
    meta: {
      title: '组件',
      icon: 'md-home'
    },
    children: [
      {
        path: 'card',
        name: 'card',
        meta: {
          title: '卡片'
        }
      },
      {
        path: 'num',
        name: 'num',
        meta: {
          title: '数字'
        }
      },
      {
        path: 'selectTree',
        name: 'selectTree',
        meta: {
          title: '选择树'
        }
      },
      {
        path: 'selectTag',
        name: 'selectTag',
        meta: {
          title: '选择标签'
        }
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    redirect: '/dashboard/console',
    component: BasicLayout,
    meta: {
      title: '仪表盘',
      icon: 'md-home'
    },
    children: [
      {
        path: 'console',
        name: 'console',
        meta: {
          title: '控制台'
        }
      },
      {
        path: 'workplace',
        name: 'workplace',
        meta: {
          title: '工作台'
        }
      }
    ]
  },
  {
    path: '/from',
    name: 'from',
    redirect: '/from/basic-form',
    component: BasicLayout,
    meta: {
      title: '表单页',
      icon: 'md-home'
    },
    children: [
      {
        path: 'basic-form',
        name: 'BasicForm',
        meta: {
          title: '基础表单'
        }
      },
      {
        path: 'step-form',
        name: 'StepForm',
        meta: {
          title: '分步表单'
        }
      },
      {
        path: 'advanced-form',
        name: 'AdvancedForm',
        meta: {
          title: '高级表单'
        }
      }
    ]
  },
  {
    path: '/list',
    name: 'List',
    redirect: '/list/basic-list',
    component: BasicLayout,
    meta: {
      title: '列表',
      icon: 'md-home'
    },
    children: [
      {
        path: 'basic-list',
        name: 'BasicList',
        meta: {
          title: '标准列表'
        }
      },
      {
        path: 'card-list',
        name: 'CardList',
        meta: {
          title: '卡片列表'
        }
      },
      {
        path: 'goods-list',
        name: 'GoodsList',
        meta: {
          title: '商品列表'
        }
      }
    ]
  },
  {
    path: '/search',
    name: 'Search',
    redirect: '/search/search-artcle',
    component: BasicLayout,
    meta: {
      title: '搜索页面',
      icon: 'md-home'
    },
    children: [
      {
        path: 'search-artcle',
        name: 'SearchArtcle',
        meta: {
          title: '搜索列表(文章)'
        }
      },
      {
        path: 'search-projects',
        name: 'SearchProjects',
        meta: {
          title: '搜索列表(项目)'
        }
      },
      {
        path: 'search-apps',
        name: 'SearchApps',
        meta: {
          title: '搜索列表(应用)'
        }
      }
    ]
  },
  {
    path: '/table',
    name: 'Table',
    redirect: '/table/basic-table',
    component: BasicLayout,
    meta: {
      title: '表格页面',
      icon: 'md-home'
    },
    children: [
      {
        path: 'basic-table',
        name: 'BasicTable',
        meta: {
          title: '查询表格'
        }
      },
      {
        path: 'tree-table',
        name: 'TreeTable',
        meta: {
          title: '树形表格'
        }
      }
    ]
  },
  {
    path: '/profile',
    name: 'Profile',
    redirect: '/profile/basic-profile',
    component: BasicLayout,
    meta: {
      title: '详情页',
      icon: 'md-home'
    },
    children: [
      {
        path: 'basic-profile',
        name: 'BasicProfile',
        meta: {
          title: '基础详情页'
        }
      },
      {
        path: 'advanced-profile',
        name: 'AdvancedProfile',
        meta: {
          title: '高级详情页'
        }
      }
    ]
  },
  {
    path: '/result',
    name: 'Result',
    redirect: '/result/success',
    component: BasicLayout,
    meta: {
      title: '结果页面',
      icon: 'md-home'
    },
    children: [
      {
        path: 'success',
        name: 'Success',
        meta: {
          title: '成功页'
        }
      },
      {
        path: 'fail',
        name: 'Fail',
        meta: {
          title: '失败页'
        }
      }
    ]
  },
  {
    path: '*',
    name: 'error',
    redirect: '/error/404',
    component: BasicLayout,
    meta: {
      title: '异常页面',
      icon: 'md-home'
    },
    children: [
      {
        path: '401',
        name: 'error_401',
        meta: {
          title: '无权限访问',
          isHide: false
        },
        component: () => import('@/views/error-page/401.vue')
      },
      {
        path: '500',
        name: 'error_500',
        meta: {
          title: '服务器相应失败',
          isHide: false
        },
        component: () => import('@/views/error-page/500.vue')
      },
      {
        //上面的都没匹配 就到404
        path: '404',
        name: 'error_404',
        meta: {
          title: '未找到资源',
          isHide: false
        },
        component: () => import('@/views/error-page/404.vue')
      }
    ]
  },
  {
    path: '/error_404',
    name: 'global_404',
    meta: {
      title: '未找到资源',
      isHide: false
    },
    component: () => import('@/views/error-page/404.vue')
  }
];

export default routes;
