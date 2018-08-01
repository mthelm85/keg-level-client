<template lang="html">
  <div class="keg mt-5 mx-auto">
    <div class="beer" :style="{ height: beerLevel }">
      <div class="foam">
        <div class="foam-1"></div>
        <div class="foam-2"></div>
        <div class="foam-3"></div>
        <div class="foam-4"></div>
        <div class="foam-5"></div>
        <div class="foam-6"></div>
        <div class="foam-7"></div>
        <div class="foam-8"></div>
        <div class="foam-9"></div>
        <div class="foam-10"></div>
        <div class="foam-11"></div>
        <div class="foam-12"></div>
        <div class="foam-13"></div>
        <div class="foam-14"></div>
        <div class="foam-15"></div>
      </div>
      <div class="bubble bubble1"></div>
      <div class="bubble bubble2"></div>
      <div class="bubble bubble3"></div>
      <div class="bubble bubble4"></div>
      <div class="bubble bubble5"></div>
    </div>
</div>
</template>

<script>
export default {
  computed: {
    beerLevel () {
      return `${this.percent}%`
    }
  },
  props: ['percent']
}
</script>

<style lang="css">
.keg {
  background: linear-gradient(to right, gray, #b2b2b2, #b2b2b2, gray);
  background-color: gray;
  height: 300px;
  width: 200px;
  border-left: solid #e0e0e0 5px;
  border-bottom: solid #e0e0e0 5px;
  border-right: solid #e0e0e0 5px;
  border-top: solid #e0e0e0 1px;
  border-radius: 6px;
  position: relative;
}

.beer {
  background-color: #ffcc00;
  width: 100%;
  height: 90px;
  position: absolute;
  bottom: 0;
  background: linear-gradient(#ffe377, #f7c600);
}

/* The Foam */

.foam-1, .foam-2, .foam-3, .foam-4,
.foam-5, .foam-6, .foam-7, .foam-8,
.foam-9, .foam-10, .foam-11, .foam-12,
.foam-13, .foam-14, .foam-15
 {
  float: left;
  position: absolute;
  z-index: 999;
  width: 25px;
  height: 25px;
  border-radius: 30px;
  border-top: solid #f7f7f7 1px;
  background-color: #fefefe;
}
.foam-1 {
  top: -15px;
  left: 0px;
}
.foam-2 {
  top: -22px;
  left: 12px;
}
.foam-3 {
  top: -20px;
  left: 20px;
}
.foam-4 {
  top: -15px;
  left: 30px;
}
.foam-5 {
  top: -20px;
  left: 40px;
}
.foam-6 {
  top: -22px;
  left: 55px;
}
.foam-7 {
  top: -19px;
  left: 70px;
}

.foam-8 {
  top: -20px;
  left: 82px;
}
.foam-9 {
  top: -14px;
  left: 98px;
}
.foam-10 {
  top: -21px;
  left: 106px;
}
.foam-11 {
  top: -20px;
  left: 121px;
}
.foam-12 {
  top: -22px;
  left: 130px;
}
.foam-13 {
  top: -20px;
  left: 140px;
}
.foam-14 {
  top: -24px;
  left: 155px;
}

.foam-15 {
  top: -19px;
  left: 166px;
}

/* The Bubbles */

.bubble {
  -webkit-animation-name: bubble;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-name: bubble;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background-color: rgba(255, 255, 255, 0.2);
  bottom: 0;
  float: left;
  position: absolute;
  border-radius: 10px;
  height: 8px;
  width: 8px;
}

@keyframes bubble {
  0% { bottom: 0; }

   50% {
     background-color: rgba(255, 255, 255, 0.2);
      bottom: 40%;
   }

   100% {
     background-color: rgba(255, 255, 255, 0);
      bottom: 90%;
   }
}

.bubble1 {
  left: 10px;
  -webkit-animation-delay: 10ms;
  -webkit-animation-duration: 1000ms;
  animation-delay: 10ms;
  animation-duration: 1000ms;
}

.bubble2 {
  left: 50px;
  -webkit-animation-delay: 70ms;
  -webkit-animation-duration: 1100ms;
}

.bubble3 {
  left: 100px;
  -webkit-animation-delay: 120ms;
  -webkit-animation-duration: 1300ms;
}

.bubble4 {
  left: 130px;
  -webkit-animation-delay: 110ms;
  -webkit-animation-duration: 700ms;
}

.bubble5 {
  left: 165px;
  -webkit-animation-delay: 130ms;
  -webkit-animation-duration: 800ms;
}
</style>
