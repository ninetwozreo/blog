// import axios from 'axios'
// import qs from 'qs'
import qs from 'qs'
import {apiFactory} from './index'

const kerApi = apiFactory('')
export function getUsers (params) {
  var obj = qs.stringify(params)
  return kerApi.post('/user/showUsers.do', obj)
}
export function addUser (params) {
  // let postData = this.$qs.stringify({
  //   key1:value1,
  //   key2:value2,
  //   key3:value3,
  // });
  var obj = qs.stringify(params)
  return kerApi.post('/user/mergeUser.do', obj)
}
export function selectUserRoles () {
  // let postData = this.$qs.stringify({
  //   key1:value1,
  //   key2:value2,
  //   key3:value3,
  // });
  // var obj = qs.stringify(params)
  return kerApi.get('/role/showUserRoles.do')
}
export function delUser (id) {
  return kerApi.delete('/user/delUser.do/' + id)
}
