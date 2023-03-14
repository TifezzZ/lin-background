<!--
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-03
 * @Description: 
-->
<template>
  <template
    v-for="subItem in menuList"
    :key="subItem.path"
  >
    <el-sub-menu
      v-if="subItem.children && subItem.children.length > 0"
      :index="subItem.meta.title"
    >
      <template #title>
        <span>{{ subItem.meta.title }}</span>
      </template>
      <SubItem :menu-list="subItem.children" />
    </el-sub-menu>
    <el-menu-item
      v-else
      :index="subItem.path"
    >
      <template #title>
        <span>{{ subItem.meta.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
const porps = defineProps<{ menuList: any[] }>()
</script>

<style scoped lang="scss">
@import '../index.scss';
</style>
