<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-07 22:45:47
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-24 22:41:39
 * @FilePath: \admin-app\src\components\newsList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- <div class="content">
    <div class="circle">
      党建引领数字乡村
    </div>
  </div> -->
  <div class="container">
    <div class="dot">
      <div @click="router.push('/organization')">
        <span>组织机构</span>
      </div>
    </div>
    <div class="dot">
      <div @click="router.push('/characteristicindustry')">
        <span>特色产业</span>
      </div>
    </div>
    <div class="dot">
      <div @click="router.push('/publicservice')">
        <span>公共服务</span>
      </div>
    </div>
    <div class="dot">
      <div @click="router.push('/ruralconstruction')">
        <span>乡村建设</span>
      </div>
    </div>
    <div class="dot">
      <div @click="router.push('/humansettlements')">
        <span>人居环境</span>
      </div>
    </div>
    <div class="dot">
      <div @click="router.push('/ruralgovernance')">
        <span>乡村治理</span>
      </div>
    </div>
    <div class="dot">
      <div @click="router.push('/monitor')">
        <span>监控视频</span>
      </div>
    </div>
    <div class="core">
      <div @click="router.push('/midpoint')">
        <span>党建引领数字乡村</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>
<style lang="scss" scoped>
// .content {
//   width: 1200px;
//   height: 500px;
//   padding-top: 20px;
//   padding-bottom: 70px;
//   margin: 0 auto;
//   .circle {
//     width: 200px;
//     height: 150px;
//     line-height: 150px;
//     background: red;
//     color: #fff;
//     text-align: center;
//     border-radius: 50%;
//   }
// }
.container {
  width: 1200px;
  margin: 0 auto;
  background: transparent;
  position: relative;
  height: 100vh;
  font-family: 'KaiTi';
}
.dot {
  position: absolute;
  top: calc(60% - 75px);
  left: 50%;
  margin-top: -12px;
  margin-left: -12px;
}
.dot:nth-child(1) {
  transform: translate(12px) rotate(125deg);
}
.dot:nth-child(1) div {
  background-color: #f0d175;
  span {
    transform: rotate(-125deg);
  }
  // -webkit-filter: blur(6px);
  // -moz-filter: blur(15px);
  // -o-filter: blur(15px);
  // -ms-filter: blur(15px);
  // filter: blur(2px);
}
.dot:nth-child(2) {
  transform: translate(12px) rotate(176.4deg);

}
.dot:nth-child(2) div {
  background-color: #b3f075;
  span {
    transform: rotate(-176.4deg);
  }
  // -webkit-filter: blur(6px);
  // -moz-filter: blur(15px);
  // -o-filter: blur(15px);
  // -ms-filter: blur(15px);
  // filter: blur(2px);
}
.dot:nth-child(3) {
  transform: translate(12px) rotate(227.8deg);
}
.dot:nth-child(3) div {
  background-color: #75f094;
  span {
    transform: rotate(-227.8deg);
  }
  // -webkit-filter: blur(6px);
  // -moz-filter: blur(15px);
  // -o-filter: blur(15px);
  // -ms-filter: blur(15px);
  // filter: blur(2px);
}
.dot:nth-child(4) {
  transform: translate(12px) rotate(279.2deg);
}
.dot:nth-child(4) div {
  background-color: #75f0f0;
  span {
    transform: rotate(-279.2deg);
  }
  // -webkit-filter: blur(6px);
  // -moz-filter: blur(15px);
  // -o-filter: blur(15px);
  // -ms-filter: blur(15px);
  // filter: blur(2px);
}
.dot:nth-child(5) {
  transform: translate(12px) rotate(330.6deg);
}
.dot:nth-child(5) div {
  background-color: #7594f0;
  span {
    transform: rotate(-330.6deg);
  }
  // -webkit-filter: blur(6px);
  // -moz-filter: blur(15px);
  // -o-filter: blur(15px);
  // -ms-filter: blur(15px);
  // filter: blur(2px);
}
.dot:nth-child(6) {
  transform: translate(12px) rotate(382deg);
}
.dot:nth-child(6) div {
  background-color: #b275f0;
  span {
    transform: rotate(-382deg);
  }
  // -webkit-filter: blur(6px);
  // -moz-filter: blur(15px);
  // -o-filter: blur(15px);
  // -ms-filter: blur(15px);
  // filter: blur(2px);
}
.dot:nth-child(7) {
  transform: translate(12px) rotate(433.4deg);
  div {
    background: #f075d1;;
    span {
      transform: rotate(-433.4deg);
    }
  }
}
.core {
    position: absolute;
    top: calc(60% - 75px);
    left: 50%;
    margin-top: -12px;
    margin-left: -12px;
    color: #fff;
    transform: translate(0) rotate(0);
    // transform: translate(-37px, -43px);
    div {
      position: absolute;
      width: 180px;
      height: 180px;
      border-radius: 50%;
      animation: 1s scale 0s steps(20) 1 forwards;
      display: flex;
      justify-content: center;
      align-items: center;
      background: red;
      text-align: center;
      cursor: pointer;
      span {
        width: 96px;
        font-weight: 600;
        font-size: 24px;
      }
    }
}
.dot div {
  position: absolute;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  animation: 1s pop 0s steps(20) 1 forwards;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 28px;
}
body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #136a8a 10%, #267871 90%);
}
// @keyframes rotate {
//   0% {
//     transform: rotate(0);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// }
@keyframes pop {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(75px);
  }
  100% {
    transform: translateX(150px);
  }
}
@keyframes scale {
  0% {
    transform: translate(-78px, -88px) scale(0);
  }
  100% {
    transform: translate(-78px, -88px) scale(1);
  }
}
</style>