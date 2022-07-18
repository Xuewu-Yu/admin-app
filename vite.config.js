/*
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-06 23:30:13
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-18 11:31:48
 * @FilePath: \admin-app\vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import importToCDN, { autoComplete } from 'vite-plugin-cdn-import'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    importToCDN({
      modules:[
        {
          name: 'vue',
          var: 'Vue',
          path: 'https://cdn.jsdelivr.net/npm/vue@3.2.25/dist/vue.global.prod.js',
        },
        {
          name: 'ant-design-vue',
          var: 'antd',
          path: 'https://cdn.jsdelivr.net/npm/ant-design-vue@3.2.9/dist/antd.js',
          css: 'https://cdn.jsdelivr.net/npm/ant-design-vue@3.2.9/dist/antd.min.css',
        },
        {
          name: 'vue-router',
          var: 'VueRouter',
          path: 'https://cdn.jsdelivr.net/npm/vue-router@4.0.13/dist/vue-router.global.prod.js',
        }
      ]
    })
  ],
  productionSourceMap: false,
  server: {
    host: 'localhost',
    port: '3000',
    hmr: true, // 热更新
    open: true,
    proxy: {
      '/api': {
        target: 'http://www.fangkang.top',
        changeOrigin: true,
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    assetsDir: 'static',
    rollupOptions: {
      sourcemap: false,
      minify: 'terser',
      chunkSizeWarningLimit: 1500,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      input: {
        index: path.resolve(__dirname, 'index.html'),
      },
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/name-[hash].[ext]'
      },
      manualChunks(id) {
        if (id.includes('node_modules')) {
          return id.toString().split('node_modules/')[1].split('/')[0].toString();
        }
      },
    }
  }
})
