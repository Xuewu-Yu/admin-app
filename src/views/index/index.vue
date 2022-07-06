<template>
  <div class="nav">
    <router-link to="/helloworld">hello</router-link>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { Button } from 'ant-design-vue';

defineProps({
  msg: String
})

const count = ref(0)
</script>

<style lang="scss" scoped>
.nav {
  color: red;
}
</style>
