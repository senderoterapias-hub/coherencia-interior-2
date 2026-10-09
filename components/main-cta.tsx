import { CtaLink } from '@/components/cta-link'
import { Sparkle, Squiggle } from '@/components/doodles'
import { FIRST_STAGE_URL } from '@/lib/site'

export function MainCta() {
  return (
    <section id="acceso" aria-labelledby="acceso-title" className="scroll-mt-6 px-4">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-primary-foreground md:py-24">
        <div
          aria-hidden="true"
          className="blob pointer-events-none absolute -right-16 -top-16 size-48 bg-butter/25 md:size-64"
        />
        <div
          aria-hidden="true"
          className="blob-alt pointer-events-none absolute -bottom-20 -left-16 size-52 bg-terracotta/35 md:size-72"
        />
        <Sparkle className="absolute right-[18%] top-[22%] size-5" />

        <div className="relative mx-auto flex max-w-lg flex-col items-center text-center">
          <p className="font-serif font-soft text-lg italic text-butter">cuando quieras</p>
          <h2
            id="acceso-title"
            className="mt-3 font-serif font-soft text-[2.1rem] leading-[1.1] text-balance md:text-5xl"
          >
            Da el primer paso
          </h2>
          <Squiggle className="mt-3 h-3 w-28 text-butter/80" />
          <p className="mt-6 leading-relaxed text-primary-foreground/80 text-pretty">
            Entrá, mirá con calma y quedate el tiempo que necesites.
          </p>
          <CtaLink href={FIRST_STAGE_URL} variant="butter" className="mt-9 w-full sm:w-auto">
            Comenzar la primera etapa
          </CtaLink>
          <p className="mt-5 text-sm text-primary-foreground/70">Gratuito. Sin compromiso.</p>
        </div>
      </div>
    </section>
  )
}
