# CC Switch 一键导入

[CC Switch](https://github.com/farion1231/cc-switch) 是一个桌面应用，用来在多个 Claude Code / Codex 服务商之间切换。装好后可以从控制台一键导入，不用手抄配置。

## 导入

1. 安装并至少打开一次 CC Switch（首次打开时会注册 `ccswitch://` 链接）
2. 控制台「API 密钥」，在要导入的密钥后点「导入到 CCS」
3. 浏览器询问是否打开 CC Switch 时选允许，CC Switch 里确认导入
4. 在 CC Switch 里把 ai-relay 设为当前服务商

导入时会按密钥所在的分组自动选目标：

| 密钥分组 | 导入到 | 说明 |
|---|---|---|
| Claude 档位 | Claude Code | 地址 `https://relay.panghuli.tech` |
| Codex 档位 | Codex | 地址同上，默认模型 `gpt-5.5` |

导入时会同时开启 CC Switch 的用量查询，在服务商卡片上显示剩余额度。

## 开了本地代理后请求报 401

服务商的鉴权方式要选 **Bearer**，不要选 `x-api-key`，原因见[常见问题](../guide/faq#用-cc-switch-code-switch-的本地代理时报-401「invalid-api-key」)。

## 提示「CC-Switch 未安装」

说明系统没找到 `ccswitch://` 的处理程序。确认 CC Switch 已安装并打开过一次；仍不行就改用「使用密钥」手动配置，见 [Claude Code](./claude-code) 或 [Codex CLI](./codex)。
