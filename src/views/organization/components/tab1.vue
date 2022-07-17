<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-14 23:40:58
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-17 23:09:48
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
      <Tabs
        v-if="isChildren"
        type="card"
        :tab-bar-gutter="0"
        v-model:active="childActive"
        @change="handTabsChild"
      >
        <Tabs.TabPane
          v-for="item in x.children"
          :key="item.key"
          :tab="item.title"
        ></Tabs.TabPane>
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
          {{ record[column.dataIndex] === "0" ? "男" : "女" }}
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
import { ref } from "vue";
import axios from "@/utils/request";
const active = ref("1");
const list = ref([]);
const html = ref("");
const columns = ref([]);
const currentPage = ref(1);
const Total = ref(0);
const isChildren = ref(false);
const children = ref([]);
const childActive = ref('1-1');
const tabs = [
  {
    title: "党员",
    url: "",
    key: "1",
    children: [
      {
        title: "致富带富党员",
        url: "api/Organization/rich",
        key: "1-1",
        column: [
          {
            title: "姓名",
            dataIndex: "name",
          },
          {
            title: "性别",
            dataIndex: "sex",
          },
          {
            title: "年龄",
            dataIndex: "age",
          },
          {
            title: "致富带富类型",
            dataIndex: "type",
          },
          {
            title: "教育管理情况",
            dataIndex: "administration",
          },
          {
            title: "技能培训开展情况",
            dataIndex: "education",
          },
          {
            title: "干事创业情况",
            dataIndex: "officers",
          },
          {
            title: "备注",
            dataIndex: "remarks",
          },
        ],
      },
      {
        title: "在职党员",
        url: "api/Organization/incumbentmember",
        key: "1-2",
        column: [
          {
            title: "姓名",
            dataIndex: "name",
          },
          {
            title: "性别",
            dataIndex: "sex",
          },
          {
            title: "年龄",
            dataIndex: "age",
          },
          {
            title: "职 务",
            dataIndex: "position",
          },
          {
            title: "日常管理",
            dataIndex: "management",
          },
          {
            title: "教育培训",
            dataIndex: "education",
          },
          {
            title: "年终考核",
            dataIndex: "assessment",
          },
          {
            title: "年度考核结果",
            dataIndex: "results",
          },
          {
            title: "备注",
            dataIndex: "remarks",
          },
        ],
      },
      {
        title: "党员花名",
        url: "api/Organization/membername",
        key: "1-3",
        column: [
          {
            title: "乡镇",
            dataIndex: "township",
          },
          {
            title: "党支部",
            dataIndex: "party_branch",
          },
          {
            title: "党员编号",
            dataIndex: "member",
          },
          {
            title: "姓名",
            dataIndex: "name",
          },
          {
            title: "性别",
            dataIndex: "sex",
          },
          {
            title: "学历",
            dataIndex: "education",
          },
          {
            title: "出生日期",
            dataIndex: "date_birth",
          },
          {
            title: "入党时间",
            dataIndex: "joining",
          },
          {
            title: "转正时间",
            dataIndex: "confirmation",
          },
          {
            title: "身份证号",
            dataIndex: "code",
          },
          {
            title: "管理类别",
            dataIndex: "type",
          },
          {
            title: "联系电话",
            dataIndex: "phone",
          },
        ],
      },
      {
        title: "年老体弱党员",
        url: "api/Organization/aged",
        key: "1-4",
        column: [
          {
            title: "姓名",
            dataIndex: "name",
          },
          {
            title: "性别",
            dataIndex: "sex",
          },
          {
            title: "年龄",
            dataIndex: "age",
          },
          {
            title: "健康状况",
            dataIndex: "health",
          },
          {
            title: "家庭住址",
            dataIndex: "address",
          },
          {
            title: "联系电话",
            dataIndex: "phone",
          },
          {
            title: "送学情况",
            dataIndex: "delivery",
          },
          {
            title: "走访慰问情况",
            dataIndex: "condolences",
          },
          {
            title: "作用发挥情况",
            dataIndex: "play",
          },
          {
            title: "备注",
            dataIndex: "remarks",
          },
        ],
      },
      {
        title: "无职党员",
        url: "api/Organization/duty",
        key: "1-5",
        column: [
          {
            title: "序号",
            dataIndex: "number",
          },
          {
            title: "姓名",
            dataIndex: "name",
          },
          {
            title: "性别",
            dataIndex: "sex",
          },
          {
            title: "年龄",
            dataIndex: "age",
          },
          {
            title: "学历",
            dataIndex: "education",
          },
          {
            title: "岗  位",
            dataIndex: "position",
          },
          {
            title: "职  责",
            dataIndex: "duty",
          },
          {
            title: "备注",
            dataIndex: "remarks",
          },
        ],
      },
      {
        title: "后进党员",
        url: "api/Organization/backward",
        key: "1-6",
        column: [
          {
            title: "姓名",
            dataIndex: "name",
          },
          {
            title: "所在支部",
            dataIndex: "branch",
          },
          {
            title: "认定事实",
            dataIndex: "facts",
          },
          {
            title: "处置方式",
            dataIndex: "method",
          },
          {
            title: "帮教提升措施",
            dataIndex: "measures",
          },
          {
            title: "备注",
            dataIndex: "remarks",
          },
        ],
      },
      {
        title: "流动党员",
        url: "api/Organization/flow",
        key: "1-7",
        column: [
          {
            title: "姓名",
            dataIndex: "name",
          },
          {
            title: "性别",
            dataIndex: "sex",
          },
          {
            title: "年龄",
            dataIndex: "age",
          },
          {
            title: "流出党支部",
            dataIndex: "branch",
          },
          {
            title: "流入地",
            dataIndex: "address",
          },
          {
            title: "从事职业",
            dataIndex: "profession",
          },
          {
            title: "个人电话",
            dataIndex: "phone",
          },
          {
            title: "联系人员",
            dataIndex: "person",
          },
        ],
      },
      {
        title: "生活困难党员",
        url: "api/Organization//difficulty",
        key: "1-8",
        column: [
          {
            title: "姓名",
            dataIndex: "name",
          },
          {
            title: "性别",
            dataIndex: "sex",
          },
          {
            title: "年龄",
            dataIndex: "age",
          },
          {
            title: "家庭住址",
            dataIndex: "address",
          },
          {
            title: "联系电话",
            dataIndex: "phone",
          },
          {
            title: "生活困难原因",
            dataIndex: "delivery",
          },
          {
            title: "帮扶人员",
            dataIndex: "condolences",
          },
          {
            title: "帮扶措施落实情况",
            dataIndex: "play",
          },
          {
            title: "备注",
            dataIndex: "remarks",
          },
        ],
      },
    ],
  },
  {
    title: "党小组",
    url: "",
    key: "2",
    children: [
      {
        title: "西头源水沟",
        url: "api/Organization/partygroup",
        key: "2-1",
        column: [
          {
            title: "乡镇",
            dataIndex: "township",
          },
          {
            title: "党支部",
            dataIndex: "branch",
          },
          {
            title: "党员编号",
            dataIndex: "member",
          },
          {
            title: "姓名",
            dataIndex: "name",
          },
          {
            title: "性别",
            dataIndex: "sex",
          },
          {
            title: "学历",
            dataIndex: "education",
          },
          {
            title: "出生日期",
            dataIndex: "birth",
          },
          {
            title: "入党时间",
            dataIndex: "joining",
          },
          {
            title: "转正时间",
            dataIndex: "confirmation",
          },
          {
            title: "身份证号",
            dataIndex: "code",
          },
          {
            title: "管理类别",
            dataIndex: "management",
          },
          {
            title: "联系电话",
            dataIndex: "phone",
          },
        ],
      },
      {
        title: "杨源全巷子五里桥",
        url: "api/Organization/partygroupyang",
        key: "2-2",
        column: [
          {
            title: "乡镇",
            dataIndex: "township",
          },
          {
            title: "党支部",
            dataIndex: "branch",
          },
          {
            title: "党员编号",
            dataIndex: "member",
          },
          {
            title: "姓名",
            dataIndex: "name",
          },
          {
            title: "性别",
            dataIndex: "sex",
          },
          {
            title: "学历",
            dataIndex: "education",
          },
          {
            title: "出生日期",
            dataIndex: "birth",
          },
          {
            title: "入党时间",
            dataIndex: "joining",
          },
          {
            title: "转正时间",
            dataIndex: "confirmation",
          },
          {
            title: "身份证号",
            dataIndex: "code",
          },
          {
            title: "管理类别",
            dataIndex: "management",
          },
          {
            title: "联系电话",
            dataIndex: "phone",
          },
        ],
      },
    ],
  },
  {
    title: "水沟村党支部",
    url: "api/Organization/branch",
    key: "3",
  },
];
const getList = async (url) => {
  html.value = "";
  // list.value = [];
  // columns.value = [];
  let api = '';
  const item = tabs.find((i) => i.key === active.value);
  if (item.column) {
    columns.value = item.column;
  } else {
    columns.value = [];
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
  const {
    data: { data, total },
  } = await axios.request({
    url: api,
    method: "post",
    data: { list_rows: 10, page: currentPage.value },
  });
  if (total == 1 && !columns.value.length) {
    html.value = data[0].content;
  } else {
    list.value = data;
  }
  Total.value = total;
};
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
};
const handTabsChild = (key) => {
  childActive.value = key;
  const item = tabs.find(i => i.key === active.value);
  const url = item.children.find(i => i.key === key).url;
  getList(url);
}
</script>
<style lang="scss" scoped>
@import "../../characteristicindustry/components/varible.scss";
</style>