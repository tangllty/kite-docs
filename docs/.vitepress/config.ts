import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  lang: 'zh-CN',
  ignoreDeadLinks: [
    /^https?:\/\/localhost/
  ],
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/',
      title: '糖猫猫权限管理系统文档',
      description: '基于最新的技术栈，开发一套前后端分离的权限管理系统。',
      themeConfig: {
        editLink: {
          pattern: 'https://github.com/tangllty/tang-docs/edit/master/docs/:path',
          text: '在 GitHub 上编辑此页'
        },
        footer: {
          message: '由 Tang 用 ❤️ 构建',
          copyright: '© 2023 Tang'
        },
        nav: [
          { text: '开始', link: '/guide/introduction', activeMatch: '/guide/introduction' },
          { text: '前端', link: '/tang-vue/introduction', activeMatch: '/tang-vue/introduction' },
          { text: '后端', link: '/tang-boot/introduction', activeMatch: '/tang-boot/introduction' },
          { text: '安卓', link: '/tang-app/introduction', activeMatch: '/tang-app/introduction' },
          { text: '微服务', link: '/tang-cloud/introduction', activeMatch: '/tang-cloud/introduction' },
        ],
        sidebar: {
          '/guide/': [
            {
              text: '开始',
              items: [
                { text: '介绍', link: '/guide/introduction' },
                { text: '交流群', link: '/guide/discussion-group' },
              ],
              collapsed: false
            }
          ],
          '/tang-vue/': [
            {
              text: '指引',
              items: [
                { text: '介绍', link: '/tang-vue/introduction' },
                { text: '开始', link: '/tang-vue/getting-started' },
                { text: '特性', link: '/tang-vue/features' },
              ],
              collapsed: false
            },
            {
              text: '开发手册',
              items: [
                { text: '分页', link: '/tang-vue/pagination' },
                { text: '使用当前实例', link: '/tang-vue/use-current-instance' },
              ],
              collapsed: false
            }
          ],
          '/tang-boot/': [
            {
              text: '指引',
              items: [
                { text: '介绍', link: '/tang-boot/introduction' },
                { text: '开始', link: '/tang-boot/getting-started' },
                { text: '特性', link: '/tang-boot/features' },
              ],
              collapsed: false
            },
            {
              text: '开发手册',
              items: [
                { text: '分页', link: '/tang-boot/pagination' },
              ],
              collapsed: false
            }
          ]
        },
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'TangMaoMao',
      description: 'Based on the latest technology stack, a set of rights management system with front end and back end separation is developed.',
      themeConfig: {
        editLink: {
          pattern: 'https://github.com/tangllty/tang-docs/edit/master/docs/:path',
          text: 'Edit this page on GitHub',
        },
        footer: {
          message: 'Built with ❤️ by Tang',
          copyright: '© 2023 Tang'
        },
        nav: [
          { text: 'Getting Started', link: '/en/guide/introduction', activeMatch: '/en/guide/introduction' },
          { text: 'Frontend', link: '/en/tang-vue/introduction', activeMatch: '/en/tang-vue/introduction' },
          { text: 'Backend', link: '/en/tang-boot/introduction', activeMatch: '/en/tang-boot/introduction' },
          { text: 'Android', link: '/en/tang-app/introduction', activeMatch: '/en/tang-app/introduction' },
          { text: 'Microservice', link: '/en/tang-cloud/introduction', activeMatch: '/en/tang-cloud/introduction' },
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Introduction', link: '/en/guide/introduction'},
                { text: 'Discussion Group', link: '/en/guide/discussion-group' },
              ],
              collapsed: false
            }
          ],
          '/en/tang-vue/': [
            {
              text: 'Guide',
              items: [
                { text: 'Introduction', link: '/en/tang-vue/introduction'},
                { text: 'Getting Started', link: '/en/tang-vue/getting-started' },
                { text: 'Features', link: '/en/tang-vue/features' },
              ],
              collapsed: false
            },
            {
              text: 'Development',
              items: [
                { text: 'Pagination', link: '/en/tang-vue/pagination' },
                { text: 'Use Current Instance', link: '/en/tang-vue/use-current-instance'}
              ],
              collapsed: false
            }
          ],
          '/en/tang-boot/': [
            {
              text: 'Guide',
              items: [
                { text: 'Introduction', link: '/en/tang-boot/introduction'},
                { text: 'Getting Started', link: '/en/tang-boot/getting-started' },
                { text: 'Features', link: '/en/tang-boot/features' },
              ],
              collapsed: false
            },
            {
              text: 'Development',
              items: [
                { text: 'Pagination', link: '/en/tang-boot/pagination' },
              ],
              collapsed: false
            }
          ]
        },
      }
    },
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