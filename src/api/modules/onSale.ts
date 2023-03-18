/*
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: TifezzZ
 * @LastEditTime: 2023-03
 * @Description:
 */
import http from '@/api'
import { OnSale, ReqPage } from '@/api/interface'
/**
 * @name 获取在售数据
 */
export const getSellData = (params: ReqPage) => {
  return http.post<any>(`/xianYu_tbs/publish/selectPublishPara`, params)
}
/**
 * @name 删除在售数据
 */
export const deleteSell = (id: string) => {
  return http.post<any>(`/xianYu_tbs/publish/delPublishPara`, { id })
}
/**
 * @name 新增在售数据
 */
export const addOnSale = (params: OnSale.ResOnSale) => {
  return http.post<any>(`/xianYu_tbs/publish/setPublishPara`, params)
}
/**
 * @name 编辑在售数据
 */
export const editOnSale = (params: OnSale.EditOnSale) => {
  return http.post<any>(`/xianYu_tbs/publish/updatePublishPara`, params)
}
