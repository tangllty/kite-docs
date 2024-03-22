const nav = [
  { text: 'Getting Started', link: '/en/guide/introduction', activeMatch: '/en/guide/introduction' },
  { text: 'Frontend', link: '/en/tang-vue/introduction', activeMatch: '/en/tang-vue/introduction' },
  { text: 'Backend', link: '/en/tang-boot/introduction', activeMatch: '/en/tang-boot/introduction' },
  { text: 'Android', link: '/en/tang-app/introduction', activeMatch: '/en/tang-app/introduction' },
  { text: 'Microservice', link: '/en/tang-cloud/introduction', activeMatch: '/en/tang-cloud/introduction' },
]

const sidebar = {
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
        { text: 'Deployment', link: '/en/tang-vue/deployment' },
      ],
      collapsed: false
    },
    {
      text: 'Development',
      items: [
        { text: 'Pagination', link: '/en/tang-vue/pagination' },
        { text: 'Use Current Instance', link: '/en/tang-vue/use-current-instance'},
        { text: 'WebSocket', link: '/en/tang-vue/websocket'},
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
        { text: 'Deployment', link: '/en/tang-boot/deployment' },
      ],
      collapsed: false
    },
    {
      text: 'Development',
      items: [
        { text: 'Pagination', link: '/en/tang-boot/pagination' },
        { text: 'WebSocket', link: '/tang-boot/websocket' },
      ],
      collapsed: false
    }
  ]
}

export default {
  label: 'English',
  lang: 'en-US',
  link: '/en/',
  title: 'Tang Permission Management System',
  description: 'Based on the latest technology stack, a set of rights management system with front end and back end separation is developed.',
  themeConfig: {
    logo: '/tang.svg',
    siteTitle: 'Tang Docs',
    editLink: {
      pattern: 'https://github.com/tangllty/tang-docs/edit/master/docs/:path',
      text: 'Edit this page on GitHub',
    },
    footer: {
      message: 'Built with ❤️ by Tang',
      copyright: '© 2023 Tang'
    },
    nav,
    sidebar
  }
}

