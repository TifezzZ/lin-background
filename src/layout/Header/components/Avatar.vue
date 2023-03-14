<!--
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-01
 * @Description: 
-->
<template>
  <el-dropdown trigger="click">
    <!-- <div class="avatar"> -->
    <Avatar :alt="globalStore.userInfo" />
    <!-- <img
        src="@/assets/images/avatar.gif"
        alt="avatar"
      /> 
    </div>-->
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          divided
          @click="logout"
        >
          登出
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { ElMessageBox, ElMessage } from 'element-plus'
import Avatar from '@/layout/Header/components/avatar-img/avatar-component.vue'
import { useRouter } from 'vue-router'
import { GlobalStore } from '@/store'

const router = useRouter()
const globalStore = GlobalStore()

// 退出登录
const logout = () => {
  ElMessageBox.confirm('您是否确认退出登录?', '温馨提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    router.push({ name: 'login' })
    globalStore.setToken('')
    ElMessage({
      type: 'success',
      message: '退出登录成功！'
    })
  })
}
</script>

<style scoped lang="scss">
@import '../index.scss';
</style>
