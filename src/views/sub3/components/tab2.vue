<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-06 23:30:13
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-12 23:42:19
 * @FilePath: \admin-app\src\components\Nav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<div class="wrapper">
  <Table :dataSource="list" :columns="columns" :scroll="{ x: 'max-content' }" :pagination="false">
    <template #bodyCell="{ column, record }">
      <template v-if="['createtime', 'updatetime'].includes(column.key)">
        {{ record[column.key] || '无' }}
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
    title: '身份证件名称',
    dataIndex: 'code_name',
    key: 'code_name',
  },
  {
    title: '身份证',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: '社保编码',
    dataIndex: 'shebao_code',
    key: 'shebao_code',
  },
  {
    title: '险种',
    dataIndex: 'insurancetype',
    key: 'insurancetype',
  },
  {
    title: '街道乡镇',
    dataIndex: 'street_towns',
    key: 'street_towns',
  },
  {
    title: '社区村组',
    dataIndex: 'community_group',
    key: 'community_group',
  },
  {
    title: '参保日期',
    dataIndex: 'cb_time',
    key: 'cb_time',
  },
  {
    title: '开始缴费日期',
    dataIndex: 'payment_time',
    key: 'payment_time',
  },
  {
    title: '停止缴费日期',
    dataIndex: 'end_time',
    key: 'end_time',
  },
  {
    title: '征收品目',
    dataIndex: 'collection_item',
    key: 'collection_item',
  },
  {
    title: '征收子目',
    dataIndex: 'sub_item',
    key: 'sub_item',
  },
  {
    title: '缴费年度',
    dataIndex: 'payment_year',
    key: 'payment_year',
  },
  {
    title: '申报日期',
    dataIndex: 'declarationtime',
    key: 'declarationtime',
  },
  {
    title: '费款所属期止',
    dataIndex: 'belongs',
    key: 'belongs',
  },
  {
    title: '应缴金额',
    dataIndex: 'payable_amount',
    key: 'payable_amount',
  },
  {
    title: '上解销号日期',
    dataIndex: 'cancellationtime',
    key: 'cancellationtime',
  },
  {
    title: '扣款日期',
    dataIndex: 'deductiontime',
    key: 'deductiontime',
  },
  {
    title: '经办渠道',
    dataIndex: 'channel',
    key: 'channel',
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
  const { data } = await axios.post('/api/service/medicalcare', {page: currentPage.value, list_rows: 10});
  list.value = data.data.data;
  Total.value = data.data.total;
  currentPage.value = data.data.current_page;
}
getList();

</script>
<style lang="scss" scoped>
@import '../../sub2/components/varible.scss';
</style>
