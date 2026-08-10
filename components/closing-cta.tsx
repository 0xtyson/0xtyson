import Link from "next/link"

export function ClosingCta() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-y border-border bg-surface"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div data-reveal className="max-w-3xl">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-accent">
            Engage
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Secure Your Connected Products
          </h2>
          <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted md:text-lg">
            Get expert guidance on EU Cyber Resilience Act essential
            requirements, FDA medical device cybersecurity, UN R155
            homologation, and ISO 21434 automotive standards.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-accent bg-accent px-5 py-2.5 font-mono text-[13px] uppercase tracking-[0.14em] text-background transition-opacity hover:opacity-90"
            >
              Schedule Consultation
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href="mailto:info@productcybersecurity.com"
              className="inline-flex items-center gap-2 border border-border-strong px-5 py-2.5 font-mono text-[13px] uppercase tracking-[0.14em] text-foreground transition-colors hover:border-accent/50 hover:text-accent"
            >
              info@productcybersecurity.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
