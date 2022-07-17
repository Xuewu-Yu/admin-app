<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-06 23:30:13
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-18 00:19:11
 * @FilePath: \admin-app\src\components\Nav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
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
      <Tab1 v-if="subModel.includes('1')" />
      <Tab2 v-else-if="subModel.includes('2')" />
      <Tab3 v-else-if="subModel.includes('3')" />
      <Tab4 v-else-if="subModel.includes('4')" />
    </div>
  </div>
</template>
<script setup>
import Nav from "@/components/Nav.vue";
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import Tab1 from '@/components/home.vue';
import Tab2 from '@/components/boardCard.vue';
import Tab3 from '@/components/videoCard.vue';
import Tab4 from '@/components/newsList.vue';
// const router = useRouter();
const subModel = ref(['1']);

const menus = [
    {
    name: "首页1",
    key: "1",
    path: '/organization'
  },
  {
    name: '首页2',
    key: '2',
  },
  {
    name: "特色产业",
    key: "3",
    path: '/characteristicindustry'
  },
  {
    name: "公共服务",
    key: "4",
    path: '/publicservice'
  },
  {
    name: "乡村建设",
    key: "5",
    path: '/ruralconstruction',
  },
  {
    name: "人居环境",
    key: "6",
    path: '/humansettlements',
  },
  {
    name: "乡村治理",
    key: "7",
    path: '/ruralgovernance'
  },
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
    background: url('https://27838991.s61i.faiusr.com/2/AD0Ij5SjDRACGAAg8MzmiQYouobRUTCADziJFA.jpg');
    background-origin: content-box;
    background-repeat: no-repeat;
    background-position: top;
    background-attachment: scroll;
    min-height: calc(100vh - 196px);
    background-size: 100% 100%;
  }
}
</style>
