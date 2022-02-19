import axios from 'axios'

const request = axios.create({
  withCredentials: true,
  timeout: 5000
})

request.interceptors.request.use(config => {

  //判断登录时是否有拿到token
  // if (getToken()) {...}
  return config
}, error => {
  console.log(error.message)
})

request.interceptors.response.use(response => {
  // const {data, code} = response
  // if (code === 200)  //判断返回的code是否为200，如果是200 就直接返回response,否则就做其他处理
  return response
}, error => {
  console.log(error.message)
})

export default request

