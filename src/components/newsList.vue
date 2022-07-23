<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-07 22:45:47
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-23 10:55:17
 * @FilePath: \admin-app\src\components\newsList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <Spin :spinning="loading">
    <div class="content">
      <List :data-source="list" :locale="{ emptyText: '暂无数据' }" :style="{ height: '300px' }">
        <template #renderItem="{ item }">
          <List.Item @click="getAddress(item)">
            <List.Item.Meta :title="item.address">
              <!-- <template #description>
              <div v-html="item.content"></div>
            </template> -->
            </List.Item.Meta>
          </List.Item>
        </template>
        <template #loadMore>
          <div
            v-if="showLoading"
            :style="{
              textAlign: 'center',
              marginTop: '12px',
              height: '32px',
              lineHeight: '32px',
            }"
          >
            <Button :loading="load" @click="loadMore">加载更多</Button>
          </div>
        </template>
      </List>
    </div>
  </Spin>
  <Modal
    v-model:visible="visible"
    :title="modalObj.title"
    :width="800"
    :destroyOnClose="true"
    :afterClose="dispose"
  >
    <VideoCard ref="videoRef" :url="modalObj.url" />
  </Modal>
</template>
<script setup>
import { List, Button, Modal, message, Spin } from "ant-design-vue";
import { useVModel } from "@vueuse/core";
import { ref, reactive } from "vue";
import axios from "@/utils/request";
import VideoCard from "./videoCard.vue";
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  load: {
    type: Boolean,
    default: false,
  },
  showLoad: Boolean,
});
const emit = defineEmits(["update:load", "loadMore"]);
// const list = useVModel(props, 'data', emit);
// const loading = useVModel(props, 'load', emit);
const showLoading = ref(false);
const loading = ref(false);
const loadMore = () => {
  // emit('loadMore');
  page.value += 1;
  getList();
};
const page = ref(1);
const list = ref([]);
const getList = async () => {
  const {
    data: { data, total },
  } = await axios.request({
    url: "api/monitor/monitorList",
    method: "post",
    data: { list_rows: 10, page: page.value },
  });
  list.value = [...list.value, ...data];
  // showLoading.value = list.value.length !== total;
  if (list.value.length === total) {
    showLoading.value = false;
  } else {
    showLoading.value = true;
  }
};
getList();
const getAddress = async (item) => {
  loading.value = true;
  const { resCode, data, errorMsg } = await axios.request({
    url: "api/monitor/monitor",
    method: "post",
    data: { deviceId: item.number },
  });
  if (resCode === 0) {
    if (!data?.mediaUrl) return;

    modalObj.url = data.mediaUrl;
    modalObj.title = item.address;
    visible.value = true;
  } else {
    message.error(errorMsg);
  }
  loading.value = false;
};
const visible = ref(false);
const modalObj = reactive({
  // visible: false,
  title: "",
  url: "",
});
const videoRef = ref();
const dispose = () => {
  videoRef.value.disposeFunc();
};
// getAddress()
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
.spin {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.45);
}
</style>