<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-06 23:30:13
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-17 15:09:55
 * @FilePath: \admin-app\src\components\Nav.vue
 * @Description: 特色产业
-->
<template>
<div class="wrap">
    <div class="header-wrap">
      <img src="http://fangkang.top/uploads/20220716/2deee211f6d6487de1feebf8249ff03f.png" alt="">
    </div>
    <div class="nav-wrap">
      <Nav :menus="menus" v-model:tab="subModel"></Nav>
    </div>
    <div class="content-wrap">
      <div class="wrapper">
        <Tab1 v-if="subModel.includes('1')" />
        <Tab2 v-else-if="subModel.includes('2')" />
        <Tab3 v-else-if="subModel.includes('3')" />
        <!-- <Tab4 v-else-if="subModel.includes('4')" /> -->
        <!-- <Tab5 v-else-if="subModel.includes('5')" /> -->
      </div>
    </div>
  </div>
</template>
<script setup>
import Nav from "@/components/Nav.vue";
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import Tab1 from './components/tab1.vue';
import Tab2 from './components/tab2.vue';
import Tab3 from './components/tab3.vue';
// import Tab4 from './components/tab4.vue';
// import Tab5 from './components/tab5.vue';
// const router = useRouter();
const subModel = ref(['1']);

const menus = [
  {
    name: "党支部",
    key: "1",
  },
  {
    name: '群团建设',
    key: '2',
  },
  {
    name: "村民委员会",
    key: "3",
  },
];
const handlePage = ({ key }) => {
  // router.push()
  subModel.value = key;
}
</script>
<style lang="scss" scoped>
@import '../characteristicindustry/components/varible.scss';
</style>
