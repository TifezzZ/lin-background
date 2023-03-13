/*
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-03
 * @Description:左侧菜单栏配置
 */
export default [
  {
    meta: {
      icon: 'application',
      title: '资源中心'
    },
    children: [
      {
        path: '/dataset/index',
        name: 'dataset',
        component: '/dataset/index',
        meta: {
          icon: 'dataset',
          title: '数据管理'
        }
      }
    ]
  },
  {
    path: '/model/index',
    name: 'model',
    component: '/model/index',
    meta: {
      icon: 'model',
      title: '模型仓库'
    }
  },
  {
    path: '/assess/index',
    name: 'assess',
    component: '/assess/index',
    meta: {
      icon: 'assess',
      title: '测评管理'
    }
  },
  {
    meta: {
      icon: 'application',
      title: '应用管理'
    },
    children: [
      {
        path: '/privacy/assess',
        name: 'privacyAssess',
        component: '/privacy/assess',
        meta: {
          icon: '',
          title: '隐私测评'
        }
      },
      {
        path: '/privacy/report',
        name: 'privacy',
        component: '/privacy/report',
        meta: {
          icon: '',
          title: '隐私报告'
        }
      }
    ]
  }
]
