module.exports = {
  // rem 的配置
  //   css: {
  //     loaderOptions: {
  //       css: {},
  //       postcss: {
  plugins: [
    require('postcss-px2rem')({
      remUnit: 54
    })
  ]
  //       }
  //     }
  //   }
};
