import request from "../utils/request";

export function getNavigationList(params) {
  return request({
    url: '/api/v2/index_entry',
    method: 'GET',
    params
  })
}

export function getRestaurantList(params) {
  return request({
    url: '/api/shopping/restaurants',
    method: 'GET',
    params
  })
}

export function getAccuratePosition(pos){
  return request({
    url: `/api/v2/pois/${pos}`,
    method: 'GET'
  })
}

export function getRestaurantsByKeyWord(params) {
  return request({
    url: '/api/v4/restaurants',
    method: 'GET',
    params
  })
}
