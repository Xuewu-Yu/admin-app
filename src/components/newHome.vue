<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-07 22:45:47
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-08 19:28:11
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
      <div>
        <span>哈哈哈哈</span>
      </div>
    </div>
    <div class="dot">
      <div>
        <span>哈哈哈哈</span>
      </div>
    </div>
    <div class="dot">
      <div>
        <span>哈哈哈哈</span>
      </div>
    </div>
    <div class="dot">
      <div>
        <span>哈哈哈哈</span>
      </div>
    </div>
    <div class="dot">
      <div>
        <span>哈哈哈哈</span>
      </div>
    </div>
    <div class="dot">
      <div>
        <span>哈哈哈哈</span>
      </div>
    </div>
    <div class="dot">
      <div>
        <span>哈哈哈哈</span>
      </div>
    </div>
    <div class="dot">
      <div>
        <span>哈哈哈哈</span>
      </div>
    </div>
  </div>
</template>
<script setup>
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
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // width: 100%;
  // height: 100%;
  width: 1200px;
  height: 500px;
  padding-top: 20px;
  padding-bottom: 70px;
  margin: 0 auto;
  // transform: translate(-50%, -50%);
  background: transparent;
  // -webkit-filter: contrast(10);
  // -moz-filter: contrast(10);
  // -o-filter: contrast(10);
  // -ms-filter: contrast(10);
  // filter: contrast(10);
  // background: #000;
}
.dot {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -12px;
  margin-left: -12px;
}
.dot:nth-child(1) {
  transform: translate(12px) rotate(135deg);
}
.dot:nth-child(1) div {
  background-color: #f0d175;
  span {
    transform: rotate(-135deg);
  }
  // -webkit-filter: blur(6px);
  // -moz-filter: blur(15px);
  // -o-filter: blur(15px);
  // -ms-filter: blur(15px);
  // filter: blur(2px);
}
.dot:nth-child(2) {
  transform: translate(12px) rotate(180deg);
}
.dot:nth-child(2) div {
  background-color: #b3f075;
  span {
    transform: rotate(-180deg);
  }
  // -webkit-filter: blur(6px);
  // -moz-filter: blur(15px);
  // -o-filter: blur(15px);
  // -ms-filter: blur(15px);
  // filter: blur(2px);
}
.dot:nth-child(3) {
  transform: translate(12px) rotate(225deg);
}
.dot:nth-child(3) div {
  background-color: #75f094;
  span {
    transform: rotate(-225deg);
  }
  // -webkit-filter: blur(6px);
  // -moz-filter: blur(15px);
  // -o-filter: blur(15px);
  // -ms-filter: blur(15px);
  // filter: blur(2px);
}
.dot:nth-child(4) {
  transform: translate(12px) rotate(270deg);
}
.dot:nth-child(4) div {
  background-color: #75f0f0;
  span {
    transform: rotate(-270deg);
  }
  // -webkit-filter: blur(6px);
  // -moz-filter: blur(15px);
  // -o-filter: blur(15px);
  // -ms-filter: blur(15px);
  // filter: blur(2px);
}
.dot:nth-child(5) {
  transform: translate(12px) rotate(315deg);
}
.dot:nth-child(5) div {
  background-color: #7594f0;
  span {
    transform: rotate(-315deg);
  }
  // -webkit-filter: blur(6px);
  // -moz-filter: blur(15px);
  // -o-filter: blur(15px);
  // -ms-filter: blur(15px);
  // filter: blur(2px);
}
.dot:nth-child(6) {
  transform: translate(12px) rotate(360deg);
}
.dot:nth-child(6) div {
  background-color: #b275f0;
  span {
    transform: rotate(-360deg);
  }
  // -webkit-filter: blur(6px);
  // -moz-filter: blur(15px);
  // -o-filter: blur(15px);
  // -ms-filter: blur(15px);
  // filter: blur(2px);
}
.dot:nth-child(7) {
  transform: translate(12px) rotate(405deg);
}
.dot:nth-child(7) div {
  background-color: #f075d1;
  span {
    transform: rotate(-405deg);
  }
  // -webkit-filter: blur(6px);
  // -moz-filter: blur(15px);
  // -o-filter: blur(15px);
  // -ms-filter: blur(15px);
  // filter: blur(2px);
}
.dot:nth-child(8) {
  transform: translate(12px) rotate(450deg);
}
.dot:nth-child(8) div {
  background-color: #f07575;
  span {
    transform: rotate(-450deg);
  }
  // -webkit-filter: blur(6px);
  // -moz-filter: blur(15px);
  // -o-filter: blur(15px);
  // -ms-filter: blur(15px);
  // filter: blur(2px);
}
.dot div {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  animation: 2s pop 0s steps(40) 1 forwards;
  display: flex;
  justify-content: center;
  align-items: center;
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
    transform: translateX(50px);
  }
  100% {
    transform: translateX(100px);
  }
}
</style>