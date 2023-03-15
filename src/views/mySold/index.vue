<!--
 * @Author: yujingbo
 * @Date: 2023-03
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-03
 * @Description: my account data change
-->
<template>
  <div class="table-box padding_20">
    <base-search
      timeZoneName="导入完成时间"
      :search="search"
      :reset="reset"
      :searchParam="searchParam"
    />
    <div class="table-header">
      <div class="header-button-lf">
        <el-button
          type="primary"
          @click="viewAddEditRef.openDialog()"
        >
          导入数据
        </el-button>
      </div>
    </div>
    <el-table
      ref="tableRef"
      :data="tableData"
      :border="true"
    >
      <el-table-column
        type="index"
        :index="typeIndex"
        label="序号"
        width="60"
        show-overflow-tooltip
      />
      <el-table-column
        prop="name"
        label="交易状态"
        width="120"
        show-overflow-tooltip
      />
      <el-table-column
        prop="name"
        label="产品状态"
        width="120"
        show-overflow-tooltip
      />
      <el-table-column
        prop="name"
        label="产品图片"
        width="120"
        show-overflow-tooltip
      />
      <el-table-column
        prop="name"
        label="产品名称"
        width="120"
        show-overflow-tooltip
      />
      <el-table-column
        prop="name"
        label="实收款"
        width="120"
        show-overflow-tooltip
      />
      <el-table-column
        prop="name"
        label="用户头像"
        width="120"
        show-overflow-tooltip
      />
      <el-table-column
        prop="name"
        label="用户昵称"
        width="120"
        show-overflow-tooltip
      />
      <el-table-column
        label="操作"
        fixed="right"
        width="330"
      >
        <template #default="scope">
          <el-button
            v-for="item in optionItem"
            :key="item"
            type="primary"
            link
            @click="operate(item, scope.row, $event)"
          >
            {{ item }}
          </el-button>
        </template>
      </el-table-column>
      <template #empty>
        <div class="table-empty">
          <div>暂无数据</div>
        </div>
      </template>
    </el-table>
    <!-- 分页组件 -->
    <Pagination
      :pageable="pageable"
      :handle-size-change="handleSizeChange"
      :handle-current-change="handleCurrentChange"
    />
    <!-- 图片预览组件 -->
    <el-image-viewer
      v-if="showViewer"
      :initial-index="imgViewerInitial"
      @close="showViewer = false"
      :url-list="viewerUrlList"
    />
    <viewAddEdit
      ref="viewAddEditRef"
      :row="dialogType"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import baseSearch from '@/components/Search/baseSearch.vue'
import Pagination from '@/components/Table/Pagination.vue'
import { getSoldData, deleteSold } from '@/api/modules/mySold'
import { useHandleData } from '@/hooks/useHandleData'
import { useTable } from '@/hooks/useTable'
import viewAddEdit from './components/view-add-edit.vue'

const { tableData, pageable, searchParam, search, reset, handleSizeChange, handleCurrentChange, getTableList, typeIndex } =
  useTable(getSoldData, {}, true)
const optionItem = ['编辑', '删除']
async function deleteData(row) {
  // 成功和失败的状态
  const message = '是否删除该数据？'
  await useHandleData(deleteSold, row.id, message)
  getTableList()
}
const viewAddEditRef = ref()
const dialogType = ref('add')
function editData(row) {
  viewAddEditRef.value.openDialog(row)
}
const operate = (val, row, event) => {
  if (event) {
    event.currentTarget.blur()
  }
  const func = {
    删除: deleteData,
    编辑: editData
  }
  func[val](row)
}
// 证明材料预览
const showViewer = ref(false)
const imgViewerInitial = ref(0)
const viewerUrlList = ref(<string[]>[])
const api = import.meta.env.VITE_API_URL
function showEvidence(type: string, evidences: any[], startIndex: number) {
  viewerUrlList.value = []
  for (let i = 0; i < evidences.length; i++) {
    viewerUrlList.value.push(`${api}/report/evidenceFile?filepath=${evidences[i].uuid}&token=Bearer globalStore.token`)
  }
  imgViewerInitial.value = startIndex
  showViewer.value = true
}
// 初始数据获取
function init() {
  // get initial form data
  getTableList()
}
init()
</script>

<style lang="scss" scoped></style>
