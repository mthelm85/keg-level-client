import Vue from 'vue'
import Router from 'vue-router'
import KegWeight from '@/components/KegWeight'
import Home from '@/components/Home'
import NavbarHome from '@/components/NavbarHome'
import Setup from '@/components/Setup'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      components: {
        navbar: NavbarHome,
        body: Home
      }
    },
    {
      path: '/my-kegs/',
      name: 'KegWeight',
      components: {
        navbar: NavbarHome,
        body: KegWeight
      }
    },
    {
      path: '/setup',
      name: 'Setup',
      components: {
        navbar: NavbarHome,
        body: Setup
      }
    }
  ]
})
