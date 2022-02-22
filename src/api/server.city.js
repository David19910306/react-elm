import request from "../utils/request";

export function getLocationCity(params) {
  return request({
    url: 'https://elm.cangdu.org/v1/cities',
    method: 'GET',
    params
  })
}

export function getCitiesHot(params) {
  return request({
    url: 'https://elm.cangdu.org/v1/cities',
    method: 'GET',
    params
  })
}

export function getCitiesGroup(params) {
  return request({
    url: 'https://elm.cangdu.org/v1/cities',
    method: 'GET',
    params
  })
}

export function getPosition(params) {
  return request({
    url: 'https://elm.cangdu.org/v1/pois',
    method: 'GET',
    params
  })
}
