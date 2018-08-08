<template lang="html">
<div class="container mt-5">
  <div class="row my-auto">
    <div class="col mx-auto">
      <div class="card shadow text-center">
        <div class="card-header h4">
          Create Account
        </div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label>Email</label>
              <input v-model="email" type="email" class="form-control" placeholder="Enter email">
            </div>
            <div class="form-group">
              <label>Password</label>
              <input v-model="password" :type="togglePass ? 'text' : 'password'" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <div class="form-check mb-3">
              <input v-model="togglePass" type="checkbox" class="form-check-input" value="true" id="passCheck"/>
              <label class="form-check-label" for="passCheck">View/check password before submitting</label>
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
      password: '',
      togglePass: false
    }
  },

  methods: {
    login () {
      Api().post('/signup', {
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
