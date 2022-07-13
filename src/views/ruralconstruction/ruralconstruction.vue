<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-06 23:30:13
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-13 22:52:27
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
      <div class="wrapper" v-if="listTotal == 1" v-html="html"></div>
      <NewsList v-if="listTotal > 1" :data="list" />
    </div>
  </div>
</template>
<script setup>
import Nav from "@/components/Nav.vue";
import { ref } from 'vue';
import axios from '@/utils/request';
import NewsList from '@/components/newsList.vue';
const subModel = ref(['1']);
const html = ref('');
const list = ref([]);
const listTotal = ref(0);
const menus = [
  {
    name: "用水保障",
    key: "1",
    url: '/api/Build/water',
  },
  {
    name: '用电保障',
    key: '2',
    url: '/api/Build/electric',
  },
  {
    name: "道路建设",
    key: "3",
    url: '/api/Build/road',
  },
  {
    name: "住房保障",
    key: "4",
    url: '/api/Build/room',
  },
  {
    name: "网络支撑",
    key: "5",
    url: '/api/Build/network',
  },
];
const initData = async (url) => {
  const { data: { data, total } } = await axios.request({url, method: 'post', data: { page: 1, list_rows: 15 }});
  if (total == 1) {
    html.value = data[0].content;
  } else {
    list.value = data;
  }
  // list.value.push(...data);
  listTotal.value = total;
}
initData(menus[1].url);
const handlePage = (key) => {
  const item = menus.find(item => item.key === key);
  initData(item.url);
}
</script>
<style lang="scss" scoped>
@import '../characteristicindustry/components/varible.scss';

</style>
