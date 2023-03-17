/*
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: TifezzZ
 * @LastEditTime: 2023-03
 * @Description:index store
 */
import { defineStore } from 'pinia'

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const GlobalStore = defineStore({
  // 开启数据持久化
  persist: true,
  // id: 必须的，在所有 Store 中唯一
  id: 'GlobalState',
  // state: 返回对象的函数
  state: () => ({
    // token
    token: '',
    // mobile
    mobile: ''
  }),
  getters: {},
  actions: {
    // setToken
    setToken(token: string) {
      this.token = token
    },
    // setmobile
    setMobile(mobile: any) {
      this.mobile = mobile
    }
  }
})
