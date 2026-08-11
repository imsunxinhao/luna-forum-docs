import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Luna Forum 文档',
  description: '基于 Fastify 和 TypeScript 构建的强大的论坛系统。',
  themeConfig: {
    sidebar: [
      {
        text: '导航',
        items: [
          { text: '欢迎', link: '/home' },
          { text: '快速开始', link: '/quick-start' }
        ]
      },
      {
          text: '开发文档',
          collapsed: true,
          items: [
            { text: '欢迎', link: '/dev/' },
            {
              text: 'API 结构',
              collapsed: true, 
              items: [
                { text: '登录', link: '/dev/api_v1/login' },
                { text: '注册', link: '/dev/api_v1/register' },
              ]
            },
            { text: '构建你的第一个 Luna Forum 插件', link: '/dev/first-plugin' },
          ]
      },
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '没有找到相关内容',
            resetButtonTitle: '清除搜索',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
      
    },
    editLink: {
      pattern: 'https://github.com/imsunxinhao/luna-forum-docs/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    }
  }
})
