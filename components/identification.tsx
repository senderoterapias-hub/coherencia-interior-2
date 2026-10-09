'use client'

import { useEffect, useRef, useState } from 'react'
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

function RevealCard({
  title,
  text,
  index,
}: {
  title: string
  text: string
  index: number
}) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <article
      ref={ref}
      className={`rounded-[1.5rem] bg-[#f0ebe3] px-5 py-5 ring-1 ring-foreground/5 transition-all duration-1000 ease-out sm:px-6 sm:py-6 ${
        visible
          ? 'translate-y-0 opacity-100 blur-0'
          : 'translate-y-5 opacity-0 blur-md'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <h3 className="font-serif text-xl leading-tight text-foreground md:text-2xl">
        {title}
      </h3>

      <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
        {text}
      </p>
    </article>
  )
}

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
            <RevealCard
              key={card.title}
              title={card.title}
              text={card.text}
              index={index}
            />
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
    </section>
  )
}
