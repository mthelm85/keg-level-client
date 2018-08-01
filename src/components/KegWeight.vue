<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col mx-auto">
        <keg-graphic :percent="percent"></keg-graphic>
        <br>
        <button class="btn btn-warning" @click="tare">Tare</button>
        <button class="btn btn-success" @click="setFull">Set to Full</button>
      </div>
    </div>
  </div>
</template>

<script>
import KegGraphic from '@/components/kegGraphic'
export default {
  data () {
    return {
      weight: null,
      fullWeight: null
    }
  },

  components: {
    KegGraphic
  },

  computed: {
    percent () {
      return ((this.weight / this.fullWeight) * 100).toFixed(0)
    }
  },

  created () {
    this.$socket.emit('getWeight')
  },

  methods: {
    setFull () {
      this.fullWeight = this.weight
    },
    tare () {
      this.$socket.emit('tare')
    }
  },

  sockets: {
    connect () {
      alert('socket connected')
    },
    weightUpdate (data) {
      this.weight = data.weight
    }
  }
}
</script>

<style lang="css">

</style>
