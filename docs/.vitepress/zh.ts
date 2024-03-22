const nav = [
  { text: '开始', link: '/guide/introduction', activeMatch: '/guide/introduction' },
  { text: '前端', link: '/tang-vue/introduction', activeMatch: '/tang-vue/introduction' },
  { text: '后端', link: '/tang-boot/introduction', activeMatch: '/tang-boot/introduction' },
  { text: '安卓', link: '/tang-app/introduction', activeMatch: '/tang-app/introduction' },
  { text: '微服务', link: '/tang-cloud/introduction', activeMatch: '/tang-cloud/introduction' },
]

const sidebar = {
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
  title: '糖猫猫权限管理系统文档',
  description: '基于最新的技术栈，开发一套前后端分离的权限管理系统。',
  themeConfig: {
    logo: '/tang.svg',
    siteTitle: '糖猫猫权限管理系统文档',
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
