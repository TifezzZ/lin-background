/*
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: yujingbo
 * @LastEditTime: 2022-12
 * @Description:通用的pinia store setup模式
 */
import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('common', () => {
  const uploadData = reactive({})
  const AbortController = {}
  return { uploadData, AbortController }
})
