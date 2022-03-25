import request from '../utils/request'

export function orderList(params){
  return request({
    url: `/api/bos/v2/users/${params.user_id}/orders`,
    method: 'GET',
    params
  })
}
