<template>
  <div class="parking-lot">
    <BarrierComp left="1500" top="1000" />
    <BarrierTurned left="500" top="500" />
  </div>
</template>

<script>
import BarrierComp from './components/BarrierComp.vue';
import BarrierTurned from './components/BarrierTurned.vue';

export default {
  components: {
    BarrierComp,
    BarrierTurned
  }
}
</script>

<style lang="less">
.parking-lot {
  width: 100vw;
  height: 100vh;
  background-color: #70777A;
}
</style>
