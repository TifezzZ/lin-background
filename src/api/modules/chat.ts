/*
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-03
 * @Description:
 */
import http from '@/api'
import { Chat, ReqPage } from '@/api/interface'
/**
 * @name 获取聊天消息
 */
export const getChatData = (params: ReqPage) => {
  return http.post<any>(`/xianYu_tbs/chat/selectChatPara`, params)
}
/**
 * @name 删除聊天消息
 */
export const deleteChat = (id: string) => {
  return http.post<any>(`/xianYu_tbs/chat/delChatPara`, { id })
}
/**
 * @name 新增聊天消息
 */
export const addChat = (params: Chat.ResChat) => {
  return http.post<any>(`/xianYu_tbs/chat/setChatPara`, params)
}
/**
 * @name 编辑聊天消息
 */
export const editChat = (params: Chat.EditChat) => {
  return http.post<any>(`/xianYu_tbs/chat/updateChatPara`, params)
}
