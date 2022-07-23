<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-06 23:30:13
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-23 14:18:40
 * @FilePath: \admin-app\src\components\Nav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<div class="wrapper">
  <Table :dataSource="list" :columns="columns" :scroll="{ x: 'max-content' }" :pagination="false" :rowClassName="rowClassName">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'sex'">
        {{ record[column.key] === '1' ? '女' : '男' }}
      </template>
      <template v-else-if="column.key === 'remarks'">
        {{ record[column.key] || '-' }}
      </template>
    </template>
  </Table>
  <div class="pagination-box">
    <Pagination v-model:current="currentPage" :showSizeChanger="false" :total="Total" :showTotal="total => `共${total}条`" @change="getList" />
  </div>
</div>
</template>
<script setup>
import { Table, Pagination } from 'ant-design-vue';
import { ref } from 'vue';
import axios from 'axios';
import { rowClassName } from '@/utils/function';
const list = ref([]);
const currentPage = ref();
const Total = ref(0);
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
  },
  {
    title: '身份证',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: '监护人姓名',
    dataIndex: 'jian_name',
    key: 'jian_name',
  },
  {
    title: '联系电话',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: '备注',
    dataIndex: 'remarks',
    key: 'remarks',
  },
]
const getList = async (key) => {
  const { data } = await axios.post('/api/service/education', {page: currentPage.value, list_rows: 10});
  list.value = data.data.data;
  Total.value = data.data.total;
  currentPage.value = data.data.current_page;
}
getList();

</script>
<style lang="scss" scoped>
@import '../../characteristicindustry/components/varible.scss';
</style>
