<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-06 23:30:13
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-10 23:31:32
 * @FilePath: \admin-app\src\components\Nav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<div class="wrapper">
  <Tabs v-model:activeKey="active" type="card" :tabBarGutter="0" @change="handTabs">
    <Tabs.TabPane key="1" tab="养殖户">
      <Table :dataSource="list" :columns="columns1" :scroll="{ x: 1600 }">

      </Table>
    </Tabs.TabPane>
    <Tabs.TabPane key="2" tab="养殖合作社">
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
    dataIndex: 'poor_households_text',
    key: 'poor_households_text',
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
]
const getList = async (key) => {
  let url = key === '1' ? '/api/Industry/autumn' : '/api/Industry/namebreedingsociety';
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
