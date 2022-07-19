<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-06 23:30:13
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-19 22:06:11
 * @FilePath: \admin-app\src\components\Nav.vue
 * @Description: 人居环境
-->
<template>
<div class="wrap">
    <div class="header-wrap">
      <img src="@/assets/2.png" alt="">
      <Breadcrumb />
    </div>
    <div class="nav-wrap">
      <Nav :menus="menus" v-model:tab="subModel" @handlePage="handlePage"></Nav>
    </div>
    <div class="content-wrap">
      <div v-if="!isTable" class="wrapper" v-html="html"></div>
      <template v-if="isTable">
        <div class="wrapper">
          <Tabs v-model:active="active" type="card" :tabBarGutter="0" @change="handTabs">
            <Tabs.TabPane tab="2019-2021年改厕换" key="1"></Tabs.TabPane>
            <Tabs.TabPane tab="2021年系在建(厕屋)" key="2"></Tabs.TabPane>
            <Tabs.TabPane tab="2022年系在建(厕屋)" key="3"></Tabs.TabPane>
          </Tabs>
          <Table :dataSource="list" :columns="columns" :scroll="{ x: 'max-content' }" :pagination="false">
          </Table>
          <div class="pagination-box">
            <Pagination v-model:current="currentPage" :showSizeChanger="false" :total="Total" :showTotal="total => `共${total}条`" @change="handlePage('1')" />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script setup>
import { Table, Pagination, Tabs } from 'ant-design-vue';
import { ref } from 'vue';
import axios from '@/utils/request';
import Nav from "@/components/Nav.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
const subModel = ref(['1']);
const html = ref('');
const list = ref([]);
const columns = ref([]);
const currentPage = ref(1);
const Total = ref(0);
const isTable = ref(false);
const active = ref('1');

const menus = [
  {
    name: "厕所革命",
    key: "1",
    columns: true,
    tabs: {
      u1: '/api/Environment/toilet_gai',
      u2: '/api/Environment/toiletconstruction',
      u3: '/api/Environment/towtoiletconstruction',
      c1: [
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '身份证号',
          dataIndex: 'code',
        },
        {
          title: '联系电话',
          dataIndex: 'phone',
        },
        {
          title: '改厕时间',
          dataIndex: 'toilet_changing',
        },
        {
          title: '改厕模式',
          dataIndex: 'toilet_changing_mode',
        },
      ],
      c2: [
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '身份证号',
          dataIndex: 'code',
        },
        {
          title: '联系电话',
          dataIndex: 'phone',
        },
        {
          title: '建造时间',
          dataIndex: 'construction',
        },
        {
          title: '验收时间',
          dataIndex: 'acceptance_time',
        },
      ],
    }
  },
  {
    name: '垃圾革命',
    key: '2',
    url: '/api/Environment/garbage',
  },
  {
    name: "污水革命",
    key: "3",
    url: '/api/Environment/sewage',
  },
  {
    name: "拆违治乱",
    key: "4",
    url: '/api/Environment/chaos',
  },
  {
    name: "绿树花廊",
    key: "5",
    url: '/api/Environment/greentrees',
  },
];
// axios.post(menus[0].url);
columns.value = menus.find(i => i.key == '1').tabs[`c${active.value}`];
const handlePage = async (key) => {
  const item = menus.find(item => item.key === key);
  let url = '';
  if (item.url) {
    url = item.url;
  } else {
    url = item.tabs[`u${active.value}`];
  }
  const { data: { data, total } } = await axios.request({url: url, method: 'post', data: { page: currentPage.value, list_rows: 10 } });
  list.value = data;
  Total.value = total;
  if (item.columns) {
    isTable.value = true;
  } else {
    isTable.value = false;
    if (total == 1) {
      html.value = data[0].content;
    }
  }
}
handlePage('1');
const handTabs = (key) => {
  active.value = key;
  currentPage.value = 1;
  const index = ['2','3'].includes(key) ? 2 : 1;
  const item = menus.find(i => '1' == i.key).tabs;
  columns.value = item[`c${index}`];
  handlePage('1');
};
</script>
<style lang="scss" scoped>
@import '../characteristicindustry/components/varible.scss';
</style>
