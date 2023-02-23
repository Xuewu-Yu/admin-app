<template>
  <div class="main-wrapper">
    <div class="desc">
      <Image :src="getUrl('../../assets/home/rural_33.png')" :preview="false"></Image>
    </div>
    <div class="top-right">
      <!-- <image style="width:372px;height:175px" src="@/assets/home/rural_03.png" /> -->
    </div>
    <div class="img-wrap">
      <div v-for="x in data">
        <Image style="width:100px;height:153px;cursor:pointer" :src="x.url" :preview="false"></Image>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Image } from 'ant-design-vue';
// import url from '@/assets/home/rural_07.png';
const data = [
  {
    url: getUrl('../../assets/home/rural_1.png'),
  },
  {
    url: getUrl('../../assets/home/rural_2.png'),
  },
  {
    url: getUrl('../../assets/home/rural_3.png'),
  },
  {
    url: getUrl('../../assets/home/rural_4.png'),
  },
  {
    url: getUrl('../../assets/home/rural_5.png'),
  },
  {
    url: getUrl('../../assets/home/rural_6.png'),
  },
  {
    url: getUrl('../../assets/home/rural_7.png'),
  },
]
function getUrl(url) {
  return new URL(url, import.meta.url).href;
}
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
    // background: url('@/assets/home/rural_33.png');
    // background-size: 100% 100%;
    bottom: 253px;
    left: calc(50% - 0px);
    cursor: pointer;
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
  .img-wrap {
    display: flex;
    justify-content: center;
    padding-top:210px;
    padding-left: 60px;
    column-gap: 10px;
    div {
      &:nth-child(2), &:nth-child(6) {
        margin-top: -40px;
      }
      &:nth-child(3), &:nth-child(5) {
        margin-top: -80px;
      }
      &:nth-child(4) {
        margin-top: -120px;
      }
    }
  }
}
</style>
