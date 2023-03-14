<!--
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-02
 * @Description: 
-->
<template>
  <el-breadcrumb separator="/">
    <transition-group
      name="breadcrumb"
      mode="out-in"
    >
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbs"
        :key="index"
        :to="item.meta.to"
      >
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const breadcrumbs = computed(() => {
  return route.matched.map((item) => item).filter((x) => Boolean(x.meta.title))
})
</script>
