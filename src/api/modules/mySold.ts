/*
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-03
 * @Description:
 */
import http from '@/api'
import { MySold, ReqPage } from '@/api/interface'
/**
 * @name 获取卖出数据
 */
export const getSoldData = (params: ReqPage) => {
  return http.post<any>(`/xianYu_tbs/sell/selectSellPara`, params)
}
/**
 * @name 删除卖出数据
 */
export const deleteSold = (id: string) => {
  return http.post<any>(`/xianYu_tbs/sell/delSellPara`, { id })
}
/**
 * @name 新增卖出数据
 */
export const addMySold = (params: MySold.ResMySold) => {
  return http.post<any>(`/xianYu_tbs/sell/setSellPara`, params)
}
/**
 * @name 编辑卖出数据
 */
export const editMysold = (params: MySold.EditMySold) => {
  return http.post<any>(`/xianYu_tbs/sell/updateSellPara`, params)
}
