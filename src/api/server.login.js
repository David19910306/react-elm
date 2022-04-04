import request from '../utils/request'

export function refreshCode(){
  return request({
    url: '/api/v1/captchas',
    method: 'POST'
  })
}

export function login(data){
  return request({
    url: '/api/v2/login',
    method: 'POST',
    data
  })
}

// 获取地址列表
export function addressList(params){
  return request({
    url: `/api/v1/users/${params.user_id}/addresses`,
    method: 'GET'
  })
}

// 删除地址
export function delAddress(params){
  return request({
    url: `/api/v1/users/${params.user_id}/addresses/${params.address_id}`,
    method: 'DELETE'
  })
}

// 增加收货地址
export function addAddress(data){
  return request({
    url: `/api/v1/users/${data.user_id}/addresses`,
    method: 'POST',
    data
  })
}

// 修改密码
export function resetPassword(data){
  return request({
    url: '/api/v2/changepassword',
    method: 'POST',
    data
  })
}

// 退出登录
export function singout(){
  return request({
    url: '/api/v2/signout',
    method: 'GET'
  })
}
