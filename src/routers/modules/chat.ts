/*
 * @Author: yujingbo
 * @Date: 2023-03
 * @LastEditors: TifezzZ
 * @LastEditTime: 2023-03
 * @Description:
 */
import { RouteRecordRaw } from 'vue-router'
import { Layout } from '@/routers/constant'

const homeRouter: Array<RouteRecordRaw> = [
  {
    path: '/chat',
    name: 'chat',
    component: Layout,
    redirect: '/chat/index',
    meta: {
      keepAlive: true,
      requiresAuth: false,
      title: '聊天消息',
      key: 'chat',
      to: { name: 'chat' }
    },
    children: [
      {
        path: 'index',
        name: 'chat',
        component: () => import('@/views/chat/index.vue'),
        meta: {
          keepAlive: true,
          requiresAuth: false,
          key: 'chat'
        }
      }
    ]
  }
]

export default homeRouter
