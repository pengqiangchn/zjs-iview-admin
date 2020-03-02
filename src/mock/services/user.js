import { getBody, builder } from '../util';

const users = [
  {
    id: '001',
    name: 'admin',
    password: '123456',
    roleId: ['admin']
  },
  {
    id: '002',
    name: 'user',
    password: '123456',
    roleId: ['user']
  }
];

export const getUser = options => {
  console.log('options', options);
  const body = getBody(options);
  console.log('body', body);
  const user = users.filter(u => u.id === body.id);

  return user;
};

export const login = options => {
  console.log('options', options);
  const body = getBody(options);
  var usernames = users.map(x => x.name);
  if (!usernames.includes(body.userName)) {
    return builder({ isLogin: true, message: '用户不存在!' }, 401);
  }

  var user = users.find(x => x.name === body.userName && x.password == body.password);

  if (!user) {
    return builder({ isLogin: true, message: '密码错误!' }, 401);
  }

  const loginResponse = {
    state: true,
    token: 'token-001'
  };

  return loginResponse;
};

export const logout = () => '';
