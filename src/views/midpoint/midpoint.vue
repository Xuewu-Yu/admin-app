<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-20 21:24:47
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-23 14:52:12
 * @FilePath: \admin-app\src\views\midpoint\midpoint.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="wrap">
    <div class="header-wrap">
      <img :src="banner.top" alt="">
      <Breadcrumb />
    </div>
    <div class="nav-wrap">
      <Nav :menus="menus" v-model:tab="subModel" @handlePage="handlePage"></Nav>
    </div>
    <div class="content-wrap" :style="{ backgroundImage: `url(${banner.banner}` }">
      <div class="wrapper" v-if="!subModel.includes('5')">
        <div v-if="html" v-html="html"></div>
        <Empty v-else-if="!html" :description="'暂无数据'" />
      </div>
      <div v-if="subModel.includes('5')" class="video-wrapper">
        <VideoGroup />
      </div>
    </div>
  </div>
</template>
<script setup>
import Nav from "@/components/Nav.vue";
import { Empty } from 'ant-design-vue';
import { ref } from 'vue';
import Breadcrumb from "@/components/breadcrumb.vue";
import axios from '@/utils/request';
import banner from '@/utils/banner';
import VideoGroup from "../videoGroup/videoGroup.vue";
const subModel = ref(['1']);
const html = ref('');
const menus = [
  {
    name: "村务监督",
    key: "1",
    url: 'api/Number/affairs',
  },
  {
    name: "人大监督",
    key: "2",
    url: 'api/Number/congress'
  },
  {
    name: "村民议事",
    key: "3",
    url: 'api/Number/deliberation',
  },
  {
    name: "统战管理",
    key: "4",
    url: 'api/Number/united',
  },
  {
    name: '监控',
    key: '5',
  }
]
const handlePage = async (key) => {
  if (key === '5') {
    html.value = '';
    return;
  };
  const item = menus.find(item => item.key === key);
  const { data: { data, total } } = await axios.request({url: item.url, method: 'post', data: { page: 1, list_rows: 10 } });
  html.value = data[0].content;
}
handlePage('1');
</script>
<style lang="scss" scoped>
@import '../characteristicindustry/components/varible.scss';
.video-wrapper {
  padding: 40px 0;
}
</style>