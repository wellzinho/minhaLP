import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { scrollToHero } from '@/utils/scroll'

const WHATSAPP_URL = 'https://wa.me/5541997643618'

const navLinkClass =
  'site-header-nav-link text-[12px] font-semibold uppercase tracking-[0.14em]'

const navLinks = [
  { href: '/#projects', label: 'Projetos' },
  { href: '/#about', label: 'Sobre' },
  { href: '/#experience', label: 'Experiência' },
] as const

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    closeMenu()

    if (location.pathname === '/') {
      scrollToHero()
      return
    }

    navigate('/')
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-8 pt-4 md:px-10 md:pt-5 lg:px-14"
    >
      <motion.div layout className="mx-auto max-w-[1440px]">
        <motion.div
          layout
          className="flex h-[56px] items-center justify-between gap-4 rounded-full border border-white/10 bg-[rgba(10,10,10,0.6)] px-5 backdrop-blur-[10px] md:h-[60px] md:px-8 lg:px-[33px]"
        >
          <a
            href="/"
            className="shrink-0 font-serif text-xl font-bold tracking-[-0.05em] text-white md:text-2xl"
            onClick={handleLogoClick}
          >
            Wellington
          </a>

          <nav className="site-header-nav hidden items-center gap-8 md:flex lg:gap-10">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className={navLinkClass}>
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="flex size-10 shrink-0 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-5" strokeWidth={1.75} /> : <Menu className="size-5" strokeWidth={1.75} />}
          </button>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 rounded-full bg-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.1em] text-black transition-opacity hover:opacity-90 md:inline-flex md:px-6"
          >
            Contato
          </a>
        </motion.div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 overflow-hidden rounded-[28px] border border-white/10 bg-[rgba(10,10,10,0.95)] p-4 backdrop-blur-[10px] md:hidden"
            >
              <nav className="site-header-nav flex flex-col">
                {navLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`rounded-2xl px-4 py-3.5 transition-colors hover:bg-white/5 ${navLinkClass}`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-2 block w-full rounded-full bg-white px-5 py-3 text-center text-[11px] font-bold uppercase tracking-[0.1em] text-black transition-opacity hover:opacity-90"
              >
                Contato
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  )
}
