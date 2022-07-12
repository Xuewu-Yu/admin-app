<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-06 23:30:13
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-13 01:18:41
 * @FilePath: \admin-app\src\components\Nav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<div class="wrap">
    <div class="header-wrap">
      <img src="../../assets/2.png" alt="">
    </div>
    <div class="nav-wrap">
      <Nav :menus="menus" v-model:tab="subModel"></Nav>
    </div>
    <div class="content-wrap">
      <Tab1 v-if="subModel.includes('1')" />
      <Tab2 v-else-if="subModel.includes('2')" />
      <Tab3 v-else-if="subModel.includes('3')" />
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
// const router = useRouter();
const subModel = ref(['1']);

const menus = [
  {
    name: "种植",
    key: "1",
  },
  {
    name: '养殖',
    key: '2',
  },
  {
    name: "劳务输转",
    key: "3",
  },
  // {
  //   name: "其他产业",
  //   key: "4",
  // },
];
const handlePage = ({ key }) => {
  // router.push()
  subModel.value = key;
}
</script>
<style lang="scss" scoped>
.wrap {
  .header-wrap {
    height: 150px;
  }
  .nav-wrap {
    display: flex;
    justify-content: center;
    background: #b10100;
  }
  .content-wrap {
    background: url('../../assets/1.png');
    background-origin: content-box;
    background-repeat: no-repeat;
    background-position: top;
    background-attachment: scroll;
    min-height: calc(100vh - 196px);
  }
}
</style>
