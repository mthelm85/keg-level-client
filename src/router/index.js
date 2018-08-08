import Vue from 'vue'
import Router from 'vue-router'
import MyKegs from '@/components/MyKegs'
import Home from '@/components/Home'
import Navbar from '@/components/Navbar'
import NavbarHome from '@/components/NavbarHome'
import Setup from '@/components/Setup'

Vue.use(Router)

const auth = (to, from, next) => {
  if (this.a.app.$cookies.isKey('user_session')) {
    next()
  } else {
    next('/')
  }
}

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
      name: 'MyKegs',
      components: {
        navbar: Navbar,
        body: MyKegs
      },
      beforeEnter: auth
    },
    {
      path: '/setup',
      name: 'Setup',
      components: {
        navbar: Navbar,
        body: Setup
      },
      beforeEnter: auth
    }
  ]
})
