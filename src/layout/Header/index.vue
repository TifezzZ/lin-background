<!--
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: TifezzZ
 * @LastEditTime: 2023-03
 * @Description: 
-->
<template>
  <div class="header">
    <div class="header-lf flx-center">
      <Breadcrumb />
    </div>
    <div class="header-ri flx-center">
      <!-- User name -->
      <span class="username">{{ globalStore.userInfo.username }}</span>
      <!-- Avatar -->
      <Avatar />
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from './components/Breadcrumb.vue'
import Avatar from './components/Avatar.vue'
import { GlobalStore } from '@/store'
const globalStore = GlobalStore()
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
