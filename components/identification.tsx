import { Handwritten } from '@/components/doodles'

export function Identification() {
  return (
    <section
      id="reconocimiento"
      aria-labelledby="identificacion-title"
      className="px-4 py-12 md:py-20"
    >
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-card px-6 py-12 shadow-[0_1px_0_0_rgba(59,42,31,0.06)] ring-1 ring-foreground/5 sm:px-10 md:px-16 md:py-16">
        <Handwritten>¿te está pasando algo de esto?</Handwritten>
        <h2
          id="identificacion-title"
          className="mt-3 font-serif font-soft text-[2rem] leading-[1.1] text-balance md:text-5xl"
        >
          Quizás estás atravesando un cambio que todavía no aprendiste a reconocer.
        </h2>

        <ul className="mt-10 space-y-4 leading-relaxed text-muted-foreground md:text-lg">
          <li>Sentís que algo dentro tuyo está cambiando.</li>
          <li>Cosas que antes te hacían sentido —lugares, formas de relacionarte, formas de ser— ya no te llenan de la misma manera.</li>
          <li>Sentís que cambiaste, pero todavía no entendés del todo hacia dónde vas.</li>
          <li>Por momentos sentís claridad y conexión, pero después atravesás períodos en los que volvés a sentirte desconectado/a.</li>
          <li>Oscilás entre cumplir metas y una búsqueda más material, y otra búsqueda más profunda que todavía se siente difusa.</li>
          <li>Sentís que estás despertando y no sabés cómo llevar eso a tu vida.</li>
          <li>Incluso estando rodeado/a de personas que querés, a veces sentís que ya no encajás del mismo modo.</li>
          <li>Mirás hacia adentro y aparece una sensación difícil de explicar: <strong className="font-medium text-foreground">como si algo faltara.</strong></li>
        </ul>

        <div className="mt-10 rounded-[1.5rem] bg-background/70 px-6 py-7 ring-1 ring-foreground/5 md:px-8">
          <p className="font-serif text-2xl leading-snug text-foreground md:text-[1.7rem]">
            <span className="block">Quizás no estás perdido/a.</span>
            <span className="mt-2 block italic text-primary">
              Quizás estás en el momento y lugar perfecto, siendo guiado hacia un cambio mayor que todavía no aprendiste a reconocer.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
