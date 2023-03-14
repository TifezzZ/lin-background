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
      <el-form-item label="通知消息内容">
        <el-input
          v-model="form.notificationMessage"
          :rows="3"
          type="textarea"
        />
      </el-form-item>
      <el-form-item label="通知消息日期">
        <el-date-picker
          v-model="notificationDate"
          type="date"
          placeholder="选择一天"
          value-format="YYYY-MM-DD"
        />
      </el-form-item>
      <el-form-item label="互动消息内容">
        <el-input
          v-model="form.interactiveMessage"
          :rows="3"
          type="textarea"
        />
      </el-form-item>
      <el-form-item label="互动消息日期">
        <el-date-picker
          v-model="interactiveDate"
          type="date"
          placeholder="选择一天"
          value-format="YYYY-MM-DD"
        />
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
  notificationMessage: '',
  notificationDate: undefined,
  interactiveMessage: '',
  interactiveDate: undefined
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
