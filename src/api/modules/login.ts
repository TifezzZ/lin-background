/*
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-02
 * @Description:
 */
import { Login } from '@/api/interface/index'

import http from '@/api'

/**
 * @name 登录模块
 */
// * 用户登录接口
export const loginApi = (params: Login.ReqLoginForm) => {
  return http.post<string>(`/auth/login`, params)
}

/**
 * 获取验证码图片
 */
export const getVerificationCode = () => {
  return http.get<Login.verificationCode>('/auth/code')
}
