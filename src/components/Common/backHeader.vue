<!--
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-03
 * @Description: 带返回按钮的页头
-->
<template>
  <div class="flx-align-center back_header">
    <el-icon
      size="20"
      class="cursor-pointer"
      @click="isDefault ? router.back() : back()"
    >
      <ArrowLeft />
    </el-icon>
    <span class="title">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
defineProps({
  back: {
    type: Function,
    default: () => {
      console.log('no Function')
    }
  },
  isDefault: {
    type: Boolean,
    default: true
  }
})
</script>

<style lang="scss" scoped>
.flx-align-center {
  display: flex;
  align-items: center;
}
.title {
  width: 100%;
  margin-left: 16px;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  color: rgba(0, 0, 0, 0.85);
}
.back_header {
  padding: 16px;
  border-bottom: 1px solid #f1f5f8;
}
</style>
