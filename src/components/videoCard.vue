<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-07 22:09:03
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-07 22:49:17
 * @FilePath: \admin-app\src\components\videoCard.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="content">
    <div class="card-wrap">
      <video
        controls
        preload
        height="400px"
        src="https://green.zhangkuanguanjia.com/application/%E6%99%BA%E8%83%BD%E8%AF%86%E7%A5%A8%E6%93%8D%E4%BD%9C%E8%A7%86%E9%A2%91.mp4"
      ></video>
    </div>
    <List>
      <List.Item>
        <List.Item.Meta title="title" description="description">
        </List.Item.Meta>
      </List.Item>
      <List.Item>
        <List.Item.Meta title="title" description="description">
        </List.Item.Meta>
      </List.Item>
      <List.Item>
        <List.Item.Meta title="title" description="description">
        </List.Item.Meta>
      </List.Item>
    </List>
  </div>
</template>
<script setup>
import { Card, List } from "ant-design-vue";
</script>
<style lang="scss" scoped>
.content {
  width: 1200px;
  padding-top: 20px;
  padding-bottom: 70px;
  margin: 0 auto;
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
