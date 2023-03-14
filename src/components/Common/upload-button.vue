<!--
 * @Author: yujingbo
 * @Date: 2022-10
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-03
 * @Description: 上传文件组件
-->
<template>
  <div class="upload_button">
    <el-upload
      ref="uploadRef"
      action=""
      :auto-upload="false"
      :multiple="false"
      :http-request="uploadFile"
      :on-change="changedFile"
      :before-remove="removedFile"
      :limit="1"
      accept=".zip"
    >
      <template #trigger>
        <template v-if="defaultButton">
          <el-button type="primary">选择文件</el-button>
        </template>
        <slot v-else></slot>
      </template>
      <slot name="other"></slot>
      <!-- <template #tip>
        <div class="el-upload__tip">请上传zip文件,大小为250M以内</div>
      </template> -->
    </el-upload>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { UploadApi } from '@/api/modules/common'
// import { useStore } from '@/store/index'
const props = defineProps({
  // 表格数据
  type: {
    type: String,
    default: 'dataset'
  },
  defaultButton: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['startUpload', 'uploadFail', 'uploadSuccess', 'changedFile', 'removedFile'])
// const store = useStore()
const file = ref()
const uploadRef = ref()

const preUpload = (file: File) => {
  const LIMIT_SIZE = 5 * 1024 * 1024 * 1024
  if (file.size > LIMIT_SIZE) {
    ElMessage.warning('上传文件过大~')
    return false
  } else {
    return true
  }
}

const uploadFile = (id: string) => {
  if (preUpload(file.value.raw)) {
    const formData = new FormData()
    formData.append('id', id)
    formData.append('dataFile', file.value.raw)
    emit('startUpload')
    UploadApi(props.type, formData)
      .then(() => {
        emit('uploadSuccess')
      })
      .catch(() => {
        emit('uploadFail')
      })
  }
}
// 上传文件修改
const changedFile = (val) => {
  file.value = val
  emit('changedFile', val)
}
// 删除上传文件
const removedFile = () => {
  file.value = ''
  emit('removedFile')
}
defineExpose({ uploadFile })
</script>
<style>
.upload_button {
  width: 400px;
}
</style>
