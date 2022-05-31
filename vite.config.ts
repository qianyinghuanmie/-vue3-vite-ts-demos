import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig(({ mode }) => {
  // 获取当前环境的配置
  const config = loadEnv(mode, './')
  return {
    plugins: [vue()],
    resolve:{
      alias:{
        'vue':'vue/dist/vue.esm-bundler.js'
      }
    },
    server: {
      proxy: {
        '/api': {
          target: "https://v.api.aa1.cn/",
          changeOrigin: true
          // rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
  }
})

// https://vitejs.dev/config/
