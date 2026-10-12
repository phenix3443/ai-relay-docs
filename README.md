# ai-relay-docs

ai-relay 的用户文档，VitePress 构建，推送 `main` 后由 GitHub Actions 发布到 GitHub Pages。

```bash
npm ci
npm run dev     # 本地预览
npm run build   # 产物在 docs/.vitepress/dist
```

`docs/.vitepress/config.mts` 的 `base` 必须等于仓库名路径（`/ai-relay-docs/`），改仓库名要同步改。
