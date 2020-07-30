import axios from "axios"

let http = axios.create({
  baseURL: '/api'
})
//请求拦截
http.interceptors.request.use(config => {
  return config
})
//登录拦截
http.interceptors.response.use(res => {
  return res
})

export default http
