import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '糖猫猫权限管理系统文档',
  description: '糖猫猫权限管理系统文档',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '介绍', link: '/guide/introduction', activeMatch: '/guide/introduction' },
      { text: '前端', link: '/tang-vue/introduction', activeMatch: '/tang-vue/introduction' },
      { text: '后端', link: '/tang-boot/introduction', activeMatch: '/tang-boot/introduction' },
      { text: '安卓', link: '/tang-app/introduction', activeMatch: '/tang-app/introduction' },
      { text: '微服务', link: '/tang-cloud/introduction', activeMatch: '/tang-cloud/introduction' },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/tangllty/" },
      { icon: "github", link: "https://gitee.com/tangllty/" }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '介绍',
          items: [
            { text: '前端', link: '/guide/tang-vue' },
            { text: '后端', link: '/guide/tang-boot' },
            { text: '安卓', link: '/guide/tang-app' },
            { text: '微服务', link: '/guide/tang-cloud' }
          ],
          collapsed: false
        }
      ],
      '/tang-boot/': [
        {
          text: '介绍',
          items: [
            { text: '开始', link: '/tang-boot/getting-started' },
            { text: '特性', link: '/tang-boot/features' },
          ],
          collapsed: false
        }
      ]
    },
  },
})