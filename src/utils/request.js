/* eslint-disable no-param-reassign */
import axios from 'axios'
import { message } from 'ant-design-vue'
import { responseCodeEnum } from '@/utils/enum'
import { baseAdminUrl } from '@/utils/baseUrl'
import router, { resetRouter } from '@/router'

function handleError(msg) {
  message.error(msg)
}

// create an axios instance
const service = axios.create({
  baseURL: baseAdminUrl, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    if (!config.headers.Authorization) {
      if (localStorage.getItem('inst_money_access_token')) {
        config.headers.authorization = localStorage.getItem('inst_money_access_token')
      }
    }
    if (localStorage.getItem('inst_money_token')) {
      config.headers.token = localStorage.getItem('inst_money_token')
    }
    return config
  },
  error => Promise.reject(error),
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    if (response.data instanceof ArrayBuffer) {
      return response
    }
    const { authorization } = response.headers
    if (authorization) {
      localStorage.setItem('inst_money_access_token', authorization)
    }
    const { token } = response.headers
    if (token) {
      localStorage.setItem('inst_money_token', token)
    }
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (res.code === 119010) {
      // kyc未通过
      handleError(res.msg || 'Error')
      router.push({
        path: '/my',
        query: {
          tab: 'identification'
        }
      })
      return Promise.reject(res)
    }
    if (res.code !== 0 && res.code !== 310001 && res.code !== 310002) {
      handleError(res.msg || 'Error')
      return Promise.reject(new Error(res.msg || 'Error'))
    }
    return res
  },
  (error) => {
    const hasResCode = error.response && error.response.data && error.response.data.code
    if (hasResCode) {
      const { code } = error.response.data
      if ([responseCodeEnum.tokenExpire].includes(code)) {
        // handleError("Expiration of login");
        localStorage.clear()
        resetRouter()
        router.push({
          path: '/',
          query: {
            login: false
          }
        })
      } else if ([responseCodeEnum.userNotLogin].includes(code)) {
        // handleError("User not logged in");
        localStorage.clear()
        resetRouter()
        router.push({
          path: '/',
          query: {
            login: false
          }
        })
      } else {
        handleError(error.response.data.msg)
        return Promise.reject(error)
      }
    } else {
      handleError(error.response.data.msg)
      return Promise.reject(error)
    }
    return ''
  },
)

export default service
