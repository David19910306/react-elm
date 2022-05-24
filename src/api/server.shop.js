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

export function scores(params){
  return request({
    url: `/api/ugc/v2/restaurants/${params.id}/ratings/scores`,
    method: 'GET'
  })
}

export function tags(params){
  return request({
    url: `/api/ugc/v2/restaurants/${params.id}/ratings/tags`,
    method: 'GET'
  })
}

export function comments(params){
  return request({
    url: `/api/ugc/v2/restaurants/${params.restaurant_id}/ratings`,
    method: 'GET',
    params
  })
}
