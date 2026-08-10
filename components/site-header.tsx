"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NAV = [
  { label: "Regulations", href: "/#regulations" },
  { label: "CRA Check", href: "/cra-check" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="The Product Cybersecurity Group — home"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-6 w-6 place-items-center border border-border-strong text-accent">
            <span className="h-1.5 w-1.5 bg-accent" />
          </span>
          <span className="font-mono text-[13px] tracking-tight text-foreground">
            product<span className="text-accent">cybersecurity</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active = item.href === pathname
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-mono text-[12px] uppercase tracking-[0.14em] transition-colors hover:text-foreground ${
                  active ? "text-accent" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="border border-accent/40 bg-accent-dim px-3.5 py-1.5 font-mono text-[12px] uppercase tracking-[0.14em] text-accent transition-colors hover:bg-accent hover:text-background"
          >
            Contact
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-8 w-8 place-items-center border border-border-strong text-foreground transition-colors hover:border-accent/50 md:hidden"
          >
            <span className="relative block h-3 w-4" aria-hidden="true">
              <span
                className={`absolute left-0 h-px w-4 bg-current transition-all ${
                  open ? "top-1.5 rotate-45" : "top-0.5"
                }`}
              />
              <span
                className={`absolute bottom-0.5 left-0 h-px w-4 bg-current transition-all ${
                  open ? "bottom-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile disclosure */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-background md:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-3 font-mono text-[13px] uppercase tracking-[0.14em] text-muted transition-colors last:border-b-0 hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
