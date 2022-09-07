import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'
import vitePluginImp from 'vite-plugin-imp' // 按需引入
import lessToJS from 'less-vars-to-js' // less 样式转化为 json 键值对的形式
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './src/less/variables.less'), 'utf8')
)

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'), // 根路径
      '@': path.resolve(__dirname, 'src') // src 路径
    }
  },
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    })],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // 支持内联 JavaScript
        modifyVars: themeVariables, // 重写 less 变量，定制样式
      }
    }
  },
  server: {
    port: 3000,
  }

})
