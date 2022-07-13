<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-07 22:45:47
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-13 23:43:07
 * @FilePath: \admin-app\src\components\newsList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="content">
    <List :data-source="data" :locale="{ emptyText: '暂无数据' }">
      <template #renderItem="{ item }">
        <List.Item>
          <List.Item.Meta :title="item.title">
            <!-- <template #description>
              <div v-html="item.content"></div>
            </template> -->
          </List.Item.Meta>
        </List.Item>
      </template>
      <template #loadMore>
        <div v-if="showLoading" :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }">
          <Button :loading="load" @click="loadMore">加载更多</Button>
        </div>
      </template>
    </List>
  </div>
</template>
<script setup>
import { List, Button } from "ant-design-vue";
import { useVModel } from '@vueuse/core';
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  load:{
    type: Boolean,
    default: false,
  },
  showLoad: Boolean,
})
const emit = defineEmits(['update:load', 'loadMore']);
const list = useVModel(props, 'data', emit);
const loading = useVModel(props, 'load', emit);
const showLoading = useVModel(props, 'showLoad');
const loadMore = () => {
  emit('loadMore');
};
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