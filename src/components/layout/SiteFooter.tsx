import { Reveal } from '@/components/motion/Reveal'
import { editorial } from '@/styles/editorial'

const LINKEDIN_PROFILE =
  'https://www.linkedin.com/in/wellington-de-moura-silveira-9b5947136/'
const BEHANCE_PROFILE = 'https://www.behance.net/wellinwell1994'
const EMAIL = 'wellinwell1994@gmail.com'
const MAILTO = `mailto:${EMAIL}`
const WHATSAPP_URL = 'https://wa.me/5541997643618'

const mainNav = [
  { href: '/#hero', label: 'Início' },
  { href: '/#projects', label: 'Projeto' },
  { href: '/#about', label: 'Sobre' },
  { href: '/#experience', label: 'Experiência' },
  { href: WHATSAPP_URL, label: 'Contato', external: true },
] as const

const socialLinks = [
  { href: BEHANCE_PROFILE, label: 'Behance' },
  { href: LINKEDIN_PROFILE, label: 'LinkedIn' },
] as const

const contactLinks = [
  { href: MAILTO, label: 'E-mail' },
  { href: WHATSAPP_URL, label: 'WhatsApp' },
] as const

function FooterNavLink({
  href,
  label,
  external,
  className,
}: {
  href: string
  label: string
  external?: boolean
  className?: string
}) {
  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {label}
    </a>
  )
}

function MarqueeTrack() {
  return (
    <div className="flex shrink-0 items-center gap-12 pr-12 md:gap-20 md:pr-20">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="shrink-0 whitespace-nowrap">
          <span className="bg-gradient-to-r from-white/[0.08] via-white/25 to-white/[0.08] bg-clip-text text-[clamp(2.5rem,8vw,5rem)] font-bold uppercase leading-none tracking-[-0.02em] text-transparent">
            CAUSE IMPACTO
          </span>
        </div>
      ))}
    </div>
  )
}

function CauseImpactoMarquee() {
  return (
    <div className="relative overflow-hidden border-t border-[#262626] py-10 md:py-[41px]">
      <div className="marquee-track flex w-max flex-nowrap items-center whitespace-nowrap" aria-hidden>
        <MarqueeTrack />
        <MarqueeTrack />
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/90 to-transparent md:w-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/90 to-transparent md:w-[120px]"
        aria-hidden
      />
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#0a0a0a] pt-16 md:pt-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <img
          src="/footer-bg.webp"
          alt=""
          className="absolute left-0 top-[-6%] h-[113%] w-full max-w-none object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div
          className="absolute inset-x-0 bottom-0 top-[20%]"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.8) 50%, rgb(0,0,0) 70%, rgb(0,0,0) 100%)',
          }}
        />
      </div>

      <div className={`relative ${editorial.containerWide}`}>
        <Reveal>
          <div className="grid gap-12 pb-12 md:grid-cols-2 md:gap-16 md:pb-16 lg:gap-[64px]">
            <nav className="flex flex-col gap-1" aria-label="Navegação do rodapé">
              {mainNav.map((item) => (
                <FooterNavLink
                  key={item.label}
                  href={item.href}
                  label={item.label}
                  external={'external' in item && item.external}
                  className="text-[clamp(1.75rem,5vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-white transition-opacity hover:opacity-80"
                />
              ))}
            </nav>

            <div className="flex flex-col justify-between gap-10 md:gap-12">
              <div className="space-y-3">
                <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#737373]">
                  Vamos conversar
                </p>
                <a
                  href={MAILTO}
                  className="text-lg text-white transition-opacity hover:opacity-80 md:text-[18px] md:leading-[1.6]"
                >
                  {EMAIL}
                </a>
              </div>

              <div className="grid gap-10 sm:grid-cols-2 sm:gap-6">
                <div className="space-y-4">
                  <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#737373]">
                    Social
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {socialLinks.map((link) => (
                      <li key={link.label}>
                        <FooterNavLink
                          href={link.href}
                          label={link.label}
                          external
                          className="text-sm text-[#a3a3a3] transition-colors hover:text-white"
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#737373]">
                    Contato
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {contactLinks.map((link) => (
                      <li key={link.label}>
                        <FooterNavLink
                          href={link.href}
                          label={link.label}
                          external={link.href.startsWith('http')}
                          className="text-sm text-[#a3a3a3] transition-colors hover:text-white"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <CauseImpactoMarquee />

        <Reveal>
          <div className="flex flex-col gap-3 border-t border-[#262626] py-6 text-[13px] text-[#737373] sm:flex-row sm:items-center sm:justify-between md:py-6">
            <p>© {new Date().getFullYear()} Wellington Silveira. Todos os direitos reservados.</p>
            <p>Design por Wellington Silveira</p>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
