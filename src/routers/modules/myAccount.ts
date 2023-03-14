/*
 * @Author: yujingbo
 * @Date: 2023-03
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-03
 * @Description:
 */
import { RouteRecordRaw } from 'vue-router'
import { Layout } from '@/routers/constant'

const homeRouter: Array<RouteRecordRaw> = [
  {
    path: '/myAccount',
    name: 'myAccount',
    component: Layout,
    redirect: '/myAccount/index',
    meta: {
      keepAlive: true,
      requiresAuth: false,
      title: '我的账户',
      key: 'myAccount',
      to: { name: 'myAccount' }
    },
    children: [
      {
        path: 'index',
        name: 'myAccount',
        component: () => import('@/views/myAccount/index.vue'),
        meta: {
          keepAlive: true,
          requiresAuth: false,
          key: 'myAccount'
        }
      }
    ]
  }
]

export default homeRouter
