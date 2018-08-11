<template lang="html">
  <div class="container mt-5">
    <div class="row m-3">
      <div class="col d-flex justify-content-center text-center mx-auto">
        <keg1></keg1>
      </div>
      <div v-if="getKegs.length > 1" class="col d-flex justify-content-center text-center mx-auto">
        <keg2></keg2>
      </div>
    </div>
    <div v-if="getKegs.length > 2" class="row m-3">
      <div class="col d-flex justify-content-center text-center mx-auto">
        <keg3></keg3>
      </div>
      <div class="col d-flex justify-content-center text-center mx-auto">
        <keg4 v-if="getKegs.length > 3"></keg4>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '@/api'
import Keg1 from '@/components/Keg1'
import Keg2 from '@/components/Keg2'
import Keg3 from '@/components/Keg3'
import Keg4 from '@/components/Keg4'
import { mapGetters, mapMutations } from 'vuex'
export default {
  components: {
    Keg1,
    Keg2,
    Keg3,
    Keg4
  },

  computed: {
    ...mapGetters([
      'getEmail',
      'getKegs'
    ])
  },

  async created () {
    if (this.getKegs.length === 0) {
      let kegs = await Api().get('/get-kegs', {
        params: {
          email: this.getEmail
        }
      })
      this.storeKegs(kegs.data.userKegs)
    }
  },

  methods: {
    ...mapMutations([
      'storeKegs'
    ])
  }
}
</script>

<style lang="css">

</style>
