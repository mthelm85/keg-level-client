<template lang="html">
  <div class="card shadow">
    <div class="card-body">
      <span class="h4">{{ getKegs[0].name }}</span>
      <keg-graphic :percent="percent"></keg-graphic>
      <br>
      <button class="btn btn-warning" @click="tare">Tare</button>
      <button class="btn btn-success" @click="setFull">Set to Full</button>
    </div>
  </div>
</template>

<script>
import KegGraphic from '@/components/kegGraphic'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
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
    }
  },

  methods: {
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

<style lang="css">
</style>
