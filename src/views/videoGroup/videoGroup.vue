<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-23 11:18:23
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-23 13:31:33
 * @FilePath: \admin-app\src\views\videoGroup\videoGroup.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="wrap">
    <div class="video-item" ref="videoItemRef" v-for="x in list" :key="x.number">
      <!-- <template v-if="x.url"> -->
        <p>{{ x.address }}</p>
        <VideoCard v-if="x.url" :width="`300`" :height="`150`" :url="x.url" />
      <!-- </template> -->
      <!-- <tempalte v-else> -->
        <div v-else class="empty">设备不在线</div>
      <!-- </tempalte> -->
    </div>
  </div>
</template>
<script setup>
import { nextTick, onMounted, ref } from "vue";
import axios from "@/utils/request";
import VideoCard from "@/components/videoCard.vue";
// import { useElementSize } from '@vueuse/core';
const list = ref([]);
// const videoItemRef = ref();
const style = ref({});
const initData = async () => {
  const {
    data: { data, total },
  } = await axios.request({
    url: "api/monitor/monitorList",
    method: "post",
    data: { list_rows: 100, page: 1 },
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
  })
  // nextTick(() => {
  //   style.value = useElementSize(videoItemRef.value[0]);
  //   console.log(width)
  // })
};
initData();

</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
  flex-flow: wrap row;
  gap: 10px;
  .video-item {
    // width: 20%;
    // height: 100px;
    text-align: center;
    position: relative;
    p {
      position: absolute;
      color:#fff;
      font-size: 14px;
      width: 100%;
      z-index:999;
      margin: 0;
      // text-align: left;
      // text-indent: 10px;
    }
    .empty {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      height: 150px;
      background: #000;
      color: #fff;
    }
  }
}
</style>