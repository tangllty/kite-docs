import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import zh from './zh'
import en from './en'
import { injectSpeedInsights } from '@vercel/speed-insights'

injectSpeedInsights()

const giteeSvg = '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="66pt" height="66pt" viewBox="0 0 66 66" style="" preserveAspectRatio="xMidYMid meet"><g fill="#D90013FF" stroke="#D90013FF"><path d="M 27.132 2.056 C 12.188 5.066 1.670 17.849 1.670 33.000 C 1.670 41.919 4.489 48.649 10.920 55.080 C 17.351 61.511 24.081 64.330 33.000 64.330 C 41.919 64.330 48.649 61.511 55.080 55.080 C 61.511 48.649 64.330 41.919 64.330 33.000 C 64.330 13.389 46.112 -1.766 27.132 2.056 M 53.000 17.500 L 53.000 22.000 39.023 22.000 C 21.822 22.000 21.750 22.056 22.208 35.139 L 22.500 43.500 31.642 43.786 C 38.978 44.016 41.103 43.755 42.392 42.465 C 45.690 39.167 44.405 38.104 36.750 37.794 L 29.500 37.500 29.500 33.000 L 29.500 28.500 41.000 28.500 L 52.500 28.500 52.802 34.917 C 53.151 42.326 52.044 45.624 47.865 49.633 L 44.874 52.500 28.937 52.819 L 13.000 53.138 13.007 37.819 C 13.012 24.497 13.259 22.127 14.898 19.641 C 18.858 13.635 20.997 13.014 37.750 13.007 L 53.000 13.000 53.000 17.500 "/></g><g fill="#FFFFFFFF" stroke="#FFFFFFFF"><path d="M 19.695 14.863 C 16.434 17.013 13.791 20.457 14.702 21.369 C 15.049 21.716 14.877 22.000 14.320 22.000 C 13.688 22.000 13.225 27.836 13.091 37.500 L 12.876 53.000 27.373 53.000 C 35.346 53.000 43.009 52.567 44.401 52.037 C 45.794 51.508 48.316 49.166 50.006 46.833 C 52.844 42.916 53.057 42.050 52.790 35.545 L 52.500 28.500 41.000 28.500 L 29.500 28.500 29.500 33.000 L 29.500 37.500 36.750 37.794 C 44.405 38.104 45.690 39.167 42.392 42.465 C 41.103 43.755 38.978 44.016 31.642 43.786 L 22.500 43.500 22.205 35.567 C 21.909 27.630 23.207 22.047 25.371 21.949 C 25.992 21.921 32.377 21.942 39.561 21.995 L 52.622 22.092 52.857 17.546 L 53.092 13.000 37.796 13.007 C 24.600 13.012 22.115 13.267 19.695 14.863 "/></g></svg>'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  lang: 'en-US',
  title: 'Kite Official Documentation',
  description: 'Kite is a lightweight ORM framework for Kotlin and Java.',
  ignoreDeadLinks: [
    /^https?:\/\/localhost/
  ],
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/kite.svg' }]],
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
      { icon: { svg: giteeSvg }, link: "https://gitee.com/tangllty/" }
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
