import axios from "axios";

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 8000,
  //   validateStatus() {
  //     // return true, 该配置会保证接口全部返回resolve，在业务代码中处理异常
  //     return true;
  //   },
});

// TO DO
// 1. token
// 2. clearRepeatedRequest
// 3. cancel
/**
 * request interceptor
 */
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    error.message = "服务器异常, 请联系管理员！";
    return Promise.reject(error);
  }
);

/**
 * response interceptor
 */
service.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // error.message = "请求超时或服务器异常, 请检查网络或联系管理员！";
    // throw new Error(error.message);
    const { response, code, config } = error;
    console.log(
      "response--->",
      response,
      "code--->",
      code,
      "config--->",
      config
    );
    return Promise.reject(error);
  }
);

const getData = (url: string, params = {}) => {
  return service({
    method: "get",
    url: url,
    params,
  });
};

const postData = (url: string, data = {}) => {
  return service({
    method: "post",
    url: url,
    data,
  });
};

export { getData, postData };
