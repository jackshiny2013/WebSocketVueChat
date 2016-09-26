/**
 * Created by Administrator on 2016/9/26.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import { API_ROOT,API_BAKEND } from '../config'
import { getToken, signOut } from '../utils/authService'

Vue.use(VueResource)

// HTTP相关
Vue.http.options.xhr = { withCredentials: true }
Vue.http.options.crossOrigin = true

// Vue.http.interceptors.push({
//   request (request) {
//     // 这里对请求体进行处理
//     request.headers = request.headers || {}
//     if (getToken()) {
//       request.headers.Authorization = 'Bearer ' + getToken().replace(/(^\")|(\"$)/g, '')
//     }
//     return request
//   },
//   response (response) {
//     // 这里可以对响应的结果进行处理
//     if (response.status === 401) {
//       signOut()
//       router.go('/login')
//     }
//     return response
//   }
// })

export const UserResource = Vue.resource('https://localhost/script/login.esp')
