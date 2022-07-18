<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-18 21:36:03
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-18 21:52:39
 * @FilePath: \admin-app\src\views\index\newIndex.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="box-wrap">
    <div class="box">
      <div class="circle">
        <GoldOutlined />
      </div>
      <div class="title">组织机构</div>
      <div class="des">组织机构是指组织发展、完善到一定程度，在其内部形成的结构严密、相对独立， 并彼此传递或转换能量、物质和信息的系统</div>
    </div>
    <div class="box">
      <div class="circle">
        <GoldOutlined />
      </div>
      <div class="title">特色产业</div>
      <div class="des">特色产业就是要以“特”制胜的产业。是一个国家或一个地区在长期的发展过程中所积淀、成型的一种或几种特有的资源、文化、技术、管理、环境、人才等方面的优势，从而形成的具有国际、本国或本地区特色的具有核心市场竞争力的产业或产业集群。</div>
    </div>
    <div class="box">
      <div class="circle"></div>
      <div class="title">公共服务</div>
      <div class="des">公共服务是指由政府部门、国有企事业单位和相关中介机构履行法定职责，根据公民、法人或者其他组织的要求，为其提供帮助或者办理有关事务的行为。</div>
    </div>
    <div class="box">
      <div class="circle"></div>
      <div class="title"></div>
      <div class="des"></div>
    </div>
    <div class="box">
      <div class="circle"></div>
      <div class="title">党建引领数字乡村</div>
      <div class="des">desdesssssssssssssssssssssssssss</div>
    </div>
    <div class="box">
      <div class="circle"></div>
      <div class="title"></div>
      <div class="des"></div>
    </div>
    <div class="box">
      <div class="circle"></div>
      <div class="title">乡村建设</div>
      <div class="des">乡村建设是国家现代化建设的重要内容，必须按照党中央、国务院部署，落实《乡村建设行动实施方案》，坚持不懈推进乡村建设，努力让广大农村居民也能过上现代文明生活。</div>
    </div>
    <div class="box">
      <div class="circle"></div>
      <div class="title">人居环境</div>
      <div class="des">随着人们的居住环境在人口迅速增长所造成的压力下不断恶化，人居问题便越来越受到人们的关注。</div>
    </div>
    <div class="box">
      <div class="circle"></div>
      <div class="title">乡村治理</div>
      <div class="des">通过对村镇布局、生态环境、基础设施、公共服务等资源进行合理配置和生产，促进当地经济、社会的发展以及环境状况的改善。</div>
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
    width: 300px;
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
      top: 30px;
    }
    &:nth-child(7), &:nth-child(9), &:nth-child(2) {
      position: relative;
      top: -30px;
    }
    .circle {
      width: 150px;
      height: 150px;
      background: red;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .title {
      font-size: 24px;
      // color: #fff;
    }
    .des {
      font-size: 14px;
      text-align: center;
    }
  }
}
</style>