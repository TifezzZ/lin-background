/*
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: TifezzZ
 * @LastEditTime: 2023-03
 * @Description:
 */
import { Login } from '@/api/interface/index'
import http from '@/api'

/**
 * @name 修改用户信息
 */
export const editUserInfo = (params: Login.ChangeUserInfoForm) => {
  return http.post<any>(`/xianYu_tbs/user/updateUserInfo`, params)
}
