const vueConfig = {
  devServer: {
    port: 3000
    // proxy: {
    //   '/api': {
    //     target: 'http:www.baidu.com',
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  },

  //bable 去掉view-design, 兼容性问题
  transpileDependencies: ['view-design']
};

module.exports = vueConfig;
