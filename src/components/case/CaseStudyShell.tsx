import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { caseStudy } from '@/styles/editorial'
import { SiteFooter } from '@/components/layout/SiteFooter'

type CaseStudyShellProps = {
  children: React.ReactNode
}

export function CaseStudyShell({ children }: CaseStudyShellProps) {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
        <div className={`flex h-[72px] items-center justify-between md:h-20 ${caseStudy.shell}`}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#a3a3a3] transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Voltar ao portfólio
          </Link>
          <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/40">
            Caso de estudo
          </span>
        </div>
      </header>

      <article className="relative pb-24 pt-10 md:pb-32 md:pt-14">
        <div className={caseStudy.shell}>{children}</div>
      </article>

      <SiteFooter />
    </div>
  )
}
