# 开始

## 安装

```bash
npm install @tangllty/vite-plugin-svg -D
# or
yarn add @tangllty/vite-plugin-svg -D
# or
pnpm install @tangllty/vite-plugin-svg -D
```

## 使用

- 在 vite.config.ts 中配置插件

```ts
import { svgIconsPlugin } from '@tangllty/vite-plugin-svg'

export default defineConfig({
  plugins: [
    svgIconsPlugin({
      pattern: 'src/assets/icons/**/*.svg',
      prefix: 'icon'
    })
  ]
})
```

- 在组件中使用请查看 [SvgIcon](https://gitee.com/tangllty/vite-plugin-svg/blob/master/playground/src/components/SvgIcon/index.vue)。
