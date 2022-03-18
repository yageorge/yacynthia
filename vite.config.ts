import {defineConfig} from 'vite'
import viteReact from '@vitejs/plugin-react'
import tsConfigPath from 'vite-tsconfig-paths'
import {createStyleImportPlugin} from 'vite-plugin-style-import'
import {resolve} from 'path'

export default defineConfig({
  base:'/yacynthia/',
  plugins: [
    viteReact(),
    tsConfigPath(),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: (name: any) => {
            return `antd/es/${name}/style/index`
          }
        }
      ]
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "${resolve('./src/styles/antdTheme.less')}";`
        },
        javascriptEnabled: true
      }
    }
  }
})
