/*
 * @Author: yujingbo
 * @Date: 2023-03
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-03
 * @Description:
 */
import { createApp, h } from 'vue'
import App from './App.vue'
import router from './routers'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import '@/styles/reset.scss'
// CSS common style sheet
import '@/styles/common.scss'
// custom element css
import '@/styles/element.scss'

const app = createApp({
  render: () => h(App)
})
const pinia = createPinia()
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus)
app.use(pinia)
app.use(router)
app.mount('#app')
