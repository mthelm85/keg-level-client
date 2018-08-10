<template lang="html">
  <nav class="navbar navbar-expand-sm navbar-light bg-light shadow-sm">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="#navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav mr-auto">
        <span class="navbar-brand mb-0 h1">KegMo</span>
        <router-link to="/setup" class="nav-link">Add</router-link>
        <router-link to="/my-kegs" class="nav-link">View</router-link>
      </ul>
      <form class="form-inline my-2 my-lg-0" @submit.prevent="logout">
        <button class="btn btn-warning my-2 my-sm-0">Logout</button>
      </form>
    </div>
  </nav>
</template>

<script>
import Api from '@/api'
export default {
  methods: {
    logout () {
      Api().get('logout')
      this.$cookies.remove('user_session')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css">
</style>
