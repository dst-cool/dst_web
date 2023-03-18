
import { defineConfig } from 'vite'
import { resolve} from "path"
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [vue()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    'process.env': {
      BASE_API: 'http://localhost:3000'
    }
  }
  // terserOptions: { 
  //   drop_console: true,
  //   drop_debugger: true,
  // }
})
