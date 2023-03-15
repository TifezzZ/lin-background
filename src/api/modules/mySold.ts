/*
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-02
 * @Description:
 */
import http from '@/api'

/**
 * @name 获取卖出数据
 */
export const getSoldData = (params) => {
  return http.post<string>(``, params)
}
/**
 * @name 删除卖出数据
 */
export const deleteSold = (params) => {
  return http.post<string>(``, params)
}
/**
 * @name 新增卖出数据
 */
export const addMySold = (params) => {
  return http.post<string>(``, params)
}
/**
 * @name 编辑卖出数据
 */
export const editMysold = (params) => {
  return http.post<string>(``, params)
}