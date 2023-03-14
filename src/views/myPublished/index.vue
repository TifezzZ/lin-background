<!--
 * @Author: yujingbo
 * @Date: 2023-03
 * @LastEditors: TifezzZ
 * @LastEditTime: 2023-03
 * @Description: my published data change
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
        <el-input-number
          v-model="form.exposureValue"
          :min="0"
        />
      </el-form-item>
      <el-form-item label="近期优化记录">
        <el-input-number
          v-model="form.optimizeValue"
          :min="0"
        />
      </el-form-item>
      <el-form-item label="是否擦亮">
        <el-radio-group v-model="form.shine">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
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
import { reactive } from 'vue'

const form = reactive({
  exposureValue: 0,
  optimizeValue: 0,
  shine: false
})
function onSubmit() {
  // submit changes
}
function init() {
  // get initial form data
}
init()
</script>

<style lang="scss" scoped></style>
