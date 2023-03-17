/*
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-03
 * @Description:
 */
import http from '@/api'
import { MyPublish } from '@/api/interface'
/**
 * @name 获取擦亮曝光
 */
export const getMyAccount = (params: MyPublish.GetMyPublish) => {
  return http.post<any>(`/xianYu_tbs/view/selectViewPara`, params)
}
/**
 * @name 编辑擦亮曝光
 */
export const editMyAccount = (params: MyPublish.EditMyPublish) => {
  return http.post<any>(`/xianYu_tbs/view/updateViewPara`, params)
}
