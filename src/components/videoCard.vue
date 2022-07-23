<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-07 22:09:03
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-23 13:50:23
 * @FilePath: \admin-app\src\components\videoCard.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- <div class="content">
    <div class="card-wrap"> -->
      <!-- <video
        ref="videoRef"
        class="video-js vjs-default-skin"
        controls
        preload
        width="800"
        height="400"
      >
        <source
          width="800" 
          height="400"
          src="http://hls.cntv.lxdns.com/asp/hls/main/0303000a/3/default/978a64ddd3a1caa85ae70a23414e6540/main.m3u8"
          type="application/x-mpegURL"
        />
      </video> -->
      <video
        ref="myVideo"
        class="video-js vjs-default-skin vjs-big-play-centered"
        controls
        autoplay
        preload="auto"
        data-setup="{}"
        muted
        :width="width"
        :height="height"
      >
        <source
          id="source"
          :src="url"
          type="application/x-mpegURL"
        />
      </video>
    <!-- </div>
  </div> -->
</template>
<script setup>
import { nextTick, onMounted, ref, onBeforeUnmount } from 'vue';
import axios from '@/utils/request';
const myVideo = ref();
const player = ref();
const props = defineProps({
  width: {
    type: String,
    default: '752',
  },
  height: {
    type: String,
    default: '400',
  },
  url:{
    type: String,
    default: '',
  }
});
onMounted(async () => {
  await nextTick();
  player.value = videojs(myVideo.value, {
    bigPlayButton: true,
    textTrackDisplay: false,
    posterImage: false,
    errorDisplay: false,
    autoplay: 'muted',
  });
  player.value.play();
});
onBeforeUnmount(() => {
  player.value.dispose();
});
const disposeFunc = () => {
  player.value?.dispose();
}
</script>
<style lang="scss" scoped>
.content {
  // width: 80%;
  // padding-top: 20px;
  // padding-bottom: 70px;
  // margin: 0 auto;
  .card-wrap {
    // width: 800px;
    // height: 400px;
    margin: 0 auto;
    video {
      width: 100%;
      height: 100%;
    }
  }
}
.ant-list {
  margin-top: 20px;
  .ant-list-item {
    background: #fff;
    padding: 12px 10px;
  }
}
</style>
