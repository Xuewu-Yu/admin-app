<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-23 11:18:23
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-25 09:51:57
 * @FilePath: \admin-app\src\views\videoGroup\videoGroup.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="wrap">
    <div class="video-item" ref="videoItemRef" v-for="x in listData" :key="x.number">
      <div class="title">{{ x.address }}</div>
      <VideoCard v-if="x.url" :width="`300`" :height="`150`" :url="x.url" />
      <div v-else class="empty">设备不在线</div>
    </div>
  </div>
  <div class="footer">
    <Pagination
      v-model:current="current"
      :defaultPageSize="pageSize"
      :total="list.length"
      :showTotal="(total) => `共 ${total} 条`"
    />
  </div>
</template>
<script setup>
import { nextTick, onMounted, ref, computed } from "vue";
import axios from "@/utils/request";
import VideoCard from "@/components/videoCard.vue";
import { Pagination } from 'ant-design-vue';
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});
const current = ref(1);
const pageSize = ref(9);
const listData = computed(() => {
  const start = (current.value - 1) * 9;
  const end = current.value * 9;
  return props.list.slice(start, end);
});
</script>
<style lang="scss" scoped>
.wrap {
  width: 60%;
  padding: 40px 16px 16px;
  display: flex;
  // justify-content: space-evenly;
  flex-flow: wrap row;
  gap: 50px;
  margin: auto;
  .video-item {
    // width: 20%;
    // height: 100px;
    text-align: center;
    position: relative;
    width: calc((100% - 100px) / 3);
    display: flex;
    justify-content: center;
    // margin-top: 20px;
    .title {
      position: absolute;
      color:#fff;
      font-size: 14px;
      width: 100%;
      z-index:999;
      margin: 0;
      // width: 300px;
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
.footer {
  padding: 0 16px;
  text-align: right;
}
</style>