import axios from 'axios';
// import store from '@/store';
import config from '@/config/index';
import { buildFullPath } from './util';

const errorhandle = error => {
  if (error.response) {
    const {
      config,
      request: { status, statusText }
    } = JSON.parse(JSON.stringify(error));

    const path = buildFullPath(config.baseURL, config.url);

    const errorInfo = { requestURL: path, status, statusText };

    if (status === 404) {
      //提示错误
      console.log(errorInfo);
    }
    if (status === 401) {
      //提示错误
      console.log(errorInfo);
    }

    // if (!responseURL.includes('save_error_logger')) {
    //     store.dispatch('addErrorLog', info);
    //   }
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
