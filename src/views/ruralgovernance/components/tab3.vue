<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-14 23:40:58
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-17 19:15:42
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
  <template v-if="columns.length">
    <Table
      :dataSource="list"
      :columns="columns"
      :scroll="{ x: 'max-content' }"
      :pagination="false"
    >
    </Table>
    <div class="pagination-box">
      <Pagination
        v-model:current="currentPage"
        :showSizeChanger="false"
        :total="Total"
        :showTotal="(total) => `共${total}条`"
        @change="handlePage('1')"
      />
    </div>
  </template>
  <div v-else-if="html" v-html="html"></div>
  <Empty :description="'暂无数据'" v-else />
</template>
<script setup>
import { Table, Pagination, Tabs, Empty } from "ant-design-vue";
import { ref } from 'vue';
import axios from '@/utils/request';
const active = ref('1');
const list = ref([]);
const html = ref('');
const columns = ref([]);
const currentPage = ref(1);
const Total = ref(0);
// 安全监控 ： api/Rural/safety_monitor
// 疫情防控 ：api/Rural/safety_control
// 疫情防控-负责人 ： api/Rural/safety_controlperson
// 疫情防控-应急物资 ： api/Rural/safety_controlmaterial
// 应急管理 : api/Rural/safety_meet
// 村规民约 : api/Rural/villager_covenant
// 文明实战-志愿服务 : api/Rural/tree_civilizationservice
// 移风易俗-正气银行 : api/Rural/tree_changebank
// 先进典型 : api/Rural/tree_advanced
const tabs = [
  {
    title: '文明实战-志愿服务',
    url: 'api/Rural/tree_civilizationservice',
    key: '1',
  },
  {
    title: '移风易俗-正气银行',
    url: 'api/Rural/tree_changebank',
    key: '2',
  },
  {
    title: '先进典型',
    url: 'api/Rural/tree_advanced',
    key: '3',
  },
  
]
const getList = async () => {
  html.value = '';
  list.value = [];
  columns.value = [];
  const item = tabs.find(i => i.key === active.value);
  if (item.column) {
    columns.value = item.column;
  }
  const { data: { data, total } } = await axios.request({url: item.url, method: 'post', data: { list_rows: 10, page: currentPage.value }});
  if (total == 1 && !columns.length) {
    html.value = data[0].content;
  } else {
    list.value = data;
  }
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