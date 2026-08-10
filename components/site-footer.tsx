import Link from "next/link"

const COLUMNS = [
  {
    title: "Regulations",
    links: [
      { label: "EU CRA", href: "/#regulations" },
      { label: "UN R155/R156", href: "/#regulations" },
      { label: "FDA Premarket", href: "/#regulations" },
      { label: "ISO/SAE 21434", href: "/#regulations" },
    ],
  },
  {
    title: "Practice",
    links: [
      { label: "CRA Scope Check", href: "/cra-check" },
      { label: "Capabilities", href: "/#capabilities" },
      { label: "Process", href: "/#process" },
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "https://blog.productcybersecurity.com" },
      { label: "info@productcybersecurity.com", href: "mailto:info@productcybersecurity.com" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-6 w-6 place-items-center border border-border-strong text-accent">
                <span className="h-1.5 w-1.5 bg-accent" />
              </span>
              <span className="font-mono text-[13px] tracking-tight text-foreground">
                product<span className="text-accent">cybersecurity</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-muted">
              Compliance consultancy for connected-product security across
              automotive, medical, and IoT.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-2">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => {
                  const external = link.href.startsWith("http")
                  return (
                    <li key={link.label}>
                      {external ? (
                        <a
                          href={link.href}
                          className="text-sm text-muted transition-colors hover:text-accent"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-muted transition-colors hover:text-accent"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 font-mono text-[11px] text-muted-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 The Product Cybersecurity Group LLC. All rights reserved.</p>
          <p className="uppercase tracking-[0.14em]">
            Guidance provided is not legal advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
