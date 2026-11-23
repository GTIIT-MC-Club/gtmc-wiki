# 简介

欢迎来到 **GTMC Wiki**——广东以色列理工学院 Minecraft 社（GTIIT Minecraft Club）的公共知识库。

这个站点使用 [VitePress](https://vitepress.dev/) 构建，通过 GitHub 管理内容，
并由 Cloudflare Pages 自动发布。任何人提 Pull Request 都可以参与完善。

## 内容范围

| 板块 | 内容 |
| --- | --- |
| [指南](/guide/) | 入门流程、常用命令、术语解释 |
| [服务器](/server/) | 服务器概览、接入方式、维护安排 |
| [社群](/community/) | 行为准则、沟通渠道、贡献方式 |

## 站点如何更新

1. 有人修改 `docs/` 下的 Markdown 并合并到 `main`。
2. Cloudflare Pages 监听到提交，自动执行 `npm run build`。
3. 构建产物（静态 HTML）被推送到全球边缘节点，几十秒内生效。

也就是说，**改完文档不需要手动部署**，合并即上线。

::: tip 想帮忙？
从 [参与编辑](/guide/contributing) 开始，五分钟就能提上第一个 PR。
:::
