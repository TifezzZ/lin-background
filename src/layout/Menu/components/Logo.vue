<!--
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: yujingbo
 * @LastEditTime: 2022-11
 * @Description: 
-->
<template>
  <div class="logo flx-center">
    <img
      src="@/assets/images/title_img.png"
      alt="logo"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{ isCollapse: boolean }>()
</script>

<style scoped lang="scss">
@import '../index.scss';
</style>
