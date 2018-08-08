import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    email: '',
    kegs: []
  },

  getters: {
    getEmail: (state) => {
      return state.email
    },
    getKegs: (state) => {
      return state.kegs
    }
  },

  mutations: {
    storeEmail: (state, email) => {
      state.email = email
    },
    storeKegs: (state, kegs) => {
      let i = 0
      for (i; i < kegs.length; i++) {
        state.kegs.push(kegs[i])
      }
    }
  },

  actions: {

  }
})
