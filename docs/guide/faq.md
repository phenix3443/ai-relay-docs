# 常见问题

## 创建密钥时找不到我买的那档

订阅类分组只在订阅生效后出现。到「我的订阅」确认这一档存在且没过期；刚付款的话刷新一下页面。

## 提示额度用完 / 请求被拒

每档有每日、每周两道上限。到「我的订阅」看是哪一道用完了，等对应周期重置即可，或升级到更高一档。

## 401 / 密钥无效

- 密钥复制完整了吗？前后不要有空格
- 密钥是否已被删除或禁用（「API 密钥」页看状态）
- Claude Code 用的是 `ANTHROPIC_AUTH_TOKEN`，不是 `ANTHROPIC_API_KEY`

## 404 或地址不对

- Claude Code：`https://relay.panghuli.tech`，**不带** `/v1`
- Codex 和其他 OpenAI 兼容客户端：`https://relay.panghuli.tech/v1`，**要带** `/v1`

## 用 CC Switch / Code Switch 的本地代理时报 401「Invalid API key」

把工具里本站服务商的**鉴权方式改成 Bearer**，不要选 `x-api-key`。

这类工具开启本地代理时，会让 Claude Code 带一个占位令牌发到代理；鉴权方式选 `x-api-key` 时，代理只追加 `x-api-key`，不替换原来的 `Authorization`。本站优先读 `Authorization`，读到的是占位令牌，于是拒绝。选 Bearer 后代理会用真实密钥覆盖它。（Code Switch 已实测；其他带本地代理的切换工具同样先检查这一项。）

## Claude 的密钥能用在 Codex 上吗

不能。一个密钥只对应创建时选的那个分组，Claude 和 Codex 各建一个。

## 用量记录在哪看

「使用记录」按请求列出模型、token 数和折算费用；「我的订阅」看额度剩余。
