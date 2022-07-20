<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-19 21:58:02
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-20 23:48:49
 * @FilePath: \admin-app\src\components\breadcrumb.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="wrap">
    <Breadcrumb >
      <!-- <template #itemRender="{ route }">
        <template v-if="route.title">
          <template v-if="route.path === '/'">
            <HomeOutlined />
            <router-link :to="route.path">{{ route.title }}</router-link>
          </template>
          <template v-else>
            <router-link :class="{active: routeItem.path === route.path}" :to="route.path">{{ route.title }}</router-link>
          </template>
        </template>
      </template> -->
      <Breadcrumb.Item>
        <HomeOutlined />
        <router-link to="/">首页</router-link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <span>{{ name }}</span>
      </Breadcrumb.Item>
    </Breadcrumb>
  </div>
</template>
<script setup>
import { Breadcrumb } from 'ant-design-vue';
import { HomeOutlined } from '@ant-design/icons-vue';
import { useRoute } from 'vue-router';
// import { reactive } from 'vue';
import { routes } from '@/router';
const routeItem = useRoute();
const name = routes.find(i => i.path === routeItem.path).title;
</script>
<style lang="scss" scoped>
.wrap {
  width: 60%;
  margin: auto;
  position: relative;
  bottom: -53px;
  .ant-breadcrumb {
    // color: #fff;
    span {
      color: #0b93d0;
      // &:last-child {
      //   a {
      //     color: #0b93d0;
      //   }
      // }
      a {
        color: #0b93d0;
      }
    }
    :deep(.ant-breadcrumb-separator) {
      color: #0b93d0 !important;
    }
  }
}
</style>
