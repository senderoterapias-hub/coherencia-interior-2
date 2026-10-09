import { CtaLink } from '@/components/cta-link'
import { Handwritten } from '@/components/doodles'
import { ArrowDown, Headphones, NotebookPen, Play, Video } from 'lucide-react'
import {
  DEEP_EXPERIENCE_WHATSAPP_URL,
  HOTMART_URL,
  FULL_PROCESS_PRICE,
} from '@/lib/site'

export default function PrimeraEtapaPage() {
  return (
    <main className="min-h-screen">
      {/* INTRO */}
      <section className="px-5 pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <Handwritten className="rotate-1">
            Coherencia Interior
          </Handwritten>

          <h1 className="mt-3 font-serif font-soft text-[2.5rem] leading-[1.05] text-balance md:text-6xl">
            Primera etapa
            <span className="block italic text-primary">
              gratuita
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl font-serif font-soft text-xl leading-snug text-balance md:text-2xl">
            Una primera experiencia para comenzar a mirar, experimentar e integrar.
          </p>

          <p className="mx-auto mt-5 max-w-lg leading-[1.8] text-muted-foreground text-pretty md:text-lg">
            Recorré esta etapa a tu ritmo. No necesitás hacer todo de una vez.
            Permitite vivir cada parte de la experiencia y observar qué sucede
            dentro tuyo.
          </p>

          <ArrowDown
            aria-hidden="true"
            className="mx-auto mt-10 size-5 text-primary"
            strokeWidth={1.5}
          />
        </div>
      </section>

      {/* AULA — ATMÓSFERA PROPIA */}
      <div className="relative overflow-hidden">
        {/* Entrada suave al Aula */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-20 h-48 bg-gradient-to-b from-background via-[#E8D9C2]/85 to-transparent"
        />

        {/* Fondo base */}
        <div className="absolute inset-0 bg-[#D8C4A8]" />

        {/* Degradados orgánicos */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(
                ellipse 75% 45% at 12% 18%,
                rgba(247, 238, 221, 0.72) 0%,
                rgba(247, 238, 221, 0.30) 34%,
                transparent 68%
              ),
              radial-gradient(
                ellipse 65% 50% at 88% 28%,
                rgba(122, 91, 63, 0.18) 0%,
                rgba(122, 91, 63, 0.08) 38%,
                transparent 72%
              ),
              radial-gradient(
                ellipse 70% 55% at 18% 78%,
                rgba(188, 150, 108, 0.34) 0%,
                rgba(188, 150, 108, 0.12) 40%,
                transparent 72%
              ),
              radial-gradient(
                ellipse 75% 55% at 88% 86%,
                rgba(95, 72, 52, 0.20) 0%,
                rgba(95, 72, 52, 0.08) 40%,
                transparent 75%
              )
            `,
          }}
        />

        {/* Textura tipo papel / grano */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-multiply"
          style={{
            backgroundImage: `
              radial-gradient(
                circle at 20% 30%,
                rgba(59, 42, 31, 0.22) 0,
                transparent 1.2px
              ),
              radial-gradient(
                circle at 70% 60%,
                rgba(255, 250, 240, 0.35) 0,
                transparent 1.4px
              )
            `,
            backgroundSize: '7px 7px, 11px 11px',
          }}
        />

        {/* Velo cálido para integrar las capas */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[#E7D7BF]/20"
        />

        <div className="relative z-10">
          {/* 01 — MIRAR */}
          <section
            aria-labelledby="mirar-title"
            className="px-4 pb-16 pt-28 md:pb-24 md:pt-32"
          >
            <div className="mx-auto max-w-5xl">
              <div className="mb-10 text-center">
                <span className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.18em] text-primary uppercase">
                  <Video className="size-4" strokeWidth={1.5} />
                  01 · Mirar
                </span>

                <h2
                  id="mirar-title"
                  className="mt-3 font-serif font-soft text-[2.1rem] leading-[1.1] text-balance md:text-5xl"
                >
                  La clase
                </h2>

                <p className="mx-auto mt-5 max-w-xl leading-[1.8] text-muted-foreground text-pretty md:text-lg">
                  Comenzá por la clase. Es el punto de partida para comprender
                  dónde estás y empezar a observar tu propia experiencia.
                </p>
              </div>

              <div className="overflow-hidden rounded-[1.75rem] bg-card/95 p-2 shadow-[0_18px_50px_rgba(59,42,31,0.10)] ring-1 ring-foreground/10 backdrop-blur-sm md:p-3">
                <div className="aspect-video overflow-hidden rounded-[1.25rem] bg-black">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/2iMcHiU-DqA"
                    title="Clase 1 de Coherencia Interior: La Consciencia"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 02 — EXPERIMENTAR */}
          <section
            aria-labelledby="experimentar-title"
            className="relative px-4 py-16 md:py-24"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-foreground/5"
            />

            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.18em] text-primary uppercase">
                <Headphones className="size-4" strokeWidth={1.5} />
                02 · Experimentar
              </span>

              <h2
                id="experimentar-title"
                className="mt-3 font-serif font-soft text-[2.1rem] leading-[1.1] text-balance md:text-5xl"
              >
                La meditación
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-[1.8] text-muted-foreground text-pretty md:text-lg">
                Después de la clase, podés continuar con esta práctica.
                Buscá un momento tranquilo y permitite experimentar sin apuro.
              </p>

              <div className="mx-auto mt-10 max-w-xl rounded-[1.75rem] bg-card/95 p-7 shadow-[0_18px_50px_rgba(59,42,31,0.08)] ring-1 ring-foreground/10 backdrop-blur-sm md:p-10">
                <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-butter">
                  <Play
                    aria-hidden="true"
                    className="ml-0.5 size-5"
                    fill="currentColor"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="mt-5 font-serif font-soft text-2xl md:text-3xl">
                  Meditación guiada
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Una práctica para llevar la experiencia de la clase a tu propio
                  espacio interior.
                </p>

                <audio
                  className="mt-7 w-full"
                  controls
                  preload="metadata"
                >
                  <source
                    src="/Meditacio%CC%81n%20Guiada.m4a"
                    type="audio/mp4"
                  />
                  Tu navegador no puede reproducir este audio.
                </audio>

                <p className="mt-4 text-xs text-muted-foreground">
                  Podés escucharla cuando quieras y volver a ella las veces que necesites.
                </p>
              </div>
            </div>
          </section>

          {/* 03 — INTEGRAR */}
          <section
            aria-labelledby="integrar-title"
            className="px-4 py-16 md:py-24"
          >
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.18em] text-primary uppercase">
                <NotebookPen className="size-4" strokeWidth={1.5} />
                03 · Integrar
              </span>

              <h2
                id="integrar-title"
                className="mt-3 font-serif font-soft text-[2.1rem] leading-[1.1] text-balance md:text-5xl"
              >
                La bitácora
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-[1.8] text-muted-foreground text-pretty md:text-lg">
                La bitácora es un espacio para registrar lo que vas descubriendo,
                poner en palabras tu experiencia y profundizar el proceso.
              </p>

              <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-[1.75rem] bg-card/95 shadow-[0_18px_50px_rgba(59,42,31,0.08)] ring-1 ring-foreground/10 backdrop-blur-sm">
                <div className="h-56 bg-background md:h-64">
                  <iframe
                    className="h-full w-full"
                    src="/Bitacora%20de%20acompan%CC%83amiento.pdf"
                    title="Bitácora de acompañamiento"
                  />
                </div>

                <div className="flex flex-col items-center gap-4 p-6 sm:flex-row sm:justify-center">
                  <a
                    href="/Bitacora%20de%20acompan%CC%83amiento.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-[0_3px_0_0_rgba(59,42,31,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#535e31] hover:shadow-[0_5px_0_0_rgba(59,42,31,0.18)]"
                  >
                    ABRIR BITÁCORA
                  </a>

                  <a
                    href="/Bitacora%20de%20acompan%CC%83amiento.pdf"
                    download
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-butter px-7 py-3 text-sm font-medium text-foreground shadow-[0_3px_0_0_rgba(59,42,31,0.14)] ring-1 ring-foreground/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f3dc9f] hover:shadow-[0_5px_0_0_rgba(59,42,31,0.14)]"
                  >
                    DESCARGAR BITÁCORA
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Salida gradual del Aula */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-48 bg-gradient-to-t from-background via-[#E8D9C2]/85 to-transparent"
        />
      </div>

      {/* CIERRE */}
      <section className="px-5 pb-20 pt-16 md:pb-32 md:pt-24">
        <div className="mx-auto max-w-2xl text-center">
          <Handwritten>cuando termines</Handwritten>

          <h2 className="mt-3 font-serif font-soft text-[2.1rem] leading-[1.1] text-balance md:text-5xl">
            Ahora dejá que la experiencia
            <span className="block italic text-primary">
              decante.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-lg leading-[1.8] text-muted-foreground text-pretty md:text-lg">
            No necesitás sacar conclusiones inmediatamente. Observá qué
            apareció, qué comprendiste y qué empezó a moverse en vos.
          </p>

          <div className="mx-auto mt-10 max-w-md rounded-[1.75rem] bg-primary px-6 py-9 text-primary-foreground md:px-10">
            <p className="font-serif font-soft text-xl leading-snug md:text-2xl">
              Si sentís que querés continuar profundizando este camino,
              podés conocer el proceso completo.
            </p>

            <CtaLink
              href={HOTMART_URL}
              variant="butter"
              className="mt-7 w-full sm:w-auto"
            >
              Continuar con Coherencia Interior
            </CtaLink>

            <p className="mt-4 text-sm text-primary-foreground/70">
              {FULL_PROCESS_PRICE} · proceso completo
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-md rounded-[1.75rem] bg-card p-7 ring-1 ring-foreground/5 md:p-8">
            <h3 className="font-serif font-soft text-2xl leading-snug md:text-3xl">
              ¿Querés vivirlo con mayor profundidad?
            </h3>

            <p className="mt-4 leading-[1.8] text-muted-foreground text-pretty md:text-base">
              Si querés vivir el proceso de Coherencia Interior con mayor
              profundidad, te recomiendo acompañarlo con sesiones 1 a 1 conmigo.
            </p>

            <a
              href={DEEP_EXPERIENCE_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-foreground/15 px-6 py-3 text-center text-sm font-medium transition-colors hover:bg-background"
            >
              Quiero saber más sobre la experiencia profunda
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
