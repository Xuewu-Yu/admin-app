<!--
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-06 19:30:27
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-11 20:58:46
 * @FilePath: \admin-app\src\components\navItem.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <template v-if="!item.subMenu?.length">
    <Menu.Item :key="item.key">
      {{ item.name }}
    </Menu.Item>
  </template>
  <template v-else>
    <Menu.SubMenu :key="item.key">
      <template #title>{{ item.name }}</template>
      <NavItem 
        v-for="child in item.subMenu"
        :key="child.key"
        :item="child"
      ></NavItem>
    </Menu.SubMenu>
  </template>
</template>
<script setup>
import { Menu } from "ant-design-vue";
defineProps({
  item: { type: Object, default: () => {} },
})
</script>
<style lang="scss" scoped>

</style>