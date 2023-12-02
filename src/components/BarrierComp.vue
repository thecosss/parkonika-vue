<template>
    <div class="tile" :style="`left: ${left}px; top: ${top}px`">
        <div @click="toggleGate" :class="{ 'open': isOpen }" class="barrier"></div>
    </div>
</template>

<script>
    export default {
        props: ['left', 'top'],
        data() {
            return {
              isOpen: false,
            };
          },
          methods: {
            toggleGate() {
              this.isOpen = !this.isOpen;
            },
          },
    }
</script>

<style lang="less" scoped>
.tile {
    width: 64px;
    height: 64px;
    position: absolute;
    z-index: 1;
    // background-color: #fff;
}
.barrier {
    position: absolute;
    width: 200px;
    height: 200px;
    background-image: url('@/assets/barrier-sprite.webp');
    background-size: 5000px 200px;
    left: -43px;
    top: -98px;
    transition: background-position 0.5s steps(24);
    &.open {
        background-position: -4800px 0;
    }
}
</style>