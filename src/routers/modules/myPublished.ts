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
    path: '/myPublished',
    name: 'myPublished',
    component: Layout,
    redirect: '/myPublished/index',
    meta: {
      keepAlive: true,
      requiresAuth: false,
      title: '我发布的',
      key: 'myPublished',
      to: { name: 'myPublished' }
    },
    children: [
      {
        path: 'index',
        name: 'myPublished',
        component: () => import('@/views/myPublished/index.vue'),
        meta: {
          keepAlive: true,
          requiresAuth: false,
          key: 'myPublished'
        }
      }
    ]
  }
]

export default homeRouter
