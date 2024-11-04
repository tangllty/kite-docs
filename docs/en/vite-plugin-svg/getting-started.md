# Getting Started

## install

```bash
npm install @tangllty/vite-plugin-svg -D
# or
yarn add @tangllty/vite-plugin-svg -D
# or
pnpm install @tangllty/vite-plugin-svg -D
```

## Usage

- Configuration plugin in vite.config.ts

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
- Using in component please see [SvgIcon](https://github.com/tangllty/vite-plugin-svg/blob/master/playground/src/components/SvgIcon/index.vue).
