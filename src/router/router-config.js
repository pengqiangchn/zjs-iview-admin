import BasicLayout from '@/views/shared/_Layout';
Boolean;
/**
 * meta:{
 *  title:{String}
 *    显示标题栏、菜单栏、面包屑显示文字；
 *  show:{Boolean:true}
 *    菜单栏中是否显示,默认为true;
 *  roleId:{String[]}
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
      show: false
    },
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/',
    name: 'index',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: BasicLayout,
    meta: {
      title: '首页',
      icon: 'md-home'
    }
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
        mata: {
          title: '卡片'
        }
      },
      {
        path: 'num',
        name: 'num',
        mata: {
          title: '数字'
        }
      },
      {
        path: 'selectTree',
        name: 'selectTree',
        mata: {
          title: '选择树'
        }
      },
      {
        path: 'selectTag',
        name: 'selectTag',
        mata: {
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
        mata: {
          title: '控制台'
        }
      },
      {
        path: 'workplace',
        name: 'workplace',
        mata: {
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
        mata: {
          title: '基础表单'
        }
      },
      {
        path: 'step-form',
        name: 'StepForm',
        mata: {
          title: '分步表单'
        }
      },
      {
        path: 'advanced-form',
        name: 'AdvancedForm',
        mata: {
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
        mata: {
          title: '标准列表'
        }
      },
      {
        path: 'card-list',
        name: 'CardList',
        mata: {
          title: '卡片列表'
        }
      },
      {
        path: 'goods-list',
        name: 'GoodsList',
        mata: {
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
        mata: {
          title: '搜索列表(文章)'
        }
      },
      {
        path: 'search-projects',
        name: 'SearchProjects',
        mata: {
          title: '搜索列表(项目)'
        }
      },
      {
        path: 'search-apps',
        name: 'SearchApps',
        mata: {
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
        mata: {
          title: '查询表格'
        }
      },
      {
        path: 'tree-table',
        name: 'TreeTable',
        mata: {
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
        mata: {
          title: '基础详情页'
        }
      },
      {
        path: 'advanced-profile',
        name: 'AdvancedProfile',
        mata: {
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
        mata: {
          title: '成功页'
        }
      },
      {
        path: 'fail',
        name: 'Fail',
        mata: {
          title: '失败页'
        }
      }
    ]
  },
  {
    path: '/exception',
    name: 'Exception',
    redirect: '/exception/403',
    component: BasicLayout,
    meta: {
      title: '异常页面',
      icon: 'md-home'
    },
    children: [
      {
        path: '/401',
        name: 'error_401',
        mata: {
          title: '401'
        }
      },
      {
        path: '/404',
        name: 'error_404',
        mata: {
          title: '404'
        }
      },
      {
        path: '/500',
        name: 'error_500',
        mata: {
          title: '500'
        }
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      title: '无权限访问',
      show: false
    },
    component: () => import('@/views/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      title: '服务器相应失败',
      show: false
    },
    component: () => import('@/views/error-page/500.vue')
  },
  {
    //上面的都没匹配 就到404
    path: '*',
    name: 'error_404',
    meta: {
      title: '未找到资源',
      show: false
    },
    component: () => import('@/views/error-page/404.vue')
  }
];

export default routes;
