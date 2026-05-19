import { editorial, sectionTheme, type SectionTheme } from '@/styles/editorial'

type SectionProps = {
  id?: string
  theme: SectionTheme
  children: React.ReactNode
  className?: string
  containerClassName?: string
}

export function Section({ id, theme, children, className = '', containerClassName = '' }: SectionProps) {
  const t = sectionTheme[theme]

  return (
    <section id={id} data-theme={theme} className={`${t.bg} ${t.text} ${className}`}>
      <div className={`mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-20 ${containerClassName}`}>
        {children}
      </div>
    </section>
  )
}

export function SectionHeader({
  number,
  title,
  theme,
  action,
}: {
  number: string
  title: React.ReactNode
  theme: SectionTheme
  action?: React.ReactNode
}) {
  const t = sectionTheme[theme]

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-end md:gap-10">
      <div className="space-y-[18px] pt-1">
        <p className={`${editorial.sectionLabel} ${t.label}`}>{number}</p>
        <h2 className={`${editorial.sectionTitle} ${t.text}`}>{title}</h2>
      </div>
      {action ? <div className="flex md:justify-end">{action}</div> : null}
    </div>
  )
}
