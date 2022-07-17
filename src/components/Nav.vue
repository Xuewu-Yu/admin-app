<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-06 23:30:13
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-17 18:45:30
 * @FilePath: \admin-app\src\components\Nav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <Menu mode="horizontal" @click="handlePage" v-model:selectedKeys="subModel" theme="dark">
    <NavItem v-for="item in menus" :key="item.key" :item="item"></NavItem>
  </Menu>
</template>
<script setup>
import { Menu, SubMenu } from "ant-design-vue";
import NavItem from "./NavItem.vue";
import { useRouter } from 'vue-router';
import { useVModel } from '@vueuse/core';
const router = useRouter();
const props = defineProps({
  tab: { type: Array, default: () => [] },
  menus: { type: Array, default: () => [] },
})
const emit = defineEmits(['update:tab','handlePage']);
const subModel = useVModel(props, 'tab', emit);
const menu = useVModel(props, 'menus');
menu.value.unshift({
  name: '首页',
  path: '/',
  key: 'index',
})

// const menus = [
//   {
//     name: "首页1",
//     key: "sub5",
//     path: '/organization'
//   },
//   {
//     name: '首页2',
//     key: 'sub1',
//   },
//   {
//     name: "特色产业",
//     key: "sub2",
//     path: '/characteristicindustry'
//   },
//   {
//     name: "公共服务",
//     key: "sub3",
//     path: '/publicservice'
//   },
//   {
//     name: "乡村建设",
//     key: "sub4",
//     path: '/ruralconstruction',
//   },
//   {
//     name: "人居环境",
//     key: "sub7",
//     path: '/humansettlements',
//   },
//   {
//     name: "乡村治理",
//     key: "sub6",
//     path: '/ruralgovernance'
//   },
// ];
const handlePage = ({ key, name }) => {
  if (key === 'index') {
    router.push('/');
  } else {
    emit('handlePage', key);
  }
}
</script>
<style lang="scss" scoped>
.ant-menu {
  background: #b10100 !important;
  color: #fff;
  font-size: 24px;
  font-family: "KaiTi";
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: start;
  :deep(.ant-menu-item) {
    color: #fff;
    &:focus-visible {
      outline: 0;
      box-shadow: none;
    }
  } 
  :deep(.ant-menu-dark) {
    background-color: rgb(227, 23, 0) !important;
  }
  :deep(.ant-menu-item-selected) {
    background-color: rgb(227, 23, 0) !important;
  }
  :deep(.ant-menu-item-active) {
    background-color: rgb(227, 23, 0) !important;
  }

}
.ant-menu-horizontal {
  border-bottom: none;
}
</style>
