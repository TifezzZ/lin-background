<!--
 * @Author: TifezzZ
 * @Date: 2023-03
 * @LastEditors: TifezzZ
 * @LastEditTime: 2023-03
 * @Description: 新增/编辑我在买的
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
        label="产品价格"
        prop="productPrice"
      >
        <el-input v-model="drawerProps.rowData.productPrice" />
      </el-form-item>
      <el-form-item
        label="浏览量"
        prop="viewsNum"
      >
        <el-input v-model="drawerProps.rowData.viewsNum" />
      </el-form-item>
      <el-form-item
        label="曝光量"
        prop="views"
      >
        <el-input v-model="drawerProps.rowData.views" />
      </el-form-item>
      <!-- 想要数量 -->
      <el-form-item
        label="想要数量"
        prop="want"
      >
        <el-input v-model="drawerProps.rowData.want" />
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
  productPrice: [{ required: true, message: '请输入产品价格', trigger: 'blur' }],
  viewsNum: [{ required: true, message: '请输入浏览量', trigger: 'blur' }],
  views: [{ required: true, message: '请输入曝光量', trigger: 'blur' }],
  want: [{ required: true, message: '请输入想要数量', trigger: 'blur' }]
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
