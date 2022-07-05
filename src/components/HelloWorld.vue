<template>
  <Button>111</Button>
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
a {
  color: #42b983;
}
</style>
