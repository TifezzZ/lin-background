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
    path: '/onSale',
    name: 'onSale',
    component: Layout,
    redirect: '/onSale/index',
    meta: {
      keepAlive: true,
      requiresAuth: false,
      title: '在卖',
      key: 'onSale',
      to: { name: 'onSale' }
    },
    children: [
      {
        path: 'index',
        name: 'onSale',
        component: () => import('@/views/onSale/index.vue'),
        meta: {
          keepAlive: true,
          requiresAuth: false,
          key: 'onSale'
        }
      }
    ]
  }
]

export default homeRouter
