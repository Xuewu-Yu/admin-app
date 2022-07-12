<template>
  <div class="wrapper" v-html="html"></div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';
const html = ref('');
axios.post('/api/service/culture').then(res => {

});
</script>
<style lang="scss" scoped>
@import '../../sub2/components/varible.scss';
</style>