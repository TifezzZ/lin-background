<!--
 * @Author: yujingbo
 * @Date: 2023-01
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-03
 * @Description: 
-->
<template>
  <div class="main">
    <div class="flx-center bule text-16 font-medium sample_title">
      <p>{{ title }}</p>
    </div>
    <div style="padding: 16px 24px">
      <div class="sample_img">
        <img
          crossOrigin="anonymous"
          :src="`${api}${fileUrl}?token=Bearer ${globalStore.token}`"
        />
      </div>
      <div class="table-box">
        <el-table
          ref="tableRef"
          :data="tableData"
          :border="true"
        >
          <el-table-column
            v-for="item in tableCloums"
            :key="item.label"
            :prop="item.prop"
            :label="item.label"
          />
        </el-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { GlobalStore } from '@/store/index'

const globalStore = GlobalStore()
interface tableCloumsType {
  label: string
  prop: string
}
const api = import.meta.env.VITE_API_URL
defineProps({
  title: {
    type: String,
    default: ''
  },
  tableCloums: {
    type: Array as PropType<tableCloumsType[]>,
    default() {
      return [
        { label: '识别结果排名', prop: 'name' },
        { label: '识别结果置信度', prop: 'score' }
      ]
    }
  },
  tableData: {
    type: Array,
    default: () => []
  },
  fileUrl: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
.main {
  min-width: 0;
  border: 1px solid #dcdfe6;
}
.sample_title {
  height: 40px;
  background: #f5f7fa;
  border-bottom: 1px solid #dcdfe6;
}
.sample_img {
  width: 100%;
  margin-bottom: 16px;
  > img {
    width: 100%;
    height: 100%;
  }
}
</style>
