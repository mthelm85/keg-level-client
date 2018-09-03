<template lang="html">
<div class="container mt-5">
  <div class="row my-auto">
    <div class="col d-flex justify-content-center">
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
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      email: '',
      password: '',
      togglePass: false
    }
  },

  methods: {
    ...mapMutations([
      'storeEmail'
    ]),
    async login () {
      let res = await Api().post('/signup', {
        email: this.email,
        password: this.password
      })
      if (res.data.Result === 'User created successfully') {
        this.storeEmail(this.email)
        this.$cookies.set('user_session', this.email, '0')
        this.$router.push('/setup')
      } else {
        alert(res.data.Result)
      }
    }
  }
}
</script>

<style lang="css">
</style>
