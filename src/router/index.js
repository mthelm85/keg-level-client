import Vue from 'vue'
import Router from 'vue-router'
import KegWeight from '@/components/KegWeight'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'KegWeight',
      component: KegWeight
    }
  ]
})
