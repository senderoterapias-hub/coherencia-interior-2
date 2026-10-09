import { FreeStart } from '@/components/free-start'
import { Hero } from '@/components/hero'
import { Identification } from '@/components/identification'
import { NextStages } from '@/components/next-stages'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { StagesAccordion } from '@/components/stages-accordion'

export default function Page() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />

        <Identification />

        <FreeStart />

        <NextStages />

        <section
          id="proceso-completo"
          className="scroll-mt-6 px-5 py-16 md:py-20"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif font-soft text-[2.1rem] leading-[1.1] text-balance md:text-4xl">
              Las 4 Etapas de Coherencia Interior
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-[1.8] text-muted-foreground text-pretty md:text-lg">
              El proceso es un recorrido natural y consecuente, una etapa lleva a la siguiente siendo cada una un pilar importante.
            </p>

            <StagesAccordion />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
