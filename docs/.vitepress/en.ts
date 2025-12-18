import type { DefaultTheme } from 'vitepress'

const nav: DefaultTheme.NavItem[] = [
  { text: 'Getting Started', link: '/guide/introduction', activeMatch: '/guide/introduction' },
  {
    text: 'Tang Boot',
    items: [
      { text: 'Frontend', link: '/tang-vue/introduction', activeMatch: '/tang-vue/introduction' },
      { text: 'Backend', link: '/tang-boot/introduction', activeMatch: '/tang-boot/introduction' },
    ]
  },
  { text: 'Vite Plugin Svg', link: '/vite-plugin-svg/introduction', activeMatch: '/vite-plugin-svg/introduction' },
]

const sidebar: DefaultTheme.Sidebar = {
  '/': [
    {
      text: 'Getting Started',
      items: [
        { text: 'Introduction', link: '/guide/introduction'},
        { text: 'Discussion Group', link: '/guide/discussion-group' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Spring Boot Integration', link: '/guide/spring-boot-integration' },
        { text: 'Spring Boot 3 Integration', link: '/guide/spring-boot3-integration' },
      ],
      collapsed: false
    },
    {
      text: 'Basic Features',
      items: [
        { text: 'Insert, Delete, Update', link: '/basic/insert-delete-update' },
        { text: 'Basic Query', link: '/basic/query' },
        { text: 'Global Configuration', link: '/basic/global-configuration' }
      ],
      collapsed: false
    },
    {
      text: 'Annotations',
      items: [
        { text: '@Table', link: '/annotations/table' },
        { text: '@Id', link: '/annotations/id' },
        { text: '@Column', link: '/annotations/column' },
        { text: '@Join', link: '/annotations/join' },
        { text: '@Param', link: '/annotations/param' },
      ],
      collapsed: false
    }
  ],
  '/tang-vue/': [
    {
      text: 'Guide',
      items: [
        { text: 'Introduction', link: '/tang-vue/introduction'},
        { text: 'Getting Started', link: '/tang-vue/getting-started' },
        { text: 'Deployment', link: '/tang-vue/deployment' },
      ],
      collapsed: false
    },
    {
      text: 'Development',
      items: [
        { text: 'Pagination', link: '/tang-vue/pagination' },
        { text: 'Use Current Instance', link: '/tang-vue/use-current-instance'},
        { text: 'WebSocket', link: '/tang-vue/websocket'},
      ],
      collapsed: false
    }
  ],
  '/tang-boot/': [
    {
      text: 'Guide',
      items: [
        { text: 'Introduction', link: '/tang-boot/introduction'},
        { text: 'Getting Started', link: '/tang-boot/getting-started' },
        { text: 'Deployment', link: '/tang-boot/deployment' },
      ],
      collapsed: false
    },
    {
      text: 'Development',
      items: [
        { text: 'Pagination', link: '/tang-boot/pagination' },
        { text: 'WebSocket', link: '/tang-boot/websocket' },
      ],
      collapsed: false
    }
  ],
  '/vite-plugin-svg/': [
    {
      text: 'Guide',
      items: [
        { text: 'Introduction', link: '/vite-plugin-svg/introduction'},
        { text: 'Getting Started', link: '/vite-plugin-svg/getting-started' },
      ],
      collapsed: false
    }
  ],
}

export default {
  label: 'English',
  lang: 'en-US',
  link: '/',
  title: 'Tang Official Documentation',
  themeConfig: {
    logo: '/kite.svg',
    siteTitle: 'Kite',
    editLink: {
      pattern: 'https://github.com/tangllty/tang-docs/edit/master/docs/:path',
      text: 'Edit this page on GitHub',
    },
    footer: {
      message: 'Built with ❤️ by Tang',
      copyright: '© 2023-2025 Tang'
    },
    nav,
    sidebar
  }
}
