export default {
  openNames: ['home'],
  activeMenu: '',
  menuList: [
    {
      name: 'home',
      title: '首页'
    },
    {
      name: 2,
      title: '菜单2',
      children: [
        {
          name: 21,
          title: '菜单2-1',
          isShow: true
        },
        {
          name: 22,
          title: '菜单2-2',
          isShow: false
        },
        {
          name: 23,
          title: '菜单2-3',
          isShow: true
        },
        {
          name: 24,
          title: '菜单2-4',
          isShow: true
        }
      ]
    },
    {
      name: 3,
      title: '菜单3',
      children: [
        {
          name: 31,
          title: '菜单3-1',
          isShow: true
        },
        {
          name: 32,
          title: '菜单3-2',
          isShow: false
        },
        {
          name: 33,
          title: '菜单3-3',
          isShow: true
        },
        {
          name: 34,
          title: '菜单3-4',
          isShow: true
        }
      ]
    },
    {
      name: 4,
      title: '菜单4',
      children: [
        {
          name: 41,
          title: '菜单4-1',
          isShow: true
        },
        {
          name: 42,
          title: '菜单4-2',
          isShow: false
        },
        {
          name: 43,
          title: '菜单4-3',
          isShow: true
        },
        {
          name: 44,
          title: '菜单4-4',
          isShow: true
        }
      ]
    }
  ]
};
