/*
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-03
 * @Description:
 */
import http from '@/api'
import { Notice } from '@/api/interface'
/**
 * @name 获取系统消息
 */
export const getNotice = (params: Notice.GetNotice) => {
  return http.post<any>(`/xianYu_tbs/msg/selectMsgPara`, params)
}
/**
 * @name 编辑系统消息
 */
export const editNotice = (params: Notice.EditNotice) => {
  return http.post<any>(`/xianYu_tbs/msg/updateMsgPara`, params)
}
