import { ArrowRight, MessageCircle } from 'lucide-react'
import { Handwritten } from '@/components/doodles'
import { FULL_PROCESS_PRICE, HOTMART_URL, WHATSAPP_URL } from '@/lib/site'
import { cn } from '@/lib/utils'

function ForkLines() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 320 110"
      fill="none"
      className="mx-auto h-20 w-56 text-foreground/30 md:h-28 md:w-[26rem]"
    >
      <circle cx="160" cy="8" r="6" className="fill-primary" />
      <path d="M160 14 V44" stroke="currentColor" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" />
      <path
        d="M160 44 C160 70 60 62 60 98"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 6"
        strokeLinecap="round"
      />
      <path
        d="M160 44 C160 70 260 62 260 98"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 6"
        strokeLinecap="round"
      />
      <circle cx="60" cy="102" r="5" className="fill-primary/70" />
      <circle cx="260" cy="102" r="5" className="fill-terracotta/80" />
    </svg>
  )
}

type PathCardProps = {
  href: string
  title: string
  detail: string
  variant: 'olive' | 'sand'
  icon?: React.ReactNode
}

function PathCard({ href, title, detail, variant, icon }: PathCardProps) {
  const hasLink = href.length > 0

  return (
    <a
      {...(hasLink
        ? { href, target: '_blank', rel: 'noopener noreferrer' }
        : { 'aria-disabled': true })}
      className={cn(
        'group relative flex items-center gap-4 overflow-hidden rounded-[1.75rem] p-6 text-left ring-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background md:p-7',
        hasLink && 'hover:-translate-y-0.5',
        variant === 'olive' && 'bg-primary text-primary-foreground ring-primary',
        variant === 'sand' && 'bg-sand text-foreground ring-foreground/10',
      )}
    >
      <div className="flex-1">
        <p className="flex items-center gap-2 font-serif font-soft text-2xl leading-tight">
          {icon}
          {title}
        </p>
        <p
          className={cn(
            'mt-2 text-sm md:text-base',
            variant === 'olive' ? 'text-primary-foreground/80' : 'text-muted-foreground',
          )}
        >
          {detail}
        </p>
        {!hasLink && (
          <p
            className={cn(
              'mt-3 text-xs',
              variant === 'olive' ? 'text-primary-foreground/60' : 'text-muted-foreground/80',
            )}
          >
            Enlace disponible pronto
          </p>
        )}
      </div>
      <span
        aria-hidden="true"
        className={cn(
          'flex size-11 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1',
          variant === 'olive' ? 'bg-butter text-foreground' : 'bg-background text-primary',
        )}
      >
        <ArrowRight className="size-4" strokeWidth={2} />
      </span>
      {hasLink && <span className="sr-only">(se abre en una pestaña nueva)</span>}
    </a>
  )
}

export function ContinuePaths() {
  return (
    <div id="continuar" className="mx-auto mt-20 max-w-3xl scroll-mt-6 md:mt-28">
      <div className="flex flex-col items-center text-center">
        <Handwritten>si querés seguir</Handwritten>
        <h3 className="mt-3 font-serif font-soft text-[1.75rem] leading-[1.15] text-balance md:text-4xl">
          Dos formas de <span className="italic text-primary">continuar</span>
        </h3>
        <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground text-pretty">
          Primero experimentá. Después decidí.
        </p>
      </div>

      <div className="mt-8">
        <ForkLines />
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2 md:gap-6">
        <PathCard
          href={HOTMART_URL}
          title="Continuar por Hotmart"
          detail={`${FULL_PROCESS_PRICE} · Proceso completo`}
          variant="olive"
        />
        <PathCard
          href={WHATSAPP_URL}
          title="Hablar con Adrián"
          detail="Te cuento más por WhatsApp"
          variant="sand"
          icon={<MessageCircle aria-hidden="true" className="size-5 text-primary" strokeWidth={1.75} />}
        />
      </div>
    </div>
  )
}
