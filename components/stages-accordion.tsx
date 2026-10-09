'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const stages = [
  {
    number: '01',
    title: 'La Consciencia',
    description: 'Reconocer lo que está sucediendo dentro tuyo.',
  },
  {
    number: '02',
    title: 'La Liberación',
    description: 'Comenzar a soltar aquello que ya no acompaña tu camino.',
  },
  {
    number: '03',
    title: 'La Voz Interior',
    description: 'Aprender a escuchar aquello que empieza a expresarse desde vos.',
  },
  {
    number: '04',
    title: 'Tu Propósito Actual',
    description: 'Descubrir cómo llevar aquello que despertó en vos a tu manera de vivir.',
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
            <div key={stage.number} className="border-b border-foreground/5 last:border-b-0">
              <button
                type="button"
                onClick={() => setOpenStage(isOpen ? null : stage.number)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-300 hover:bg-background/50"
                aria-expanded={isOpen}
              >
                <span className="flex items-center gap-4">
                  <span className="text-sm font-medium tracking-[0.12em] text-primary">{stage.number}</span>
                  <span className="font-serif font-soft text-xl md:text-2xl">{stage.title}</span>
                </span>
                <ChevronDown
                  className={`size-5 shrink-0 text-primary transition-transform duration-700 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
                  strokeWidth={1.5}
                />
              </button>

              <div className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
                <div className={`px-6 pb-6 pl-[4.5rem] transition-all duration-700 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'}`}>
                  <p className="leading-[1.8] text-muted-foreground text-pretty">{stage.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
