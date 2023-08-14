import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

// console.log("vite.config.ts process--->", process.env);
export default defineConfig({
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import"./src/assets/style/global.less";',
      },
    },
  },
  plugins: [react()],
});
