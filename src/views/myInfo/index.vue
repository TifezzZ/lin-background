<!--
 * @Author: yujingbo
 * @Date: 2023-03
 * @LastEditors: TifezzZ
 * @LastEditTime: 2023-03
 * @Description: notice data change
-->
<template>
  <div
    class="flx-content-center"
    style="margin-top: 20px"
  >
    <el-form
      :model="form"
      label-width="120px"
      style="width: 600px"
    >
      <el-form-item label="账号名称">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="form.nickname" />
      </el-form-item>
      <el-form-item
        prop="picture"
        label="用户头像"
      >
        <UploadImg
          v-model:imageUrl="form.picture"
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
      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit"
        >
          确认
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRaw } from 'vue'
import { editUserInfo } from '@/api/modules/myInfo'
import { ElMessage } from 'element-plus'
import { GlobalStore } from '@/store'
import UploadImg from '@/components/Upload/Img.vue'

const globalStore = GlobalStore()

const form = reactive({
  username: globalStore.userInfo.username,
  nickname: globalStore.userInfo.nickname,
  mobile: globalStore.mobile,
  picture: globalStore.userInfo.picture
})
function onSubmit() {
  // submit changes
  editUserInfo(toRaw(form)).then(() => {
    ElMessage.success('修改成功！')
    globalStore.userInfo.username = form.username
    globalStore.userInfo.nickname = form.nickname
    globalStore.userInfo.picture = form.picture
  })
}
</script>

<style lang="scss" scoped></style>
