# 参与编辑

本 wiki 的修改全部通过 GitHub 完成，不需要本地环境也能改错别字。

## 方式一：直接在网页上改（最快）

1. 打开任意页面，点击底部的 **在 GitHub 上编辑此页**。
2. GitHub 会让你的账号 fork 本仓库并打开在线编辑器。
3. 修改 Markdown，写好提交说明，选择 **Propose changes**。
4. 发起 Pull Request，等待维护者审核合并。

## 方式二：本地运行（写长篇内容推荐）

需要 Node.js 20 或更高版本。

```bash
git clone https://github.com/GTIIT-MC-Club/gtmc-wiki.git
cd gtmc-wiki
npm install
npm run dev
```

浏览器打开终端里显示的地址（通常是 `http://localhost:5173`），
修改 `docs/` 下的文件会热更新。

提交前建议跑一次生产构建，确认没有断链和语法错误：

```bash
npm run build
```

## 目录结构

```text
gtmc-wiki
├─ docs/                 # 所有内容都在这里
│  ├─ .vitepress/
│  │  ├─ config.mts      # 站点配置：导航、侧边栏、页脚
│  │  └─ theme/          # GTMC 统一风格（配色和论坛、皮肤站一致）
│  ├─ index.md           # 首页（home layout）
│  ├─ guide/             # 指南板块
│  ├─ server/            # 服务器板块
│  └─ community/         # 社群板块
├─ package.json
└─ wrangler.toml        # Cloudflare Pages 配置
```

## 写作约定

- 一个页面只讲一件事，标题用 `#` 起，层级不要跳。
- 命令和配置放进代码块并标注语言。
- 新增页面后，记得在 `docs/.vitepress/config.mts` 的 `sidebar` 里加上链接，
  否则只能靠直接输 URL 访问。
- 提示框用 `::: tip`（绿）、`::: warning`（棕）、`::: danger`（红），别用太多，一页一两个就够。
- 会过时的东西（某次活动、临时维护）发论坛，不写进 Wiki。
- 截图放在 `docs/public/`，引用时用绝对路径，例如 `/images/foo.png`。

## 审核标准

维护者主要看三件事：

1. **准确**——命令、地址、版本号能复现。
2. **有边界**——不写个人服务器密码、内网 IP、他人隐私信息。
3. **可读**——标题清楚，步骤能照着做。

::: warning 不要在 wiki 里放敏感信息
仓库与站点都是公开的。密钥、密码、内网地址一律不要写进 Markdown。
:::
