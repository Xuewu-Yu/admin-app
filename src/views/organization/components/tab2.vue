<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-14 23:40:58
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-17 17:55:54
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
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'sex'">
          {{ record[column.dataIndex] === '0' ? '男' : '女' }}
        </template>
        <template v-else-if="['committee','addvillage'].includes(column.dataIndex)">
          {{ record[column.dataIndex] === '0' ? '否' : '是' }}
        </template>
      </template>
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
  <div v-else v-html="html"></div>
</template>
<script setup>
import { Table, Pagination, Tabs } from "ant-design-vue";
import { ref } from 'vue';
import axios from '@/utils/request';
const active = ref('1');
const list = ref([]);
const html = ref('');
const columns = ref([]);
const currentPage = ref(1);
const Total = ref(0);
const tabs = [
  {
    title: '团支部团员花名册',
    url: 'api/Organization/build_branch',
    key: '1',
    column: [
      {
        title: '组织全称',
        dataIndex: 'oname',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '性别',
        dataIndex: 'sex',
      },
      {
        title: '出生年月',
        dataIndex: 'birth',
      },
      {
        title: '民族',
        dataIndex: 'nation',
      },
      {
        title: '手机号码',
        dataIndex: 'phone',
      },
      {
        title: '团内职务',
        dataIndex: 'regiment',
      },
      {
        title: '政治面貌',
        dataIndex: 'outlook',
      },
      {
        title: '团员发展编号',
        dataIndex: 'code',
      },
      {
        title: '入团年月',
        dataIndex: 'league',
      },
    ]
  },
  {
    title: '妇联执委委员信息',
    url: 'api/Organization/info',
    key: '2',
    column: [
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '担任职务',
        dataIndex: 'position',
      },
      {
        title: '年龄',
        dataIndex: 'age',
      },
      {
        title: '政治面貌',
        dataIndex: 'outlook',
      },
      {
        title: '是否进村支委',
        dataIndex: 'committee',
      },
      {
        title: '是否进村委',
        dataIndex: 'addvillage',
      },
      {
        title: '家庭住址',
        dataIndex: 'address',
      },
      {
        title: '联系电话',
        dataIndex: 'phone',
      },
    ]
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