/* eslint-disable no-mixed-operators */
/* eslint-disable eqeqeq */
/* 引入资源请求插件 */
import axios from 'axios'
import { Toast } from 'mint-ui'

const BASEURL = window._config.baseUrl
axios.defaults.baseURL = BASEURL
axios.defaults.withCredentials = true
// http request 拦截器
axios.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  })
// http response 拦截器
axios.interceptors.response.use(
  response => {
    let result = response.data
    if (response.config.url.indexOf('unMessage') < 0 && result.error_no != 0 && result.error_no != 700011) {
      Toast(result.error_info)
    }
    return response.data
  },
  error => {
    let errorNo = error.response.data.return_code || error.response.data.error_no
    let errorInfo = error.response.data.error_info
    let requestUrl = error.response.config.url
    let ua = window.navigator.userAgent
    if (errorNo == 9007 || errorNo == 9006) {
      if (requestUrl.indexOf('getuserinfo') < 0) {
        if (ua.indexOf('MicroMessenger') >= 0 || ua.indexOf('TGenie') >= 0) {
          location.replace(`${location.protocol}//${location.host}`)
        }
      }
    }
    if (requestUrl.indexOf('unMessage') < 0 && errorNo != 9007 && errorNo != 9006) {
      Toast(errorInfo)
    }
    return Promise.reject(error.response.data)
  })
export default (url, data = {}, type = 'POST') => {
  if (type === 'GET') {
    return axios.get(url, {
      params: data
    })
  } else {
    return axios.post(url, {
      ...data
    })
  }
}



// WEBPACK FOOTER //
// ./src/api/axios.js