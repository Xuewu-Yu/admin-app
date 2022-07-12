<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-06 23:30:13
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-13 00:42:01
 * @FilePath: \admin-app\src\components\Nav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<div class="wrapper">
  <Tabs v-model:activeKey="active" type="card" :tabBarGutter="0" @change="handTabs">
    <Tabs.TabPane key="1" tab="领取花名册">
    </Tabs.TabPane>
    <Tabs.TabPane key="2" tab="智能手环">
    </Tabs.TabPane>
  </Tabs>
  <Table :dataSource="list" :columns="columns" :scroll="{ x: 'max-content' }" :pagination="false">
    <template #bodyCell="{ column, record }">
      <template v-if="['distribution'].includes(column.key)">
        {{ record[column.key] === '1' ? '发放成功' : '发放失败' }}
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
const active = ref('1');
const list = ref([]);
const currentPage = ref();
const Total = ref(0);
const columns = ref([]);
const columns1 = [
  {
    title: '社会保障号码',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '参保群体',
    dataIndex: 'can_group',
    key: 'can_group',
  },
  {
    title: '特殊人员类别',
    dataIndex: 'personnel',
    key: 'personnel',
  },
  {
    title: '业务年月',
    dataIndex: 'businesstime',
    key: 'businesstime',
  },
  {
    title: '发放状态',
    dataIndex: 'distribution',
    key: 'distribution',
  },
  {
    title: '备注',
    dataIndex: 'remarks',
    key: 'remarks',
  },
  {
    title: '发放银行名称',
    dataIndex: 'bank',
    key: 'bank',
  },
  {
    title: '发放银行账号',
    dataIndex: 'account_number',
    key: 'account_number',
  },
  {
    title: '发放年月',
    dataIndex: 'issuetime',
    key: 'issuetime',
  },
  {
    title: '待遇享受开始年月',
    dataIndex: 'start_time',
    key: 'start_time',
  },
  {
    title: '总金额',
    dataIndex: 'total_amount',
    key: 'total_amount',
  },
  {
    title: '个人账户养老金',
    dataIndex: 'pension_account',
    key: 'pension_account',
  },
  {
    title: '高龄补贴',
    dataIndex: 'old_money',
    key: 'old_money',
  },
  {
    title: '被征地个人账户养老金',
    dataIndex: 'requisition',
    key: 'requisition',
  },
  {
    title: '省基础性养老金',
    dataIndex: 'basic_money',
    key: 'basic_money',
  },
  {
    title: '县基础性养老金',
    dataIndex: 'xian_money',
    key: 'xian_money',
  },
  {
    title: '个人账户养老金',
    dataIndex: 'pension_account',
    key: 'pension_account',
  },
  {
    title: '市基础性养老金',
    dataIndex: 'shi_money',
    key: 'shi_money',
  },
  {
    title: '中央基础性养老金',
    dataIndex: 'yang_money',
    key: 'yang_money',
  },
  {
    title: '其他补贴',
    dataIndex: 'other_money',
    key: 'other_money',
  },
  {
    title: '乡镇(街道)名称',
    dataIndex: 'xiang_name',
    key: 'xiang_name',
  },
  {
    title: '集体(社区)名称',
    dataIndex: 'shequ_name',
    key: 'shequ_name',
  },
]
const columns2 = [
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
    title: '联系方式',
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
  let url = key === '1' ? '/api/service/providaged' : '/api/service/bracelet';
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
@import '../../sub2/components/varible.scss';
</style>
