<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-14 23:40:58
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-15 00:35:52
 * @FilePath: \admin-app\src\views\ruralgovernance\components\tab2.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <Tabs
    v-model:active="active"
    type="card"
    :tabBarGutter="0"
    @change="handTabs"
  >
    <Tabs.TabPane v-for="x in tabs" :key="x.key" :tab="x.title"></Tabs.TabPane>
  </Tabs>
  <div v-html="html"></div>
</template>
<script setup>
import { Table, Pagination, Tabs } from "ant-design-vue";
import { ref } from 'vue';
import axios from '@/utils/request';
const active = ref('1');
const html = ref('');
const Total = ref(0);
const currentPage = ref(1);
const tabs = [
  {
    title: '村规民约',
    url: 'api/Rural/villager_covenant',
    key: '1',
  },
]
const getList = async () => {
  html.value = '';
  const item = tabs.find(i => i.key === active.value);
  const { data: { data, total } } = await axios.request({url: item.url, method: 'post', data: { list_rows: 10, page: currentPage.value }});
  html.value = data[0].content;
  Total.value = total;
}
getList();
const handTabs = (key) => {
  active.value = key;
  currentPage.value = 1;
  getList();
}
</script>
<style lang="scss" scoped>
@import '../../characteristicindustry/components/varible.scss';
</style>