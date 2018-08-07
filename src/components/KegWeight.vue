<template lang="html">
  <div class="container mt-5">
    <div class="row">
      <div class="col text-center mx-auto">
        <div class="card shadow">
          <div class="card-body">
            <span class="h4">{{ kegs[0].name }}</span>
            <keg-graphic :percent="percent"></keg-graphic>
            <br>
            <button class="btn btn-warning" @click="tare">Tare</button>
            <button class="btn btn-success" @click="setFull">Set to Full</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '@/api'
import KegGraphic from '@/components/kegGraphic'
export default {
  data () {
    return {
      fullWeight: null,
      kegs: [],
      weight: null
    }
  },

  components: {
    KegGraphic
  },

  computed: {
    percent () {
      return ((this.weight / this.fullWeight) * 100).toFixed(0)
    },
    roomId () {
      return this.$route.params.roomId
    }
  },

  async created () {
    let kegs = await Api().get('/get-kegs', {
      params: {
        email: 'mthelm85@gmail.com'
      }
    })
    let i = 0
    for (i; i < kegs.data.length; i++) {
      this.kegs.push(kegs.data[i])
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
      console.log(weight)
      this.weight = weight
    }
  }
}
</script>

<style lang="css">

</style>
