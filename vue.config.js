module.exports = {
  // configureWebpack: {
  //     devtool: 'souce-map'
  // },
  transpileDependencies: ['view-design'],
  devServer: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http:www.baidu.com',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
