/** Zera janela, html, body e #root (navegação SPA). */
export function scrollWindowToTop() {
  const html = document.documentElement
  const body = document.body
  const root = document.getElementById('root')
  const prevHtml = html.style.scrollBehavior
  const prevBody = body.style.scrollBehavior
  html.style.scrollBehavior = 'auto'
  body.style.scrollBehavior = 'auto'

  try {
    sessionStorage.removeItem('react-router-scroll-positions')
  } catch {
    /* ignore */
  }

  const se = document.scrollingElement ?? html
  se.scrollTop = 0
  se.scrollLeft = 0

  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  window.scroll(0, 0)

  for (const el of [html, body, root]) {
    if (el) {
      el.scrollTop = 0
      el.scrollLeft = 0
    }
  }

  html.style.scrollBehavior = prevHtml
  body.style.scrollBehavior = prevBody
}

/** Volta ao topo da página (hero) — layout com seções sticky exige reset em todos os scroll containers. */
export function scrollToHero() {
  scrollWindowToTop()
  requestAnimationFrame(() => {
    requestAnimationFrame(scrollWindowToTop)
  })
  if (window.location.hash) {
    window.history.replaceState(null, '', window.location.pathname || '/')
  }
}
