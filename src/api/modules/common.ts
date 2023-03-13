/*
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-03
 * @Description:通用接口
 */
// import { Upload } from '@/api/interface'

import axios from "axios";
import { useStore } from "@/store/modules/common";
import http from "@/api";
import { GlobalStore } from "@/store";

const globalStore = GlobalStore();
const store = useStore();

// 上传文件 fetch 原生不支持进度显示 使用axios 实现进度监控
export const UploadApi = (type: string, params) => {
  const controller = new AbortController();
  const config = {
    signal: controller.signal,
    headers: {
      "Content-Type": "multipart/form-data",
      // BEARER_TOKEN: globalStore.token
      Authorization: `Bearer ${globalStore.token}`,
    },
    transformRequest: [
      function (data) {
        return data;
      },
    ],
    onUploadProgress: (progressEvent) => {
      const persent = ((progressEvent.loaded / progressEvent.total) * 100) | 0; //上传进度百分比
      store.uploadData[params.get("id")] = persent;
      if (!store.AbortController[params.get("id")]) {
        store.AbortController[params.get("id")] = controller;
      }
    },
  };
  return axios.post<any>(`/api/${type}/uploadAndImport`, params, config);
};

//
export const test = () => {
  return http.post(``);
};
