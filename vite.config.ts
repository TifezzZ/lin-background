/*
 * @Author: yujingbo
 * @Date: 2022-07
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-03
 * @Description:vite config
 */
import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { wrapperEnv } from "./src/utils/getEnv";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());
  const viteEnv = wrapperEnv(env);
  return {
    plugins: [vue()],
    resolve: {
      alias: [
        {
          find: "@",
          replacement: resolve(__dirname, "src"),
        },
      ],
    },
    server: {
      open: viteEnv.VITE_OPEN,
      host: "0.0.0.0",
      proxy: {
        "/api": {
          // target: 'http://100.100.60.106:8080',
          // target: 'http://dev.juntong.ai:6130',
          target: "http://jshield.juntong.ai:9606",
          // target: 'http://ec2-52-81-58-210.cn-north-1.compute.amazonaws.com.cn:8081/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    esbuild: {
      pure: viteEnv.VITE_DROP_CONSOLE ? ["console.log", "debugger"] : [],
    },
    // global css
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/var.scss";`,
        },
      },
    },
  };
});
