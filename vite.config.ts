/*
 * @Author: yujingbo
 * @Date: 2022-07
 * @LastEditors: TifezzZ
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
          target: "http://121.199.76.173:8088",
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
