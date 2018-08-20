<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view name="navbar"></router-view>
    </transition>
    <transition name="fade" mode="out-in">
      <router-view name="body"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="css">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.height-enter-active, .height-leave-active {
  transition: all 1s;
  max-height: 1600px;
}
.height-enter, .height-leave-to {
  max-height: 0;
}
.menu:hover {
  cursor: pointer;
  color: gray;
}
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5); /* Black background with opacity */
  z-index: 20;
}

@media screen and (max-width: 767px) {
  .mobile-margin { margin-top: 15px; }
}
</style>
