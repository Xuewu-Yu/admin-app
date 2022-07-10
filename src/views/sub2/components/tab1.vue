<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-06 23:30:13
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-10 23:21:05
 * @FilePath: \admin-app\src\components\Nav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<div class="wrapper">
  <Tabs v-model:activeKey="active" type="card" :tabBarGutter="0" @change="handTabs">
    <Tabs.TabPane key="1" tab="春播种植">
      <Table :dataSource="list" :columns="columns1" :scroll="{ x: 1600 }">

      </Table>
    </Tabs.TabPane>
    <Tabs.TabPane key="2" tab="冬播种植">
      <Table :dataSource="list" :columns="columns2">
      </Table>
    </Tabs.TabPane>
  </Tabs>
</div>
</template>
<script setup>
import { Tabs, Table } from 'ant-design-vue';
import { ref } from 'vue';
import axios from 'axios';
const active = ref('1');
const list = ref([]);
const columns1 = [
  {
    title: '村名',
    dataIndex: 'village_name',
    key: 'village_name',
    width: 100,
  },
  {
    title: '项目名',
    dataIndex: 'project_name',
    key: 'project_name',
    width: 100,
  },
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
    title: '春播粮食面积合计',
    dataIndex: 'total_area',
    key: 'total_area',
    width: 100,
  },
  {
    title: '春小麦',
    dataIndex: 'spring_wheat',
    key: 'spring_wheat',
    width: 100,
  },
  {
    title: '单作玉米',
    dataIndex: 'corn',
    key: 'corn',
    width: 100,
  },
  {
    title: '单作大豆',
    dataIndex: 'soybean',
    key: 'soybean',
    width: 100,
  },
  {
    title: '大豆玉米带状符合种植',
    dataIndex: 'conform_planting',
    key: 'conform_planting',
    width: 100,
  },
  {
    title: '马铃薯',
    dataIndex: 'potato',
    key: 'potato',
    width: 100,
  },
  {
    title: '荞麦',
    dataIndex: 'buckwheat',
    key: 'buckwheat',
    width: 100,
  },
  {
    title: '糜子',
    dataIndex: 'millet',
    key: 'millet',
    width: 100,
  },
  {
    title: '谷子',
    dataIndex: 'millets',
    key: 'millets',
    width: 100,
  },
  {
    title: '高梁',
    dataIndex: 'sorghum',
    key: 'sorghum',
    width: 100,
  },
  {
    title: '杂豆',
    dataIndex: 'miscellaneous_beans',
    key: 'miscellaneous_beans',
    width: 100,
  },
  {
    title: '其它',
    dataIndex: 'other',
    key: 'other',
    width: 100,
  },
]
const columns2 = [
  {
    title: '村名',
    dataIndex: 'village_name',
    key: 'village_name',
  },
  {
    title: '项目名',
    dataIndex: 'project_name',
    key: 'project_name',
  },
  {
    title: '户名',
    dataIndex: 'account_name',
    key: 'account_name',
  },
  {
    title: '联系电话',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: '粮食面积合计',
    dataIndex: 'total_area',
    key: 'total_area',
  },
  {
    title: '冬小麦',
    dataIndex: 'spring_wheat',
    key: 'spring_wheat',
  },
  {
    title: '其它',
    dataIndex: 'other',
    key: 'other',
  },
]
const getList = async (key) => {
  let url = key === '1' ? '/api/Industry/plant' : '/api/Industry/autumn';
  const { data } = await axios.post(url, {page: 1, list_rows: 1});
  list.value = data.data.data;
}
getList();

const handTabs = (key) => {
  getList(key);
};
</script>
<style lang="scss" scoped>
.wrapper {
  padding: 20px;
}
</style>
