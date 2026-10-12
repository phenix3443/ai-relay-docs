# Claude Code

前提：已经[创建了 Claude 档位的密钥](../guide/quickstart#_3-创建-api-密钥)，并安装好 [Claude Code](https://docs.claude.com/en/docs/claude-code/setup)。

::: tip 最省事的办法
控制台「API 密钥」→ 对应密钥的「使用密钥」，选系统后直接复制。下面是同样的内容。
:::

## 方式一：写进配置文件（推荐）

对所有终端和 IDE 插件都生效。编辑 `~/.claude/settings.json`（Windows 是 `%USERPROFILE%\.claude\settings.json`），没有就新建：

```json
{
  "$schema": "https://json.schemastore.org/claude-code-settings.json",
  "env": {
    "ANTHROPIC_BASE_URL": "https://relay.panghuli.tech",
    "ANTHROPIC_AUTH_TOKEN": "你的密钥",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1"
  }
}
```

## 方式二：环境变量

只对当前终端生效。

::: code-group

```bash [macOS / Linux]
export ANTHROPIC_BASE_URL="https://relay.panghuli.tech"
export ANTHROPIC_AUTH_TOKEN="你的密钥"
export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
```

```bat [Windows CMD]
set ANTHROPIC_BASE_URL=https://relay.panghuli.tech
set ANTHROPIC_AUTH_TOKEN=你的密钥
set CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
```

```powershell [PowerShell]
$env:ANTHROPIC_BASE_URL="https://relay.panghuli.tech"
$env:ANTHROPIC_AUTH_TOKEN="你的密钥"
$env:CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
```

:::

想长期生效，把 macOS / Linux 那三行追加到 `~/.zshrc` 或 `~/.bashrc`。

## 验证

```bash
claude
```

进入后随便问一句，能正常回复就接通了。然后到控制台「使用记录」应能看到这次请求。

## 注意

- `ANTHROPIC_BASE_URL` 不要带 `/v1`
- 改了配置不生效时，先检查终端里有没有残留的旧 `ANTHROPIC_*` 变量（`env | grep ANTHROPIC`）
