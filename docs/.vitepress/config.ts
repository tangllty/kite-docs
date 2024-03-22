import { defineConfig } from 'vitepress'
import zh from './zh'
import en from './en'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  lang: 'zh-CN',
  ignoreDeadLinks: [
    /^https?:\/\/localhost/
  ],
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/tang.svg' }]],
  locales: {
    root: zh,
    en: en,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    lastUpdated: {},
    i18nRouting: true,
    socialLinks: [
      { icon: "github", link: "https://github.com/tangllty/" },
      { icon: "github", link: "https://gitee.com/tangllty/" }
    ],
  },
})
