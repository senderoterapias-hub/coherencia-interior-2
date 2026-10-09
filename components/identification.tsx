import { Handwritten } from '@/components/doodles'

const cards = [
  {
    title: 'Cambiaste en tu interior',
    text: 'Sentís que algo dentro tuyo está cambiando, aunque todavía no sabés qué.',
  },
  {
    title: 'A veces conectás, a veces no',
    text: 'Por momentos sentís claridad y conexión. Después volvés a sentirte lejos de vos mism@.',
  },
  {
    title: 'Temés perder',
    text: 'Sentís que si seguís tu búsqueda interna podés perder algo...',
  },
  {
    title: 'Ya no encajás en ciertos lugares',
    text: 'Incluso rodeado/a de personas que querés, a veces sentís que ya no resonás, tu energía cambió.',
  },
  {
    title: 'Falta algo',
    text: 'Mirás hacia adentro y aparece una sensación difícil de explicar: como si algo faltara.',
  },
]

export function Identification() {
  return (
    <section
      id="reconocimiento"
      aria-labelledby="identificacion-title"
      className="relative overflow-hidden bg-[#d8cbb9] px-4 py-16 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(70,52,38,0.22) 0.7px, transparent 0.7px)',
          backgroundSize: '7px 7px',
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-20 size-72 rounded-full bg-[#b79f82]/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-20 size-80 rounded-full bg-[#efe5d5]/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="mx-auto max-w-3xl text-center">
          <Handwritten>¿te está pasando algo de esto?</Handwritten>

          <h2
            id="identificacion-title"
            className="mt-3 font-serif font-soft text-[2rem] leading-[1.08] text-balance text-[#3f3025] md:text-5xl"
          >
            Quizás estás atravesando un cambio que todavía no aprendiste a reconocer.
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2 md:mt-12">
          {cards.map((card) => (
            <article
              key={card.title}
              className="relative overflow-hidden rounded-[1.5rem] border border-[#8e765d]/50 bg-[#eee5d7] px-5 py-6 shadow-[0_8px_24px_rgba(72,52,36,0.08)] sm:px-6 sm:py-7"
            >
              <div
                aria-hidden="true"
                className="mb-5 h-px w-12 bg-[#9b7650]/70"
              />

              <h3 className="font-serif text-xl leading-tight text-[#3f3025] md:text-2xl">
                {card.title}
              </h3>

              <p className="mt-3 text-base leading-relaxed text-[#665548] md:text-lg">
                {card.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-[1.5rem] border border-[#8e765d]/35 bg-[#eee5d7]/75 px-6 py-8 text-center shadow-[0_8px_24px_rgba(72,52,36,0.06)] md:mt-12 md:px-10 md:py-9">
          <p className="font-serif text-2xl leading-snug text-[#3f3025] md:text-[1.7rem]">
            <span className="block">Quizás no estás perdido/a.</span>

            <span className="mt-2 block font-normal not-italic text-[#6f583f]">
              Quizás estás en el momento y lugar perfecto, siendo guiado hacia un cambio mayor que todavía no aprendiste a reconocer.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
