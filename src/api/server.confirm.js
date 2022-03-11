import request from '../utils/request'

export function checkOut(data){
  return request({
    url: '/api/v1/carts/checkout',
    method: 'POST',
    data
  })
}
