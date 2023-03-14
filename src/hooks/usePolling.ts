/*
 * @Author: Mr-Nobody-li
 * @Date: 2022-08
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-02
 * @Description: 轮询
 */
import { onUnmounted, onActivated, onDeactivated } from 'vue'

type Callback = () => void

export default (callback: Callback, timeInterval = 60000) => {
  let timer = null
  function create() {
    timer = setInterval(() => {
      callback()
    }, timeInterval)
  }
  create()
  onUnmounted(() => {
    clearInterval(timer)
  })
  onActivated(() => {
    if (!timer) create()
  })
  onDeactivated(() => {
    clearInterval(timer)
    timer = null
  })
  return {
    timer
  }
}
