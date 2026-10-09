import { Handwritten, WavyDash } from '@/components/doodles'

function DistanceVisual() {
  return (
    <figure className="relative">
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-col items-center gap-3">
          <span aria-hidden="true" className="blob size-20 bg-primary/85 sm:size-24" />
          <span className="text-sm font-medium">lo que comprendes</span>
        </div>
        <div className="relative -mt-8 flex flex-1 flex-col items-center">
          <Handwritten className="mb-1 text-base">esta distancia</Handwritten>
          <WavyDash className="h-5 w-full" />
        </div>
        <div className="flex flex-col items-center gap-3">
          <span aria-hidden="true" className="blob-alt size-20 bg-terracotta/85 sm:size-24" />
          <span className="text-sm font-medium">cómo vives</span>
        </div>
      </div>
      <figcaption className="sr-only">
        Dos formas separadas: lo que comprendes y cómo vives, con una distancia entre ellas.
      </figcaption>
    </figure>
  )
}

export function Identification() {
  return (
    <section aria-labelledby="identificacion-title" className="px-4 py-12 md:py-20">
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-card px-6 py-12 shadow-[0_1px_0_0_rgba(59,42,31,0.06)] ring-1 ring-foreground/5 sm:px-10 md:px-16 md:py-16">
        <Handwritten>¿te suena?</Handwritten>
        <h2
          id="identificacion-title"
          className="mt-3 font-serif font-soft text-[2rem] leading-[1.1] text-balance md:text-5xl"
        >
          Has atravesado un despertar interior, pero ¿aún vivís en una lucha contigo mism@?
        </h2>

        <div className="mt-10 md:mt-12">
          <DistanceVisual />
        </div>

        <div className="mt-10 space-y-4 leading-relaxed text-muted-foreground md:text-lg">
          <p>
            Comenzaste un camino interior. Leíste, practicaste, escuchaste a otros y reuniste
            herramientas valiosas.
          </p>
          <p>
            Pero en lo cotidiano —tus vínculos, tu trabajo y decisiones— aún hay una distancia
            entre lo que sabés que es verdadero y cómo pensás y cómo te sentís.
          </p>
        </div>

        <p className="mt-8 font-serif text-2xl leading-snug text-foreground md:text-[1.7rem]">
          <span className="highlight">No te falta conocimiento.</span> Te falta que lo que
          eres y lo que vives se encuentren.
        </p>
      </div>
    </section>
  )
}
