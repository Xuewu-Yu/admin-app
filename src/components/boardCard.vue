<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-07 19:54:26
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-15 22:42:17
 * @FilePath: \admin-app\src\components\boardCard.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="content">
    <div class="card-wrap">
      <!-- <Card hoverable>
        <template #cover>
          <img src="" alt="">
        </template>
        <Card.Meta title="title">
          <template #description>description</template>
        </Card.Meta>
      </Card> -->
    </div>
    <List >
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
  width: 80%;
  padding-top: 20px;
  padding-bottom: 70px;
  margin: 0 auto;
  .card-wrap {
    display: flex;
    justify-content: space-between;
    column-gap: 10px;
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

