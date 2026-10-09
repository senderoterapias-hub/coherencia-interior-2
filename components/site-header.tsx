export function SiteHeader() {
  return (
    <header className="relative z-10 mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-5 md:px-8 md:py-7">
      <a
        href="#inicio"
        className="flex items-center gap-2 font-serif font-soft text-lg text-foreground focus-visible:outline-none focus-visible:underline"
      >
        <span aria-hidden="true" className="relative flex size-6 items-center">
          <span className="blob absolute left-0 size-4 bg-primary/80" />
          <span className="blob-alt absolute right-0 size-4 bg-terracotta/80 mix-blend-multiply" />
        </span>

        Coherencia <span className="-ml-1 italic text-primary">Interior</span>
      </a>

      <a
        href="/primera-etapa"
        className="rounded-full border border-foreground/15 px-4 py-2 text-sm text-foreground/80 transition-colors hover:border-primary hover:text-primary"
      >
        Primera etapa
      </a>
    </header>
  )
}
