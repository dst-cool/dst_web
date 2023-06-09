import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "tailwindcss ";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  define: {
    "process.env": {
      BASE_API: "http://192.168.1.6:3000",
    },
  },
  css: {
   
    postcss: {
      plugins: [require('postcss-100vh-fix'),tailwindcss, autoprefixer],
    },
  },
});
