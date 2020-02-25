import config from '@/config/index';
import { isIE } from '@/libs/util';
// import { login, info } from './services/user';

if (config.isUseMock) {
  if (isIE()) {
    console.error('mockjs not support ie');
  }

  console.log('mock start loading...');
  const Mock = require('mockjs2');

  Mock.setup({
    timeout: 800
  });

  console.log('mock end loading.');

  // Mock.mock(/\/api\/user/, 'get', info);
  // Mock.mock(/\/api\/login/, 'post', login);
  const data = {
    status: 1,
    data: 123
  };
  Mock.mock('/api/login', 'post', data);
}
