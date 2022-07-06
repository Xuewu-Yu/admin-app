<template>
  <Button>222</Button>
</template>
<script setup>
import { ref } from 'vue'
import { Button } from 'ant-design-vue';

defineProps({
  msg: String
})

const count = ref(0)
</script>

<style scoped>
</style>
