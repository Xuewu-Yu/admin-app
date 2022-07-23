<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-06 23:30:13
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-23 14:19:15
 * @FilePath: \admin-app\src\components\Nav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<div class="wrapper">
  <Tabs v-model:activeKey="active" type="card" :tabBarGutter="0" @change="handTabs">
    <Tabs.TabPane key="1" tab="低保户">
    </Tabs.TabPane>
    <Tabs.TabPane key="2" tab="五保户">
    </Tabs.TabPane>
  </Tabs>
  <Table :dataSource="list" :columns="columns" :scroll="{ x: 'max-content' }" :pagination="false" :rowClassName="rowClassName">
    <template #bodyCell="{ column, record }">
      <template v-if="['collegexue'].includes(column.key)">
        {{ record[column.key] === '1' ? '是' : '否' }}
      </template>
      <template v-else-if="['sex'].includes(column.key)">
        {{ record[column.key] === '1' ? '女' : '男' }}
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
    title: '行政村',
    dataIndex: 'village_name',
    key: 'village_name',
  },
  {
    title: '村组',
    dataIndex: 'village_group',
    key: 'village_group',
  },
  {
    title: '户主',
    dataIndex: 'householder',
    key: 'householder',
  },
  {
    title: '家庭成员姓名',
    dataIndex: 'member',
    key: 'member',
  },
  {
    title: '与户主关系',
    dataIndex: 'relationship',
    key: 'relationship',
  },
  {
    title: '身份证',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '类别',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '保障标准',
    dataIndex: 'guarantee_standard',
    key: 'guarantee_standard',
  },
  {
    title: '备注',
    dataIndex: 'remarks',
    key: 'remarks',
  },
  {
    title: '是否在校大学生',
    dataIndex: 'collegexue',
    key: 'collegexue',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    width: 100,
  },
  {
    title: '人员类型',
    dataIndex: 'people_type',
    key: 'people_type',
  },
]
const columns2 = [
  {
    title: '户主姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '家庭人口',
    dataIndex: 'population',
    key: 'population',
  },
  {
    title: '监护人',
    dataIndex: 'guardian',
    key: 'guardian',
  },
  {
    title: '监护人电话',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: '身份证号',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: '户籍',
    dataIndex: 'residence',
    key: 'residence',
  },
  {
    title: '住房地点、结构、面积',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '家庭住址',
    dataIndex: 'home_address',
    key: 'home_address',
  },
  {
    title: '是否符合纳入特困供养条件',
    dataIndex: 'support',
    key: 'support',
  },
  {
    title: '三保障、饮水是否达标',
    dataIndex: 'drinking',
    key: 'drinking',
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
  let url = key === '1' ? '/api/service/sociologyallowance' : '/api/service/guarantees';
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
@import '../../characteristicindustry/components/varible.scss';
</style>
