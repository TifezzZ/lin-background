<!--
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: yujingbo
 * @LastEditTime: 2022-12
 * @Description: app.vue
-->
<template>
  <el-config-provider
    :locale="i18nLocale"
    :button="config"
  >
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
// 配置element中英文
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// 配置element按钮文字中间是否有空格
const config = reactive({
  autoInsertSpace: false
})

// element 语言配置 需要多语言在这里添加判断
const i18nLocale = computed((): any => {
  return zhCn
})
</script>
