import { CtaLink } from '@/components/cta-link'
import { CurlyArrow, Handwritten, Sparkle, Squiggle } from '@/components/doodles'

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
          <Handwritten className="-rotate-2">
            hola, qué bueno que llegaste
          </Handwritten>

          <CurlyArrow className="mt-1 size-10 rotate-6" />
        </div>

        <h1
          id="hero-title"
          className="mt-4 font-serif font-soft text-[3.25rem] font-normal leading-[0.95] tracking-tight text-balance sm:text-7xl md:text-8xl"
        >
          Coherencia{' '}
          <span className="relative inline-block italic text-primary">
            Interior
            <Squiggle className="absolute -bottom-3 left-0 h-3.5 w-full" />
          </span>
        </h1>

        <p className="mt-10 max-w-md font-serif text-xl leading-snug text-pretty md:max-w-xl md:text-2xl">
          Un proceso para disolver la distancia entre tu Despertar interior y tu vida cotidiana.
        </p>

        <p className="mt-6 max-w-md leading-relaxed text-muted-foreground text-pretty md:text-lg">
          Una gran transformación puede comenzar con herramientas simples.
          <br />
          <br />
          No necesitás cambiar todo de un día para otro. Se trata de comprender cómo funciona tu Ser único y descubrir nuevas formas de experimentar la vida que realmente tengan sentido.
        </p>

        {/* BOTÓN NUEVO — AULA */}
        <a
          href="/primera-etapa"
          className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-primary px-7 py-4 text-sm font-medium tracking-[0.08em] text-primary-foreground shadow-[0_10px_30px_rgba(95,107,58,0.22)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_14px_36px_rgba(95,107,58,0.32)] sm:w-auto"
        >
          COMENZAR LA PRIMERA ETAPA
        </a>

        <div className="mt-5 flex flex-col items-center">
          <p className="font-serif text-base italic text-muted-foreground">
            una experiencia gratuita
          </p>

          <CurlyArrow className="mt-1 size-8 rotate-[80deg] text-primary/70" />
        </div>

        <p className="mt-2 text-sm text-muted-foreground">
          Clase · Meditación · Bitácora
        </p>
      </div>
    </section>
  )
}
