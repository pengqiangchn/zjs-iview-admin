import { getBody, builder, getQueryParameters } from '../util';

const users = [
  {
    id: '001',
    userCode: 'admin',
    userName: '系统管理员',
    password: '123456',
    isAdmin: true,
    roles: ['admin']
  },
  {
    id: '002',
    nameCode: 'user',
    userName: '测试用户',
    password: '123456',
    roles: ['user']
  }
];

export const getUserInfo = options => {
  const body = getQueryParameters(options);
  const user = users.find(u => u.userCode === body.userCode);
  return builder(user);
};

export const login = options => {
  console.log('options', options);
  const body = getBody(options);
  var userCodes = users.map(x => x.userCode);
  if (!userCodes.includes(body.userCode)) {
    return builder({ isLogin: true, message: '用户不存在!' }, 401);
  }

  var user = users.find(x => x.userCode === body.userCode && x.password == body.password);

  if (!user) {
    return builder({ isLogin: true, message: '密码错误!' }, 401);
  }

  const loginResponse = {
    state: true,
    token: 'token-001'
  };

  return loginResponse;
};

export const logout = () => ({
  ss: ''
});
