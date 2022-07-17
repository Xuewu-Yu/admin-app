<template>
  <div class="wrapper" >
    <div v-if="html" v-html="html"></div>
    <Empty :description="'暂无数据'" v-else />
  </div>
</template>
<script setup>
import { Empty } from "ant-design-vue";
import axios from '@/utils/request';
import { ref } from 'vue';
const html = ref('');

const getList = async () => {
  const { data: { data } } = await axios.request({url: '/api/service/culture', method: 'post', data: { list_rows: 10, page: 1 }});
  html.value = data[0].maincontent;
}
getList()
</script>
<style lang="scss" scoped>
@import '../../characteristicindustry/components/varible.scss';
</style>