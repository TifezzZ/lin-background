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
    path: '/mySold',
    name: 'mySold',
    component: Layout,
    redirect: '/mySold/index',
    meta: {
      keepAlive: true,
      requiresAuth: false,
      title: '我卖出的',
      key: 'mySold',
      to: { name: 'mySold' }
    },
    children: [
      {
        path: 'index',
        name: 'mySold',
        component: () => import('@/views/mySold/index.vue'),
        meta: {
          keepAlive: true,
          requiresAuth: false,
          key: 'mySold'
        }
      }
    ]
  }
]

export default homeRouter
