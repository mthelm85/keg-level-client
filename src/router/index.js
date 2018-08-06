import Vue from 'vue'
import Router from 'vue-router'
import KegWeight from '@/components/KegWeight'
import Login from '@/components/Login'
import Setup from '@/components/Setup'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/my-keg/:roomId',
      name: 'KegWeight',
      component: KegWeight
    },
    {
      path: '/setup',
      name: 'Setup',
      component: Setup
    }
  ]
})
