<template lang="html">
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark shadow">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="#navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav mr-auto">
        <span class="navbar-brand mb-0 h1">Kegmo</span>
      </ul>
      <form class="form-inline my-2 my-lg-0" @submit.prevent="login">
        <input class="form-control mr-sm-2" v-model.trim="email" type="email" name="email" placeholder="E-mail" aria-label="E-mail">
        <input class="form-control mr-sm-2" v-model.trim="password" type="password" name="password" placeholder="Password" aria-label="Password">
        <button class="btn btn-success my-2 my-sm-0">Login</button>
      </form>
    </div>
  </nav>
</template>

<script>
import Api from '@/api'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    ...mapMutations([
      'storeEmail',
      'storeKegs'
    ]),
    async login () {
      let loginRes = await Api().post('/login', {
        email: this.email,
        password: this.password
      })
      let getKegsRes = await Api().get('/get-kegs', {
        params: {
          email: this.email
        }
      })
      if (getKegsRes.data.userKegs) {
        this.storeKegs(getKegsRes.data.userKegs)
      } else if (getKegsRes.data.message) {
        alert('Could not retrieve your Kegmos')
      }
      if (loginRes.data.success === 'yes') {
        this.storeEmail(this.email)
        this.$cookies.set('user_session', this.email, '0')
        this.$router.push('/my-kegs')
      } else {
        alert('Login failed...')
      }
    }
  }
}
</script>

<style lang="css">
</style>
