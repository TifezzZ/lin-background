<!--
 * @Author: yujingbo
 * @Date: 2023-03
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-03
 * @Description: 登录页面
-->
<template>
  <div class="login-container flx-center">
    <div class="login-box">
      <div
        v-if="showTab === 'login'"
        class="login-form"
      >
        <div class="login-logo">
          <p class="logo-text">后管</p>
        </div>
        <LoginForm
          ref="loginRef"
          @set-show-tab="setShowTab"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="login">
import LoginForm from './components/LoginForm.vue'
import { LoginFormExpose } from './interface/index'
import { ref } from 'vue'

const showTab = ref('login')
const setShowTab = (val) => {
  showTab.value = val
}
// 使用子组件数据
const loginRef = ref<LoginFormExpose | null>(null)
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
