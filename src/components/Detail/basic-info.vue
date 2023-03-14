<!--
 * @Author: yujingbo
 * @Date: 2022-12
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-03
 * @Description: 详情页的基础信息
-->
<template>
  <div>
    <p class="title">
      <slot name="title"></slot>
    </p>
    <div class="main">
      <p
        v-for="item in data"
        :key="item.label"
        class="basic-info-item info_font"
        :style="`flex: ${100 / row}%`"
      >
        <span class="gray">{{ item.label }}：</span>
        <table-tags
          v-if="item.label === '关键词'"
          :tags="item.value"
        />
        <span
          v-else
          class="black"
        >
          {{ item.value }}
        </span>
      </p>
      <p
        v-if="extra !== ''"
        :style="`flex: ${100 / row}%`"
        class="info_font"
      >
        <span class="gray">备注：</span>
        <span class="black break-all">
          {{ extra }}
        </span>
      </p>
      <!-- 补充空元素 实现超出元素左对齐 -->
      <p
        class="basic-info-item"
        :style="`flex: ${100 / row}%`"
        v-for="item in data.length % row"
        :key="item"
      ></p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import tableTags from '@/components/Common/table-tags.vue'
interface info {
  label: string
  value: string
}
defineProps({
  data: {
    type: Array as PropType<info[]>,
    default: () => []
  },
  extra: {
    type: String,
    default: ''
  },
  row: {
    type: Number,
    default: 4
  }
})
</script>

<style lang="scss" scoped>
.title {
  margin: 0 0 16px 0;
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.85);
}
.main {
  display: flex;
  flex-wrap: wrap;
}
.basic-info-item {
  display: flex;
  // flex: 25%;
  margin: 0 0 16px 0;
}
.info_font {
  font-size: 14px;
  font-weight: 400;
}
.gray {
  color: #606266;
}
.black {
  color: rgba(0, 0, 0, 0.85);
}
</style>
