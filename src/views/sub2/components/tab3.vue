<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-06 23:30:13
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-12 23:05:59
 * @FilePath: \admin-app\src\components\Nav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<div class="wrapper">
  <Table :dataSource="list" :columns="columns" :scroll="{ x: 'max-content' }" :pagination="false">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'sex'">
        {{ record[column.key] === '0' ? '男' : '女' }}
      </template>
      <template v-else-if="column.key === 'organization'">
        {{ record[column.key] === '0' ? '否' : '是' }}
      </template>
      <template v-else-if="column.key === 'labor_contract'">
        {{ record[column.key] === '0' ? '未签订' : '已签订' }}
      </template>
      <template v-else-if="column.key === 'unemployment'">
        {{ record[column.key] === '0' ? '否' : '是' }}
      </template>
      <template v-else-if="column.key === 'monthly_basis'">
        {{ record[column.key] === '0' ? '否' : '是' }}
      </template>
      <template v-else-if="column.key === 'returning_home'">
        {{ record[column.key] === '0' ? '否' : '是' }}
      </template>
      <template v-else-if="column.key === 'training_back_home'">
        {{ record[column.key] === '0' ? '否' : '是' }}
      </template>
      <template v-else-if="column.key === 'entrepreneurship_training'">
        {{ record[column.key] === '0' ? '否' : '是' }}
      </template>
      <template v-else-if="column.key === 'job_provided'">
        {{ record[column.key] === '0' ? '否' : '是' }}
      </template>
      <template v-else-if="column.key === 'compulsory_education'">
        {{ record[column.key] === '0' ? '否' : '是' }}
      </template>
      <template v-else-if="column.key === 'migrant_workers'">
        {{ record[column.key] === '0' ? '否' : '是' }}
      </template>
      <template v-else-if="column.key === 'trade_union'">
        {{ record[column.key] === '0' ? '否' : '是' }}
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
// const router = useRouter();
// const active = ref('1');
const list = ref([]);
const currentPage = ref();
const Total = ref(0);
const columns = [
  {
    title: '公民身份号码',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '出生日期',
    dataIndex: 'birth',
    key: 'birth',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
  },
  {
    title: '民族',
    dataIndex: 'nation',
    key: 'nation',
  },
  {
    title: '政治面貌',
    dataIndex: 'political_outlook',
    key: 'political_outlook',
  },
  {
    title: '务工地所在省',
    dataIndex: 'located1',
    key: 'located1',
    width: 120,
  },
  {
    title: '务工地所在市',
    dataIndex: 'located2',
    key: 'located2',
    width: 120,
  },
  {
    title: '务工地所在区县',
    dataIndex: 'located3',
    key: 'located3',
    width: 130,
  },
  {
    title: '文化程度',
    dataIndex: 'degree_of_education',
    key: 'degree_of_education',
    width: 100,
  },
  {
    title: '户口性质',
    dataIndex: 'nature_of_household_registration',
    key: 'nature_of_household_registration',
    width: 150,
  },
  {
    title: '是否为农村集体经济组织成员',
    dataIndex: 'organization',
    key: 'organization',
    width: 220,
  },
  {
    title: '联系手机',
    dataIndex: 'phone',
    key: 'phone',
    width: 100,
  },
  {
    title: '联系电话',
    dataIndex: 'phones',
    key: 'phones',
    width: 100,
  },
  {
    title: '务工地情况',
    dataIndex: 'service_site',
    key: 'service_site',
    width: 110,
  },
  {
    title: '就业形式',
    dataIndex: 'employment',
    key: 'employment',
    width: 100,
  },
  {
    title: '劳动合同签订情况',
    dataIndex: 'labor_contract',
    key: 'labor_contract',
    width: 150,
  },
  {
    title: '从事行业',
    dataIndex: 'industryph',
    key: 'industryph',
    width: 100,
  },
  {
    title: '务工月收入(元)',
    dataIndex: 'income',
    key: 'income',
    width: 130,
  },
  {
    title: '上一年度务工收入(元)',
    dataIndex: 'last_income',
    key: 'last_income',
    width: 170,
  },
  {
    title: '上一年度务工时长',
    dataIndex: 'duration',
    key: 'duration',
    width: 150,
  },
  {
    title: '本年度已经务工时长',
    dataIndex: 'working_hours',
    key: 'working_hours',
    width: 160,
  },
  {
    title: '年内就业地数量',
    dataIndex: 'employment_number',
    key: 'employment_number',
    width: 140,
  },
  {
    title: '本年度是否办理过失业登记',
    dataIndex: 'unemployment',
    key: 'unemployment',
    width: 200,
  },
  {
    title: '是否按月足额领到工资',
    dataIndex: 'monthly_basis',
    key: 'monthly_basis',
    width: 180,
  },
  {
    title: '劳动权益保障途径',
    dataIndex: 'guarantee',
    key: 'guarantee',
    width: 150,
  },
  {
    title: '是否为返乡农民工',
    dataIndex: 'returning_home',
    key: 'returning_home',
    width: 150,
  },
  {
    title: '返乡后从事的工作',
    dataIndex: 'work_after_returning_home',
    key: 'work_after_returning_home',
    width: 150,
  },
  {
    title: '返乡时间',
    dataIndex: 'return_time',
    key: 'return_time',
  },
  {
    title: '创业项目类型',
    dataIndex: 'types_of_entrepreneurial_projects',
    key: 'types_of_entrepreneurial_projects',
    width: 120,
  },
  {
    title: '带动就业人数',
    dataIndex: 'promote_employment',
    key: 'promote_employment',
    width: 120,
  },
  {
    title: '是否参加过返乡创业培训',
    dataIndex: 'training_back_home',
    key: 'training_back_home',
    width: 190,
  },
  {
    title: '是否享受创业政策扶持',
    dataIndex: 'entrepreneurship_training',
    key: 'entrepreneurship_training',
    width: 180,
  },
  {
    title: '创业时间',
    dataIndex: 'start_up_time',
    key: 'start_up_time',
  },
  {
    title: '年内享受政府职业培训补贴次数',
    dataIndex: 'bumber_subsidies',
    key: 'bumber_subsidies',
    width: 230,
  },
  {
    title: '参加职业技能培训专业次数',
    dataIndex: 'professional',
    key: 'professional',
    width: 200,
  },
  {
    title: '国家职业资格等级（技能人员等级)',
    dataIndex: 'vocational',
    key: 'vocational',
    width: 250,
  },
  {
    title: '专业技术职务级别',
    dataIndex: 'technical',
    key: 'technical',
    width: 150,
  },
  {
    title: '第一个工作是否进行上岗培训',
    dataIndex: 'job_provided',
    key: 'job_provided',
    width: 220,
  },
  {
    title: '本年度是否享受过政府职业培训补贴',
    dataIndex: 'government_vocational_text',
    key: 'government_vocational_text',
    width: 260,
  },
  {
    title: '随迁学龄子女是否在务工常住地接受义务教育',
    dataIndex: 'compulsory_education',
    key: 'compulsory_education',
    width: 320,
  },
  {
    title: '在务工常住地居住情况',
    dataIndex: 'conditions_residence',
    key: 'conditions_residence',
    width: 180,
  },
  {
    title: '是否在务工常住地取得居住证',
    dataIndex: 'migrant_workers',
    key: 'migrant_workers',
    width: 220,
  },
  {
    title: '是否参加工会',
    dataIndex: 'trade_union',
    key: 'trade_union',
    width: 120,
  },
]
const getList = async (key) => {
  const { data } = await axios.post('/api/Industry/laborexport', {page: currentPage.value, list_rows: 10});
  list.value = data.data.data;
  Total.value = data.data.total;
  currentPage.value = data.data.current_page;
}
getList();

</script>
<style lang="scss" scoped>
@import './varible.scss';
</style>
