const IsProd = ['production', 'prod'].includes(process.env.NODE_ENV);

const plugins = [];
if (IsProd) {
  plugins.push('transform-remove-console');
}

// //按需加载.试了一下,需要等框架都弄完了再使用,避免开发时出现控件用不上问题
// plugins.push(
//   [
//     'import',
//     {
//       libraryName: 'view-design',
//       libraryDirectory: 'src/components'
//     }
//   ],
//   ['transform-remove-console']
// );

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins
};
