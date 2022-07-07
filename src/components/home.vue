<template>
  <div class="content">
    <div class="wrap-1">
      <div class="left">
        <Carousel autoplay>
          <div>
            <img src="../assets/1.png" alt="" />
          </div>
          <div>
            <img src="../assets/3.png" alt="" />
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
          <img src="../assets/1.png" alt="" />
        </Card>
      </div>
    </div>
    <div class="img-bar">
      <img src="../assets/4.png" alt="" />
    </div>
  </div>
</template>
<script setup>
import { Carousel, Card, List } from "ant-design-vue";
</script>
<style lang="scss" scoped>
.content {
  width: 1200px;
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

