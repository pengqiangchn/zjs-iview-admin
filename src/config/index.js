const config = {
  baseUrl: {
    development: '/api/',
    production: '346'
  },
  isUseMock: true,
  storageOptions: {
    namespace: 'zjs__', //key前缀
    name: 'ls', // 命名Vue变量.[ls]或this.[$ls],
    storage: 'local' // 存储类型: session, local, memory
  }
};

export default config;
