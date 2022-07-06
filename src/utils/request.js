import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// import { message } from 'ant-design-vue';

import { getToken } from './auth';
// import { resultCode } from '../enums/result';


const service = axios.create({
  baseURL: '',
  // baseURL: process.env.VUE_APP_URL,
  timeout: 120000,
});

// 请求拦截
service.interceptors.request.use(
  config => {
    const token = getToken();

    // 全局统一处理请求头参数
    if (token) {
      // @ts-ignore
      config.headers.Authorization = getToken();
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// 响应拦截
service.interceptors.response.use(
  response => {
    const res = response.data;

    if (!res.code) return res;

    // 接口响应处理
    // if (res.code !== resultCode.SUCCESS && (response.config.url!.indexOf('Api/') >= 0 && res.code !== 200)) {
    //   message.error({
    //     content: res.msg || 'Error',
    //     duration: 5,
    //   });
    // }

    return res;
  },
  error => {
    // TODO 上报接口异常
    return Promise.reject(error);
  },
);

export default service;
