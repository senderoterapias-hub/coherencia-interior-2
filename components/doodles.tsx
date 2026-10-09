import { cn } from '@/lib/utils'

type DoodleProps = { className?: string }

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function Squiggle({ className }: DoodleProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 14"
      preserveAspectRatio="none"
      className={cn('text-terracotta', className)}
    >
      <path {...stroke} strokeWidth="2.6" d="M3 9 C 18 3, 30 13, 46 8 S 74 2, 90 8 S 110 11, 117 5" />
    </svg>
  )
}

export function HandCircle({ className }: DoodleProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 70"
      preserveAspectRatio="none"
      className={cn('text-terracotta', className)}
    >
      <path
        {...stroke}
        strokeWidth="2"
        d="M30 14 C 70 2, 160 4, 188 22 C 204 34, 186 58, 120 64 C 60 69, 10 60, 6 38 C 3 22, 28 10, 62 8"
      />
    </svg>
  )
}

export function Sparkle({ className }: DoodleProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={cn('text-butter', className)}>
      <path
        fill="currentColor"
        d="M12 1.5c.4 5.6 2.8 8.3 9.5 10.5-6.7 2.2-9.1 4.9-9.5 10.5-.4-5.6-2.8-8.3-9.5-10.5C9.2 9.8 11.6 7.1 12 1.5Z"
      />
    </svg>
  )
}

export function CurlyArrow({ className }: DoodleProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 60 60" className={cn('text-terracotta-ink', className)}>
      <path {...stroke} strokeWidth="2" d="M10 6 C 34 8, 44 22, 30 30 C 20 36, 18 24, 30 24 C 44 24, 46 42, 40 54" />
      <path {...stroke} strokeWidth="2" d="M33 48 L 40 55 L 47 47" />
    </svg>
  )
}

export function WavyDash({ className }: DoodleProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 20"
      preserveAspectRatio="none"
      className={cn('text-foreground/40', className)}
    >
      <path
        {...stroke}
        strokeWidth="1.8"
        strokeDasharray="3 6"
        d="M2 10 C 20 0, 36 20, 60 10 S 100 0, 118 10"
      />
    </svg>
  )
}

export function Handwritten({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p className={cn('font-serif font-soft text-lg italic text-terracotta-ink', className)}>
      {children}
    </p>
  )
}
