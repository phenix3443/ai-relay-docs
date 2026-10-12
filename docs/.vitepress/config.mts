import { defineConfig } from 'vitepress'
import { embedScript } from './embed'

const console_ = 'https://relay.panghuli.tech'

export default defineConfig({
  lang: 'zh-CN',
  title: 'ai-relay',
  description: 'ai-relay 使用文档：注册、订阅、创建密钥、接入 Claude Code 与 Codex',
  // 由隧道按路径转到集群里的 nginx，挂在网关域名的 /docs 下
  base: '/docs/',
  cleanUrls: true,
  lastUpdated: true,
  // 控制台常用深色；内嵌时由 iframe 的 theme 参数覆盖
  appearance: 'dark',
  head: [
    // iframe 首个请求的 URL 带用户 token，别让它经 Referer 进到任何访问日志
    ['meta', { name: 'referrer', content: 'strict-origin' }],
    ['script', {}, embedScript],
  ],
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
