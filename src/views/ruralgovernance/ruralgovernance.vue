<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-06 23:30:13
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-17 16:56:39
 * @FilePath: \admin-app\src\components\Nav.vue
 * @Description: 乡村治理
-->
<template>
<div class="wrap">
    <div class="header-wrap">
      <img src="http://fangkang.top/uploads/20220716/2deee211f6d6487de1feebf8249ff03f.png" alt="">
    </div>
    <div class="nav-wrap">
      <Nav :menus="menus" v-model:tab="subModel" @handlePage="handlePage"></Nav>
    </div>
    <div class="content-wrap">
      <!-- <div class="wrapper" v-html="html"></div> -->
      <div class="wrapper">
        <Tab1 v-if="subModel.includes('1')" />
        <Tab2 v-else-if="subModel.includes('2')" />
        <Tab3 v-else-if="subModel.includes('3')" />
      </div>
    </div>
  </div>
</template>
<script setup>
import Nav from "@/components/Nav.vue";
import { ref } from 'vue';
import axios from 'axios';
import Tab1 from './components/tab1.vue'
import Tab2 from './components/tab2.vue'
import Tab3 from './components/tab3.vue'
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
    name: "新风培树",
    key: "3",
    url: '',
  },
];
// axios.post(menus[0].url);
const handlePage = (key) => {
  
}
</script>
<style lang="scss" scoped>
@import '../characteristicindustry/components/varible.scss';

</style>
