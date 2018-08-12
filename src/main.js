// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import Cookies from 'vue-cookies'
import router from './router'
import VueSocketio from 'vue-socket.io'
import { store } from '@/store/store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(Cookies)
Vue.use(VueSocketio, 'https://helm-iot-server.herokuapp.com/')
// Vue.use(VueSocketio, 'http://localhost:3000')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
