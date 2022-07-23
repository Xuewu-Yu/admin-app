<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-14 23:40:58
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-23 14:20:24
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
      :rowClassName="rowClassName"
    >
    </Table>
    <div class="pagination-box">
      <Pagination
        v-model:current="currentPage"
        :showSizeChanger="false"
        :total="Total"
        :showTotal="(total) => `共${total}条`"
        @change="getList"
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
import { rowClassName } from '@/utils/function';
const active = ref('1');
const list = ref([]);
const html = ref('');
const columns = ref([]);
const currentPage = ref(1);
const Total = ref(0);
const tabs = [
  {
    title: '安全监控',
    url: 'api/Rural/safety_monitor',
    key: '1',
  },
  {
    title: '疫情防控',
    url: 'api/Rural/safety_control',
    key: '2',
  },
  {
    title: '疫情防控-负责人',
    url: 'api/Rural/safety_controlperson',
    key: '3',
    column: [
      {
        title: '行政村',
        dataIndex: 'village_name',
      },
      {
        title: '自然村',
        dataIndex: 'natural_village',
      },
      {
        title: '自然村负责人',
        dataIndex: 'natural_village_person',
      },
      {
        title: '联防农户责任人',
        dataIndex: 'responsible_person',
      },
      {
        title: '联防农户',
        dataIndex: 'farmers',
      },
      {
        title: '备注',
        dataIndex: 'remarks',
      },
    ]
  },
  {
    title: '疫情防控-应急物资',
    url: 'api/Rural/safety_controlmaterial',
    key: '4',
    column: [
      {
        title: '物资名称',
        dataIndex: 'name',
      },
      {
        title: '数量',
        dataIndex: 'number',
      },
      {
        title: '已损坏或报废的物资(数量)',
        dataIndex: 'damaged',
      },
      {
        title: '能正常使用的物资（数量）',
        dataIndex: 'canuse',
      },
      {
        title: '物资储存地点',
        dataIndex: 'address',
      },
    ]
  },
  {
    title: '应急管理',
    url: 'api/Rural/safety_meet',
    key: '5',
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