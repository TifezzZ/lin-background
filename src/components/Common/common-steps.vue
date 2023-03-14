<!--
 * @Author: yujingbo
 * @Date: 2022-12
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-03
 * @Description: 步骤条组件
-->
<template>
  <div class="main w_100 flx-center">
    <div
      class="step_item"
      v-for="(item, index) in config"
      :key="item"
    >
      <div class="step_line">
        <i style="width: 0%; border-width: 0px; transition-delay: 0ms"></i>
      </div>
      <div class="step_content">
        <!-- 已完成步骤 -->
        <div
          v-if="active > index + 1"
          class="step_icon flx-center step_icon_complete"
        >
          <el-icon
            size="17"
            color="#0c7edf"
          >
            <Check />
          </el-icon>
        </div>
        <!-- 当前步骤 -->
        <div
          v-else-if="active === index + 1"
          class="step_icon flx-center step_icon_active"
        >
          {{ index + 1 }}
        </div>
        <!-- 未执行步骤 -->
        <div
          v-else
          class="step_icon flx-center"
        >
          {{ index + 1 }}
        </div>
        <span :class="active === index + 1 ? 'active-font' : 'step-font'">
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
defineProps({
  config: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  active: {
    type: Number,
    default: 1
  }
})
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  white-space: nowrap;
}
.step_item {
  position: relative;
  flex: 1;
}
.step_content {
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 24px;
  font-size: 14px;
  background: var(--el-bg-color);
  transition: 0.15s ease-out;
}
.step-font {
  font-size: 16px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.65);
}
.active-font {
  font-size: 16px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
}
.step_line {
  position: absolute;
  top: 11px;
  right: 0;
  left: 0;
  height: 2px;
  background-color: #e9e9e9;
  border-color: inherit;
}
.step_item:last-child {
  flex-basis: auto !important;
  flex-grow: 0;
  flex-shrink: 0;
}
.step_icon {
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  margin-right: 8px;
  color: #cdd1d8;
  border: 2px solid #cdd1d8;
  border-radius: 50%;
}

.step_icon_active {
  color: white;
  background: #0c7edf;
  border: none;
}
.step_icon_complete {
  border: 2px solid #0c7edf;
}
</style>
