<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-06 23:30:13
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-13 01:26:39
 * @FilePath: \admin-app\src\components\Nav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<div class="wrap">
    <div class="header-wrap">
      <img src="../../assets/2.png" alt="">
    </div>
    <div class="nav-wrap">
      <Nav :menus="menus" v-model:tab="subModel" @handlePage="handlePage"></Nav>
    </div>
    <div class="content-wrap">
      <div class="wrapper" v-html="html"></div>
    </div>
  </div>
</template>
<script setup>
import Nav from "@/components/Nav.vue";
import { ref } from 'vue';
import axios from 'axios';
const subModel = ref(['1']);
const html = ref('');

const menus = [
  {
    name: "厕所革命",
    key: "1",
    url: '',
  },
  {
    name: '垃圾革命',
    key: '2',
    url: '',
  },
  {
    name: "污水革命",
    key: "3",
    url: '',
  },
  {
    name: "拆违治乱",
    key: "4",
    url: '',
  },
  {
    name: "绿树花廊",
    key: "5",
    url: '',
  },
];
// axios.post(menus[0].url);
const handlePage = (key) => {
  const item = menus.find(item => item.key === key);
  // axios.post(item.url);
}
</script>
<style lang="scss" scoped>
@import '../sub2/components/varible.scss';
.wrap {
  .header-wrap {
    height: 150px;
  }
  .nav-wrap {
    display: flex;
    justify-content: center;
    background: #b10100;
  }
  .content-wrap {
    background: url('../../assets/1.png');
    background-origin: content-box;
    background-repeat: no-repeat;
    background-position: top;
    background-attachment: scroll;
    min-height: calc(100vh - 196px);
  }
}
</style>
