# ai-relay-docs

ai-relay 的用户文档，VitePress 构建，线上地址 <https://relay.panghuli.tech/docs/>。

```bash
npm ci
npm run dev     # 本地预览
npm run build   # 产物在 docs/.vitepress/dist
```

推送 `main` 后 GitHub Actions 把构建产物推到 `dist` 分支。集群里的 nginx 不自动跟随：
上线新版本要把 ai-relay 仓库 `k8s/docs.yaml` 里的 `DOCS_REF` 改成新的 `dist` 提交。

`config.mts` 的 `base` 必须是 `/docs/`，和隧道的路径规则、nginx 的目录一致。
