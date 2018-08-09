<template lang="html">
  <div class="card shadow">
    <div class="card-header h4">
      {{ getKegs[0].name }}
    </div>
    <div class="card-body">
      <keg-graphic :percent="percent" :beerColor="getKegs[0].color"></keg-graphic>
    </div>
    <div class="card-footer">
      <span class="settings text-primary" @click="changeSettings = !changeSettings"><small>{{ settingsTxt }}</small></span>
      <button :disabled="changeSettings" @click="beerColor = 1" class="btn btn-color-picker pale mb-3"></button>
      <button :disabled="changeSettings" @click="beerColor = 2" class="btn btn-color-picker brown mb-3"></button>
      <button :disabled="changeSettings" @click="beerColor = 3" class="btn btn-color-picker dark mb-3"></button>
      <br>
      <button :disabled="changeSettings" class="btn btn-warning" @click="tare">Tare</button>
      <button :disabled="changeSettings" class="btn btn-success" @click="setFull">Set to Full</button>
    </div>
  </div>
</template>

<script>
import Api from '@/api'
import KegGraphic from '@/components/kegGraphic'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      beerColor: 1,
      changeSettings: true,
      fullWeight: null,
      weight: null
    }
  },

  components: {
    KegGraphic
  },

  computed: {
    ...mapGetters([
      'getKegs'
    ]),
    percent () {
      return ((this.weight / this.fullWeight) * 100).toFixed(0)
    },
    roomId () {
      return this.$route.params.roomId
    },
    settingsTxt () {
      return (this.changeSettings ? 'Settings' : 'Done')
    }
  },

  methods: {
    async changeColor (num) {
      let res = await Api().post('/change-color', {
        color: num
      })
    },
    setFull () {
      this.fullWeight = this.weight
    },
    tare () {
      this.$socket.emit('tare', this.kegs[0].id)
    }
  },

  sockets: {
    connect () {
      this.$socket.emit('room', this.kegs[0].id)
    },
    weightUpdate (weight) {
      console.log(`Keg1 weight is: ${weight}`)
      this.weight = weight
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
