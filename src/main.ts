/*
 * @Author: yujingbo
 * @Date: 2023-03
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-03
 * @Description:
 */
import { createApp, h } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routers";

const app = createApp({
  render: () => h(App),
});
app.use(router);
app.mount("#app");
