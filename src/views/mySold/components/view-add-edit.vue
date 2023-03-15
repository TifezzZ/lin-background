<!--
 * @Author: TifezzZ
 * @Date: 2023-03
 * @LastEditors: TifezzZ
 * @LastEditTime: 2023-03
 * @Description: 新增/编辑我卖出的
-->
<template>
  <el-dialog
    v-model="dialogVisible"
    :title="`${drawerProps.title}数据`"
    draggable
  >
    <el-form
      :model="drawerProps.rowData"
      label-width="120px"
      style="width: 600px"
    >
      <el-form-item label="交易状态">
        <el-radio-group v-model="drawerProps.rowData.transactionStatus">
          <el-radio label="success">待发货</el-radio>
          <el-radio label="fail">待收货</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="产品状态">
        <el-radio-group v-model="drawerProps.rowData.productionStatus">
          <el-radio label="success">交易成功</el-radio>
          <el-radio label="fail">买家关闭了交易</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="产品图片">
        <UploadImgs
          v-model:fileList="drawerProps.rowData.productionPhoto"
          height="140px"
          width="140px"
        >
          <template #empty>
            <el-icon><Picture /></el-icon>
            <span>请上传照片</span>
          </template>
        </UploadImgs>
      </el-form-item>
      <el-form-item label="产品名称">
        <el-input v-model="drawerProps.rowData.productName" />
      </el-form-item>
      <el-form-item label="实收款">
        <el-input-number
          v-model="drawerProps.rowData.payment"
          :min="0"
        />
      </el-form-item>
      <el-form-item label="用户头像">
        <UploadImg
          v-model:imageUrl="drawerProps.rowData!.avatar"
          width="135px"
          height="135px"
          :file-size="3"
        >
          <template #empty>
            <el-icon><Avatar /></el-icon>
            <span>请上传头像</span>
          </template>
        </UploadImg>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="drawerProps.rowData.userName" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button
          type="primary"
          @click="handleSubmit"
        >
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UploadImg from '@/components/Upload/Img.vue'
import UploadImgs from '@/components/Upload/Imgs.vue'
import { ElMessage, FormInstance } from 'element-plus'
interface DialogProps {
  title: string
  isView: boolean
  rowData: any
  api?: (params: any) => Promise<any>
  getTableList?: () => void
}
const dialogVisible = ref(false)

// 图片上传
const drawerProps = ref<DialogProps>({
  isView: false,
  title: '',
  rowData: {
    transactionStatus: 'success',
    productionStatus: 'success',
    productionPhoto: [''],
    productName: '',
    payment: 0,
    avatar: '',
    userName: ''
  }
})
// 接收父组件传过来的参数
const acceptParams = (params) => {
  drawerProps.value = params
  dialogVisible.value = true
}
// 提交数据（新增/编辑）
const ruleFormRef = ref<FormInstance>()
const handleSubmit = () => {
  ruleFormRef.value!.validate(async (valid) => {
    if (!valid) return
    try {
      await drawerProps.value.api!(drawerProps.value.rowData)
      ElMessage.success({ message: `${drawerProps.value.title}成功！` })
      drawerProps.value.getTableList!()
      dialogVisible.value = false
    } catch (error) {
      console.log(error)
    }
  })
}
defineExpose({
  acceptParams
})
</script>
