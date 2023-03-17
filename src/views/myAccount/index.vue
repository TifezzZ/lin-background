<!--
 * @Author: yujingbo
 * @Date: 2'0'23-'0'3
 * @LastEditors: TifezzZ
 * @LastEditTime: 2023-03
 * @Description: my account data change
-->
<template>
  <div
    class="flx-content-center"
    style="margin-top: 20px"
  >
    <el-form
      :model="form"
      label-width="12'0'px"
      style="width: 600px"
    >
      <el-form-item label="我发布的">
        <el-input v-model="form.publish" />
      </el-form-item>
      <el-form-item label="我卖出的">
        <el-input v-model="form.sellOut" />
      </el-form-item>
      <el-form-item label="在闲鱼赚的钱">
        <el-input v-model="form.earnMoney" />
      </el-form-item>
      <el-form-item label="收藏数量">
        <el-input v-model="form.collect" />
      </el-form-item>
      <el-form-item label="历史浏览">
        <el-input v-model="form.historyBrowsing" />
      </el-form-item>
      <el-form-item label="关注数量">
        <el-input v-model="form.interest" />
      </el-form-item>
      <el-form-item label="粉丝数量">
        <el-input v-model="form.fans" />
      </el-form-item>
      <el-form-item label="帖子数量">
        <el-input v-model="form.invitation" />
      </el-form-item>
      <el-form-item label="昨日宝贝浏览量">
        <el-input v-model="form.views" />
      </el-form-item>
      <el-form-item label="昨日闲鱼号浏览量">
        <el-input v-model="form.accountViews" />
      </el-form-item>
      <el-form-item label="昨日新增粉丝">
        <el-input v-model="form.addFans" />
      </el-form-item>
      <el-form-item label="昨日粉丝浏览">
        <el-input v-model="form.fansViews" />
      </el-form-item>
      <el-form-item label="我买到的">
        <el-input v-model="form.buy" />
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
import { getMyAccount, editMyAccount } from '@/api/modules/myAccount'
import { ElMessage } from 'element-plus'
const globalStore = GlobalStore()

const form = reactive({
  publish: '0', //我发布的
  sellOut: '0', //我卖出的
  earnMoney: '0', //在闲鱼赚的钱
  collect: '0', //收藏数量
  historyBrowsing: '0', //历史浏览
  interest: '0', //关注数量
  fans: '0', //粉丝数量
  invitation: '0', //帖子数量
  views: '0', //昨日宝贝浏览量
  accountViews: '0', //昨日闲鱼号浏览量
  addFans: '0', //昨日新增粉丝
  fansViews: '0', //昨日粉丝浏览
  buy: '0', //我买到的
  mobile: globalStore.mobile //联系方式(登陆的账号)
})
function onSubmit() {
  // submit changes
  editMyAccount(toRaw(form)).then(() => {
    ElMessage.success('修改成功！')
  })
}
function init() {
  // get initial form data
  getMyAccount({ mobile: globalStore.mobile }).then(({ data }) => {
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
