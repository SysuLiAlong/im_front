import axios from 'axios'
axios.defaults.withCredentials = true;
/**
 * https://github.com/axios/axios#using-applicationx-www-form-urlencoded-format
 * @type {AxiosInstance}
 */
const AxiosInstance = axios.create({
  baseURL: process.env.API_HOST,
  timeout: 60000,
  withCredentials: true,
  headers: {'X-Requested-With': 'XMLHttpRequest'},/**Ajax 请求的标识*/
});

// request拦截器
AxiosInstance.interceptors.request.use(config => {
    return config
  },
  error => {
    return Promise.reject(error);
  });

// response拦截器
AxiosInstance.interceptors.response.use(
  response => {
    if(response.status == 200) {
      return response.data
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    return Promise.reject(error)
  }
);

export default AxiosInstance;
