import { defineConfigWithTheme } from 'vitepress'
export default {
  lang: 'zh-CN',
  title: 'Luna Forum 文档',
  description: '基于 Fastify 和 TypeScript 构建的强大的论坛系统。'
  sidebar: [
      {
        text: '导航',
        items: [
          { text: '欢迎', link: '/home' },
          { text: '快速开始', link: '/quick-start' }
        ]
      }
    ]
}
