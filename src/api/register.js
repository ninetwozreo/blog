// import axios from 'axios'
// import qs from 'qs'
import qs from 'qs'
import {apiFactory} from './index'

const kerApi = apiFactory('')
export function register (params) {
  // let postData = this.$qs.stringify({
  //   key1:value1,
  //   key2:value2,
  //   key3:value3,
  // });
  var obj = qs.stringify(params)
  return kerApi.post('/userRegister.do', obj)
}
