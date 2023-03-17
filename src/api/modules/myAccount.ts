/*
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-03
 * @Description:
 */
import http from '@/api'
import { MyAccount } from '@/api/interface'
/**
 * @name 获取我的信息
 */
export const getMyAccount = (params: MyAccount.GetMyAccount) => {
  return http.post<any>(`/xianYu_tbs/mine/selectMinePara`, params)
}
/**
 * @name 编辑我的信息
 */
export const editMyAccount = (params: MyAccount.EditMyAccount) => {
  return http.post<any>(`/xianYu_tbs/mine/updateMinePara`, params)
}
