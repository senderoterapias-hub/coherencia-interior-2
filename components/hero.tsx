import { CtaLink } from '@/components/cta-link'
import { CurlyArrow, Handwritten, Sparkle } from '@/components/doodles'

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative overflow-hidden px-5 pb-20 pt-8 sm:pt-14 md:pb-28"
    >
      <div
        aria-hidden="true"
        className="blob pointer-events-none absolute -right-20 top-0 size-60 bg-butter/70 sm:size-80"
      />
      <div
        aria-hidden="true"
        className="blob-alt pointer-events-none absolute -left-24 bottom-6 size-52 bg-primary/15 sm:size-72"
      />
      <Sparkle className="absolute left-[12%] top-[18%] size-5 text-terracotta/70" />
      <Sparkle className="absolute bottom-[22%] right-[10%] size-4 text-primary/60" />

      <div className="relative mx-auto flex max-w-xl flex-col items-center text-center md:max-w-3xl">
        <div className="flex flex-col items-center">
          <Handwritten className="-rotate-2">quizás esto sea un llamado</Handwritten>
          <CurlyArrow className="mt-1 size-10 rotate-6" />
        </div>

        <h1
          id="hero-title"
          className="mt-4 font-serif font-soft text-[3.15rem] font-normal leading-[0.98] tracking-tight text-balance sm:text-7xl md:text-8xl"
        >
          Quizás esto que estás viviendo{' '}
          <span className="italic text-primary">no es casualidad.</span>
        </h1>

        <p className="mt-10 max-w-xl font-serif text-xl leading-snug text-pretty md:text-2xl">
          <span className="italic">Algo dentro tuyo está despertando.</span>
        </p>

        <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground text-pretty md:text-lg">
          Y todavía no sabés exactamente qué es, hacia dónde te lleva o qué hacer con eso que está despertando en vos.
        </p>

        <p className="mt-7 max-w-xl font-serif text-xl leading-snug text-pretty md:text-2xl">
          <strong className="font-medium">Pero no necesitás tener las respuestas todavía.</strong>
        </p>

        <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground text-pretty md:text-lg">
          Eso es lo bonito de atravesar un despertar interior.
          <br />
          <span className="font-serif text-foreground">Estás siendo guiado. Confiá en tu corazón.</span>
        </p>

        <CtaLink href="/primera-etapa" className="mt-10 w-full sm:w-auto" pulse>
          Comenzar la experiencia
        </CtaLink>

        <p className="mt-5 text-sm text-muted-foreground">
          Gratis · a tu ritmo · desde tu celular
        </p>
      </div>
    </section>
  )
}
