// router

/**
 * @description 获取用户Menu,根据roles进行过滤
 * @param {*} roles
 * @returns menus
 */
export const getUserMenuList = (routes, roles) => {
  const menuList = [];

  const getMenu = route => {
    let menus = [];
    //如果不是数组则重新设定成数组
    if (!route.length) {
      route = [route];
    }
    route.forEach(item => {
      let menu = {
        name: item.name,
        title: item.meta?.title ?? item.name,
        isHide: item.meta?.isHide || !isMenuEnable(item, roles)
      };
      //查看是否有子集
      if (item.children && item.children.length) {
        menu.children = getMenu(item.children);
      }
      menus.push(menu);
    });
    return menus;
  };

  routes.forEach(route => {
    getMenu(route).forEach(item => {
      menuList.push(item);
    });
  });

  return menuList;
};

// export let routeToMenu = (route, roles) => {
//   let menu = {
//     name: route.name,
//     title: route.mata.title ?? route.name,
//     //如果未填写或假,!为真,!!为假.如果为真,!为假,!!为真
//     isHide: !!route.mata?.isHide && isMenuEnable(route, roles)
//   };
//   return menu;
// };

/**
 * @description 目录是否可用
 * @param {*} route 路由
 * @param {*} roles 权限
 * @returns
 */
export const isMenuEnable = (route, roles) => {
  //如果存在role并且 没有找到,则返回 false
  return !(route.meta?.roles && route.meta.roles.length !== 0 && !hasOneOf(route.meta.roles, roles));
};

//common
/**
 * @description 判断要查询到数组是否至少有一个元素包含在目标数组中
 * @param {Array} targetarr 目标数组
 * @param {Array} arr 需要查询的数组
 * @returns boolean
 */
export const hasOneOf = (targetarr, arr) => {
  return targetarr.some(_ => arr.indexOf(_) > -1);
};

/**
 * @description 判断是否是IE
 * @returns boolean
 */
export function isIE() {
  const bw = window.navigator.userAgent;
  const compare = s => bw.indexOf(s) >= 0;
  const ie11 = (() => 'ActiveXObject' in window)();
  return compare('MSIE') || ie11;
}

/**
 * @description 获取全url
 * @param {*} baseURL
 * @param {*} requestedURL
 * @returns
 */
export function buildFullPath(baseURL, requestedURL) {
  return requestedURL ? baseURL.replace(/\/+$/, '') + '/' + requestedURL.replace(/^\/+/, '') : baseURL;
}
