// import axios from 'axios'
import _ from 'lodash'
// import qs from 'qs'
import qs from 'qs'
import router from '../router/index'
import {apiFactory} from './index'

const kerApi = apiFactory('')
// axios.interceptors.request.use(
//   config => {
//     if (localStorage.getItem('Authorization')) {
//       config.headers.Authorization = localStorage.getItem('Authorization')
//     }
//
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   })
export function login (params) {
  // let postData = this.$qs.stringify({
  //   key1:value1,
  //   key2:value2,
  //   key3:value3,
  // });
  var obj = qs.stringify(params)
  return kerApi.post('/login/ajaxLogin.do', obj)
}
export function getPaginationList (params) {
  return kerApi.get(`/api/idcs/?page=${params.page}`)
}

export const goLogin = _.debounce((confirm) => {
  if (confirm === false) {
    alert('您所访问的页面需要登录，即将跳转到登录页面。')

    return router.replace({
      name: 'Login'
    })
  }

  // router.replace({
  //   name: 'login'
  // })
  // Modal.warning({
  //   title: '登录',
  //   content: '您所访问的页面需要登录，即将跳转到登录页面。',
  //   onOk () {
  //     router.replace({
  //       name: 'login'
  //     })
  //   }
  // })
}, 400)

export function checkLogin () {
  return kerApi.get('login/unauth')
    .then(res => res.data)
}
export function logOut () {
  return kerApi.put('login/logOut')
    .then(res => res.data)
}
