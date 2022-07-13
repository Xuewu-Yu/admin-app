<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-07 22:45:47
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-13 22:02:29
 * @FilePath: \admin-app\src\components\newsList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="content">
    <List :data-source="data" :locale="{ emptyText: '暂无数据' }">
      <template #renderItem="{ item }">
        <List.Item>
          <List.Item.Meta :title="item.title">
            <template #description>
              <div v-html="item.content"></div>
            </template>
          </List.Item.Meta>
        </List.Item>
      </template>
    </List>
  </div>
</template>
<script setup>
import { List } from "ant-design-vue";
// import { useVModel } from '@vueuse/core';
defineProps({
  data: {
    type: Array,
    default: () => [],
  },
})
// const emit = 
// const list = useVModel(props, 'data', emit);
</script>
<style lang="scss" scoped>
.content {
  width: 80%;
  padding-top: 20px;
  padding-bottom: 70px;
  margin: 0 auto;
}
.ant-list {
  margin-top: 20px;
  .ant-list-item {
    background: #fff;
    padding: 12px 10px;
  }
}
</style>