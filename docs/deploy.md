# Cloudflare Pages 部署说明

本仓库为 Cloudflare Pages 的 **静态站点** 部署做好了准备，
接入方式有两种：Dashboard 连接 Git，或用 `wrangler` 命令行。

## 构建设置

| 项 | 值 |
| --- | --- |
| Framework preset | VitePress |
| Build command | `npm run build` |
| Build output directory | `docs/.vitepress/dist` |
| 根目录（Root directory） | 留空（仓库根） |
| Node.js 版本 | `20`（由 `.node-version` / `NODE_VERSION` 指定） |

## 方式一：Dashboard 连接 Git（推荐）

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**。
2. 授权 GitHub 并选择 `GTIIT-MC-Club/gtmc-wiki`。
3. 按上表填写构建命令与输出目录。
4. 在 **Environment variables** 里确认 `NODE_VERSION=20`。
5. 点击 **Save and Deploy**。之后每次 push 到 `main` 都会自动构建。

## 方式二：wrangler 直接上传

```bash
npm install
npm run build
npx wrangler pages deploy docs/.vitepress/dist --project-name gtmc-wiki
```

仓库里的 `wrangler.toml` 已经写好了 `pages_build_output_dir`，
所以 `npx wrangler pages deploy` 可以省略路径。

## 常见问题

- **404 但构建通过**：输出目录填成了 `docs` 或 `dist`。正确值是 `docs/.vitepress/dist`。
- **构建报 Node 版本过低**：在环境变量里加 `NODE_VERSION=20`，或在 Dashboard 设置里选择 20.x。
- **样式丢失**：检查 `docs/.vitepress/config.mts` 里是否误设了 `base`。
- **改了页面没生效**：确认改动已合并到 `main`，且对应 Deploy 处于 Success。
