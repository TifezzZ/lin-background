<!--
 * @Author: yujingbo
 * @Date: 2023-03
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
      label-width="120px"
      style="width: 600px"
    >
      <el-form-item label="昵称">
        <el-input v-model="form.nickName" />
      </el-form-item>
      <el-form-item label="会员名">
        <el-input v-model="form.memberName" />
      </el-form-item>
      <el-form-item label="收藏">
        <el-input-number
          v-model="form.collectNumber"
          :min="0"
        />
      </el-form-item>
      <el-form-item label="历史浏览">
        <el-input-number
          v-model="form.historyBrowsing"
          :min="0"
        />
      </el-form-item>
      <el-form-item label="关注">
        <el-input-number
          v-model="form.concerns"
          :min="0"
        />
      </el-form-item>
      <el-form-item label="粉丝">
        <el-input-number
          v-model="form.fans"
          :min="0"
        />
      </el-form-item>
      <el-form-item label="帖子">
        <el-input-number
          v-model="form.cards"
          :min="0"
        />
      </el-form-item>
      <el-form-item label="昨日宝贝浏览量">
        <el-input-number
          v-model="form.yesterdayProductViews"
          :min="0"
        />
      </el-form-item>
      <el-form-item label="昨日闲鱼浏览量">
        <el-input-number
          v-model="form.yesterdayXianYuViews"
          :min="0"
        />
      </el-form-item>
      <el-form-item label="新增粉丝">
        <el-input-number
          v-model="form.addFans"
          :min="0"
        />
      </el-form-item>
      <el-form-item label="粉丝浏览">
        <el-input-number
          v-model="form.fansViews"
          :min="0"
        />
      </el-form-item>
      <el-form-item label="我发布的">
        <el-input-number
          v-model="form.published"
          :min="0"
        />
      </el-form-item>
      <el-form-item label="我卖出的">
        <el-input-number
          v-model="form.sold"
          :min="0"
        />
      </el-form-item>
      <el-form-item label="我买到的">
        <el-input-number
          v-model="form.bought"
          :min="0"
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

// 昵称/会员名/收藏/历史浏览/关注/粉丝/帖子/昨日宝贝浏览量/昨日闲鱼浏览量/新增粉丝/粉丝浏览/我发布的/我卖出的/我买到的
const form = reactive({
  nickName: '',
  memberName: '',
  collectNumber: 0,
  historyBrowsing: 0,
  concerns: 0,
  fans: 0,
  cards: 0,
  yesterdayProductViews: 0,
  yesterdayXianYuViews: 0,
  addFans: 0,
  fansViews: 0,
  published: 0,
  sold: 0,
  bought: 0
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
