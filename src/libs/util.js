/**
 * @description 判断要查询到数组是否至少有一个元素包含在目标数组中
 * @param {Array} targetarr 目标数组
 * @param {Array} arr 需要查询的数组
 * @returns boolean
 */
export const hasOneOf = (targetarr, arr) => {
  return targetarr.some(_ => arr.indexOf(_) > -1);
};
