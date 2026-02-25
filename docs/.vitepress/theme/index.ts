import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import SpeedInsights from './SpeedInsights.vue'
import Analytics from './Analytics.vue'
import './style/index.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    enhanceAppWithTabs(app)
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => [h(SpeedInsights), h(Analytics)]
    })
  }
} satisfies Theme
