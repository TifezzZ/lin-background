<!--
 * @Author: Mr-Nobody-li
 * @Date: 2022-11
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-02
 * @Description: 
-->
<template>
  <el-input
    v-model="inputValue"
    :disabled="disabled"
    @change="handleInputChange"
  >
    <template #prefix>
      <el-tag
        v-for="(item, index) in tags"
        :key="JSON.stringify(item + index)"
        class="tag"
        :closable="!disabled"
        @close="handleTagRemove(index)"
      >
        {{ item }}
      </el-tag>
    </template>
  </el-input>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import { computed, ref } from 'vue'

const props = defineProps({
  tags: {
    type: Array,
    default: () => []
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

// 标签
const tags = computed({
  get: () => props.tags,
  set: () => emits('update:tags', tags)
})

// 输入值
const inputValue = ref('')

const emits = defineEmits(['update:tags'])

// 输入框change事件
const handleInputChange = (val) => {
  if (val === '') return
  if (val.length > 10) return ElMessage.warning('关键词过长')
  if (tags.value.length > 4) return ElMessage.warning('关键词个数过多')
  for (let i = 0; i < tags.value.length; i++) {
    if (tags.value[i] === val) return ElMessage.warning('存在相同关键词')
  }
  tags.value.push(val)
  inputValue.value = ''
}

// tag移除事件
const handleTagRemove = (index) => {
  tags.value.splice(index, 1)
}
</script>

<style lang="scss" scoped>
.tag {
  margin-right: 5px;
}
</style>
