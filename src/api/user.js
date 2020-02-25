import axios from '@/libs/request';

export const login = ({ userName, password }) => {
  const data = {
    userName,
    password
  };

  return axios.request({
    url: 'login',
    data,
    method: 'post'
  });
};
