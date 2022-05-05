import axios from "axios";
import { getToken } from "./auth";

const http = axios.create({
  baseURL: "http://geek.itheima.net/v1_0",
});

http.interceptors.request.use(
  (config) => {
    // 对config进行修改，每次请求前做的事情

    if (getToken()) {
      config.headers.Authorization = `Bearer ${getToken()}`;
    }
    return config;
  },
  (e) => Promise.reject(e)
);
export { http };
