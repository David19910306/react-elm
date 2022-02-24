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
