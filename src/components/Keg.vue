<template lang="html">
  <div class="card shadow">
    <div class="card-header">
      <span class="h4">{{ getKegs[num].name }}</span>
    </div>
    <transition name="fade">
      <div class="card-body pt-1">
        <div class="d-flex justify-content-end pb-2">
          <i @click="showStatus" class="menu fas fa-bars"></i>
          <b-modal
            ref="kegStatus"
            size="sm"
            hide-footer
            header-class="text-center"
            body-class="text-left"
            :title="getKegs[num].name"
            centered>
            Status: <span class="badge" :class="[{ 'badge-success': connected }, { 'badge-danger': !connected }]">{{ connected ? 'Connected' : 'Disconnected' }}</span>
            <br>
            Beer Level: <span class="badge badge-secondary">{{ percent }}%</span>
          </b-modal>
        </div>
        <transition name="height">
          <div v-if="menuItems" class="mb-3">
            <small>Status: <span class="badge" :class="[{ 'badge-success': connected }, { 'badge-danger': !connected }]">{{ connected ? 'Connected' : 'Disconnected' }}</span></small>
            <br>
            <small>Level: {{ percent }}%</small>
          </div>
        </transition>
        <keg-graphic :percent="percent" :beerColor="getKegs[num].color"></keg-graphic>
      </div>
    </transition>
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
      const result = ((this.weight / this.getKegs[this.num].fullWeight) * 100).toFixed(0)
      if (result > 100) {
        return 100
      } else if (result < 0) {
        return 0
      } else if (result >= 0 && result <= 100) {
        return result
      } else {
        return 0
      }
    },
    settingsTxt () {
      return (this.changeSettings ? 'Edit' : 'Done')
    }
  },

  created () {
    console.log(`Connected to socket ${this.$socket.id}`)
    this.$socket.emit('room', this.getKegs[this.num].id)
    this.fullWeight = this.getKegs[this.num].fullWeight
    this.offset = this.getKegs[this.num].tareWeight
  },

  methods: {
    async changeColor (num) {
      let res = await Api().patch('/change-color', {
        email: this.getEmail,
        keg: this.num,
        color: num
      })
      if (res.data.message === 'Color changed') {
        this.$store.state.kegs[this.num].color = num
      }
    },
    setFull () {
      this.$store.state.kegs[this.num].fullWeight = this.weight
      Api().patch('/set-full-weight', {
        email: this.getEmail,
        keg: this.num,
        fullWeight: this.weight
      })
    },
    showStatus () {
      this.$refs.kegStatus.show()
    },
    tare () {
      this.waiting = true
      this.$socket.emit('tare', this.getKegs[this.num].id)
    }
  },

  props: [
    'num'
  ],

  sockets: {
    weightUpdate (weight) {
      if (weight.roomId === this.getKegs[this.num].id) {
        this.connected = true
        console.log(`Keg${this.num + 1} weight is: ${(weight.weight - (weight.medianOffset / 1000).toFixed(0))}`)
        this.weight = (weight.weight - (weight.medianOffset / 1000).toFixed(0))
      }
      if (weight.medianOffset > 0) {
        this.waiting = false
        this.offset = weight.medianOffset
      }
    }
  },

  watch: {
    offset () {
      Api().patch('set-tare-weight', {
        email: this.getEmail,
        keg: this.num,
        tareWeight: this.offset
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
