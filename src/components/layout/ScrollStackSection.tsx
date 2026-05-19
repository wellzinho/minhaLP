import { editorial, sectionTheme, type SectionTheme } from '@/styles/editorial'

type ScrollStackSectionProps = {
  id?: string
  theme: SectionTheme
  zIndex: number
  children: React.ReactNode
  className?: string
  /** Sombra de sobreposição no scroll stack */
  overlay?: boolean
  /** Cantos superiores arredondados (padrão: igual a `overlay`) */
  roundedTop?: boolean
}

export function ScrollStackSection({
  id,
  theme,
  zIndex,
  children,
  className = '',
  overlay = true,
  roundedTop,
}: ScrollStackSectionProps) {
  const t = sectionTheme[theme]
  const showRoundedTop = roundedTop ?? overlay

  return (
    <section
      id={id}
      data-theme={theme}
      style={{ zIndex }}
      className={[
        'sticky top-0',
        t.bg,
        t.text,
        editorial.section,
        overlay ? 'shadow-[0_-40px_80px_rgba(0,0,0,0.14)]' : '',
        showRoundedTop ? 'rounded-t-[28px]' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="mx-auto w-full max-w-[1440px] overflow-visible px-6 md:px-10 lg:px-20">{children}</div>
    </section>
  )
}
