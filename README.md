# GTMC Wiki

广东以色列理工学院 Minecraft 社（GTIIT Minecraft Club）的公共知识库。

用 [VitePress](https://vitepress.dev/) 构建，部署在 **Cloudflare Pages**。

## 本地开发

需要 Node.js 20+。

```bash
npm install
npm run dev      # 本地预览，热更新
npm run build    # 生产构建，输出到 docs/.vitepress/dist
npm run preview  # 预览构建结果
```

## 目录结构

```text
.
├─ docs/
│  ├─ .vitepress/
│  │  └─ config.mts        # 站点配置（导航 / 侧边栏 / 页脚）
│  ├─ public/              # 静态资源，原样拷贝到站点根目录
│  │  └─ _headers          # Cloudflare Pages 响应头规则
│  ├─ index.md             # 首页
│  ├─ guide/               # 指南
│  ├─ server/              # 服务器
│  ├─ community/           # 社群规范
│  └─ deploy.md            # 部署说明
├─ wrangler.toml           # Cloudflare Pages 配置
├─ .node-version           # 构建环境 Node 版本
└─ package.json
```

## Cloudflare Pages 构建设置

在 Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git，
选择本仓库后填写：

| 设置 | 值 |
| --- | --- |
| Framework preset | VitePress |
| Build command | `npm run build` |
| Build output directory | `docs/.vitepress/dist` |
| Root directory | （留空） |
| Environment variable | `NODE_VERSION` = `20` |

或者用命令行发布：

```bash
npm install && npm run build
npx wrangler pages deploy
```

详细说明见 [docs/deploy.md](docs/deploy.md)。

## 贡献

任何人都可以提 PR：网页上点每页底部的「在 GitHub 上编辑此页」即可，
流程见 [docs/guide/contributing.md](docs/guide/contributing.md)。

## 许可

- 文档内容：[CC BY-SA 4.0](LICENSE)
- 站点代码与配置：MIT
