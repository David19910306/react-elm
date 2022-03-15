import request from "../utils/request";

export function addAddress(data) {
  return request({
    url: `/api/v1/users/${data.user_id}/addresses`,
    method: 'POST',
    data
  })
}

export function getAddressList(params){
  return request({
    url: `/api/v1/users/${params.user_id}/addresses`,
    method: 'GET'
  })
}
