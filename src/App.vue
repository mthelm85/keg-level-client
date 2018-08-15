<template>
  <div id="app">
    <router-view name="navbar"></router-view>
    <router-view name="body"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
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
