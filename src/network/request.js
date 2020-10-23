import axios from 'axios'

export function request(config){
  axios.defaults.withCredentials=true;
  // 1. 创建axios实例
  const instance = axios.create({
    // baseURL: 'http://39.99.177.49:8080/admin_system',
    withCredentials: true,    // send cookies when cross-domain requests
    timeout: 5000
  })

  // 2. axios拦截器
  //拦截请求
  //2.1 请求拦截的作用
  instance.interceptors.request.use(
      config => {
        return config
      },error => {
        console.log(error);
      }
  );//拦截请求
  //拦截响应
  instance.interceptors.response.use(
      res => {
        console.log(res);
        return res.data
      },error => {
        console.log(error);
      }
  );//拦截响应

  // 3. 发送网络请求
  return instance(config)  //本身返回的就是Promise
}
