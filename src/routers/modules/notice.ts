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
    path: '/notice',
    name: 'notice',
    component: Layout,
    redirect: '/notice/index',
    meta: {
      keepAlive: true,
      requiresAuth: false,
      title: '消息通知',
      key: 'notice',
      to: { name: 'notice' }
    },
    children: [
      {
        path: 'index',
        name: 'notice',
        component: () => import('@/views/notice/index.vue'),
        meta: {
          keepAlive: true,
          requiresAuth: false,
          key: 'notice'
        }
      }
    ]
  }
]

export default homeRouter
