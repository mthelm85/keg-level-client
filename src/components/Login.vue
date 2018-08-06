<template lang="html">
<div class="container">
  <div class="row">
    <div class="col mx-auto">
      <div class="card shadow">
        <div class="card-body">
          <form>
            <div class="form-group">
              <label>Email</label>
              <input v-model="email" type="email" class="form-control" placeholder="Enter email">
            </div>
            <div class="form-group">
              <label>Password</label>
              <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <button @click.prevent="login" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Api from '@/api'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },

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
