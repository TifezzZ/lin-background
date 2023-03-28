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
    path: '/others',
    name: 'others',
    component: Layout,
    redirect: '/others/index',
    meta: {
      keepAlive: true,
      requiresAuth: false,
      title: '其他配置',
      key: 'others',
      to: { name: 'others' }
    },
    children: [
      {
        path: 'index',
        name: 'others',
        component: () => import('@/views/others/index.vue'),
        meta: {
          keepAlive: true,
          requiresAuth: false,
          key: 'others'
        }
      }
    ]
  }
]

export default homeRouter
