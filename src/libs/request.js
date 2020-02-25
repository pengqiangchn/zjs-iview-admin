import axios from 'axios';
// import store from '@/store';
import config from '@/config/index';

// const addErrorLog = errorInfo => {
//   const {
//     statusText,
//     status,
//     request: { responseURL }
//   } = errorInfo;
//   let info = {
//     type: 'ajax',
//     code: status,
//     mes: statusText,
//     url: responseURL
//   };
//   if (!responseURL.includes('save_error_logger')) {
//     store.dispatch('addErrorLog', info);
//   }
// };

// const error = error => {
//   if (error.response) {
//     const data = error.response.data;
//     if (error.response.status === 403) {
//       //提示错误
//     }
//     if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
//       //提示错误
//     }
//   }
// };

class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.queue = {};
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
  destroy(url) {
    delete this.queue[url];
    // if (!Object.keys(this.queue).length) {
    // }
  }
  interceptors(instance, url) {
    instance.interceptors.request.use(
      config => {
        // const token= Vue.ls.get()
        const token = '333';
        if (token) {
          //每次请求增加 token
          config.headers['Token'] = token;
        }

        //可增加界面刷新.
        this.queue[url] = true;

        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );

    instance.interceptors.response.use(
      res => {
        this.destroy(url);
        const { data, status } = res;
        return { data, status };
      },
      error => {
        this.destroy(url);
        let errorInfo = error.response;
        if (!errorInfo) {
          const {
            request: { statusText, status },
            config
          } = JSON.parse(JSON.stringify(error));
          errorInfo = {
            statusText,
            status,
            request: { responseURL: config.url }
          };
        }
        // addErrorLog(errorInfo);
        return Promise.reject(error);
      }
    );
  }
  request(options) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance, options.url);
    return instance(options);
  }
}

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.development : config.baseUrl.production;

const httpRequest = new HttpRequest(baseUrl);

export default httpRequest;
