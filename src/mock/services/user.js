export const info = options => {
  console.log('options', options);

  const userInfo = {
    id: '001',
    name: 'Test001',
    password: '001'
  };

  return userInfo;
};

const loginResponse = {
  status: false,
  token: 'token001',
  message: '获取成功'
};

export const login = options => {
  console.log('options', options);

  return loginResponse;
};
