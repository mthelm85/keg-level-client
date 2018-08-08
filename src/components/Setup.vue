<template lang="html">
  <div class="container">
    <div class="row mt-4">
      <div class="col">
        <div class="card shadow">
          <div class="card-header text-center">
            Register Your Scale
          </div>
          <div class="card-body text-center">
            <form>
              <div class="form-group">
                <label>Scale Name</label>
                <input v-model="scale[0].name" type="text" class="form-control">
              </div>
              <div class="form-group">
                <label>Scale I.D. (from box)</label>
                <input v-model="scale[0].id" type="text" class="form-control">
              </div>
              <button @click.prevent="register(0)" :disabled="scale[0].disableBtn" class="btn btn-primary">{{ btnText(0) }}</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow">
          <div class="card-header text-center">
            {{ headerText(1) }}
          </div>
          <div class="card-body text-center">
            <button v-if="!addSecond" @click="addSecond = true" class="btn btn-dark"><i class="fas fa-plus"></i></button>
            <form v-else>
              <div class="form-group">
                <label>Scale Name</label>
                <input v-model="scale[1].name" type="text" class="form-control" placeholder="Keg 1">
              </div>
              <div class="form-group">
                <label>Scale I.D. (from box)</label>
                <input v-model="scale[1].id" type="text" class="form-control">
              </div>
              <button @click.prevent="register(1)" class="btn btn-primary">{{ btnText(1) }}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div v-show="addSecond" class="row mt-4">
      <div class="col d-flex justify-content-center">
        <div class="card shadow">
          <div class="card-header text-center">
            {{ headerText(2) }}
          </div>
          <div class="card-body text-center">
            <button v-if="!addThird" @click="addThird = true" class="btn btn-dark"><i class="fas fa-plus"></i></button>
            <form v-else>
              <div class="form-group">
                <label>Scale Name</label>
                <input v-model="scale[2].name" type="text" class="form-control" placeholder="Keg 1">
              </div>
              <div class="form-group">
                <label>Scale I.D. (from box)</label>
                <input v-model="scale[2].name" type="text" class="form-control">
              </div>
              <button @click.prevent="register(2)" class="btn btn-primary">{{ btnText(2) }}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '@/api'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      addSecond: false, // if user clicks to add a second scale, gets set to true
      addThird: false, // if user clicks to add a third scale, gets set to true
      scale: [ // array of scales that user can add
        {
          name: '',
          id: '',
          disableBtn: false
        },
        {
          name: '',
          id: '',
          disableBtn: false
        },
        {
          name: '',
          id: '',
          disableBtn: false
        }
      ]
    }
  },

  computed: {
    ...mapGetters([
      'getEmail',
      'getKegs'
    ])
  },

  methods: {
    btnText (num) {
      return (this.scale[num].disableBtn ? 'Registered' : 'Submit')
    },
    headerText (num) {
      switch (num) {
        case 1:
          return (this.addSecond ? 'Register Second Scale' : 'Add Another Scale')
        case 2:
          return (this.addThird ? 'Register Third Scale' : 'Add Another Scale')
      }
    },
    async register (num) {
      const res = await Api().post('/register', {
        'email': this.getEmail,
        'name': this.scale[num].name,
        'id': this.scale[num].id
      })
      if (res.data.message === 'Scale registered') {
        this.scale[num].disableBtn = true
      } else if (res.data.message === 'Error') {
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
