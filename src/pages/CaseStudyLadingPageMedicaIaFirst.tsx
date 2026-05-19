
import { CaseStudyShell } from '@/components/case/CaseStudyShell'
import { caseStudy } from '@/styles/editorial'

const body = caseStudy.body
const h1 = caseStudy.heroTitle
const sectionH2 = caseStudy.sectionH2
const blockH3 = caseStudy.blockH3
const mediaFrame = caseStudy.mediaFrame
const sectionGap = caseStudy.sectionGap
const blockGap = caseStudy.blockGap
const caseLink = caseStudy.link

export default function CaseStudyLadingPageMedicaIaFirst() {
  return (
    <CaseStudyShell>
      <div>
          <h1 id="titulo-lading-page-medica" className={`${h1} ${blockGap}`}>
            LP Médica IA-First - Otimização de Conversão e Atendimento
          </h1>

          <section className={sectionGap} aria-labelledby="desafio-estrategico-heading-lading-page-medica">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
              <div className="space-y-4">
                <h3 id="desafio-estrategico-heading-lading-page-medica" className={blockH3}>
                  Desafio Estratégico
                </h3>
                <p className={body}>
                  O cenário era um clássico erro de escala em serviços de saúde: uma excelente profissional cuja eficiência era minada por um fluxo de atendimento
                  ineficiente, onde 100% dos leads eram direcionados ao WhatsApp sem filtro prévio e a consequência era de cerca de 70% do tempo da secretaria/médica
                  gasto respondendo dúvidas básicas (convênios, endereços, modalidades de atendimento).
                </p>
              </div>
              <div className="space-y-4">
                <h3 className={blockH3}>Objetivo</h3>
                <p className={body}>
                  Criar uma interface Mobile-First que funcionasse como um &quot;concierge digital&quot;, educando a paciente antes do contato final e elevando a percepção
                  de autoridade da médica.
                </p>
              </div>
            </div>
          </section>

          <div id="case-lading-page-medica-placeholder-01" className={`${mediaFrame} ${sectionGap} h-[380px] md:h-[480px]`}>
            <img
              src="/imagemMedico/medicacapa.png?v=5"
              alt="Landing page médica IA-First em mobile"
              className="h-full w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />

          </div>

          <section className={`${sectionGap} space-y-6`} aria-labelledby="metodologia-heading-lading-page-medica">
            <h2 id="metodologia-heading-lading-page-medica" className={`${sectionH2} mb-2`}>
              Metodologia: A Revolução da Agilidade (IA-First Workflow)
            </h2>
            <p className={body}>
              Para este projeto, decidi desafiar o modelo tradicional de agência (que levaria de 7 a 10 dias) e implementar um workflow totalmente orquestrado por IA. O
              foco não foi apenas velocidade, mas a precisão técnica.
            </p>
            <ul className={`${body} list-disc space-y-4 pl-5 marker:text-zinc-500/90 [li]:pl-1`}>
              <li>
                <strong className="font-semibold text-white">Fase 1: Engenharia Reversa e Design System (Claude + Prompt Engineering)</strong>
                <p className="mt-1">
                  Em vez de desenhar do zero, utilizei o Claude para analisar referências de alto padrão no setor médico. O resultado foi a criação de um arquivo
                  DESIGN.md proprietário, que serviu como a &quot;Single Source of Truth&quot; para todo o projeto.
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-zinc-500/90 [li]:pl-1">
                  <li>Tipografia (Plus Jakarta Sans para autoridade e DM Sans para legibilidade).</li>
                  <li>Paleta de cores baseada em contraste acessível e psicologia das cores (Bold Blue para segurança).</li>
                  <li>Regras de espaçamento (8px grid) e sombras azuladas para evitar o aspecto &quot;padrão&quot; de IA.</li>
                </ul>
              </li>
              <li>
                <strong className="font-semibold text-white">Fase 2: Prototipagem e Orquestração de Prompt (Gemini + Google Stitch)</strong>
                <p className="mt-1">
                  Utilizei o Gemini para converter o DESIGN.md em prompts de alta fidelidade para o Google Stitch.
                </p>
                <p className="mt-1">
                  <strong className="font-semibold text-white">Pivot Técnico:</strong> Durante a customização no Stitch, identifiquei um erro crítico de
                  arquitetura (variáveis sobrepostas) que impedia a exportação para o Figma.
                </p>
                <p className="mt-1">
                  <strong className="font-semibold text-white">Resolução:</strong> Em vez de insistir no erro, recuei para a versão base limpa e utilizei minha
                  experiência em estrutura de arquivos para realizar o handoff manual para o Figma, garantindo a integridade dos componentes.
                </p>
              </li>
              <li>
                <strong className="font-semibold text-white">Fase 3: Desenvolvimento e Performance (Cursor + Magic UI)</strong>
                <p className="mt-1">
                  O desenvolvimento foi realizado no Cursor. Para garantir o fator &quot;uau&quot; sem comprometer o SEO e o tempo de carregamento:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-zinc-500/90 [li]:pl-1">
                  <li>Integrei componentes da Magic UI, selecionando efeitos visuais leves que não pesassem.</li>
                  <li>Foquei em uma estrutura de código limpa, otimizada para SEO orgânico, garantindo que a médica fosse encontrada localmente em Curitiba.</li>
                </ul>
                <p className="mt-3">
                  Veja como ficou o resultado final publicado:{' '}
                  <a
                    href="https://templatemedico.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={caseLink}
                  >
                    Ver resultado
                  </a>
                </p>
              </li>
            </ul>
          </section>

          <figure id="case-lading-page-medica-placeholder-02" className={`${mediaFrame} ${sectionGap} aspect-[4/3]`}>
            <img
              src="/imagemMedico/medicabody.png?v=4"
              alt="Estrutura da ação com IA no processo de ponta a ponta (medicabody)"
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />

          </figure>

          <section className={`${sectionGap} space-y-6`} aria-labelledby="diferencial-heading-lading-page-medica">
            <h2 id="diferencial-heading-lading-page-medica" className={`${sectionH2} mb-2`}>
              O Diferencial do Designer vs. Gerador de Prompt
            </h2>
            <p className={body}>
              Este case prova que a IA é um exponencial, mas a base é o conhecimento humano. A ferramenta só entregou um resultado de alta qualidade porque houve
              supervisão em:
            </p>
            <ul className={`${body} list-disc space-y-4 pl-5 marker:text-zinc-500/90 [li]:pl-1`}>
              <li>
                <strong className="font-semibold text-white">Hierarquia de Informação:</strong> Saber exatamente onde colocar os endereços e convênios para matar as
                objeções da paciente.
              </li>
              <li>
                <strong className="font-semibold text-white">Contraste e Acessibilidade:</strong> Garantir que o público adulto (foco da mastologia) conseguisse ler
                e navegar sem esforço.
              </li>
              <li>
                <strong className="font-semibold text-white">Visão de Produto:</strong> Entender que o site não é apenas um cartão de visitas, mas um filtro de
                suporte ao cliente.
              </li>
            </ul>
          </section>

          <section className={`${sectionGap} space-y-6`} aria-labelledby="resultados-heading-lading-page-medica">
            <h2 id="resultados-heading-lading-page-medica" className={`${sectionH2} mb-2`}>
              Resultados Mensuráveis e Impacto
            </h2>
            <p className={body}>
              Em apenas 16 horas de trabalho focado, entreguei uma solução que no modelo tradicional levaria uma semana.
            </p>
            <ul className={`${body} list-disc space-y-4 pl-5 marker:text-zinc-500/90 [li]:pl-1`}>
              <li>
                <strong className="font-semibold text-white">Impacto no Atendimento:</strong> Redução imediata de 70% nas perguntas repetitivas no WhatsApp.
              </li>
              <li>
                <strong className="font-semibold text-white">Qualificação de Lead:</strong> O contato agora chega à secretaria com a decisão de agendamento tomada,
                aumentando a taxa de conversão final.
              </li>
              <li>
                <strong className="font-semibold text-white">Eficiência de Entrega:</strong> Redução de 80% no tempo de desenvolvimento, permitindo um ROI (Retorno
                sobre Investimento) muito maior para o cliente.
              </li>
            </ul>
          </section>

          <section className={`${sectionGap} space-y-6`} aria-labelledby="stack-heading-lading-page-medica">
            <h2 id="stack-heading-lading-page-medica" className={`${sectionH2} mb-2`}>
              Stack Tecnológica
            </h2>
            <ul className={`${body} list-disc space-y-4 pl-5 marker:text-zinc-500/90 [li]:pl-1`}>
              <li>
                <strong className="font-semibold text-white">Design & Estratégia:</strong> Claude, Figma, Gemini.
              </li>
              <li>
                <strong className="font-semibold text-white">Prototipagem:</strong> Google Stitch e Figma.
              </li>
              <li>
                <strong className="font-semibold text-white">Desenvolvimento:</strong> Cursor (React/Tailwind), Magic UI.
              </li>
              <li>
                <strong className="font-semibold text-white">Infraestrutura:</strong> GitHub, Vercel.
              </li>
            </ul>
          </section>
      </div>
    </CaseStudyShell>
  )
}
