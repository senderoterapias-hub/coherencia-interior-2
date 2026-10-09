import { ContinuePaths } from '@/components/continue-paths'
import { Handwritten } from '@/components/doodles'
import { FULL_PROCESS_PRICE } from '@/lib/site'

const stages = [
  {
    label: 'Primera etapa',
    state: 'Abierta y gratuita',
    note: 'empezás acá',
    active: true,
  },
  {
    label: 'Proceso completo',
    state: FULL_PROCESS_PRICE,
    description:
      'Acceso a las siguientes etapas de Coherencia Interior para continuar profundizando el proceso.',
    active: false,
  },
]

export function NextStages() {
  return (
    <section aria-labelledby="despues-title" className="px-5 py-20 md:py-28">
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <Handwritten>¿y después?</Handwritten>
        <h2
          id="despues-title"
          className="mt-3 font-serif font-soft text-[2.1rem] leading-[1.1] text-balance md:text-5xl"
        >
          Un proceso que se vive{' '}
          <span className="italic text-primary">por etapas</span>
        </h2>
        <div className="mt-6 flex flex-col gap-4 leading-[1.8] text-muted-foreground text-pretty md:text-lg">
          <p>Primero podés experimentar la primera etapa de forma gratuita.</p>
          <p>
            Y si después sentís que este camino resuena con vos y querés seguir profundizando,
            podés continuar con el proceso completo.
          </p>
          <p className="font-serif font-soft text-xl italic text-foreground">
            Sin apuro. A tu ritmo.
          </p>
        </div>

        <ol className="relative mt-12 flex w-full max-w-sm flex-col gap-9 text-left">
          <span
            aria-hidden="true"
            className="absolute bottom-3 left-[11px] top-3 border-l-2 border-dashed border-foreground/25"
          />
          {stages.map((stage) => (
            <li key={stage.label} className="relative flex items-start gap-5">
              <span
                aria-hidden="true"
                className={
                  stage.active
                    ? 'blob relative mt-1 size-6 shrink-0 bg-primary'
                    : 'blob-alt relative mt-1 size-6 shrink-0 border-2 border-terracotta bg-background'
                }
              />
              <div className="flex-1">
                <p className="font-serif font-soft text-xl leading-tight">{stage.label}</p>
                <p className="mt-1 font-medium text-foreground/80">{stage.state}</p>
                {stage.description && (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {stage.description}
                  </p>
                )}
              </div>
              {stage.note && <Handwritten className="-rotate-3 text-base">{stage.note}</Handwritten>}
            </li>
          ))}
        </ol>
      </div>

      <ContinuePaths />
    </section>
  )
}
