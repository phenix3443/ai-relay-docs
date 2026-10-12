# Codex CLI

前提：已经[创建了 Codex 档位的密钥](../guide/quickstart#_3-创建-api-密钥)，并安装好 [Codex CLI](https://github.com/openai/codex)。

::: tip 以控制台生成的为准
Codex 的配置项随版本变化较快。控制台「API 密钥」→「使用密钥」→「Codex CLI」生成的 `config.toml` 跟当前网关版本匹配，优先直接复制那一份。
:::

## 配置

编辑 `~/.codex/config.toml`（Windows 是 `%userprofile%\.codex\config.toml`）。核心是这几项：

```toml
model_provider = "OpenAI"
model = "gpt-5.5"

[model_providers.OpenAI]
name = "OpenAI"
base_url = "https://relay.panghuli.tech/v1"
wire_api = "responses"
requires_openai_auth = false
experimental_bearer_token = "你的密钥"
```

注意 Codex 的地址**要带 `/v1`**，和 Claude Code 不同。

## 验证

```bash
codex
```

问一句能正常回复即可。控制台「使用记录」里应能看到这次请求。

## 用其他 OpenAI 兼容客户端或直接调 API

```bash
export OPENAI_BASE_URL=https://relay.panghuli.tech/v1
export OPENAI_API_KEY=你的密钥
```

::: warning 直接调 `/v1/responses` 时请自带 `instructions`
请求里不带 `instructions` 时，网关会补上一段约 4000 token 的 Codex 默认提示，每次都会计入额度。
自己写一句简短的 `instructions`，或改用 `/v1/chat/completions`，都能避免。用 Codex CLI 不受影响。
:::
