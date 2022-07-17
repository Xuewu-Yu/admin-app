<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-14 23:40:58
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-17 18:32:32
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
    <Tabs.TabPane v-for="x in tabs" :key="x.key" :tab="x.title">
      <Tabs v-if="isChildren" type="card" :tab-bar-gutter="0" v-model:active="childActive" @change="handTabsChild">
        <Tabs.TabPane v-for="item in x.children" :key="item.key" :tab="item.title"></Tabs.TabPane>
      </Tabs>
    </Tabs.TabPane>
  </Tabs>
  <template v-if="columns.length">
    <Table
      :dataSource="list"
      :columns="columns"
      :scroll="{ x: 'max-content' }"
      :pagination="false"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'sex'">
          {{ record[column.dataIndex] === '0' ? '男' : '女' }}
        </template>
        <template v-if="['poor', 'households', 'population'].includes(column.dataIndex)">
          {{ record[column.dataIndex] === '0' ? '否' : record[column.dataIndex] === '1' ? '是' : record[column.dataIndex] }}
        </template>
        <template v-if="column.dataIndex === 'eradication'">
          {{ record[column.dataIndex] === '0' ? '未脱贫' : record[column.dataIndex] === '1' ? '已脱贫（享受政策）' : '返贫' }}
        </template>
      </template>
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
const active = ref('1');
const list = ref([]);
const html = ref('');
const columns = ref([]);
const currentPage = ref(1);
const Total = ref(0);
const isChildren = ref(false);
const children = ref([]);
const childActive = ref('1-1');
const tabs = [
  {
    title: '农户',
    url: '',
    key: '1',
    children:[
      {
        title: '检测对象',
        url: 'api/Organization/testing',
        key: '1-1',
        column: [
          {
            title: '自然村',
            dataIndex: 'village_name',
          },
          {
            title: '户主姓名',
            dataIndex: 'name',
          },
          {
            title: '户主证件号码',
            dataIndex: 'code',
          },
          {
            title: '家庭人口',
            dataIndex: 'population',
          },
          {
            title: '致贫风险',
            dataIndex: 'risk',
          },
          {
            title: '纳入时间',
            dataIndex: 'inclusion',
          },
          {
            title: '消除时间',
            dataIndex: 'elimination',
          },
          {
            title: '备注',
            dataIndex: 'remarks',
          },
        ]
      },
      {
        title: '脱贫户',
        url: 'api/Organization/poverty',
        key: '1-2',
        column: [
          {
            title: '行政村',
            dataIndex: 'village_name',
          },
          {
            title: '姓名',
            dataIndex: 'name',
          },
          {
            title: '自然村',
            dataIndex: 'deserted',
          },
          {
            title: '证件号码',
            dataIndex: 'code',
          },
          {
            title: '人数',
            dataIndex: 'people',
          },
          {
            title: '与户主关系',
            dataIndex: 'head',
          },
          {
            title: '民族',
            dataIndex: 'nation',
          },
          {
            title: '脱贫属性',
            dataIndex: 'eradication',
          },
          {
            title: '致贫原因',
            dataIndex: 'causes',
          },
        ]
      },
      {
        title: '一般农户',
        url: 'api/Organization/peasant',
        key: '1-3',
        column: [
          {
            title: '村组',
            dataIndex: 'village_name',
          },
          {
            title: '姓名',
            dataIndex: 'name',
          },
          {
            title: '身份证号码',
            dataIndex: 'code',
          },
          {
            title: '家庭人口',
            dataIndex: 'population',
          },
          {
            title: '联系电话',
            dataIndex: 'phone',
          },
          {
            title: '特色产业',
            dataIndex: 'industry',
          },
          {
            title: '产业规模',
            dataIndex: 'scale',
          },
          {
            title: '务工人数',
            dataIndex: 'workers',
          },
          {
            title: '务工地点',
            dataIndex: 'place',
          },
          {
            title: '是否贫困户',
            dataIndex: 'poor',
          },
        ]
      },
    ]
  },
  {
    title: '村民小组',
    url: '',
    key: '2',
    children: [
      {
        title: '五里桥组',
        url: 'api/Organization/formation',
        key: '2-1',
        column:[
          {
            title: '行政村',
            dataIndex: 'village_name',
          },
          {
            title: '自然村',
            dataIndex: 'natural_name',
          },
          {
            title: '姓名',
            dataIndex: 'name',
          },
          {
            title: '身份证号码',
            dataIndex: 'code',
          },
          {
            title: '家庭人口',
            dataIndex: 'population',
          },
          {
            title: '是否贫困户(单选)',
            dataIndex: 'households',
          },
          {
            title: '备注',
            dataIndex: 'remarks',
          },
        ]
      },
      {
        title: '西头源组',
        url: 'api/Organization/xi',
        key: '2-2',
        column:[
          {
            title: '行政村',
            dataIndex: 'village_name',
          },
          {
            title: '自然村',
            dataIndex: 'natural_name',
          },
          {
            title: '姓名',
            dataIndex: 'name',
          },
          {
            title: '身份证号码',
            dataIndex: 'code',
          },
          {
            title: '家庭人口',
            dataIndex: 'population',
          },
          {
            title: '是否贫困户(单选)',
            dataIndex: 'households',
          },
          {
            title: '备注',
            dataIndex: 'remarks',
          },
        ]
      },
      {
        title: '杨源组',
        url: 'api/Organization/yang',
        key: '2-3',
        column:[
          {
            title: '行政村',
            dataIndex: 'village_name',
          },
          {
            title: '自然村',
            dataIndex: 'natural_name',
          },
          {
            title: '姓名',
            dataIndex: 'name',
          },
          {
            title: '身份证号码',
            dataIndex: 'code',
          },
          {
            title: '家庭人口',
            dataIndex: 'population',
          },
          {
            title: '是否贫困户(单选)',
            dataIndex: 'households',
          },
          {
            title: '备注',
            dataIndex: 'remarks',
          },
        ]
      },
      {
        title: '水沟组',
        url: 'api/Organization/water',
        key: '2-4',
        column:[
          {
            title: '行政村',
            dataIndex: 'village_name',
          },
          {
            title: '自然村',
            dataIndex: 'natural_name',
          },
          {
            title: '姓名',
            dataIndex: 'name',
          },
          {
            title: '身份证号码',
            dataIndex: 'code',
          },
          {
            title: '家庭人口',
            dataIndex: 'population',
          },
          {
            title: '是否贫困户(单选)',
            dataIndex: 'households',
          },
          {
            title: '备注',
            dataIndex: 'remarks',
          },
        ]
      },
      {
        title: '全巷子组',
        url: 'api/Organization/name',
        key: '2-5',
        column:[
          {
            title: '行政村',
            dataIndex: 'village_name',
          },
          {
            title: '自然村',
            dataIndex: 'natural_name',
          },
          {
            title: '姓名',
            dataIndex: 'name',
          },
          {
            title: '身份证号码',
            dataIndex: 'code',
          },
          {
            title: '家庭人口',
            dataIndex: 'population',
          },
          {
            title: '是否贫困户(单选)',
            dataIndex: 'households',
          },
          {
            title: '备注',
            dataIndex: 'remarks',
          },
        ]
      },
    ]
  },
  {
    title: '村民委员会',
    url: 'api/Organization/village',
    key: '3',
  }
]
const getList = async (url) => {
  html.value = '';
  // list.value = [];
  // columns.value = [];
  let api = '';
  const item = tabs.find(i => i.key === active.value);
  if (item.column) {
    columns.value = item.column;
  }
  if (url) {
    api = url;
  } else {
    api = item.url;
  }
  if (item.children) {
    isChildren.value = true;
    children.value = item.children;
    const child = children.value.find(i => i.key === childActive.value);
    api = child.url;
    columns.value = child.column;
  } else {
    columns.value = [];
    isChildren.value = false;
  }
  if (!api) return;
  const { data: { data, total } } = await axios.request({url: api, method: 'post', data: { list_rows: 10, page: currentPage.value }});
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
  const item = tabs.find(i => i.key === active.value);
  if (item.children) {
    isChildren.value = true;
    children.value = item.children;
    childActive.value = item.children[0].key;
    const url = item.children[0].url;
    getList(url);
  } else {
    isChildren.value = false;
    getList();
  }
}
const handTabsChild = (key) => {
  console.log(key)
  childActive.value = key;
  const item = tabs.find(i => i.key === active.value);
  const url = item.children.find(i => i.key === key).url;
  getList(url);
}
</script>
<style lang="scss" scoped>
@import '../../characteristicindustry/components/varible.scss';
</style>