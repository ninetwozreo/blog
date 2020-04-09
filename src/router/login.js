import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
// import Aside from '@/components/userserver/Aside'

Vue.use(Router)

export default [
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登陆',
      needLogin: false
    }
  }
  // ,{
  //   path: '/Aside',
  //   name: 'Aside',
  //   component: Aside,
  //   meta: {
  //     title: 'bianjiao',
  //     needLogin: false
  //   }
  // }
]
