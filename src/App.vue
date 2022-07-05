<template>
 <ConfigProvider :autoInsertSpaceInButton="false">
  <router-view></router-view>
 </ConfigProvider> 
</template>
<script setup>
import { ConfigProvider } from 'ant-design-vue';
</script>

