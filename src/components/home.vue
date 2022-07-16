<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-12 21:17:18
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-16 16:19:14
 * @FilePath: \admin-app\src\components\home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="content">
    <div class="wrap-1">
      <div class="left">
        <Carousel autoplay>
          <div>
            <img src="http://fangkang.top/uploads/20220716/2415729556609fe85a4e6bd4ac25723b.jpg" alt="" />
          </div>
          <div>
            <img src="http://fangkang.top/uploads/20220716/d9370f1a08d6bffb854d74dcacae4808.jpg" alt="" />
          </div>
        </Carousel>
      </div>
      <div class="right">
        <Card>
          <template #title> 资讯 </template>
          <template #extra> 更多 </template>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
          <img src="http://fangkang.top/uploads/20220716/2415729556609fe85a4e6bd4ac25723b.jpg" alt="" />
        </Card>
      </div>
    </div>
    <div class="img-bar">
      <img src="http://fangkang.top/uploads/20220716/d9370f1a08d6bffb854d74dcacae4808.jpg" alt="" />
    </div>
  </div>
</template>
<script setup>
import { Carousel, Card, List } from "ant-design-vue";
</script>
<style lang="scss" scoped>
.content {
  width: 80%;
  padding-top: 20px;
  padding-bottom: 70px;
  margin: 0 auto;
  .wrap-1 {
    display: flex;
    justify-content: space-between;
    .left {
      width: 820px;
      .ant-carousel {
        :deep(.slick-slide) {
          height: 450px;
          overflow: hidden;
        }
      }
    }
    .right {
      width: 366px;
      height: 450px;
      overflow-y: auto;
      margin-left: 10px;
    }
  }
  .img-bar {
    height: 167px;
    margin: 20px 0;
  }
}
</style>

