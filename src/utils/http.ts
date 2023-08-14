import type { AxiosRequestConfig } from "axios";
/**
 * 生成请求的标识
 * @param {AxiosRequestConfig} config
 * @returns
 */
const createRequestToken = (config: AxiosRequestConfig) => {
  const { url = "", data = {}, params = {} } = config;
  return encodeURIComponent(
    `${url}${JSON.stringify(data)}${JSON.stringify(params)}}`
  );
};

export { createRequestToken };
