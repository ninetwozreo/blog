// import axios from 'axios'
// import qs from 'qs'
import qs from 'qs'
import {apiFactory} from './index'

const kerApi = apiFactory('')
export function listEssays (params) {
  // var obj = qs.stringify(params)

  return kerApi.get('/bs/essay/listEssay.do', {params: params})
}
export function saveEssay (params) {
  JSON.stringify(params)
  var obj = qs.stringify(params)
  return kerApi.post('/bs/essay/saveEssay.do', obj)
}
export function selectUserRoles () {
  return kerApi.get('/role/showUserRoles.do')
}
export function delUser (id) {
  return kerApi.delete('/user/delUser.do/' + id)
}
