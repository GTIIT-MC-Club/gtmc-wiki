import { defineConfig } from 'vitepress'

// Cloudflare Pages serves the site from the domain root, so no `base` is needed.
// If you later move to project.pages.dev project subpaths, set base: '/<repo>/'.
export default defineConfig({
  lang: 'zh-CN',
  title: 'GTMC Wiki',
  description: '广东以色列理工学院 Minecraft 社团（GTMC）知识库',

  // 图标和 Logo 取自 gtmc-discourse-forum/design/brand/，和论坛、皮肤站同一套
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/gtmc-favicon-32.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/gtmc-apple-touch-icon-180.png' }],
    ['meta', { name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#fbfbf8' }],
    ['meta', { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#0e100e' }]
  ],

  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    // 和皮肤站一样：论坛的像素 Logo 后面跟站名
    logo: { src: '/gtmc-wiki.png', alt: 'GTMC' },
    siteTitle: 'Wiki',

    nav: [
      { text: '指南', link: '/guide/', activeMatch: '/guide/' },
      { text: '服务器', link: '/server/', activeMatch: '/server/' },
      { text: '规范', link: '/community/' },
      {
        text: '社团网站',
        items: [
          { text: '论坛', link: 'https://forum.gtmc.top' },
          { text: '皮肤站', link: 'https://skin.gtmc.top' },
          { text: '账号', link: 'https://auth.gtmc.top' }
        ]
      }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '清除',
            backButtonTitle: '关闭',
            noResultsText: '没有找到',
            footer: { selectText: '打开', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    },

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '社团简介', link: '/guide/' },
          { text: '参与编辑', link: '/guide/contributing' }
        ]
      },
      {
        text: '服务器',
        items: [
          { text: '服务器一览', link: '/server/' },
          { text: '加入服务器', link: '/server/joining' }
        ]
      },
      {
        text: '社群',
        items: [
          { text: '社群规范', link: '/community/' }
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
      // 商标声明和论坛页脚（gtmc-forum-theme/locales/zh_CN.yml）一字不差，改动前先和负责人确认
      message: '内容以 CC BY-SA 4.0 许可发布 · Minecraft 是 Mojang Synergies AB 的商标；本站为广东以色列理工学院学生社团自办，与 Mojang、Microsoft 无关。',
      copyright: 'GTMC 广东以色列理工学院 Minecraft 社团'
    },

    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一页', next: '下一页' },
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    lastUpdated: { text: '最后更新于' }
  }
})
