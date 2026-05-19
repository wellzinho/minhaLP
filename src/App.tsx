import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { Section } from '@/components/layout/Section'
import { Reveal } from '@/components/motion/Reveal'
import { HeroSection } from '@/components/home/HeroSection'
import { ProjectsGrid } from '@/components/home/ProjectsGrid'
import { AboutSection } from '@/components/home/AboutSection'
import { CompaniesMarquee } from '@/components/home/CompaniesMarquee'
import { ExperienceSection } from '@/components/home/ExperienceSection'
import { editorial, sectionTheme } from '@/styles/editorial'

const LINKEDIN_PROFILE =
  'https://www.linkedin.com/in/wellington-de-moura-silveira-9b5947136/'

const experiences = [
  {
    company: 'meutudo',
    role: 'Product Designer Sênior',
    tag: 'Fintech de Seguros',
    mediaImage: '/imagemhome/imagem21.png',
    problema:
      'Estruturação do design de seguros digitais do zero em uma fintech de crédito consignado com aporte Goldman Sachs.',
    solucao: [
      'Redesign da subhome com hierarquia visual: +40% engajamento e +15% conversão',
      'Primeiro canal digital de sinistros: 85% de conclusão self-service no primeiro acesso',
    ],
  },
  {
    company: 'Grupo Ybera Paris',
    role: 'Product Designer Sênior',
    tag: 'E-commerce e Fidelização',
    mediaImage: '/imagemhome/imagem22.png',
    problema:
      'Liderança do ecossistema digital de uma marca de cosméticos, unificando e-commerce, fidelização e Design System.',
    solucao: [
      'Diagnóstico de abandono de carrinho via Clarity e GA: redesign do checkout',
      'Gamificação do Ybera Club: +60% retenção semanal e +30% completude de tarefas',
    ],
  },
  {
    company: 'Trinus.co',
    role: 'Product Designer Sênior',
    tag: 'Fintech Imobiliária',
    mediaImage: '/imagemhome/imagem23.png',
    problema:
      'Modernização da jornada bancária de uma landtech imobiliária, eliminando dependência de VAN e estruturando produtos financeiros do zero.',
    solucao: [
      'CNAB unificado via Jobs to be Done: fim da dependência da VAN bancária',
      'Design System em Atomic Design criado do zero para consistência entre squads',
    ],
  },
  {
    company: 'Banco BV',
    role: 'Product Designer Sênior',
    tag: 'Banco de Varejo',
    mediaImage: '/imagemhome/imagem24.png',
    problema:
      'Atuação em Cross Sell e produtos financeiros com foco em pesquisa, dados e redesign de jornadas de crédito e seguros.',
    solucao: [
      'Social listening revelou causa do cancelamento: −0,5% em uma semana',
      'Jobs to be Done aplicado ao Seguro Prestamista: +10% conversão em 2 meses',
    ],
  },
]

const featuredProjects = [
  {
    title: 'Jornada de Acionamento de Seguro',
    description:
      'Fluxo crítico de sinistro projetado para reduzir a carga cognitiva, gerando 85% de Task Success e 15% menos chamados no suporte',
    tag: 'UX / Design de Serviço',
    casePath: '/case/acionamento-seguro',
    mediaImage: '/acionarseguro/imagem1.png',
  },
  {
    title: 'Redesign da Subhome de Seguros',
    description:
      'Design estratégico para seguros, desvinculando o crédito para gerar +40% de engajamento e +15% de conversão',
    tag: 'Fintech / Seguros',
    casePath: '/case/subhome-seguros',
    mediaImage: '/novahome/imagem1.png',
  },
  {
    title: 'Aprovação de Transação',
    description:
      'Redução de 30% no tempo de aprovação de operações complexas e maior conformidade regulatória',
    tag: 'Aumento de produtividade / Estratégia de produto',
    casePath: '/case/aprovacao-transacao',
    mediaImage: '/imagensTrinus/Imagem2.png',
  },
  {
    title: 'IA-First Landing Page para Especialidade Médica',
    description:
      'Entrega 70% mais rápida e redução de 70% no ruído de atendimento via WhatsApp.',
    tag: 'IA-First / Conversão',
    casePath: '/case/lading-page-medica-ia-first',
    mediaImage: '/imagemMedico/medicacapa.png?v=2',
  },
]

const impactMetrics = [
  {
    value: 40,
    prefix: '+',
    suffix: '%',
    label: 'de engajamento devido a padronização de cards e escaneabilidade',
  },
  {
    value: 30,
    prefix: '-',
    suffix: '%',
    label: 'no tempo na aprovação de transações',
  },
  {
    value: 15,
    prefix: '-',
    suffix: '%',
    label: 'de ligação para o suporte para abertura de sinistro',
  },
]

function AnimatedCounter({
  target,
  suffix = '',
  duration = 2000,
}: {
  target: number
  suffix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const startTime = performance.now()
          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1)
            const easeOut = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(easeOut * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

function MetricsSection() {
  const t = sectionTheme.light

  return (
    <Section
      theme="light"
      className={`${editorial.section} rounded-t-[28px] shadow-[0_-40px_80px_rgba(0,0,0,0.14)]`}
    >
      <Reveal>
        <p className={`${editorial.sectionLabel} ${t.label}`}>02 — Impacto</p>
        <h2 className={`mt-4 max-w-3xl ${editorial.sectionTitle}`}>
          Resultados mensuráveis em produtos complexos
        </h2>
      </Reveal>

      <div className={`mt-16 grid grid-cols-1 gap-px md:grid-cols-3 ${t.border} bg-neutral-200`}>
        {impactMetrics.map((metric, index) => (
          <Reveal key={index} delay={index * 0.08} className="bg-white px-6 py-10 md:px-10 md:py-14">
            <p className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-[-0.04em]">
              {metric.prefix}
              <AnimatedCounter target={metric.value} suffix={metric.suffix} />
            </p>
            <p className={`mt-4 max-w-xs ${editorial.bodySm} ${t.muted}`}>{metric.label}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function CtaSection() {
  const t = sectionTheme.light

  return (
    <Section theme="light" className="relative z-30 py-20 md:py-28">
      <Reveal className="text-center">
        <p className={`text-2xl font-semibold md:text-3xl ${t.text}`}>
          Deseja ver minha trajetória completa?
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href={LINKEDIN_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-2 rounded-full border px-8 py-4 text-sm font-medium transition-all duration-300 ${t.pillBtn}`}
          >
            Acessar Currículo no LinkedIn
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Reveal>
    </Section>
  )
}

function App() {
  return (
    <div className={editorial.page}>
      <SiteHeader />

      <main className="relative">
        <HeroSection />

        <div className="relative z-10 isolate">
          <MetricsSection />
          <ProjectsGrid projects={featuredProjects} />
          <AboutSection />
        </div>

        <CompaniesMarquee />
        <ExperienceSection experiences={experiences} />
        <CtaSection />
      </main>

      <SiteFooter />
    </div>
  )
}

export default App
