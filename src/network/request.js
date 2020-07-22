import axios from 'axios'

/**
 * 封装axios的网络请求
 * @param {object} config axios的配置
 */
export function request(config) {
  //1、创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
		timeout: 5000
  })

  //2、axios 拦截器
  //2.1 request（请求）拦截器
  axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    console.log('123')
    return config;
  }, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

  //2.2 response（响应）拦截器
  axios.interceptors.response.use(response => {
    // 对响应数据做点什么
    console.log('111',response)
    //return response;
  }, error => {
    // 对响应错误做点什么
    return Promise.reject(error);
  });


  //3、发送真正的网络请求
  return instance(config)
}
