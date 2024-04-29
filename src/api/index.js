import { baseUrl, baseAdminUrl } from '@/utils/baseUrl'
import request from '@/utils/request'

export function subscription(params) {
  return request({
    method: 'post',
    url: `${baseAdminUrl}/v1/subscription/add`,
    data: params
  })
}

export function bindUser(params) {
  return request({
    method: 'post',
    url: `${baseUrl}/v1/saas/token`,
    data: params
  })
}

export function feedback(params) {
  return request({
    method: 'post',
    url: `${baseAdminUrl}/v1/openapi/addBuyerComplaint`,
    data: params
  })
}
