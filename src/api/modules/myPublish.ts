/*
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: TifezzZ
 * @LastEditTime: 2023-03
 * @Description:
 */
import http from '@/api'
import { MyPublish } from '@/api/interface'
/**
 * @name 获取擦亮曝光
 */
export const getMyPublish = (params: MyPublish.GetMyPublish) => {
  return http.post<any>(`/xianYu_tbs/view/selectViewPara`, params)
}
/**
 * @name 编辑擦亮曝光
 */
export const editMyPublish = (params: MyPublish.EditMyPublish) => {
  return http.post<any>(`/xianYu_tbs/view/updateViewPara`, params)
}
/**
 * @name 新增擦亮曝光
 */
export const addMyPublish = (params: MyPublish.EditMyPublish) => {
  return http.post<any>(`/xianYu_tbs/view/setViewPara`, params)
}
