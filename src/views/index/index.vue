<template>
  <div class="wrap">
    <div class="header-wrap">
      <img src="../../assets/2.png" alt="">
    </div>
    <div class="nav-wrap">
      <Nav v-model:tab="sub"></Nav>
    </div>
    <div class="content-wrap">
      
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue';
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
  }
}
img {
  width: 100%;
  height: 100%;
}
</style>
