import { Headphones, NotebookPen, Video } from 'lucide-react'
import { FULL_PROCESS_PRICE } from '@/lib/site'
import { cn } from '@/lib/utils'

const items = [
  {
    icon: Video,
    title: 'Una clase de más de 2 horas',
    text: 'Una clase grabada con explicaciones, ejemplos y prácticas realizadas en vivo para comenzar a recorrer el proceso.',
    card: 'bg-card -rotate-[0.8deg]',
    blob: 'bg-butter',
  },
  {
    icon: NotebookPen,
    title: 'Una bitácora de acompañamiento',
    text: 'Un espacio para registrar lo que vas descubriendo, reflexionar y profundizar tu propia experiencia mientras avanzás.',
    card: 'bg-sand rotate-[0.6deg]',
    blob: 'bg-primary/20',
  },
  {
    icon: Headphones,
    title: 'Una meditación grabada',
    text: 'Una práctica para acompañar el proceso y llevar la experiencia más allá de la clase.',
    card: 'bg-butter/45 -rotate-[0.4deg]',
    blob: 'bg-terracotta/25',
  },
]

export function FirstStage() {
  return (
    <section aria-labelledby="encontraras-title" className="px-4 pb-16 pt-8 md:pb-24">
      <div className="mx-auto max-w-5xl">
        <h2
          id="encontraras-title"
          className="px-1 text-center font-serif font-soft text-2xl italic text-primary md:text-3xl"
        >
          ¿Qué vas a encontrar?
        </h2>

        <ul className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <li
                key={item.title}
                className={cn(
                  'flex gap-5 rounded-[1.75rem] p-6 ring-1 ring-foreground/5 transition-transform duration-500 hover:rotate-0 md:flex-col md:p-7',
                  item.card,
                )}
              >
                <span className="relative flex size-12 shrink-0 items-center justify-center">
                  <span aria-hidden="true" className={cn('blob absolute inset-0', item.blob)} />
                  <Icon aria-hidden="true" className="relative size-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-serif font-soft text-xl leading-snug text-balance md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground text-pretty">
                    {item.text}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>

        <p className="mx-auto mt-10 max-w-md text-center leading-relaxed text-muted-foreground text-pretty md:text-lg">
          Todo el contenido es gratuito y podés recorrerlo a tu ritmo.
        </p>

        <div className="mx-auto mt-10 max-w-lg rounded-[1.75rem] border border-dashed border-foreground/20 px-6 py-7 text-center md:px-10">
          <p className="leading-[1.8] text-pretty md:text-lg">
            La primera etapa es gratuita. Podés recorrerla, experimentar el proceso y ver si
            Coherencia Interior resuena con vos.
          </p>
          <span aria-hidden="true" className="mx-auto my-4 block h-px w-10 bg-[#c9a85c]/60" />
          <p className="leading-[1.8] text-muted-foreground text-pretty md:text-lg">
            Si después querés continuar, el proceso completo tiene un valor de{' '}
            <span className="whitespace-nowrap font-medium text-foreground">
              {FULL_PROCESS_PRICE}
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
