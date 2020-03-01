const path = require('path');

const vueConfig = {
  chainWebpack: config => {
    config.resolve.alias.set('@c', path.join(__dirname, 'src/components'));
    config.resolve.alias.set('@v', path.join(__dirname, 'src/views'));
  },
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
  //bable 需校验view-design, 兼容性问题
  transpileDependencies: ['view-design']
};

module.exports = vueConfig;
