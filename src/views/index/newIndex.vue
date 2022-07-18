<template>
  <div class="box-wrap">
    <div class="box">
      <div class="circle"></div>
      <div class="title">title</div>
      <div class="des">desdesssssssssssssssssssssssssss</div>
    </div>
    <div class="box">
      <div class="circle"></div>
      <div class="title">title</div>
      <div class="des">desdesssssssssssssssssssssssssss</div>
    </div>
    <div class="box">
      <div class="circle"></div>
      <div class="title">title</div>
      <div class="des">desdesssssssssssssssssssssssssss</div>
    </div>
    <div class="box">
      <div class="circle"></div>
      <div class="title">title</div>
      <div class="des">desdesssssssssssssssssssssssssss</div>
    </div>
    <div class="box">
      <div class="circle"></div>
      <div class="title">title</div>
      <div class="des">desdesssssssssssssssssssssssssss</div>
    </div>
    <div class="box">
      <div class="circle"></div>
      <div class="title">title</div>
      <div class="des">desdesssssssssssssssssssssssssss</div>
    </div>
    <div class="box">
      <div class="circle"></div>
      <div class="title">title</div>
      <div class="des">desdesssssssssssssssssssssssssss</div>
    </div>
    <div class="box">
      <div class="circle"></div>
      <div class="title">title</div>
      <div class="des">desdesssssssssssssssssssssssssss</div>
    </div>
    <div class="box">
      <div class="circle"></div>
      <div class="title">title</div>
      <div class="des">desdesssssssssssssssssssssssssss</div>
    </div>
  </div>
</template>
<script setup>
import { GoldOutlined } from '@ant-design/icons-vue';
</script>
<style lang="scss" scoped>
.box-wrap {
  width: 720px;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap row;
  gap: 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  .box {
    width: 200px;
    height: 200px;
    background: #fff;
    display: flex;
    flex-flow: column;
    align-items: center;
    &:nth-child(4), &:nth-child(6) {
      .circle {
        background: transparent;
      }
    }
    &:nth-child(1), &:nth-child(3), &:nth-child(8) {
      position: relative;
      top: 40px;
    }
    &:nth-child(7), &:nth-child(9), &:nth-child(2) {
      position: relative;
      top: -40px;
    }
    .circle {
      width: 150px;
      height: 150px;
      background: red;
      border-radius: 50%;
    }
  }
}
</style>