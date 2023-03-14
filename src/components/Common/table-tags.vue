<!--
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-03
 * @Description: 展示tag
-->
<template>
  <div
    v-show="tagList"
    class="flex-box"
  >
    <template
      v-for="item in tagList"
      :key="item"
    >
      <el-tag>{{ item }}</el-tag>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onBeforeMount } from 'vue'
import { tagsToList } from '@/utils'

const props = defineProps({
  tags: {
    type: String,
    default: ''
  }
})
const tagList = ref()

onBeforeMount(() => {
  if (props.tags) tagList.value = tagsToList(props.tags)
})
watch(
  () => props.tags,
  (newVal) => {
    tagList.value = tagsToList(newVal)
  }
)
</script>

<style lang="scss" scoped>
.flex-box {
  display: flex;
  > :not(:nth-child(1)) {
    margin-left: 6px;
  }
}
</style>
