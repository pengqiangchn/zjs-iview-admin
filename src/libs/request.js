import axios from 'axios';
// import store from '@/store';
import config from '@/config/index';
import message from 'view-design/src/components/message';
// node_modules/view-design/src/components/message/index.js

const errorhandle = error => {
  if (error.response) {
    const {
      status,
      data: { result }
    } = JSON.parse(JSON.stringify(error.response));

    // const path = buildFullPath(config.baseURL, config.url);

    // const errorInfo = { requestURL: path, status, statusText };

    // const router = Vue.$router;
    const messages = message;
    console.log(messages);

    if (status === 404) {
      //提示错误
      // console.log(error.response);
      message.error({
        content: '未找到资源'
      });
    }
    //如果是401,当前返回值是 login返回的,则不跳转401
    if (status === 401 && !(result && result.isLogin)) {
      //提示错误
      // console.log(error.response);
    }
  }

  return Promise.reject(error);
};

class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.timeout = 6000; // 请求超时时间
  }
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      timeout: this.timeout
      //   headers: {}
    };
    return config;
  }

  /**
   * @description 拦截器
   * @param {*} instance  axios
   * @param {*} url 访问地址
   * @memberof HttpRequest
   */
  interceptors(instance) {
    instance.interceptors.request.use(config => {
      // const token= Vue.ls.get()
      const token = '333';
      if (token) {
        //每次请求增加 token
        config.headers['Token'] = token;
      }

      return config;
    }, errorhandle);

    instance.interceptors.response.use(res => {
      const { data, status } = res;
      return { data, status };
    }, errorhandle);
  }

  request(options) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance);
    return instance(options);
  }
}

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.development : config.baseUrl.production;

const httpRequest = new HttpRequest(baseUrl);

export default httpRequest;
