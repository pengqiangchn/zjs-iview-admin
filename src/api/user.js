import axios from '@/libs/request';

export const getUserInfo = parameter => {
  return axios.request({
    url: 'user',
    method: 'get',
    params: parameter
  });
};

export const login = data => {
  return axios.request({
    url: 'login',
    data: data,
    method: 'post'
  });
};

export const logout = data => {
  return axios.request({
    url: 'logout',
    data: data,
    method: 'post'
  });
};
