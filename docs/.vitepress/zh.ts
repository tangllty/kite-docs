import type { DefaultTheme } from 'vitepress'

const nav: DefaultTheme.NavItem[] = [
  { text: '开始', link: '/zh/guide/introduction', activeMatch: '/zh/guide/introduction' },
  {
    text: 'Tang Boot',
    items: [
      { text: '前端', link: '/zh/tang-vue/introduction', activeMatch: '/zh/tang-vue/introduction' },
      { text: '后端', link: '/zh/tang-boot/introduction', activeMatch: '/zh/tang-boot/introduction' },
    ]
  },
  { text: 'Vite Plugin Svg', link: '/zh/vite-plugin-svg/introduction', activeMatch: '/zh/vite-plugin-svg/introduction' },
]

const sidebar: DefaultTheme.Sidebar = {
  '/zh/': [
    {
      text: '开始',
      items: [
        { text: '介绍', link: '/zh/guide/introduction' },
        { text: '交流群', link: '/zh/guide/discussion-group' },
        { text: '快速开始', link: '/zh/guide/getting-started' },
        { text: 'Spring Boot 集成', link: '/zh/guide/spring-boot-integration' },
      ],
      collapsed: false
    },
    {
      text: '基础功能',
      items: [
        { text: '增、删、改', link: '/zh/basic/insert-delete-update' },
        { text: '基础查询', link: '/zh/basic/query' },
      ],
      collapsed: false
    }
  ],
  '/zh/tang-vue/': [
    {
      text: '指引',
      items: [
        { text: '介绍', link: '/zh/tang-vue/introduction' },
        { text: '开始', link: '/zh/tang-vue/getting-started' },
        { text: '部署', link: '/zh/tang-vue/deployment' },
      ],
      collapsed: false
    },
    {
      text: '开发手册',
      items: [
        { text: '分页', link: '/zh/tang-vue/pagination' },
        { text: '使用当前实例', link: '/zh/tang-vue/use-current-instance' },
        { text: 'WebSocket', link: '/zh/tang-vue/websocket' },
      ],
      collapsed: false
    }
  ],
  '/zh/tang-boot/': [
    {
      text: '指引',
      items: [
        { text: '介绍', link: '/zh/tang-boot/introduction' },
        { text: '开始', link: '/zh/tang-boot/getting-started' },
        { text: '部署', link: '/zh/tang-boot/deployment' },
      ],
      collapsed: false
    },
    {
      text: '开发手册',
      items: [
        { text: '分页', link: '/zh/tang-boot/pagination' },
        { text: 'WebSocket', link: '/zh/tang-boot/websocket' },
      ],
      collapsed: false
    }
  ],
  '/zh/vite-plugin-svg/': [
    {
      text: '指引',
      items: [
        { text: '介绍', link: '/zh/vite-plugin-svg/introduction' },
        { text: '开始', link: '/zh/vite-plugin-svg/getting-started' },
      ],
      collapsed: false
    }
  ],
}

export default {
  label: '简体中文',
  lang: 'zh-CN',
  link: '/zh/',
  title: 'Kite 官方中文文档',
  themeConfig: {
    logo: '/kite.svg',
    siteTitle: 'Kite',
    editLink: {
      pattern: 'https://github.com/tangllty/tang-docs/edit/master/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    footer: {
      message: '由 Tang 用 ❤️ 构建',
      copyright: '© 2023-2025 Tang'
    },
    nav,
    sidebar
  }
}
