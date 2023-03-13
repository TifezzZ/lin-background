/*
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-03
 * @Description:router index
 */
import router from "@/routers/router";

/**
 * @description 路由拦截 beforeEach
 * */
router.beforeEach((to, from, next) => {
  // 正常访问页面
  next();
});
export default router;
