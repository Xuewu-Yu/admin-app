<template>
  <div class="main-wrapper">
    <div class="desc">
      
    </div>
    <div class="top-right">
      <!-- <image style="width:372px;height:175px" src="@/assets/home/rural_03.png" /> -->
    </div>
  </div>
</template>
<script setup>
import { Image } from 'ant-design-vue';

</script>
<style lang="scss" scoped>
.main-wrapper {
  width: 100vw;
  height:100vh;
  background: url('@/assets/home/rural.png');
  background-size: 100% 100%;
  .desc {
    position: absolute;
    width: 118px;
    height: 55px;
    // margin: auto;
    background: url('@/assets/home/rural_33.png');
    background-size: 100% 100%;
    bottom: 253px;
    left: calc(50% - 0px);
  }
  .top-right {
    position: absolute;
    right: 0;
    top: 0;
    width: 186px;
    height: 67.5px;
    background: url('@/assets/home/rural_03.png');
    background-size: 100% 100%;
  }
}
</style>
