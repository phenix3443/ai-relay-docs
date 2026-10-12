import { defineConfig } from 'vitepress'

const console_ = 'https://relay.panghuli.tech'

export default defineConfig({
  lang: 'zh-CN',
  title: 'ai-relay',
  description: 'ai-relay 使用文档：注册、订阅、创建密钥、接入 Claude Code 与 Codex',
  // GitHub Pages 项目站点挂在仓库名路径下
  base: '/ai-relay-docs/',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '快速开始', link: '/guide/quickstart' },
      { text: '控制台', link: console_ },
    ],
    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '快速开始', link: '/guide/quickstart' },
          { text: '订阅与余额', link: '/guide/billing' },
        ],
      },
      {
        text: '客户端接入',
        items: [
          { text: 'Claude Code', link: '/clients/claude-code' },
          { text: 'Codex CLI', link: '/clients/codex' },
          { text: 'CC Switch 一键导入', link: '/clients/cc-switch' },
        ],
      },
      {
        text: '更多',
        items: [
          { text: '常见问题', link: '/guide/faq' },
          { text: '联系我们', link: '/guide/contact' },
        ],
      },
    ],
    search: { provider: 'local' },
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一页', next: '下一页' },
    lastUpdated: { text: '最后更新' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '外观',
  },
})
