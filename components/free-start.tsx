import { CtaLink } from '@/components/cta-link'
import { HandCircle, Handwritten, Sparkle } from '@/components/doodles'
import { Headphones, NotebookPen, Video } from 'lucide-react'

const items = [
  {
    number: '01',
    icon: Video,
    title: 'Clase',
    text: 'Una experiencia para comenzar a mirar lo que estás atravesando desde otra perspectiva.',
  },
  {
    number: '02',
    icon: NotebookPen,
    title: 'Bitácora',
    text: 'Un espacio para registrar lo que empieza a aparecer en vos.',
  },
  {
    number: '03',
    icon: Headphones,
    title: 'Meditación',
    text: 'Una práctica para acompañarte a conectar con tu mundo interior.',
  },
]

export function FreeStart() {
  return (
    <section
      id="primera-etapa"
      aria-labelledby="comenzar-title"
      className="relative isolate scroll-mt-6 overflow-hidden px-4 pb-20 pt-16 md:pb-28 md:pt-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-20 z-0 h-72 w-52 rotate-[-12deg] opacity-55 sm:-left-28 sm:top-16 sm:h-[34rem] sm:w-72 sm:opacity-80 md:-left-20 md:top-10 md:h-[40rem] md:w-80"
      >
        <div className="absolute inset-0 rounded-[48%_52%_62%_38%/38%_48%_52%_62%] bg-[#E7C9A8]/55 blur-[1px]" />
        <div className="absolute left-[-15%] top-[18%] h-[58%] w-[85%] rounded-[55%_45%_60%_40%/42%_55%_45%_58%] bg-[#D89A78]/25 blur-[2px]" />
        <div className="absolute left-[8%] top-[7%] h-[82%] w-[2px] rotate-[18deg] rounded-full bg-[#B87958]/25" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-28 z-0 h-72 w-52 rotate-[13deg] opacity-50 sm:-right-28 sm:top-24 sm:h-[32rem] sm:w-72 sm:opacity-75 md:-right-20 md:top-16 md:h-[38rem] md:w-80"
      >
        <div className="absolute inset-0 rounded-[52%_48%_38%_62%/60%_42%_58%_40%] bg-[#C9CFAD]/55 blur-[1px]" />
        <div className="absolute right-[-15%] top-[24%] h-[55%] w-[88%] rounded-[45%_55%_42%_58%/58%_42%_58%_42%] bg-[#AEB88B]/28 blur-[2px]" />
        <div className="absolute right-[12%] top-[5%] h-[84%] w-[2px] rotate-[-17deg] rounded-full bg-[#697445]/25" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <Handwritten className="rotate-1">si algo de esto resonó con vos</Handwritten>

          <h2
            id="comenzar-title"
            className="mt-3 font-serif font-soft text-[2.1rem] leading-[1.1] text-balance md:text-5xl"
          >
            Podés comenzar{' '}
            <span className="relative inline-block px-1 italic text-primary">
              por acá
              <HandCircle className="absolute -inset-x-3 -inset-y-2 h-[calc(100%+1rem)] w-[calc(100%+1.5rem)]" />
            </span>
          </h2>

          <p className="mt-8 max-w-xl font-serif font-soft text-xl leading-snug text-balance md:text-2xl">
            Todo gran cambio comienza con un pequeño paso.
          </p>

          <p className="mt-5 max-w-xl leading-[1.8] text-muted-foreground text-pretty md:text-lg">
            Preparé una primera experiencia para que puedas <strong className="font-medium text-foreground">entrar en contacto con este proceso</strong>, sin necesidad de saber exactamente qué estás buscando.
          </p>

          <Sparkle className="mt-7 size-6" />

          <div className="mt-9 grid w-full gap-4 text-left md:grid-cols-3">
            {items.map((item) => {
              const Icon = item.icon
              return (
                <article
                  key={item.number}
                  className="rounded-[1.5rem] bg-card/95 p-6 shadow-[0_12px_35px_rgba(59,42,31,0.07)] ring-1 ring-foreground/5 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium tracking-[0.12em] text-primary">{item.number}</span>
                    <Icon className="size-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 font-serif font-soft text-2xl">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{item.text}</p>
                </article>
              )
            })}
          </div>

          <CtaLink href="/primera-etapa" className="mt-9 w-full sm:w-auto" pulse>
            VIVIR LA PRIMERA EXPERIENCIA
          </CtaLink>

          <p className="mt-5 text-sm text-muted-foreground">
            Gratuita · a tu ritmo · desde tu celular
          </p>
        </div>
      </div>
    </section>
  )
}
