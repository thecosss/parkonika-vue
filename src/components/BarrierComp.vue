<template>
    <div class="tile barrier" :style="`left: ${left}px; top: ${top}px`">
        <img width="200" src="@/assets/barrier.webp" alt="">
    </div>
</template>

<script>
    export default {
        props: ['left', 'top']
    }
</script>

<style lang="less" scoped>
.tile {
    width: 64px;
    height: 64px;
    position: absolute;
    z-index: 1;
    // background-color: #fff;
    img {
        position: absolute;
    }
}
.barrier img {
    left: -43px;
    top: -98px;
}
</style>