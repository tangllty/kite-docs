import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import zh from './zh'
import en from './en'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  lang: 'en-US',
  ignoreDeadLinks: [
    /^https?:\/\/localhost/
  ],
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/tang.svg' }]],
  locales: {
    root: en,
    zh: zh,
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
  // https://vitepress.dev/reference/site-config#markdown
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(tabsMarkdownPlugin)
    }
  }
})
