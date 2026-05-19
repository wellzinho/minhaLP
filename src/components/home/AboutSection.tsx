import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/motion/Reveal'
import { Section, SectionHeader } from '@/components/layout/Section'
import { editorial, sectionTheme } from '@/styles/editorial'

const LINKEDIN_PROFILE =
  'https://www.linkedin.com/in/wellington-de-moura-silveira-9b5947136/'

const intro =
  'Com mais de 10 anos no ecossistema digital, atuo na intersecção entre UX, tecnologia e negócio. Sou especialista em desenhar jornadas de alta complexidade em Fintech, Landtech e Insurtech. Arquitetando soluções escaláveis que otimizam conversão, engajamento e geram impacto real na receita.'

const aboutCards = [
  {
    title: 'Design estratégico & Dados',
    content:
      'Liderança na criação de produtos do zero e redesigns focados em conversão. Experiência em Design Systems e Atomic Design para escalabilidade em grandes operações.',
    bento: 'sm:col-span-2',
  },
  {
    title: 'Workflow AI-First',
    content:
      'Pioneiro na integração de IA aplicada ao design e desenvolvimento front-end. Utilização avançada de ferramentas como Cursor e Figma AI para acelerar ciclos de entrega.',
    bento: '',
  },
  {
    title: 'Bagagem de mercado',
    content:
      'Histórico sólido em grandes players do mercado, colaborando em ambientes corporativos de alta complexidade. Incluindo: Vivo, Banco BV, Ebanx, Zoop, Trinus e Meu Tudo.',
    bento: '',
  },
] as const

export function AboutSection() {
  const t = sectionTheme.light

  return (
    <Section id="about" theme="light" className={`relative z-10 ${editorial.section}`}>
      <Reveal>
        <SectionHeader
          number="04 — Sobre"
          title={
            <>
              Product Designer Sênior
              <br />
              com foco em resultado
            </>
          }
          theme="light"
        />
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start lg:gap-16">
        <Reveal variant="scale" className={`overflow-hidden rounded-xl ${t.surface}`}>
          <div className="relative min-h-[360px] sm:min-h-[440px] lg:min-h-[560px] lg:sticky lg:top-28">
            <img
              src="/imagemhome/imagem4.png"
              alt="Wellington Silveira — Product Designer"
              className="absolute inset-0 h-full w-full object-cover object-center grayscale"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div className="flex flex-col justify-center gap-10 lg:gap-12">
          <Reveal delay={0.1}>
            <p className={`w-full ${editorial.body} ${t.muted}`}>{intro}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {aboutCards.map((card) => (
                <article
                  key={card.title}
                  className={[
                    'flex flex-col gap-2.5 rounded-2xl p-5 sm:p-6',
                    t.surface,
                    'ring-1 ring-inset ring-black/[0.06]',
                    card.bento,
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  <h3 className="text-[15px] font-semibold leading-snug tracking-[-0.01em]">{card.title}</h3>
                  <p className={`${editorial.bodySm} ${t.muted}`}>{card.content}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <a
              href={LINKEDIN_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center gap-1.5 text-base font-medium ${t.link} transition-opacity hover:opacity-70`}
            >
              Ver experiência completa
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
