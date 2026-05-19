/** Tokens visuais — template Figma com seções light/dark */

export type SectionTheme = 'dark' | 'light'

export const sectionTheme = {
  dark: {
    bg: 'bg-[#0a0a0a]',
    text: 'text-white',
    muted: 'text-[#a3a3a3]',
    label: 'text-[#737373]',
    border: 'border-[#262626]',
    borderSubtle: 'border-white/10',
    surface: 'bg-[#262626]',
    pill: 'border-[#404040] text-[#a3a3a3]',
    pillBtn: 'border-[#404040] text-white hover:bg-white hover:text-black',
    link: 'text-white',
    nav: 'text-[#d4d4d4] hover:text-white',
  },
  light: {
    bg: 'bg-white',
    text: 'text-black',
    muted: 'text-[#525252]',
    label: 'text-[#737373]',
    border: 'border-[#e5e5e5]',
    borderSubtle: 'border-black/10',
    surface: 'bg-[#f5f5f5]',
    pill: 'border-[#d4d4d4] text-[#525252]',
    pillBtn: 'border-black/20 text-black hover:bg-black hover:text-white',
    link: 'text-black',
    nav: 'text-[#525252] hover:text-black',
  },
} as const

export const editorial = {
  page: 'min-h-screen antialiased font-sans',
  container: 'mx-auto w-full max-w-container px-6 md:px-10 lg:px-20',
  containerWide: 'mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-20',
  section: 'py-[80px] md:py-[100px] lg:py-[120px]',
  sectionLabel: 'text-[12px] font-medium uppercase tracking-[0.12em]',
  heroTitle:
    'text-[clamp(1.625rem,7.2vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.03em] sm:text-[clamp(1.875rem,6vw,3rem)] sm:leading-[1.1] md:text-[clamp(2.75rem,6vw,5rem)] md:leading-[1.05]',
  sectionTitle: 'text-[clamp(2rem,4vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.02em]',
  body: 'text-[17px] leading-[1.8]',
  bodySm: 'text-[15px] leading-[1.65]',
} as const

export const caseStudy = {
  shell: 'mx-auto w-full max-w-[72rem] text-left px-6 md:px-10 lg:px-12',
  heroTitle:
    'text-[clamp(2.75rem,7vw,5.5rem)] font-semibold tracking-[-0.03em] text-white leading-[1.02] mb-12 md:mb-16',
  body: 'text-[1.0625rem] leading-[1.65] text-[#a3a3a3]',
  sectionH2:
    'text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-[-0.02em] text-white scroll-mt-28',
  blockH3: 'text-lg font-semibold tracking-tight text-white md:text-xl',
  listBase: 'list-disc space-y-3 pl-5 marker:text-white/30 [li]:pl-1',
  mediaFrame: 'relative w-full overflow-hidden bg-[#0a0a0a]',
  sectionGap: 'mb-16 md:mb-24',
  blockGap: 'mb-10 md:mb-14',
  link: 'font-medium text-white underline decoration-white/25 underline-offset-[6px] transition-colors hover:decoration-white',
  introLabel: 'text-[11px] font-medium uppercase tracking-[0.12em] text-white/40 mb-8',
} as const
