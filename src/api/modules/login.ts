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
 * @name 登陆
 */
export const loginApi = (params: Login.ReqLoginForm) => {
  return http.post<any>(`/xianYu_tbs/user/login`, params)
}

/**
 * @name 注册
 */
export const registerApi = (params: Login.RegisterForm) => {
  return http.post<any>(`/xianYu_tbs/user/register`, params)
}
