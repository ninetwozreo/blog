import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserIndex from '@/components/userserver/UserIndex'
import Bpaper from '@/components/blog/index/Bpaper'
import Bindex from '@/components/blog/index/Bindex'
import Beditor from '@/components/blog/index/Beditor'
import login from './login'
import {checkLogin, goLogin} from '../api/login.js'

Vue.use(Router)

const routers = new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: HelloWorld,
      meta: {
        needLogin: false
      },
      children: [{
        path: '/Beditor',
        name: 'Beditor',
        component: Beditor,
        meta: {
          needLogin: false
        }
      }, {
        path: '/Bindex',
        name: 'Bindex',
        component: Bindex,
        meta: {
          needLogin: false
        }
      },
      {
        path: '/BPaper',
        component: Bpaper,
        name: 'BPaper',
        meta: {
          needLogin: false
        }
      }]
    },
    {
      path: '/UserIndex',
      name: 'UserIndex',
      component: UserIndex
    },
    ...login
  ]
})
let confirm = false
routers.beforeEach((to, from, next) => {
  // iView.LoadingBar.start()
  // alert('hi')
  const {needLogin} = to.meta
  if (needLogin === false) {
    return next()
  } else {
  }

  checkLogin().then(result => {
    // if (true) {
    if (result.data === '1') {
      return next()
    }

    goLogin(confirm)
    confirm = true
  })
})

routers.afterEach(route => {
  // iView.LoadingBar.finish();
  // store.commit('routeLoaded')
})

export default routers
