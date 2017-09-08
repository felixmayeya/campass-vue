import axios from 'axios'
import qs from 'qs'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
let base = '/api/'

// 登录
export const requestLogin = params => {
  return axios({
    method: 'post',
    url: `${base}index.open`,
    data: qs.stringify(params)
  }).then(res => res.data)
}
