<template>
  <div class="wrap">
    <Breadcrumb :routes="routes.filter(i => i.title)">
      <template #itemRender="{ route }">
        <template v-if="route.title">
          <template v-if="route.path === '/'">
            <HomeOutlined />
            <router-link :to="route.path">{{ route.title }}</router-link>
          </template>
          <template v-else>
            <router-link :to="route.path">{{ route.title }}</router-link>
          </template>
        </template>
      </template>
    </Breadcrumb>
  </div>
</template>
<script setup>
import { Breadcrumb } from 'ant-design-vue';
import { HomeOutlined } from '@ant-design/icons-vue';
// import { useRoute } from 'vue-router';
import { reactive } from 'vue';
import { routes } from '@/router';
// const routeItem = useRoute();

</script>
<style lang="scss" scoped>
.wrap {
  width: 60%;
  margin: auto;
  position: relative;
  bottom: 28px;
  .ant-breadcrumb {
    color: #fff;
    span {
      &:last-child {
        a {
          color: #333;
        }
      }
      a {
        color: #fff;
      }
    }
    :deep(.ant-breadcrumb-separator) {
      color: #fff !important;
    }
  }
}
</style>
