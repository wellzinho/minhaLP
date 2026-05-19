import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Reveal } from '@/components/motion/Reveal'
import { ScrollStackSection } from '@/components/layout/ScrollStackSection'
import { editorial, sectionTheme } from '@/styles/editorial'

export type Experience = {
  company: string
  role: string
  tag?: string
  mediaImage: string
  problema: string
  solucao: string[]
}

const bodyMd = 'text-[15px] leading-[1.65] text-[#525252] md:text-[16px] md:leading-[1.7]'

function shortCompanyName(company: string) {
  if (company === 'Grupo Ybera Paris') return 'Ybera'
  return company
}

function ExperienceNavHint({
  company,
  direction,
  onClick,
}: {
  company: string
  direction: 'prev' | 'next'
  onClick: () => void
}) {
  const label = shortCompanyName(company)
  const isPrev = direction === 'prev'

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isPrev ? `Experiência anterior: ${company}` : `Próxima experiência: ${company}`}
      className={[
        'group flex max-w-full items-center gap-1.5 text-[#a3a3a3] transition-colors hover:text-black',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black',
        isPrev ? 'justify-self-end text-right' : 'justify-self-start text-left',
      ].join(' ')}
    >
      {isPrev ? <ChevronLeft className="h-4 w-4 shrink-0 opacity-60 group-hover:opacity-100" aria-hidden /> : null}
      <span className="truncate text-[clamp(0.8125rem,2vw,0.9375rem)] font-medium leading-tight">
        {label}
      </span>
      {!isPrev ? <ChevronRight className="h-4 w-4 shrink-0 opacity-60 group-hover:opacity-100" aria-hidden /> : null}
    </button>
  )
}

function ExperienceDetailPanel({
  exp,
  index,
  total,
  panelId,
  tabId,
  prevExp,
  nextExp,
  onGoPrev,
  onGoNext,
}: {
  exp: Experience
  index: number
  total: number
  panelId: string
  tabId: string
  prevExp: Experience | null
  nextExp: Experience | null
  onGoPrev: () => void
  onGoNext: () => void
}) {
  const highlights = exp.solucao.slice(0, 2)

  return (
    <motion.div
      id={panelId}
      role="tabpanel"
      aria-labelledby={tabId}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col"
    >
      <div className="border-b border-[#e5e5e5] pb-6">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <div className="min-w-0">
            {prevExp ? (
              <ExperienceNavHint company={prevExp.company} direction="prev" onClick={onGoPrev} />
            ) : null}
          </div>

          <h3 className="px-1 text-center text-[clamp(1.25rem,3.5vw,2rem)] font-semibold leading-tight tracking-[-0.02em] text-black">
            {exp.company}
          </h3>

          <div className="min-w-0">
            {nextExp ? (
              <ExperienceNavHint company={nextExp.company} direction="next" onClick={onGoNext} />
            ) : null}
          </div>
        </div>
      </div>

      <p className={`mt-6 ${bodyMd}`}>{exp.problema}</p>

      <dl
        className={`mt-8 grid gap-6 border-y border-[#e5e5e5] py-6 ${exp.tag ? 'grid-cols-2' : 'grid-cols-1'}`}
      >
        <div>
          <dt className="text-[12px] font-medium uppercase tracking-[0.1em] text-[#737373]">Cargo</dt>
          <dd className="mt-1 text-[15px] font-semibold text-black">{exp.role}</dd>
        </div>
        {exp.tag ? (
          <div>
            <dt className="text-[12px] font-medium uppercase tracking-[0.1em] text-[#737373]">Contexto</dt>
            <dd className="mt-1 text-[15px] font-semibold text-black">{exp.tag}</dd>
          </div>
        ) : null}
      </dl>

      {highlights.length > 0 ? (
        <ul className="mt-6 space-y-2" aria-label="Principais entregas">
          {highlights.map((item) => (
            <li key={item} className={`flex gap-2 ${bodyMd}`}>
              <span className="text-[#a3a3a3]" aria-hidden>
                —
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <p className="sr-only">
        Experiência {index + 1} de {total}: {exp.role} em {exp.company}.
        {prevExp ? ` Anterior: ${prevExp.company}.` : ''}
        {nextExp ? ` Próxima: ${nextExp.company}.` : ''}
        {exp.solucao.length > 2 ? ` Mais ${exp.solucao.length - 2} entregas no portfólio.` : ''}
      </p>
    </motion.div>
  )
}

function ExperienceThumbCard({
  exp,
  isActive,
  onSelect,
  tabId,
  panelId,
}: {
  exp: Experience
  isActive: boolean
  onSelect: () => void
  tabId: string
  panelId: string
}) {
  const label = shortCompanyName(exp.company)

  return (
    <button
      type="button"
      id={tabId}
      role="tab"
      aria-selected={isActive}
      aria-controls={panelId}
      onClick={onSelect}
      className={[
        'group relative shrink-0 snap-center overflow-hidden rounded-[20px] text-left',
        'aspect-[3/4] w-[42vw] max-w-[200px] sm:w-[168px] md:w-[188px] lg:w-[212px]',
        'min-h-[44px] transition-[transform,opacity,box-shadow] duration-300',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
        isActive
          ? 'scale-100 opacity-100 shadow-[0_20px_50px_rgba(0,0,0,0.45)] ring-2 ring-white'
          : 'scale-[0.96] opacity-75 hover:scale-[0.98] hover:opacity-95',
      ].join(' ')}
    >
      <div className="absolute inset-0 overflow-hidden bg-[#141414]" aria-hidden>
        <img
          src={exp.mediaImage}
          alt=""
          className="size-full object-cover object-[center_30%] transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/10"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-[15px] font-semibold leading-tight text-white">{label}</p>
        <p className="mt-1 line-clamp-1 text-[12px] text-white/75">{exp.role}</p>
      </div>
      <span className="sr-only">
        {exp.company}, {exp.role}
        {isActive ? ' (selecionado)' : ''}
      </span>
    </button>
  )
}

export function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  const t = sectionTheme.dark
  const baseId = useId()
  const [activeIndex, setActiveIndex] = useState(0)
  const cardListRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const active = experiences[activeIndex]

  const scrollCarouselToIndex = useCallback(
    (index: number) => {
      const list = cardListRef.current
      const card = list?.children[index] as HTMLElement | undefined
      if (!list || !card) return

      const targetLeft = card.offsetLeft - (list.clientWidth - card.clientWidth) / 2
      list.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      })
    },
    [prefersReducedMotion],
  )

  const selectExperience = useCallback(
    (index: number) => {
      setActiveIndex(index)
      scrollCarouselToIndex(index)
    },
    [scrollCarouselToIndex],
  )

  const goNext = useCallback(() => {
    selectExperience((activeIndex + 1) % experiences.length)
  }, [activeIndex, experiences.length, selectExperience])

  const goPrev = useCallback(() => {
    selectExperience((activeIndex - 1 + experiences.length) % experiences.length)
  }, [activeIndex, experiences.length, selectExperience])

  const prevExperience = activeIndex > 0 ? experiences[activeIndex - 1] : null
  const nextExperience =
    activeIndex < experiences.length - 1 ? experiences[activeIndex + 1] : null

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('[data-experience-region]')) return

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault()
        goNext()
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        goPrev()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [goNext, goPrev])

  return (
    <ScrollStackSection id="experience" theme="dark" zIndex={31} className="overflow-visible" roundedTop={false}>
      <Reveal>
        <div className="space-y-[18px] pt-1">
          <p className={`${editorial.sectionLabel} ${t.label}`}>05 — Experiência</p>
          <h2 className={`${editorial.sectionTitle} ${t.text}`}>
            Trajetória em produtos
            <br />
            de alta complexidade
          </h2>
        </div>
      </Reveal>

      <div
        className="mt-10 overflow-visible sm:mt-12 lg:mt-14"
        data-experience-region
      >
        <div className="rounded-2xl bg-white shadow-[0_24px_80px_rgba(0,0,0,0.35)] lg:rounded-3xl">
          <div className="grid min-h-[min(88vh,780px)] grid-cols-1 lg:min-h-[min(72vh,640px)] lg:grid-cols-[2fr_3fr]">
            {/* Painel visual */}
            <div className="relative min-h-[280px] sm:min-h-[340px] lg:min-h-0">
              <div className="absolute inset-0 overflow-hidden rounded-t-2xl lg:rounded-bl-3xl lg:rounded-tl-3xl lg:rounded-br-none lg:rounded-tr-none">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={active.mediaImage}
                    src={active.mediaImage}
                    alt=""
                    aria-hidden
                    className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
                    initial={prefersReducedMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/75" aria-hidden />
              </div>

              <div className="relative z-[1] flex h-full min-h-[inherit] flex-col justify-between p-5 sm:p-7 lg:p-9">
                <div className="flex gap-1.5" aria-hidden>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>

                <div>
                  <p className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold leading-tight tracking-[-0.02em] text-white">
                    {active.company}
                  </p>
                  <p className="mt-2 text-sm text-white/80">{active.role}</p>
                </div>
              </div>

              <div
                className="absolute bottom-5 right-5 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-semibold text-black shadow-lg lg:bottom-auto lg:right-0 lg:top-1/2 lg:h-12 lg:w-12 lg:translate-x-1/2 lg:-translate-y-1/2"
                aria-hidden
              >
                {String(activeIndex + 1).padStart(2, '0')}
              </div>
            </div>

            {/* Painel de conteúdo */}
            <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-b-2xl bg-white px-5 py-7 sm:px-8 sm:py-9 lg:rounded-br-3xl lg:rounded-tr-3xl lg:rounded-bl-none lg:rounded-tl-none lg:px-11 lg:py-11">
              <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.12em] text-[#737373]">
                {String(activeIndex + 1).padStart(2, '0')} / {String(experiences.length).padStart(2, '0')} —{' '}
                {active.role}
              </p>

              <AnimatePresence mode="wait">
                <ExperienceDetailPanel
                  key={active.company}
                  exp={active}
                  index={activeIndex}
                  total={experiences.length}
                  panelId={`${baseId}-panel-${activeIndex}`}
                  tabId={`${baseId}-tab-${activeIndex}`}
                  prevExp={prevExperience}
                  nextExp={nextExperience}
                  onGoPrev={goPrev}
                  onGoNext={goNext}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Carrossel — fora do card arredondado, sem overlap negativo */}
        <div className="relative z-20 mt-10 overflow-visible bg-[#0a0a0a] pb-10 sm:mt-12 lg:mt-14">
          <p id={`${baseId}-cards-label`} className="sr-only">
            Selecione uma experiência. Use as setas do teclado ou os botões anterior e próximo para navegar.
          </p>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Experiência anterior"
            className="absolute left-1 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e5e5] bg-white text-black shadow-lg transition-colors hover:bg-[#f5f5f5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:left-3 md:left-6"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Próxima experiência"
            className="absolute right-1 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e5e5] bg-white text-black shadow-lg transition-colors hover:bg-[#f5f5f5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:right-3 md:right-6"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
          <div className="overflow-visible">
            <div
              ref={cardListRef}
              role="tablist"
              aria-labelledby={`${baseId}-cards-label`}
              className="flex snap-x snap-mandatory items-center gap-10 overflow-x-auto px-6 pb-14 pt-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-8 md:justify-center md:px-10 lg:px-20 [&::-webkit-scrollbar]:hidden"
            >
              {experiences.map((exp, i) => {
                const panelId = `${baseId}-panel-${i}`
                const tabId = `${baseId}-tab-${i}`
                return (
                  <ExperienceThumbCard
                    key={exp.company}
                    exp={exp}
                    tabId={tabId}
                    panelId={panelId}
                    isActive={i === activeIndex}
                    onSelect={() => selectExperience(i)}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </ScrollStackSection>
  )
}
