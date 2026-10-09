import { CtaLink } from '@/components/cta-link'

export function MainCta() {
  return (
    <section
      aria-labelledby="main-cta-title"
      className="relative overflow-hidden px-5 py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="blob pointer-events-none absolute -left-24 top-10 size-64 bg-butter/60 md:size-80"
      />

      <div
        aria-hidden="true"
        className="blob-alt pointer-events-none absolute -right-24 bottom-0 size-64 bg-primary/10 md:size-80"
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <p className="font-serif text-lg italic text-primary">
          una última invitación
        </p>

        <h2
          id="main-cta-title"
          className="mt-4 font-serif font-soft text-[2.5rem] leading-[1.05] text-balance md:text-5xl"
        >
          El proceso puede comenzar
          <span className="block italic text-primary">
            de forma simple.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground text-pretty md:text-lg">
          Si sentís que este camino tiene algo para vos, podés comenzar viviendo
          la primera experiencia gratuita y descubrirlo desde tu propia experiencia.
        </p>

        <CtaLink
          href="/primera-etapa"
          variant="butter"
          className="mt-9 w-full sm:w-auto"
        >
          Vivir la primera experiencia
        </CtaLink>
      </div>
    </section>
  )
}
