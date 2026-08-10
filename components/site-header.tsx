import Link from "next/link"

const NAV = [
  { label: "Regulations", href: "#regulations" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Method", href: "#method" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="#top" className="group flex items-center gap-2.5">
          <span className="grid h-6 w-6 place-items-center border border-border-strong text-accent">
            <span className="h-1.5 w-1.5 bg-accent" />
          </span>
          <span className="font-mono text-sm tracking-tight text-foreground">
            0x<span className="text-accent">tyson</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="border border-accent/40 bg-accent-dim px-3.5 py-1.5 font-mono text-[12px] uppercase tracking-[0.14em] text-accent transition-colors hover:bg-accent hover:text-background"
        >
          Engage
        </Link>
      </div>
    </header>
  )
}
