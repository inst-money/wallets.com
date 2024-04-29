import { baseAdminUrl } from '@/utils/baseUrl'
import request from '@/utils/request'

export function subscription(params) {
  return request({
    method: 'post',
    url: `${baseAdminUrl}/v1/subscription/add`,
    data: params
  })
}
