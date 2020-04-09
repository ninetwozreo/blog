// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import ElementUI from 'element-ui'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import qs from 'qs'
import axios from 'axios'

Vue.prototype.$qs = qs
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// .Store({
//
// state: {
//   存储token
// Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
// },
//
// mutations: {
//   修改token，并将token存入localStorage
// changeLoginState (state, user) {
//   state.Authorization = user.Authorization;
//   localStorage.setItem('Authorization', user.Authorization);
// }
// }
// })
