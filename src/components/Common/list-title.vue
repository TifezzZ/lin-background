<!--
 * @Author: yujingbo
 * @Date: 2023-02
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-02
 * @Description: 
-->
<template>
  <div class="title">
    <p><slot></slot></p>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.title {
  padding: 16px 20px;
  font-size: 20px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.85);
  border-bottom: 1px solid #f1f5f8;
}
</style>
