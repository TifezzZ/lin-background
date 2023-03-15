<!--
 * @Author: TifezzZ
 * @Date: 2023-03
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-03
 * @Description: 新增/编辑我卖出的
-->
<template>
  <el-dialog
    v-model="dialogVisible"
    :title="title"
    width="500px"
    draggable
  >
    <el-form
      :model="form"
      label-width="120px"
      style="width: 600px"
    >
      <el-form-item label="交易状态">
        <el-radio-group v-model="form.transactionStatus">
          <el-radio label="success">待发货</el-radio>
          <el-radio label="fail">待收货</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="产品状态">
        <el-radio-group v-model="form.productStatus">
          <el-radio label="success">交易成功</el-radio>
          <el-radio label="fail">买家关闭了交易</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="产品图片">123</el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button
          type="primary"
          @click="dialogVisible = false"
        >
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
defineProps<{ row: string }>()
const dialogVisible = ref(false)
const title = ref('新增')
// openDialog
const openDialog = (row) => {
  if (row) {
    title.value = '编辑'
  }
  dialogVisible.value = true
}
const form = reactive({
  transactionStatus: 'success',
  productStatus: 'success'
})
defineExpose({
  openDialog
})
</script>
