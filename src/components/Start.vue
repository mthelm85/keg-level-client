<template lang="html">
<div class="container">
  <div class="row">
    <div class="col mx-auto">
      <input v-model="roomId" class="form-control" type="text" placeholder="Input your scale ID here...">
      <br>
      <router-link class="btn btn-dark" :to="{ name: 'KegWeight', params: { roomId: roomId } }">View My Keg</router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      roomId: ''
    }
  }
}
</script>

<style lang="css">
</style>
