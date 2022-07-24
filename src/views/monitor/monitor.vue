<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-06 23:30:13
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-24 19:59:02
 * @FilePath: \admin-app\src\components\Nav.vue
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
      <VideoGroup v-if="showVideo" :list="list" />
    </div>
  </div>
</template>
<script setup>
import Nav from "@/components/Nav.vue";
import { ref } from 'vue';
import Breadcrumb from "@/components/breadcrumb.vue";
import banner from '@/utils/banner';
import axios from '@/utils/request';
import VideoGroup from '@/views/videoGroup/videoGroup.vue';

const subModel = ref(['0']);
const showVideo = ref(false);
const menus = [
  {
    name: "种植监控",
    key: "0",
  },
  {
    name: '养殖监控',
    key: '1',
  },
  {
    name: "住房监控",
    key: "2",
  },
  {
    name: "安全监控",
    key: "3",
  },
];
const list = ref([]);
const initData = async (type) => {
  showVideo.value = false;
  const {
    data: { data, total },
  } = await axios.request({
    url: "api/monitor/monitorList",
    method: "post",
    data: { list_rows: 100, page: 1, type  },
  });
  list.value = data;
  list.value.forEach(async item => {
    const { resCode, data, errorMsg } = await axios.request({
      url: "api/monitor/monitor",
      method: "post",
      data: { deviceId: item.number },
    });
    if (resCode === 0) {
      item.url = data.mediaUrl;
    } else {
      item.errorMsg = errorMsg;
    }
  });
  showVideo.value = true;
};
initData(subModel.value[0]);
const handlePage = async (key) => {
  initData(key);
}
</script>
<style lang="scss" scoped>
@import '../characteristicindustry/components/varible.scss';
</style>
