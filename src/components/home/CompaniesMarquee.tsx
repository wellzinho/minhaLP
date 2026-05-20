/** Ordem conforme Figma node 147:3 */
const companies = [
  { name: 'Bradesco', src: '/logos/bradesco.svg' },
  { name: 'BRQ', src: '/logos/brq.svg' },
  { name: 'Trinus.co', src: '/logos/trinus.png' },
  { name: 'Vivo', src: '/logos/vivo.png' },
  { name: 'meutudo', src: '/logos/meutudo.png' },
  { name: 'Banco BV', src: '/logos/banco-bv.svg' },
  { name: 'Grupo Ybera Paris', src: '/logos/ybera-full.png' },
  { name: 'Zoop', src: '/logos/zoop.svg' },
] as const

const LOGO_HEIGHT_PX = 48
const LOGO_GAP_PX = 80

function MarqueeLogo({
  company,
  ariaHidden = false,
}: {
  company: (typeof companies)[number]
  ariaHidden?: boolean
}) {
  return (
    <div
      className="flex shrink-0 items-center"
      style={{ marginInline: LOGO_GAP_PX / 2 }}
    >
      <img
        src={company.src}
        alt={ariaHidden ? '' : company.name}
        className="block w-auto shrink-0 object-contain object-center"
        style={{ height: LOGO_HEIGHT_PX }}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        draggable={false}
      />
    </div>
  )
}

function LogoSet({
  setId,
  ariaHidden = false,
}: {
  setId: string
  ariaHidden?: boolean
}) {
  return (
    <div
      className="flex shrink-0 flex-nowrap items-center"
      aria-hidden={ariaHidden || undefined}
    >
      {companies.map((company) => (
        <MarqueeLogo
          key={`${setId}-${company.name}`}
          company={company}
          ariaHidden={ariaHidden}
        />
      ))}
    </div>
  )
}

export function CompaniesMarquee() {
  return (
    <section
      aria-label="Empresas e parceiros"
      className="relative z-[15] overflow-hidden bg-[#040607] py-12 sm:py-14 md:py-16 lg:py-20"
    >
      <div className="companies-marquee-viewport overflow-hidden">
        <div className="companies-marquee-track flex w-max flex-nowrap items-center whitespace-nowrap">
          <LogoSet setId="a" />
          <LogoSet setId="b" ariaHidden />
        </div>
      </div>

      <ul className="sr-only">
        {companies.map((company) => (
          <li key={company.name}>{company.name}</li>
        ))}
      </ul>
    </section>
  )
}
