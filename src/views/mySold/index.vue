<!--
 * @Author: yujingbo
 * @Date: 2023-03
 * @LastEditors: TifezzZ
 * @LastEditTime: 2023-03
 * @Description: my account data change
-->
<template>
  <div class="table-box padding_20">
    <!-- <base-search
      timeZoneName="导入完成时间"
      :search="search"
      :reset="reset"
      :searchParam="searchParam"
    /> -->
    <div class="table-header">
      <div class="header-button-lf">
        <el-button
          type="primary"
          @click="openDialog('新增')"
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
        prop="productName"
        label="商品名称"
        show-overflow-tooltip
      />
      <el-table-column
        prop="productPicture"
        label="商品图片"
      >
        <template #default="scope">
          <img
            @click="showImg(scope.row.productPicture)"
            style="width: 80px; height: 80px"
            :src="`/api/xianYu_tbs/${scope.row.productPicture}`"
            alt=""
          />
        </template>
      </el-table-column>
      <el-table-column label="买家头像">
        <template #default="scope">
          <img
            @click="showImg(scope.row.productPicture)"
            style="width: 80px; height: 80px"
            :src="`/api/xianYu_tbs/${scope.row.buyerPicture}`"
            alt=""
          />
        </template>
      </el-table-column>
      <el-table-column
        prop="buyerNickname"
        label="买家昵称"
        show-overflow-tooltip
      />
      <el-table-column
        prop="actualCollection"
        label="买家收款"
        show-overflow-tooltip
      />
      <el-table-column
        prop="sellStatus"
        label="交易状态"
        show-overflow-tooltip
      >
        <template #default="scope">
          {{ sellStatusType[scope.row.sellStatus] }}
        </template>
      </el-table-column>
      <el-table-column
        prop="productStatus"
        label="产品状态"
        show-overflow-tooltip
      >
        <template #default="scope">
          {{ productStatusType[scope.row.productStatus] }}
        </template>
      </el-table-column>
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
    <viewAddEdit ref="viewAddEditRef" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import baseSearch from '@/components/Search/baseSearch.vue'
import Pagination from '@/components/Table/Pagination.vue'
import { getSoldData, deleteSold, addMySold, editMysold } from '@/api/modules/mySold'
import { useHandleData } from '@/hooks/useHandleData'
import { useTable } from '@/hooks/useTable'
import viewAddEdit from './components/view-add-edit.vue'
import { GlobalStore } from '@/store'
const globalStore = GlobalStore()

const { tableData, pageable, searchParam, search, reset, handleSizeChange, handleCurrentChange, getTableList, typeIndex } =
  useTable(getSoldData, { mobile: globalStore.mobile }, true)
const optionItem = ['编辑', '删除']
async function deleteData(row) {
  // 成功和失败的状态
  const message = '是否删除该数据？'
  await useHandleData(deleteSold, row.id, message)
  getTableList()
}

function editData(row) {
  openDialog('编辑', row)
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
// 展示图片
const showViewer = ref(false)
const imgViewerInitial = ref(0)
const viewerUrlList = ref(<string[]>[])
function showImg(imgUrl: string, startIndex = 0) {
  viewerUrlList.value = []
  viewerUrlList.value.push(`/api/xianYu_tbs/${imgUrl}`)
  imgViewerInitial.value = startIndex
  showViewer.value = true
}
// 展示dialog 新增 编辑
const viewAddEditRef = ref()
const openDialog = (title: string, rowData = {}) => {
  const params = {
    title,
    isView: title === '查看',
    rowData: { ...rowData },
    api: title === '新增' ? addMySold : title === '编辑' ? editMysold : undefined,
    getTableList: getTableList
  }
  viewAddEditRef.value?.acceptParams(params)
}
// 交易状态 产品状态枚举
const sellStatusType = ['交易成功', '买家关闭了交易', '退款成功']
const productStatusType = ['待付款', '待发货', '待收货']
// 初始数据获取
// function init() {
//   // get initial form data
//   getTableList()
// }
// init()
</script>
