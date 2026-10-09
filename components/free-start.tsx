import { CtaLink } from '@/components/cta-link'
import { HandCircle, Handwritten, Sparkle } from '@/components/doodles'
import { ArrowRight, Headphones, NotebookPen, Video } from 'lucide-react'

const items = [
  {
    number: '01',
    icon: Video,
    title: 'Clase',
    text: 'Más de 2 horas de clase experiencial con ejemplos y prácticas.',
  },
  {
    number: '02',
    icon: NotebookPen,
    title: 'Bitácora',
    text: 'Una brújula de apoyo para esta etapa.',
  },
  {
    number: '03',
    icon: Headphones,
    title: 'Meditación',
    text: 'Una práctica guiada para acompañar la experiencia.',
  },
]

export function FreeStart() {
  return (
    <section
      id="primera-etapa"
      aria-labelledby="comenzar-title"
      className="relative isolate scroll-mt-6 overflow-hidden px-4 pb-20 pt-16 md:pb-28 md:pt-24"
    >
      {/* FORMA ORGÁNICA IZQUIERDA */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-20 z-0 h-72 w-52 rotate-[-12deg] opacity-55 sm:-left-28 sm:top-16 sm:h-[34rem] sm:w-72 sm:opacity-80 md:-left-20 md:top-10 md:h-[40rem] md:w-80"
      >
        <div className="absolute inset-0 rounded-[48%_52%_62%_38%/38%_48%_52%_62%] bg-[#E7C9A8]/55 blur-[1px]" />

        <div className="absolute left-[-15%] top-[18%] h-[58%] w-[85%] rounded-[55%_45%_60%_40%/42%_55%_45%_58%] bg-[#D89A78]/25 blur-[2px]" />

        <div className="absolute left-[8%] top-[7%] h-[82%] w-[2px] rotate-[18deg] rounded-full bg-[#B87958]/25" />

        <div
          className="absolute inset-0 opacity-30 mix-blend-multiply"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(104,76,53,0.25) 0.7px, transparent 0.8px)',
            backgroundSize: '7px 7px',
          }}
        />
      </div>

      {/* FORMA ORGÁNICA DERECHA */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-28 z-0 h-72 w-52 rotate-[13deg] opacity-50 sm:-right-28 sm:top-24 sm:h-[32rem] sm:w-72 sm:opacity-75 md:-right-20 md:top-16 md:h-[38rem] md:w-80"
      >
        <div className="absolute inset-0 rounded-[52%_48%_38%_62%/60%_42%_58%_40%] bg-[#C9CFAD]/55 blur-[1px]" />

        <div className="absolute right-[-15%] top-[24%] h-[55%] w-[88%] rounded-[45%_55%_42%_58%/58%_42%_58%_42%] bg-[#AEB88B]/28 blur-[2px]" />

        <div className="absolute right-[12%] top-[5%] h-[84%] w-[2px] rotate-[-17deg] rounded-full bg-[#697445]/25" />

        <div
          className="absolute inset-0 opacity-30 mix-blend-multiply"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(104,76,53,0.22) 0.7px, transparent 0.8px)',
            backgroundSize: '8px 8px',
          }}
        />
      </div>

      {/* HALO CENTRAL MUY SUTIL */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-36 z-0 h-80 w-[34rem] -translate-x-1/2 rounded-full bg-[#EFD38C]/18 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <Handwritten className="rotate-1">
            la buena noticia
          </Handwritten>

          <h2
            id="comenzar-title"
            className="mt-3 font-serif font-soft text-[2.1rem] leading-[1.1] text-balance md:text-5xl"
          >
            Podés comenzar{' '}
            <span className="relative inline-block px-1 italic text-primary">
              gratuitamente
              <HandCircle className="absolute -inset-x-3 -inset-y-2 h-[calc(100%+1rem)] w-[calc(100%+1.5rem)]" />
            </span>
          </h2>

          <p className="mt-8 max-w-xl font-serif font-soft text-xl leading-snug text-balance md:text-2xl">
            Y descubrir si el proceso completo es para vos.
          </p>

          <p className="mt-5 max-w-md leading-[1.8] text-muted-foreground text-pretty md:text-lg">
            Una primera experiencia para comenzar a mirar, comprender y
            experimentar lo que propone Coherencia Interior.
          </p>

          <Sparkle className="mt-7 size-6" />

          <div className="mt-7 flex flex-col items-center">
            <CtaLink
              href="/primera-etapa"
              pulse
              className="w-full sm:w-auto"
            >
              VIVIR EL PROCESO GRATIS
            </CtaLink>

            <a
              href="#proceso-completo"
              className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Conocer cómo continúa el proceso
              <ArrowRight
                className="size-3.5"
                strokeWidth={1.5}
              />
            </a>
          </div>
        </div>

        <div id="proceso" className="mt-14">
          <h3 className="text-center font-serif font-soft text-2xl italic text-primary md:text-3xl">
            ¿Qué vas a encontrar en esta primera etapa?
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-center leading-relaxed text-muted-foreground text-pretty md:text-lg">
            Una experiencia gratuita para comenzar a mirar, experimentar e
            integrar.
          </p>

          <ul className="mx-auto mt-8 grid max-w-4xl gap-3 md:mt-10 md:grid-cols-3 md:gap-4">
            {items.map((item) => {
              const Icon = item.icon

              return (
                <li
                  key={item.title}
                  className="rounded-[1.25rem] bg-card px-5 py-4 ring-1 ring-foreground/5 md:px-6 md:py-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="relative flex size-8 shrink-0 items-center justify-center">
                      <span
                        aria-hidden="true"
                        className="blob absolute inset-0 bg-butter"
                      />

                      <Icon
                        aria-hidden="true"
                        className="relative size-3.5"
                        strokeWidth={1.75}
                      />
                    </span>

                    <span className="text-xs font-medium tracking-[0.12em] text-primary">
                      {item.number}
                    </span>

                    <h4 className="font-serif font-soft text-xl leading-none text-balance md:text-2xl">
                      {item.title}
                    </h4>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty md:text-[0.95rem]">
                    {item.text}
                  </p>
                </li>
              )
            })}
          </ul>

          <div className="mx-auto mt-14 max-w-2xl text-center md:mt-20">
            <h3 className="font-serif font-soft text-2xl leading-snug text-balance md:text-3xl">
              Una primera experiencia.
            </h3>

            <p className="mx-auto mt-5 max-w-xl leading-[1.8] text-muted-foreground text-pretty md:text-lg">
              La idea es simple: recorré esta etapa, experimentá lo que
              propone y observá qué empieza a moverse en vos.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl text-center md:mt-24">
            <h3 className="font-serif font-soft text-2xl italic leading-snug text-primary md:text-3xl">
              ¿Y si querés continuar?
            </h3>

            <p className="mx-auto mt-5 max-w-xl leading-[1.8] text-muted-foreground text-pretty md:text-lg">
              Coherencia Interior continúa en un proceso de 4 etapas, pensado
              para profundizar lo que comenzaste a experimentar acá y llevarlo
              progresivamente a tu vida cotidiana.
            </p>

            <a
              href="#proceso-completo"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-foreground"
            >
              Conocé cómo continúa
              <ArrowRight
                className="size-3.5"
                strokeWidth={1.75}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
