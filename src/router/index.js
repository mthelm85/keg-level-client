import Vue from 'vue'
import Router from 'vue-router'
import KegWeight from '@/components/KegWeight'
import Start from '@/components/Start'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/my-keg/:roomId',
      name: 'KegWeight',
      component: KegWeight
    }
  ]
})
