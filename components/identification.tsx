import { Handwritten } from '@/components/doodles'

const cards = [
  {
    title: 'Cambiaste en tu interior',
    text: 'Sentís que algo dentro tuyo está cambiando, aunque todavía no sabés qué.',
  },
  {
    title: 'Hay cosas que ya no encajan',
    text: 'Lugares, vínculos y formas de vivir que antes te hacían sentido ya no te llenan de la misma manera.',
  },
  {
    title: 'A veces conectás, a veces no',
    text: 'Por momentos sentís claridad y conexión. Después volvés a sentirte lejos de vos mism@.',
  },
  {
    title: 'Dos búsquedas alejadas entre sí',
    text: 'Oscilás entre cumplir metas materiales y una búsqueda más profunda que todavía no sabés cómo nombrar.',
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
      className="relative overflow-hidden bg-[#e8e1d5] px-4 py-14 md:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(59,42,31,0.18) 0.7px, transparent 0.7px)',
          backgroundSize: '8px 8px',
        }}
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="mx-auto max-w-3xl text-center">
          <Handwritten>¿te está pasando algo de esto?</Handwritten>

          <h2
            id="identificacion-title"
            className="mt-3 font-serif font-soft text-[2rem] leading-[1.08] text-balance md:text-5xl"
          >
            Quizás estás atravesando un cambio que todavía no aprendiste a reconocer.
          </h2>
        </div>

        <div className="mx-auto mt-9 grid max-w-3xl gap-3 sm:grid-cols-2 md:mt-10">
          {cards.map((card, index) => (
            <article
              key={card.title}
              className="card-discovery rounded-[1.5rem] bg-[#f0ebe3] px-5 py-5 ring-1 ring-foreground/5 sm:px-6 sm:py-6"
              style={{
                animationDelay: `${index * 120}ms`,
              }}
            >
              <h3 className="font-serif text-xl leading-tight text-foreground md:text-2xl">
                {card.title}
              </h3>

              <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                {card.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-[1.5rem] bg-background/60 px-6 py-7 text-center ring-1 ring-foreground/5 md:mt-10 md:px-10 md:py-8">
          <p className="font-serif text-2xl leading-snug text-foreground md:text-[1.7rem]">
            <span className="block">Quizás no estás perdido/a.</span>

            <span className="mt-2 block italic text-primary">
              Quizás estás en el momento y lugar perfecto, siendo guiado hacia un cambio mayor que todavía no aprendiste a reconocer.
            </span>
          </p>
        </div>
      </div>

      <style jsx>{`
        .card-discovery {
          opacity: 0;
          filter: blur(4px);
          transform: translateY(14px);
          animation: discovery 900ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
          will-change: opacity, transform, filter;
        }

        @keyframes discovery {
          0% {
            opacity: 0;
            filter: blur(4px);
            transform: translateY(14px);
          }

          60% {
            opacity: 1;
            filter: blur(0.5px);
            transform: translateY(-2px);
          }

          100% {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .card-discovery {
            opacity: 1;
            filter: none;
            transform: none;
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}
