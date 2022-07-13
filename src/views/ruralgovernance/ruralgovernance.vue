<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-06 23:30:13
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-13 23:11:16
 * @FilePath: \admin-app\src\components\Nav.vue
 * @Description: 乡村治理
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
    name: "村民自治",
    key: "1",
    url: '',
  },
  {
    name: '平安建设',
    key: '2',
    url: '',
  },
  {
    name: "新风陪树",
    key: "3",
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
@import '../characteristicindustry/components/varible.scss';

</style>
