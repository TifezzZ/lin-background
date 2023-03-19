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
    path: '/myInfo',
    name: 'myInfo',
    component: Layout,
    redirect: '/myInfo/index',
    meta: {
      keepAlive: true,
      requiresAuth: false,
      title: '用户信息',
      key: 'myInfo',
      to: { name: 'myInfo' }
    },
    children: [
      {
        path: 'index',
        name: 'myInfo',
        component: () => import('@/views/myInfo/index.vue'),
        meta: {
          keepAlive: true,
          requiresAuth: false,
          key: 'myInfo'
        }
      }
    ]
  }
]

export default homeRouter
