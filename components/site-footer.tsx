import { Squiggle } from '@/components/doodles'

export function SiteFooter() {
  return (
    <footer className="px-5 pb-12 pt-4">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 text-center">
        <Squiggle className="h-3 w-20 text-foreground/25" />
        <p className="mt-3 font-serif font-soft text-xl">
          Coherencia <span className="italic text-primary">Interior</span>
        </p>
        <p className="text-sm text-muted-foreground">Hecho con calma, para quien quiera empezar.</p>
        <p className="text-xs text-muted-foreground/80">
          {'© '}
          {new Date().getFullYear()} Coherencia Interior
        </p>
      </div>
    </footer>
  )
}
