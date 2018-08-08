<template lang="html">
  <nav class="navbar navbar-expand-sm navbar-light bg-light shadow-sm">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="#navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav mr-auto">
        <span class="navbar-brand mb-0 h1">KegMo</span>
      </ul>
      <form class="form-inline my-2 my-lg-0" @submit.prevent="login">
        <input class="form-control mr-sm-2" v-model.trim="email" type="email" name="email" placeholder="E-mail" aria-label="E-mail">
        <input class="form-control mr-sm-2" v-model.trim="password" type="password" name="password" placeholder="Password" aria-label="Password">
        <button class="btn btn-success my-2 my-sm-0" :disabled="disabled">Login</button>
      </form>
    </div>
  </nav>
</template>

<script>
import Api from '@/api'
export default {
  methods: {
    login () {
      Api().post('/login', {
        email: this.email,
        password: this.password
      }).then((res) => {
        console.log(res)
        if (res.data.success === 'yes') {
          this.$router.push('/setup')
        } else {
          alert('Login failed')
        }
      }).catch((err) => {
        alert(err)
      })
    }
  }
}
</script>

<style lang="css">
</style>
