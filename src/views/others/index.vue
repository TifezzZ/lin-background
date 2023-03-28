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
      <el-form-item label="是否接收信息">
        <el-radio-group v-model="form.acceptInfo">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="接受信息频率">
        <el-input v-model="form.a"><template #append>s</template></el-input>
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
import { getNotice, editNotice } from '@/api/modules/notice'
import { ElMessage } from 'element-plus'
import { GlobalStore } from '@/store'
const globalStore = GlobalStore()

const form = reactive({
  acceptInfo: '',
  a: '',
  mobile: globalStore.mobile
})
function onSubmit() {
  // submit changes
  editNotice(toRaw(form)).then(() => {
    ElMessage.success('修改成功！')
  })
}
function init() {
  // get initial form data
  getNotice({ mobile: globalStore.mobile }).then(({ data }) => {
    for (const i in form) {
      if (Object.prototype.hasOwnProperty.call(data, i)) {
        form[i] = data[i]
      }
    }
  })
}
init()
</script>

<style lang="scss" scoped></style>
