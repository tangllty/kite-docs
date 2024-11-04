import type { DefaultTheme } from 'vitepress'

const nav: DefaultTheme.NavItem[] = [
  { text: '开始', link: '/guide/introduction', activeMatch: '/guide/introduction' },
  { text: 'Tang Vue', link: '/tang-vue/introduction', activeMatch: '/tang-vue/introduction' },
  { text: 'Tang Boot', link: '/tang-boot/introduction', activeMatch: '/tang-boot/introduction' },
  { text: 'JkOrm', link: '/jkorm/introduction', activeMatch: '/jkorm/introduction' },
]

const sidebar: DefaultTheme.Sidebar = {
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
        { text: '部署', link: '/tang-vue/deployment' },
      ],
      collapsed: false
    },
    {
      text: '开发手册',
      items: [
        { text: '分页', link: '/tang-vue/pagination' },
        { text: '使用当前实例', link: '/tang-vue/use-current-instance' },
        { text: 'WebSocket', link: '/tang-vue/websocket' },
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
        { text: '部署', link: '/tang-boot/deployment' },
      ],
      collapsed: false
    },
    {
      text: '开发手册',
      items: [
        { text: '分页', link: '/tang-boot/pagination' },
        { text: 'WebSocket', link: '/tang-boot/websocket' },
      ],
      collapsed: false
    }
  ]
}

export default {
  label: '简体中文',
  lang: 'zh-CN',
  link: '/',
  title: '糖猫猫文档',
  description: '所有项目的文档都在这里。',
  themeConfig: {
    logo: '/tang.svg',
    siteTitle: '糖猫猫文档',
    editLink: {
      pattern: 'https://github.com/tangllty/tang-docs/edit/master/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    footer: {
      message: '由 Tang 用 ❤️ 构建',
      copyright: '© 2024 Tang'
    },
    nav,
    sidebar
  }
}
