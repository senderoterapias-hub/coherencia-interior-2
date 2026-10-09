import { FreeStart } from '@/components/free-start'
import { Hero } from '@/components/hero'
import { Identification } from '@/components/identification'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { StagesAccordion } from '@/components/stages-accordion'
import { Handwritten, Sparkle } from '@/components/doodles'
import { CtaLink } from '@/components/cta-link'
import { FIRST_STAGE_WHATSAPP_URL } from '@/lib/site'

export default function Page() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />
        <Identification />

        <section
          id="reconocimiento"
          aria-labelledby="sabe-title"
          className="px-5 py-20 md:py-28"
        >
          <div className="mx-auto max-w-2xl text-center">
            <Handwritten>algo en vos ya lo sabe</Handwritten>

            <h2
              id="sabe-title"
              className="mt-3 font-serif font-soft text-[2.1rem] leading-[1.1] text-balance md:text-5xl"
            >
              Tal vez hace tiempo venís pidiendo señales.
            </h2>

            <div className="mx-auto mt-8 max-w-xl space-y-5 leading-[1.8] text-muted-foreground text-pretty md:text-lg">
              <p>Tal vez esperás encontrar algo que te haga resonar.</p>

              <p>
                Algo que te confirme que eso que empezaste a sentir no es
                solamente una idea loca.
              </p>

              <p>Y por momentos lo sentís.</p>

              <p>Pero todavía no sabés cómo acceder a ello.</p>
            </div>

            <Sparkle className="mx-auto mt-8 size-6" />

            <div className="mt-7">
              <p className="font-serif text-2xl leading-snug md:text-3xl">
                Hay mucho disponible para vos.
              </p>

              <p className="mt-2 font-serif text-xl italic text-primary md:text-2xl">
                Aunque todavía no lográs verlo con claridad.
              </p>
            </div>

            <CtaLink
              href="/primera-etapa"
              className="mt-9 w-full sm:w-auto"
            >
              Quiero descubrir de forma gratuita
            </CtaLink>

            <p className="mt-4 text-sm text-muted-foreground">
              Primera experiencia · a tu ritmo · desde tu celular
            </p>
          </div>
        </section>

        <section
          aria-labelledby="donde-title"
          className="bg-card px-5 py-20 md:py-28"
        >
          <div className="mx-auto max-w-2xl text-center">
            <Handwritten className="rotate-1">
              quizás estás donde necesitás estar
            </Handwritten>

            <h2
              id="donde-title"
              className="mt-3 font-serif font-soft text-[2.1rem] leading-[1.1] text-balance md:text-5xl"
            >
              No necesitás comprenderlo todo para comenzar a vivirlo.
            </h2>

            <div className="mx-auto mt-8 max-w-xl space-y-5 leading-[1.8] text-muted-foreground text-pretty md:text-lg">
              <p>
                Lo que estás atravesando puede ser parte de un proceso mucho
                más grande.
              </p>

              <p>Un proceso natural.</p>

              <p>
                Un proceso que no necesitás comprender completamente para
                comenzar a vivirlo.
              </p>
            </div>

            <div className="mx-auto mt-9 max-w-md space-y-2 font-serif text-xl leading-snug md:text-2xl">
              <p>No estás llegando tarde.</p>
              <p>No estás haciendo algo mal.</p>
              <p>No necesitás tener todas las respuestas.</p>
            </div>

            <p className="mx-auto mt-9 max-w-xl font-serif text-2xl leading-snug md:text-3xl">
              Hay algo en vos que comenzó a despertar.

              <span className="mt-2 block italic text-primary">
                Y quizás este momento sea justamente parte de ese llamado.
              </span>
            </p>
          </div>
        </section>

        <FreeStart />

        <section
          id="camino"
          aria-labelledby="camino-title"
          className="px-5 py-20 md:py-28"
        >
          <div className="mx-auto max-w-3xl text-center">
            <Handwritten>el camino</Handwritten>

            <h2
              id="camino-title"
              className="mt-3 font-serif font-soft text-[2.1rem] leading-[1.1] text-balance md:text-5xl"
            >
              Un camino para descubrir lo que está despertando en vos.
            </h2>

            <StagesAccordion />
          </div>
        </section>

        <section
          aria-labelledby="acompanamiento-title"
          className="bg-primary px-5 py-20 text-primary-foreground md:py-28"
        >
          <div className="mx-auto max-w-2xl text-center">
            <Handwritten className="text-primary-foreground">
              no tenés que atravesarlo solo/a
            </Handwritten>

            <h2
              id="acompanamiento-title"
              className="mt-3 font-serif font-soft text-[2.1rem] leading-[1.1] text-balance md:text-5xl"
            >
              Yo también recorrí este proceso.
            </h2>

            <div className="mx-auto mt-7 max-w-xl space-y-5 leading-[1.8] text-primary-foreground/80 text-pretty md:text-lg">
              <p>
                Y además de haberlo vivido, acompañé a muchas personas a
                atravesarlo.
              </p>

              <p>
                Conozco las preguntas, las dudas y los recovecos del sendero.
              </p>

              <p>
                Por eso no tenés que saber exactamente qué te pasa para
                comenzar.
              </p>
            </div>

            <p className="mx-auto mt-8 max-w-xl font-serif text-xl leading-snug md:text-2xl">
              Incluso en esta primera experiencia gratuita, podés escribirme y
              contarme cómo te sentís.
            </p>

            <CtaLink
              href={FIRST_STAGE_WHATSAPP_URL}
              variant="butter"
              className="mt-8 w-full sm:w-auto"
            >
              Contarme cómo me siento
            </CtaLink>

            <p className="mt-5 text-sm text-primary-foreground/60">
              Y si después sentís que querés avanzar, también puedo acompañarte
              más de cerca.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="despues-title"
          className="px-5 py-20 md:py-28"
        >
          <div className="mx-auto max-w-2xl text-center">
            <Handwritten>¿y después de ese primer paso?</Handwritten>

            <h2
              id="despues-title"
              className="mt-3 font-serif font-soft text-[2.1rem] leading-[1.1] text-balance md:text-5xl"
            >
              Primero vivilo.
            </h2>

            <div className="mx-auto mt-7 max-w-xl space-y-5 leading-[1.8] text-muted-foreground text-pretty md:text-lg">
              <p>Mirás qué sucede en vos.</p>

              <p>Sentís si algo de esto resuena.</p>

              <p>
                Y si en algún momento sentís que querés profundizar, podemos
                recorrer el camino juntos.
              </p>
            </div>

            <p className="mt-8 font-serif text-xl italic text-foreground md:text-2xl">
              Sin apuro. A tu ritmo.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="final-title"
          className="px-5 pb-24 pt-4 md:pb-32"
        >
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <Sparkle className="size-6 text-primary" />

            <h2
              id="final-title"
              className="mt-6 font-serif font-soft text-[2.4rem] leading-[1.05] text-balance md:text-6xl"
            >
              Quizás esto era la señal que estabas esperando.
            </h2>

            <CtaLink
              href="/primera-etapa"
              className="mt-9 w-full sm:w-auto"
              pulse
            >
              Vivir la primera experiencia
            </CtaLink>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              No necesitás saber hacia dónde te lleva. Solo dar el primer paso.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
