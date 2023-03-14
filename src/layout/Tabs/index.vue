<!--
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: yujingbo
 * @LastEditTime: 2022-12
 * @Description: 
-->
<template>
  <div class="tabs-box">
    <div class="tabs-menu">
      <el-tabs
        v-model="tabsMenuValue"
        @tab-click="tabClick"
        @tab-remove="removeTab"
      >
        <el-tab-pane
          v-for="item in tabsMenuList"
          :key="item.path"
          :path="item.path"
          :label="item.title"
          :name="item.path"
          :closable="item.close"
        >
          <template #label>
            <el-icon
              v-if="item.icon"
              class="tabs-icon"
            >
              <component :is="item.icon" />
            </el-icon>
            {{ item.title }}
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { TabsStore } from '@/store/modules/tabs'
import { TabsPaneContext } from 'element-plus'

const tabStore = TabsStore()
const tabsMenuList = computed(() => tabStore.tabsMenuList)
const tabsMenuValue = computed({
  get: () => {
    return tabStore.tabsMenuValue
  },
  set: (val) => {
    tabStore.setTabsMenuValue(val)
  }
})

const route = useRoute()
const router = useRouter()
// 监听路由的变化（防止浏览器后退/前进不变化 tabsMenuValue）
watch(
  () => route.path,
  () => {
    const params = {
      title: route.meta.title as string,
      path: route.path,
      close: true
    }
    if (tabStore.tabsMenuList.length === 0) params.close = false
    tabStore.addTabs(params)
  },
  {
    immediate: true
  }
)

// Tab Click
const tabClick = (tabItem: TabsPaneContext) => {
  const path = tabItem.props.name as string
  router.push(path)
}

// Remove Tab
const removeTab = (activeTabPath: string) => {
  tabStore.removeTabs(activeTabPath)
}
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
