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
      ref="ruleFormRef"
      :model="drawerProps.rowData"
      :rules="rules"
      label-width="120px"
      style="width: 600px"
    >
      <el-form-item
        label="产品名称"
        prop="productName"
      >
        <el-input v-model="drawerProps.rowData.productName" />
      </el-form-item>
      <el-form-item
        label="产品图片"
        prop="productPicture"
      >
        <UploadImg
          v-model:imageUrl="drawerProps.rowData.productPicture"
          height="140px"
          width="140px"
        >
          <template #empty>
            <el-icon><Picture /></el-icon>
            <span>请上传照片</span>
          </template>
        </UploadImg>
      </el-form-item>
      <el-form-item
        label="买家头像"
        prop="buyerPicture"
      >
        <UploadImg
          v-model:imageUrl="drawerProps.rowData!.buyerPicture"
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
      <el-form-item
        label="买家昵称"
        prop="buyerNickname"
      >
        <el-input v-model="drawerProps.rowData.buyerNickname" />
      </el-form-item>
      <el-form-item
        label="实收款"
        prop="actualCollection"
      >
        <el-input v-model="drawerProps.rowData.actualCollection" />
      </el-form-item>
      <!-- 0-交易成功 1-买家关闭了交易 2-退款成功 -->
      <el-form-item
        label="交易状态"
        prop="sellStatus"
      >
        <el-radio-group v-model="drawerProps.rowData.sellStatus">
          <el-radio label="0">交易成功</el-radio>
          <el-radio label="1">买家关闭了交易</el-radio>
          <el-radio label="2">退款成功</el-radio>
        </el-radio-group>
      </el-form-item>
      <!--  0-待付款 1-待发货 2-待收货 -->
      <el-form-item
        label="产品状态"
        prop="productStatus"
      >
        <el-radio-group v-model="drawerProps.rowData.productStatus">
          <el-radio label="0">待付款</el-radio>
          <el-radio label="1">待发货</el-radio>
          <el-radio label="2">待收货</el-radio>
        </el-radio-group>
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
import { ref, reactive } from 'vue'
import UploadImg from '@/components/Upload/Img.vue'
import { ElMessage, FormInstance } from 'element-plus'
import { GlobalStore } from '@/store'
const globalStore = GlobalStore()

interface DialogProps {
  title: string
  isView: boolean
  rowData: any
  api?: (params: any) => Promise<any>
  getTableList?: () => void
}
const dialogVisible = ref(false)

// dialog data
const rules = reactive({
  productName: [{ required: true, message: '请输入商品名称', trigger: 'blur' }],
  productPicture: [{ required: true, message: '请上传商品图片', trigger: 'blur' }],
  buyerPicture: [{ required: true, message: '请上传买家头像', trigger: 'blur' }],
  buyerNickname: [{ required: true, message: '请输入买家昵称', trigger: 'blur' }],
  sellStatus: [{ required: true, message: '请输入交易状态', trigger: 'blur' }],
  productStatus: [{ required: true, message: '请输入产品状态', trigger: 'blur' }]
})

const drawerProps = ref<DialogProps>({
  isView: false,
  title: '',
  rowData: {}
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
      drawerProps.value.rowData.mobile = globalStore.mobile
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
