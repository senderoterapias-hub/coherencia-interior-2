import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type CtaLinkProps = {
  href: string
  children: React.ReactNode
  variant?: 'olive' | 'butter'
  className?: string
  pulse?: boolean
}

export function CtaLink({
  href,
  children,
  variant = 'olive',
  className,
  pulse = false,
}: CtaLinkProps) {
  const isExternal = href.startsWith('http')

  return (
    <a
      href={href}
      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
      className={cn(
        'group inline-flex min-h-14 items-center justify-center gap-3 rounded-full px-7 py-4 text-base font-medium shadow-[0_3px_0_0_rgba(59,42,31,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_5px_0_0_rgba(59,42,31,0.18)] active:translate-y-0.5 active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background',
        variant === 'olive' && 'bg-primary text-primary-foreground hover:bg-[#535e31]',
        variant === 'butter' && 'bg-butter text-foreground hover:bg-[#f3dc9f]',
        pulse && 'animate-cta-pulse',
        className,
      )}
    >
      <span className="text-balance">{children}</span>

      <ArrowRight
        aria-hidden="true"
        className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        strokeWidth={2}
      />

      {isExternal && (
        <span className="sr-only">
          (se abre en una pestaña nueva)
        </span>
      )}
    </a>
  )
}
