import Link from "next/link"
import { Eyebrow } from "./eyebrow"

type Reg = {
  code: string
  title: string
  covers: string
  binds: string
  deadline: string
  href: string
  cta: string
}

const REGULATIONS: Reg[] = [
  {
    code: "EU CRA",
    title: "EU Cyber Resilience Act",
    covers:
      "Essential cybersecurity requirements and vulnerability handling for products with digital elements sold in the EU.",
    binds: "Manufacturers, importers & distributors",
    deadline: "Obligations phase in through Dec 2027",
    href: "/cra-check",
    cta: "Run scope check",
  },
  {
    code: "UN R155/R156",
    title: "Automotive Homologation",
    covers:
      "Cyber Security Management System (CSMS) and Software Update Management System (SUMS) for vehicle type approval.",
    binds: "Vehicle manufacturers & Tier-1 suppliers",
    deadline: "Mandatory for new vehicle types",
    href: "/contact",
    cta: "Discuss homologation",
  },
  {
    code: "FDA PREMARKET",
    title: "Medical Device Cybersecurity",
    covers:
      "Secure product development framework and cybersecurity evidence required in premarket submissions under Section 524B.",
    binds: "Medical device manufacturers (US)",
    deadline: "Required for cyber device submissions",
    href: "/contact",
    cta: "Prepare submission",
  },
  {
    code: "ISO/SAE 21434",
    title: "Road Vehicle Cybersecurity",
    covers:
      "Engineering process for cybersecurity risk management across the automotive component and system lifecycle.",
    binds: "Automotive engineering organizations",
    deadline: "Referenced by UN R155 type approval",
    href: "/contact",
    cta: "Assess process",
  },
]

export function Regulations() {
  return (
    <section
      id="regulations"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 md:py-28"
    >
      <div data-reveal className="max-w-2xl">
        <Eyebrow index="01">Regulations</Eyebrow>
        <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Start with the deadline that gates your market.
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted">
          Four regulatory regimes drive nearly every connected-product security
          program we run. Identify yours, then map the technical work beneath
          it.
        </p>
      </div>

      <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2">
        {REGULATIONS.map((r, i) => (
          <article
            key={r.code}
            data-reveal
            data-reveal-delay={i * 60}
            className="group flex flex-col bg-surface p-6 transition-colors hover:bg-surface-2 md:p-8"
          >
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                {r.code}
              </span>
              <span className="font-mono text-[11px] tabular-nums text-muted-2">
                {String(i + 1).padStart(2, "0")}/04
              </span>
            </div>

            <h3 className="mt-3 font-display text-xl font-medium text-foreground">
              {r.title}
            </h3>
            <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted">
              {r.covers}
            </p>

            <dl className="mt-6 space-y-2 border-t border-border pt-5 font-mono text-[11px]">
              <div className="flex gap-3">
                <dt className="w-16 shrink-0 uppercase tracking-[0.12em] text-muted-2">
                  Binds
                </dt>
                <dd className="text-foreground/80">{r.binds}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-16 shrink-0 uppercase tracking-[0.12em] text-muted-2">
                  Deadline
                </dt>
                <dd className="text-warn/90">{r.deadline}</dd>
              </div>
            </dl>

            <Link
              href={r.href}
              className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-accent transition-transform group-hover:translate-x-0.5"
            >
              {r.cta}
              <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
