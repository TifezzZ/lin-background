<!--
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: TifezzZ
 * @LastEditTime: 2023-03
 * @Description: 通用筛选头
-->
<template>
  <div class="table-search">
    <el-form
      ref="formRef"
      :model="searchParam"
      :inline="true"
    >
      <el-form-item
        :label="`${props.labelName} :`"
        style="margin-right: 64px"
      >
        <el-input
          style="width: 272px"
          v-model="searchParam.name"
          placeholder="输入关键词搜索"
          :suffix-icon="Search"
          maxlength="12"
          clearable
        />
      </el-form-item>
      <!-- <div class="more-item">
        <el-form-item :label="`${props.timeZoneName} :`">
          <el-date-picker
            style="width: 272px"
            v-model="searchParam.createTime"
            type="daterange"
            range-separator="—"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            value-format="YYYY-MM-DD"
          />
        </el-form-item>
      </div> -->
    </el-form>
    <div class="search-operation">
      <el-button
        type="primary"
        @click="search"
      >
        搜索
      </el-button>
      <el-button @click="reset">重置</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { onMounted, onBeforeUnmount } from 'vue'
import { Search } from '@element-plus/icons-vue'

interface ProTableProps {
  labelName?: string
  timeZoneName?: string
  searchParam?: { [key: string]: any } // 搜索参数
  search: () => void // 搜索方法
  reset: () => void // 重置方法
}

// 默认值
const props = withDefaults(defineProps<ProTableProps>(), {
  labelName: '名称',
  timeZoneName: '创建时间',
  searchParam: () => ({})
})
// 与分页跳转冲突
// function enterKey(event) {
//   const code = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode
//   if (code == 13) {
//     props.search()
//   }
// }

// onMounted(() => {
//   document.addEventListener('keyup', enterKey)
// })
// onBeforeUnmount(() => {
//   document.removeEventListener('keyup', enterKey)
// })
</script>
