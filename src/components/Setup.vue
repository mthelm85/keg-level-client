<template lang="html">
  <div class="container">
    <div class="row mt-4">
      <!-- Register Scale #1 -->
      <div class="col-12 col-md">
        <div class="card shadow">
          <div class="card-header text-center">
            Register Your Kegmo
          </div>
          <div class="card-body text-center">
            <form>
              <div class="form-group">
                <label>Kegmo Name</label>
                <div class="input-group">
                  <input v-model="scale[0].name" type="text" class="form-control">
                  <div class="input-group-append">
                    <button @click.prevent="changeName(0)" :disabled="disabled(0)" class="btn btn-outline-secondary">Change</button>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Kegmo I.D. (from box)</label>
                <input v-model="scale[0].id" type="text" class="form-control">
              </div>
              <button @click.prevent="register(0)" :disabled="scale[0].disableBtn" class="btn btn-primary">{{ btnText(0) }}</button>
            </form>
          </div>
        </div>
      </div>
      <!-- Register Scale #2 -->
      <div class="col-12 col-md mobile-margin">
        <div class="card shadow">
          <div class="card-header text-center">
            {{ headerText(1) }}
          </div>
          <div class="card-body text-center">
            <button v-if="!addSecond" @click="addSecond = true" class="btn btn-dark"><i class="fas fa-plus"></i></button>
            <form v-else>
              <div class="form-group">
                <label>Kegmo Name</label>
                <div class="input-group">
                  <input v-model="scale[1].name" type="text" class="form-control">
                  <div class="input-group-append">
                    <button @click.prevent="changeName(1)" :disabled="disabled(1)" class="btn btn-outline-secondary">Change</button>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Kegmo I.D. (from box)</label>
                <input v-model="scale[1].id" type="text" class="form-control">
              </div>
              <button @click.prevent="register(1)" :disabled="scale[1].disableBtn" class="btn btn-primary">{{ btnText(1) }}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div v-if="addSecond" class="row mt-3">
      <!-- Register Scale #3 -->
      <div class="col-12 col-md">
        <div class="card shadow">
          <div class="card-header text-center">
            {{ headerText(2) }}
          </div>
          <div class="card-body text-center">
            <button v-if="!addThird" @click="addThird = true" class="btn btn-dark"><i class="fas fa-plus"></i></button>
            <form v-else>
              <div class="form-group">
                <label>Kegmo Name</label>
                <div class="input-group">
                  <input v-model="scale[2].name" type="text" class="form-control">
                  <div class="input-group-append">
                    <button @click.prevent="changeName(2)" :disabled="disabled(2)" class="btn btn-outline-secondary">Change</button>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Kegmo I.D. (from box)</label>
                <input v-model="scale[2].id" type="text" class="form-control">
              </div>
              <button @click.prevent="register(2)" :disabled="scale[2].disableBtn" class="btn btn-primary">{{ btnText(2) }}</button>
            </form>
          </div>
        </div>
      </div>
      <!-- Register Scale #4 -->
      <div class="col-12 col-md mobile-margin">
        <div v-if="addThird" class="card shadow">
          <div class="card-header text-center">
            {{ headerText(3) }}
          </div>
          <div class="card-body text-center">
            <button v-if="!addFourth" @click="addFourth = true" class="btn btn-dark"><i class="fas fa-plus"></i></button>
            <form v-else>
              <div class="form-group">
                <label>Kegmo Name</label>
                <div class="input-group">
                  <input v-model="scale[3].name" type="text" class="form-control">
                  <div class="input-group-append">
                    <button @click.prevent="changeName(3)" :disabled="disabled(3)" class="btn btn-outline-secondary">Change</button>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Kegmo I.D. (from box)</label>
                <input v-model="scale[3].id" type="text" class="form-control">
              </div>
              <button @click.prevent="register(3)" :disabled="scale[3].disableBtn" class="btn btn-primary">{{ btnText(3) }}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '@/api'
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      addSecond: false, // if user clicks to add a second scale, gets set to true
      addThird: false, // if user clicks to add a third scale, gets set to true
      addFourth: false,
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
        },
        {
          name: '',
          id: '',
          disableBtn: false
        }
      ]
    }
  },

  async beforeRouteLeave (to, from, next) {
    if (to.name === 'MyKegs') {
      this.$store.state.kegs.length = 0
      let res = await Api().get('/get-kegs', {
        params: {
          email: this.getEmail
        }
      })
      if (res.data.userKegs) {
        this.storeKegs(res.data.userKegs)
      } else if (res.data.message) {
        alert('Could not retrieve your Kegmos')
      }
    }
    next()
  },

  computed: {
    ...mapGetters([
      'getEmail',
      'getKegs'
    ])
  },

  async created () {
    let kegs = await Api().get('/get-kegs', {
      params: {
        email: this.getEmail
      }
    })
    switch (kegs.data.userKegs.length) {
      case 2:
        this.addSecond = true
        break
      case 3:
        this.addSecond = true
        this.addThird = true
        break
      case 4:
        this.addSecond = true
        this.addThird = true
        this.addFourth = true
        break
      default:
        break
    }
    for (let i = 0; i < kegs.data.userKegs.length; i++) {
      this.scale[i].name = kegs.data.userKegs[i].name
      this.scale[i].id = kegs.data.userKegs[i].id
      this.scale[i].disableBtn = true
    }
  },

  methods: {
    ...mapMutations([
      'storeKegs'
    ]),
    btnText (num) {
      return (this.scale[num].disableBtn ? 'Registered' : 'Submit')
    },
    async changeName (num) {
      let res = await Api().patch('/change-name', {
        email: this.getEmail,
        keg: num,
        name: this.scale[num].name
      })
      if (res.data.message === 'Name changed') {
        this.$store.state.kegs[num].name = this.scale[num].name
      } else {
        alert('Name change failed')
      }
    },
    disabled (num) {
      return (this.scale[num].name === '')
    },
    headerText (num) {
      switch (num) {
        case 1:
          return (this.addSecond ? 'Register Second Kegmo' : 'Add Another Kegmo')
        case 2:
          return (this.addThird ? 'Register Third Kegmo' : 'Add Another Kegmo')
        case 3:
          return (this.addFourth ? 'Register Fourth Kegmo' : 'Add Another Kegmo')
      }
    },
    async register (num) {
      const res = await Api().patch('/register', {
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

<style scoped lang="css">
i {
  font-size: 3rem;
}

.settings {
  position: absolute;
  margin-right: 0;
}

.settings:hover {
  cursor: pointer;
}

</style>
