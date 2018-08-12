<template lang="html">
  <div class="card shadow">
    <div class="card-header">
      <span class="h4">{{ getKegs[0].name }}</span>
    </div>
    <div class="card-body pt-1">
      <div class="d-flex justify-content-end pb-1"><i @click="menuItems = !menuItems" class="menu fas fa-bars"></i></div>
      <div v-if="menuItems" class="mb-3">
        <small>Status: <span class="badge" :class="[{ 'badge-success': connected }, { 'badge-danger': !connected }]">{{ connected ? 'Connected' : 'Disconnected' }}</span></small>
        <br>
        <small>Level: {{ percent }}%</small>
      </div>
      <keg-graphic :percent="percent" :beerColor="getKegs[0].color"></keg-graphic>
    </div>
    <div class="card-footer">
      <bounce-loader v-if="waiting" class="overlay d-flex align-items-center justify-content-center"></bounce-loader>
      <span class="settings btn btn-sm btn-outline-primary" @click="changeSettings = !changeSettings"><small>{{ settingsTxt }}</small></span>
      <button :disabled="changeSettings" @click="changeColor(0)" class="btn btn-color-picker pale mb-3"></button>
      <button :disabled="changeSettings" @click="changeColor(1)" class="btn btn-color-picker brown mb-3"></button>
      <button :disabled="changeSettings" @click="changeColor(2)" class="btn btn-color-picker dark mb-3"></button>
      <br>
      <button :disabled="changeSettings" class="btn btn-warning" @click="tare">Tare</button>
      <button :disabled="changeSettings" class="btn btn-success" @click="setFull">Set to Full</button>
    </div>
  </div>
</template>

<script>
import Api from '@/api'
import BounceLoader from 'vue-spinner/src/BounceLoader'
import KegGraphic from '@/components/kegGraphic'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      changeSettings: true,
      connected: false,
      fullWeight: null,
      menuItems: false,
      offset: null,
      waiting: false,
      weight: null
    }
  },

  components: {
    BounceLoader,
    KegGraphic
  },

  computed: {
    ...mapGetters([
      'getEmail',
      'getKegs'
    ]),
    percent () {
      return ((this.weight / this.fullWeight) * 100).toFixed(0)
    },
    roomId () {
      return this.$route.params.roomId
    },
    settingsTxt () {
      return (this.changeSettings ? 'Edit' : 'Done')
    }
  },

  methods: {
    async changeColor (num) {
      let res = await Api().patch('/change-color', {
        email: this.getEmail,
        keg: 0,
        color: num
      })
      if (res.data.message === 'Color changed') {
        this.$store.state.kegs[0].color = num
      }
    },
    async setFull () {
      this.fullWeight = this.weight
      Api().patch('/set-full-weight', {
        email: this.getEmail,
        keg: 0,
        fullWeight: this.weight
      })
    },
    tare () {
      this.waiting = true
      this.$socket.emit('tare', this.getKegs[0].id)
    }
  },

  sockets: {
    connect () {
      console.log(`Connected to socket ${this.$socket.id}`)
      this.$socket.emit('room', this.getKegs[0].id)
    },
    weightUpdate (weight) {
      if (weight) { this.connected = true }
      if (weight.medianOffset > 0) {
        this.waiting = false
        this.offset = weight.medianOffset
      }
      console.log(`Keg1 weight is: ${(weight.weight - (weight.medianOffset / 1000).toFixed(0))}`)
      this.weight = (weight.weight - (weight.medianOffset / 1000).toFixed(0))
    }
  },

  watch: {
    offset () {
      Api().patch('set-tare-weight', {
        email: this.getEmail,
        keg: 0,
        tareWeight: this.offest
      })
    }
  }
}
</script>

<style scoped lang="css">
.btn-color-picker {
  height: 30px;
  width: 30px;
}

.brown {
  background: linear-gradient(#a33700, #882300);
}

.dark {
  background: linear-gradient(#440600, #2f0200);
}

.pale {
  background: linear-gradient(#ffe377, #f7c600);
}

.settings {
  position: absolute;
  right: 6px;
}

.settings:hover {
  cursor: pointer;
}
</style>
