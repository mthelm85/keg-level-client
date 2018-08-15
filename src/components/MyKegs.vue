<template lang="html">
  <div class="container mt-5">
    <div class="row m-3">
      <div class="col d-flex justify-content-center text-center mx-auto">
        <keg :num="0"></keg>
      </div>
      <div v-if="getKegs.length > 1" class="col mobile-margin d-flex justify-content-center text-center mx-auto">
        <keg :num="1"></keg>
      </div>
    </div>
    <div v-if="getKegs.length > 2" class="row m-3">
      <div class="col d-flex justify-content-center text-center mx-auto">
        <keg :num="2"></keg>
      </div>
      <div class="col mobile-margin d-flex justify-content-center text-center mx-auto">
        <keg :num="3" v-if="getKegs.length > 3"></keg>
      </div>
    </div>
  </div>
</template>

<script>
import Keg from '@/components/Keg'
import { mapGetters } from 'vuex'
export default {
  components: {
    Keg
  },

  computed: {
    ...mapGetters([
      'getEmail',
      'getKegs'
    ])
  }
}
</script>

<style lang="css">

</style>
