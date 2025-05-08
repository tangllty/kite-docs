import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import SpeedInsights from './SpeedInsights.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    enhanceAppWithTabs(app)
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-before': () => h(SpeedInsights)
    })
  }
} satisfies Theme
