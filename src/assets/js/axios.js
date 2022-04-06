import axios from 'axios'
import qs from 'qs'
import { Toast } from 'vant'

// 超时设置
const http = axios.create({
  timeout: 10000,
  baseURL: 'https://indibachn.com:5008',
  // headers:{
  //   'Content-Type': 'application/x-www-form-urlencoded'
  // }
})

// http request 拦截器
http.interceptors.request.use(
  (config) => {
    // if (config.method === 'post') {
    //   console.log('[ config ] >', config)
    //   config.data = qs.stringify({...config.data})
    // }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
http.interceptors.response.use(
  (response) => {
    console.log('response:', response)

    const res = response.data
    console.log('interceptors:', res)
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
      Toast.fail(res.info || '网络异常，请稍后重试')

      return Promise.reject('Error')
    } else {
      return response
    }
  },
  (error) => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)
export default http
