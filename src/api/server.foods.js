import request from '../utils/request'

export function restaurantCategory(params){
  return request({
    url: '/api/shopping/v2/restaurant/category',
    method: 'GET',
    params
  })
}
