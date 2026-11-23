import { defineConfig } from 'vitepress'

// Cloudflare Pages serves the site from the domain root, so no `base` is needed.
// If you later move to project.pages.dev project subpaths, set base: '/<repo>/'.
export default defineConfig({
  lang: 'zh-CN',
  title: 'GTMC Wiki',
  description: '广东以色列理工学院 Minecraft 社（GTMC）知识库',

  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '服务器', link: '/server/' },
      { text: '规范', link: '/community/' }
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '简介', link: '/guide/' },
          { text: '参与编辑', link: '/guide/contributing' }
        ]
      },
      {
        text: '服务器',
        items: [
          { text: '服务器概览', link: '/server/' },
          { text: '加入方式', link: '/server/joining' }
        ]
      },
      {
        text: '社群',
        items: [
          { text: '规范与准则', link: '/community/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/GTIIT-MC-Club/gtmc-wiki' }
    ],

    editLink: {
      pattern: 'https://github.com/GTIIT-MC-Club/gtmc-wiki/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    footer: {
      message: '内容以 CC BY-SA 4.0 许可发布',
      copyright: 'Copyright © GTIIT Minecraft Club'
    },

    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一页', next: '下一页' },
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    lastUpdated: { text: '最后更新于' }
  }
})
