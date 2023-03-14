<!--
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: yujingbo
 * @LastEdittime: 2022-12
 * @Description: 表格状态栏
-->
<template>
  <div class="main">
    <template v-if="props.state == 'UPLOADING'">
      <span>正在上传：</span>
      <el-progress :percentage="store.uploadData[id]" />
      <span>- 等待导入</span>
    </template>
    <template v-else-if="props.state == 'LOADING'">
      <span>上传完成 -</span>
      <span>正在导入：</span>
      <el-progress :percentage="importProgress" />
    </template>
    <template v-else-if="props.state == 'COMPLETE'">
      <span>{{ timeFormat(date) }}</span>
    </template>
    <template v-else-if="props.state == 'UPLOAD_FAILURE'">
      <span class="error">上传失败</span>
    </template>
    <template v-else>
      <span class="error">导入失败</span>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onBeforeMount, onUnmounted, onDeactivated } from 'vue'
import { useStore } from '@/store/modules/common'
import { loadProgress } from '@/api/modules/common'
import { timeFormat } from '@/utils'

const store = useStore()
const props = defineProps({
  state: {
    default: '',
    type: String
  },
  id: {
    default: '',
    type: String
  },
  date: {
    default: '',
    type: String
  }
})
let timer
// 从接口获取上传进度
const importProgress = ref(0)

function getProgress() {
  function loadProgressApi() {
    loadProgress('dataset', props.id).then((res) => {
      if (Number(res.data)) importProgress.value = Number(res.data)
    })
  }
  // 立即执行一次 获取进度
  loadProgressApi()
  timer = setInterval(() => {
    loadProgressApi()
  }, 1000)
}

// 初始状态为LOADING的任务 获取进度
onBeforeMount(() => {
  if (props.state === 'LOADING') getProgress()
})
onDeactivated(() => {
  clearInterval(timer)
})
onUnmounted(() => {
  clearInterval(timer)
})

// 初始状态不为LOADING的任务 获取进度
watch(
  () => props.state,
  (val) => {
    if (val === 'LOADING') {
      getProgress()
    } else {
      clearInterval(timer)
    }
  }
)
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  align-items: center;
  // justify-content: center;
}
:deep(.el-progress-bar) {
  min-width: 40px;
}
.error {
  font-size: 14px;
  font-weight: 400;
  color: #dc0002;
}
</style>
