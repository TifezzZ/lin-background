<!--
 * @Author: yujingbo
 * @Date: 2022-12
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-03
 * @Description: 
-->
<template>
  <div>
    <template v-for="(item, index) in props.data">
      <div
        v-if="!item.children"
        :key="item.title"
      >
        <div class="common_item">
          <div class="icon">
            <img
              :src="srcList[item.icon]"
              alt=""
            />
          </div>
          <div
            class="common_main"
            :class="item.icon"
            style="margin-bottom: 75px"
          >
            <p class="text-16 font-medium">{{ item.title }}</p>
            <p class="text-14">{{ item.description }}</p>
          </div>
          <div class="line"></div>
        </div>
      </div>
      <!-- eslint-disable-next-line vue/require-v-for-key -->
      <div v-else>
        <div
          class="common_item cursor-pointer"
          @click="collapse(index)"
        >
          <div class="icon">
            <img
              :src="srcList[item.icon]"
              alt=""
            />
          </div>
          <div
            class="common_main"
            :class="item.icon"
            style="margin-bottom: 53px"
          >
            <p class="text-16 font-medium">{{ item.title }}</p>
            <p class="text-14">{{ item.description }}</p>
          </div>
          <div
            class="line"
            :style="getLineHeight(index, item.children.length - 1)"
          ></div>
        </div>
        <!-- children -->
        <div
          class="children_list"
          :style="childList[index] ? `height:${61 * item.children.length}px` : ''"
        >
          <div
            v-for="child in item.children"
            :key="child.title"
            class="cursor-pointer common_item ml-10"
            @click="toDetail(child.title)"
          >
            <div class="icon">
              <img
                :src="srcList[child.icon]"
                alt=""
              />
            </div>
            <div
              class="common_main"
              :class="child.icon"
              style="margin-bottom: 12px"
            >
              <p class="text-16 font-medium">{{ child.title }}</p>
              <p class="text-14">{{ child.description }}</p>
            </div>
            <div class="child-line"></div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { PropType, reactive } from 'vue'
import wait from '../../assets/images/step_wait.png'
import success from '../../assets/images/step_success.png'
import load from '../../assets/images/step_load.png'

const props = defineProps({
  data: {
    type: Object as PropType<any>,
    default() {
      return {}
    }
  }
})
const srcList = {
  load: load,
  wait: wait,
  success: success
}
const childList = reactive({})
for (const i in props.data) {
  childList[i] = true
}
// 控制子项是否显示
function collapse(index) {
  childList[index] = !childList[index]
}
// 获取line的高度
function getLineHeight(index, length) {
  // 获取对象的所有属性名
  const keys = Object.keys(props.data)
  // 获取对象的最后一个属性名
  const lastKey = keys[keys.length - 1]
  if (childList[index]) {
    return `height: ${76 + length * 56}px`
  } else if (index === lastKey) {
    return 'height:0px'
  } else {
    return 'height:52px'
  }
}
// 锚点跳转
function toDetail(val) {
  const scrollDom = document.getElementById(val)
  scrollDom.scrollIntoView()
}
</script>

<style lang="scss" scoped>
.icon {
  width: 32px;
  > img {
    width: 100%;
  }
}
.common_item {
  position: relative;
  display: flex;
  > .common_main {
    margin: 4px 0 0px 8px;
  }
}
.wait {
  color: rgba(0, 0, 0, 0.65);
}
.load {
  color: #0c7edf;
}
.success {
  color: rgba(0, 0, 0, 0.85);
}
.line {
  position: absolute;
  top: 37px;
  left: 16px;
  width: 2px;
  height: 56px;
  background: #d2d3d5;
  transition: all 0.5s;
}
.child-line {
  position: absolute;
  top: 14px;
  left: -23px;
  width: 20px;
  height: 2px;
  background: #d2d3d5;
}
.children_list {
  height: 0px;
  overflow: hidden;
  transition: all 0.38s;
}
</style>
