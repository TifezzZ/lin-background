<!--
 * @Author: yujingbo
 * @Date: 2023-01
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-03
 * @Description:
-->
<template>
  <img
    :id="imgId"
    :authSrc="imgUrl"
  />
</template>

<script lang="ts" setup>
import { watch } from 'vue'
import { randomString } from '@/utils'
import { GlobalStore } from '@/store/index'

const globalStore = GlobalStore()
const imgId = randomString()
const props = defineProps({
  imgUrl: {
    type: String,
    default: ''
  }
})

Object.defineProperty(Image.prototype, 'authsrc', {
  writable: true,
  enumerable: true,
  configurable: true
})

function setImgUrl() {
  setTimeout(() => {
    const img = <HTMLImageElement>document.getElementById(imgId)
    const url = img.getAttribute('authsrc')
    const request = new XMLHttpRequest()
    request.responseType = 'blob'
    request.open('get', url, true)
    request.setRequestHeader('BEARER_TOKEN', globalStore.token)
    request.onreadystatechange = () => {
      if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
        img.src = URL.createObjectURL(request.response)
        img.onload = () => {
          URL.revokeObjectURL(img.src)
        }
      }
    }
    request.send(null)
  }, 400)
}

watch(
  () => props.imgUrl,
  () => {
    setImgUrl()
  },
  {
    immediate: true
  }
)
</script>
