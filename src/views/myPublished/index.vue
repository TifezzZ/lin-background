<!--
 * @Author: yujingbo
 * @Date: 2023-03
 * @LastEditors: TifezzZ
 * @LastEditTime: 2023-03
 * @Description: 擦亮曝光
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
      <el-form-item label="近日曝光">
        <el-input v-model="form.viewsNum" />
      </el-form-item>
      <el-form-item label="近期优化记录">
        <el-input v-model="form.shineNum" />
      </el-form-item>
      <el-form-item label="是否擦亮">
        <el-radio-group v-model="form.shine">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
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
import { GlobalStore } from '@/store'
import { getMyPublish, editMyPublish } from '@/api/modules/myPublish'
import { ElMessage } from 'element-plus'
const globalStore = GlobalStore()

const form = reactive({
  mobile: globalStore.mobile,
  viewsNum: '0', //近日曝光量
  shineNum: '0', //近期擦亮次数
  shine: '0' //是否擦亮 0-未擦亮 1-擦亮
})
function onSubmit() {
  // submit changes
  editMyPublish(toRaw(form)).then(() => {
    ElMessage.success('修改成功！')
  })
}
function init() {
  // get initial form data
  getMyPublish({ mobile: globalStore.mobile }).then(({ data }) => {
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
