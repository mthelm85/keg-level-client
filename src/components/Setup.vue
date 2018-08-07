<template lang="html">
  <div class="container">
    <div class="row mt-4">
      <div class="col d-flex justify-content-center">
        <div class="card shadow">
          <div class="card-header text-center">
            Register Your Scale
          </div>
          <div class="card-body text-center">
            <form>
              <div class="form-group">
                <label>Scale Name</label>
                <input v-model="scale.name" type="text" class="form-control" placeholder="Keg 1">
              </div>
              <div class="form-group">
                <label>Scale I.D. (from box)</label>
                <input v-model="scale.id" type="text" class="form-control">
              </div>
              <button @click.prevent="register(1)" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col d-flex justify-content-center">
        <div class="card shadow">
          <div class="card-header text-center">
            {{ scaleHeader2 }}
          </div>
          <div class="card-body text-center">
            <button v-if="!addSecond" @click="addSecond = true" class="btn btn-dark"><i class="fas fa-plus"></i></button>
            <form v-else>
              <div class="form-group">
                <label>Scale Name</label>
                <input type="text" class="form-control" placeholder="Keg 1">
              </div>
              <div class="form-group">
                <label>Scale I.D. (from box)</label>
                <input type="text" class="form-control">
              </div>
              <button @click.prevent="register(2)" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div v-if="addSecond" class="row my-4">
      <div class="col d-flex justify-content-center">
        <div class="card shadow">
          <div class="card-header text-center">
            {{ scaleHeader3 }}
          </div>
          <div class="card-body text-center">
            <button v-if="!addThird" @click="addThird = true" class="btn btn-dark"><i class="fas fa-plus"></i></button>
            <form v-else>
              <div class="form-group">
                <label>Scale Name</label>
                <input type="text" class="form-control" placeholder="Keg 1">
              </div>
              <div class="form-group">
                <label>Scale I.D. (from box)</label>
                <input type="text" class="form-control">
              </div>
              <button @click.prevent="register(3)" class="btn btn-primary">Submit</button>
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
      addSecond: false,
      addThird: false,
      scale: {
        name: '',
        id: ''
      }
    }
  },

  computed: {
    scaleHeader2 () {
      return (this.addSecond ? 'Register Second Scale' : 'Add Another Scale')
    },
    scaleHeader3 () {
      return (this.addThird ? 'Register Third Scale' : 'Add Another Scale')
    }
  },

  methods: {
    async register (num) {
      const res = await Api().post('/register', {
        'email': 'mthelm85@gmail.com',
        'name': this.scale.name,
        'id': this.scale.id
      })
      if (res.message === 'Scale registered') {
        alert('Scale successfully registered')
      } else if (res.message === 'Error') {
        alert('There was an error registering your scale')
      }
    }
  }
}
</script>

<style lang="css">
i {
  font-size: 3rem;
}
</style>
