import request from '../utils/request'

export function checkOut(data){
  return request({
    url: '/api/v1/carts/checkout',
    method: 'POST',
    data
  })
}

export function confirmOrder(data){
  return request({
    url: `/api/v1/users/${data.user_id}/carts/${data.cart_id}/orders`,
    method: 'POST',
    data
  })
}
