// 内联进 <head>，排在 VitePress 自带的暗色检测脚本之前：先写好外观偏好，
// 它读到的就是控制台传来的主题，首屏不闪。只写主题，其他参数不落任何存储。
// 控制台 iframe 的 src 带 user_id / token(JWT) / theme / lang / ui_mode / src_host / src_url，
// token 不能留在地址栏和历史记录里，读完立即删掉。
// 内嵌只认 window.top：控制台「新标签页打开」按钮的链接同样带 ui_mode=embedded，
// 按它判断会在独立标签页里也把导航栏藏掉。
export const embedScript = `;(() => {
  const html = document.documentElement
  try { if (window.self !== window.top) html.classList.add('embedded') } catch (e) { html.classList.add('embedded') }
  const url = new URL(location.href)
  const theme = url.searchParams.get('theme')
  if (theme === 'dark' || theme === 'light') {
    try { localStorage.setItem('vitepress-theme-appearance', theme) } catch (e) {}
  }
  const keys = ['user_id', 'token', 'theme', 'lang', 'ui_mode', 'src_host', 'src_url']
  if (keys.some((k) => url.searchParams.has(k))) {
    keys.forEach((k) => url.searchParams.delete(k))
    history.replaceState(history.state, '', url.pathname + url.search + url.hash)
  }
})()`
