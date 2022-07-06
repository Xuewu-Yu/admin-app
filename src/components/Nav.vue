<template>
  <Menu mode="horizontal" @click="handlePage">
    <NavItem v-for="item in menus" :key="item.key" :item="item"></NavItem>
  </Menu>
</template>
<script setup>
import { Menu, SubMenu } from "ant-design-vue";
import { UpOutlined } from "@ant-design/icons-vue";
import NavItem from "./NavItem.vue";
import { useRouter } from 'vue-router';
// const router = useRouter();
import { useVModel } from '@vueuse/core';
const props = defineProps({
  tab: { type: String, default: 'sub1' },
})
const emit = defineEmits(['update:tab']);
const subModel = useVModel(props, 'tab', emit);

const menus = [
  {
    name: "组织机构",
    key: "sub1",
  },
  {
    name: "特色产业",
    key: "sub2",
  },
  {
    name: "公共服务",
    key: "sub3",
  },
  {
    name: "乡村建设",
    key: "sub4",
  },
  {
    name: "人居环境",
    key: "sub5",
  },
  {
    name: "乡村治理",
    key: "sub6",
  },
];
const handlePage = ({ key }) => {
  // router.push()
  subModel.value = key;
}
</script>
<style lang="scss" scoped>
</style>
