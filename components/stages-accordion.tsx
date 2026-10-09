'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const stages = [
  {
    number: '01',
    title: 'La Consciencia',
    description:
      'Entendé cómo funciona tu Ser y aprendé a regresar a tu Centro.',
  },
  {
    number: '02',
    title: 'La Liberación',
    description:
      'Acá te liberás de las ataduras que te mantienen sufriendo y aprendés a reprogramar tu subconsciente para que impulse tus deseos verdaderos, en vez de frenarte.',
    detail: 'Liberación kármica, energética y reprogramación profunda.',
  },
  {
    number: '03',
    title: 'La Voz Interior',
    description:
      'Aprendé a distinguir la voz de la guía interior y cultivá esa guía en tu día a día.',
    detail: 'Conexión con la guía interna y campo de sincronicidades.',
  },
  {
    number: '04',
    title: 'Tu Propósito Actual',
    description:
      'Aprendé a descubrir el propósito de tu alma y vivir alinead@ a él en el presente.',
    detail: 'Manifestación consciente y vida coherente.',
  },
]

export function StagesAccordion() {
  const [openStage, setOpenStage] = useState<string | null>(null)

  return (
    <div className="mx-auto mt-8 max-w-2xl text-left">
      <div className="overflow-hidden rounded-[1.5rem] bg-card ring-1 ring-foreground/5">
        {stages.map((stage) => {
          const isOpen = openStage === stage.number

          return (
            <div
              key={stage.number}
              className="border-b border-foreground/5 last:border-b-0"
            >
              <button
                type="button"
                onClick={() =>
                  setOpenStage(isOpen ? null : stage.number)
                }
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-300 hover:bg-background/50"
                aria-expanded={isOpen}
              >
                <span className="flex items-center gap-4">
                  <span className="text-sm font-medium tracking-[0.12em] text-primary">
                    {stage.number}
                  </span>

                  <span className="font-serif font-soft text-xl md:text-2xl">
                    {stage.title}
                  </span>
                </span>

                <ChevronDown
                  className={`size-5 shrink-0 text-primary transition-transform duration-700 ease-in-out ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  strokeWidth={1.5}
                />
              </button>

              <div
                className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
                  isOpen ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div
                  className={`px-6 pb-6 pl-[4.5rem] transition-all duration-700 ease-in-out ${
                    isOpen
                      ? 'translate-y-0 opacity-100'
                      : '-translate-y-3 opacity-0'
                  }`}
                >
                  <p className="leading-[1.8] text-muted-foreground text-pretty">
                    {stage.description}
                  </p>

                  {stage.detail && (
                    <p className="mt-3 text-sm italic leading-relaxed text-muted-foreground">
                      {stage.detail}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )
        })}

        <div className="border-b border-foreground/5 last:border-b-0">
          <button
            type="button"
            onClick={() =>
              setOpenStage(
                openStage === 'acompanamiento'
                  ? null
                  : 'acompanamiento',
              )
            }
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-300 hover:bg-background/50"
            aria-expanded={openStage === 'acompanamiento'}
          >
            <span className="flex items-center gap-4">
              <span className="text-sm font-medium tracking-[0.12em] text-primary">
                ✦
              </span>

              <span className="font-serif font-soft text-xl md:text-2xl">
                Lo que te acompaña durante el proceso
              </span>
            </span>

            <ChevronDown
              className={`size-5 shrink-0 text-primary transition-transform duration-700 ease-in-out ${
                openStage === 'acompanamiento' ? 'rotate-180' : ''
              }`}
              strokeWidth={1.5}
            />
          </button>

          <div
            className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
              openStage === 'acompanamiento' ? 'max-h-[40rem]' : 'max-h-0'
            }`}
          >
            <div
              className={`px-6 pb-7 pl-[4.5rem] transition-all duration-700 ease-in-out ${
                openStage === 'acompanamiento'
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-3 opacity-0'
              }`}
            >
              <div className="space-y-5">
                <div>
                  <p className="font-medium text-foreground">
                    Clases grabadas con ejemplos reales
                  </p>
                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    Para comprender los conceptos y llevarlos a situaciones concretas.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-foreground">
                    Meditaciones guiadas para cada etapa
                  </p>
                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    Para experimentar e integrar lo trabajado más allá de la comprensión mental.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-foreground">
                    Bitácora de Transformación
                  </p>
                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    Un espacio para registrar lo que vas descubriendo, atravesando e integrando durante el proceso.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-foreground">
                    Guía para la Auto Sanación
                  </p>
                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    Un manual para acompañar tu proceso de autoobservación y transformación.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-foreground">
                    Guía de Prácticas para bajar a tierra tus procesos
                  </p>
                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    Respiraciones, prácticas somáticas, regulación del sistema nervioso, manejo de emociones e identificación de creencias.
                  </p>
                </div>

                <p className="pt-2 font-serif text-lg leading-snug text-foreground">
                  No se trata solamente de comprender. Se trata de experimentarlo,
                  llevarlo a tu vida e integrarlo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-8 text-center text-sm leading-relaxed text-muted-foreground">
        Podés comenzar recorriendo la primera etapa de forma gratuita.
      </p>

      <div className="mt-5 flex justify-center">
        <a
          href="/primera-etapa"
          className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-primary px-7 py-4 text-base font-medium text-primary-foreground shadow-[0_3px_0_0_rgba(59,42,31,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#535e31] hover:shadow-[0_5px_0_0_rgba(59,42,31,0.18)] active:translate-y-0.5 active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        >
          <span>VIVIR EL PROCESO GRATIS</span>

          <ChevronDown
            aria-hidden="true"
            className="size-4 -rotate-90 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={2}
          />
        </a>
      </div>
    </div>
  )
}
