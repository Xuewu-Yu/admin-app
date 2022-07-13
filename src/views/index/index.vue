<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-06 23:30:13
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-13 22:26:16
 * @FilePath: \admin-app\src\views\index\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="wrap">
    <!-- <div class="header-wrap">
      <img src="../../assets/2.png" alt="">
    </div> -->
    <div class="nav-wrap">
      <!-- <Nav v-model:tab="sub" :menus=""></Nav> -->
    </div>
    <div class="content-wrap">
      <!-- <Home v-if="sub === 'sub1'" />
      <Board-card v-if="sub === 'sub2'" />
      <Video-card v-if="sub === 'sub3'" />
      <NewsList v-if="sub === 'sub4'" /> -->
      <NewHome />
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import { Carousel, Card, List } from 'ant-design-vue';
// import Nav from '@/components/Nav.vue';
// import Home from '@/components/home.vue';
// import BoardCard from '@/components/boardCard.vue';
// import VideoCard from '@/components/videoCard.vue';
// import NewsList from '@/components/newsList.vue';
import NewHome from '@/components/newHome.vue';
import axios from 'axios';

const sub = ref('sub5');

watch(sub, () => {
console.log(sub);
});
</script>

<style lang="scss" scoped>
.wrap {
  height:100vh;
  .nav-wrap {
    display: flex;
    justify-content: center;
    background: #b10100;
    :deep(.ant-menu) {
      background: #b10100;
      color: #fff;
      font-size: 16px;
      width: 1200px;
      display: flex;
      justify-content: center;
    }
  }
  .content-wrap {
    background: url('../../assets/1.png');
    background-origin: content-box;
    background-repeat: no-repeat;
    background-position: top;
    background-attachment: scroll;
    min-height: 100vh;
    background-size: 100% 100%;
  }
}
</style>
