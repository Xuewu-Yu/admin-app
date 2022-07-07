<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-06 23:30:13
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-07 16:18:42
 * @FilePath: \admin-app\src\views\index\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="wrap">
    <div class="header-wrap">
      <img src="../../assets/2.png" alt="">
    </div>
    <div class="nav-wrap">
      <Nav v-model:tab="sub"></Nav>
    </div>
    <div class="content-wrap">
      <div class="content">
        <div class="wrap-1">
          <div class="left">
            <Carousel autoplay>
              <div>
                <img src="../../assets/1.png" alt="">
              </div>
              <div>
                <img src="../../assets/3.png" alt="">
              </div>
            </Carousel>
          </div>
          <div class="right">
            <Card>
              <template #title>
                资讯
              </template>
              <template #extra>
                更多
              </template>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
              </ul>
              <img src="../../assets/1.png" alt="">
            </Card>
          </div>
        </div>
        <div class="img-bar">
          <img src="../../assets/4.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import { Carousel, Card, List } from 'ant-design-vue';
import Nav from '@/components/Nav.vue';

const sub = ref('');

watch(sub, () => {
console.log(sub);
});
</script>

<style lang="scss" scoped>
.wrap {
  .header-wrap {
    // width: 100%;
    height: 150px;
  }
  .nav-wrap {
    // height: 100px;
    display: flex;
    justify-content: center;
    background: #b10100;
    // position: absolute;
    // top: 200px;
    :deep(.ant-menu) {
      background: #b10100;
      color: #fff;
      font-size: 16px;
    }
  }
  .content-wrap {
    background: url('../../assets/1.png');
    background-origin: content-box;
    background-repeat: no-repeat;
    background-position: top;
    background-attachment: scroll;
    .content{
      width: 1200px;
      padding-top: 20px;
      padding-bottom: 50px;
      margin: 0 auto;
      .wrap-1{
        display: flex;
        justify-content: space-between;
        .left {
          width:820px;
          .ant-carousel {
            :deep(.slick-slide) {
              height: 450px;
              overflow: hidden;
            }
          }
        }
        .right{
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
  }
}
img {
  width: 100%;
  height: 100%;
}
</style>
