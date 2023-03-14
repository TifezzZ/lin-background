<!--
 * @Author: yujingbo
 * @Date: 2023-02
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-02
 * @Description: 
-->
<template>
  <div>
    <div class="flex-between">
      <div>
        {{ name }}
        <span class="id-tag">ID: {{ encryptID(id, createdTime) }}</span>
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { encryptID } from '@/utils'
defineProps<{ name: string; id: number | string; createdTime: string }>()
</script>

<style lang="scss" scoped>
.id-tag {
  height: 22px;
  padding: 0 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.85);
  background: #f5f5f5;
  border-radius: 1px;
}
</style>
