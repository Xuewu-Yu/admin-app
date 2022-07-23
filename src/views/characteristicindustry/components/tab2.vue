<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-06 23:30:13
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-23 14:16:25
 * @FilePath: \admin-app\src\components\Nav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<div class="wrapper">
  <Tabs v-model:activeKey="active" type="card" :tabBarGutter="0" @change="handTabs">
    <Tabs.TabPane key="1" tab="养殖户">
    </Tabs.TabPane>
    <Tabs.TabPane key="2" tab="养殖合作社">
    </Tabs.TabPane>
  </Tabs>
   <Table :dataSource="list" :columns="columns" :scroll="{ x: 'max-content' }" :pagination="false" :rowClassName="rowClassName">
   <template #bodyCell="{ column, record }">
    <template v-if="column.key === 'poor_households'">
      {{ record[column.key] === '1' ? '是' : '否' }}
    </template>
   </template>
  </Table>
  <div class="pagination-box">
    <Pagination v-model:current="currentPage" :showSizeChanger="false" :total="Total" :showTotal="total => `共${total}条`" @change="getList(active)" />
  </div>
</div>
</template>
<script setup>
import { Tabs, Table, Pagination } from 'ant-design-vue';
import { ref } from 'vue';
import axios from 'axios';
import { rowClassName } from '@/utils/function';
const active = ref('1');
const list = ref([]);
const currentPage = ref();
const Total = ref(0);
const columns = ref([]);
const columns1 = [
  {
    title: '户名',
    dataIndex: 'account_name',
    key: 'account_name',
    width: 100,
  },
  {
    title: '联系电话',
    dataIndex: 'phone',
    key: 'phone',
    width: 100,
  },
  {
    title: '身份证号',
    dataIndex: 'code',
    key: 'code',
    width: 100,
  },
  {
    title: '肉羊',
    dataIndex: 'sheep',
    key: 'sheep',
    width: 100,
  },
  {
    title: '肉牛',
    dataIndex: 'cattle',
    key: 'cattle',
    width: 100,
  },
  {
    title: '育肥猪',
    dataIndex: 'pig',
    key: 'pig',
    width: 100,
  },
  {
    title: '能繁母猪',
    dataIndex: 'sow_breeding',
    key: 'sow_breeding',
    width: 100,
  },
  {
    title: '是否贫困户',
    dataIndex: 'poor_households',
    key: 'poor_households',
    width: 110,
  },
]
const columns2 = [
  {
    title: '合作社名称',
    dataIndex: 'name_of_cooperative',
    key: 'name_of_cooperative',
  },
  {
    title: '法人代表',
    dataIndex: 'legal_representative',
    key: 'legal_representative',
  },
  {
    title: '电话',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: '主要产业',
    dataIndex: 'major_industries',
    key: 'major_industries',
  },
  {
    title: '注册资金',
    dataIndex: 'registered_capital',
    key: 'registered_capital',
  },
  {
    title: '备注',
    dataIndex: 'remarks',
    key: 'remarks',
  },
  {
    title: '创建时间',
    dataIndex: 'createtime',
    key: 'createtime',
  },
  {
    title: '更新时间',
    dataIndex: 'updatetime',
    key: 'updatetime',
  },
]
const getList = async (key) => {
  let url = key === '1' ? '/api/Industry/breed' : '/api/Industry/namebreedingsociety';
  columns.value = key === '1' ? columns1 : columns2;
  const { data } = await axios.post(url, {page: currentPage.value, list_rows: 10});
  list.value = data.data.data;
  Total.value = data.data.total;
  currentPage.value = data.data.current_page;
}
getList('1');

const handTabs = (key) => {
  currentPage.value = 1;
  getList(key);
};
</script>
<style lang="scss" scoped>
@import './varible.scss';
</style>
