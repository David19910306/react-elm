import request from "../utils/request";

export function shoppingRestaurant(params){
  return request({
    url: `/api/shopping/restaurant/${params}`,
    method: 'GET'
  })
}

export function foodList(params){
  return request({
    url: '/api/shopping/v2/menu',
    method: 'GET',
    params
  })
}
