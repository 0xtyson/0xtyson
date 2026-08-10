import Link from "next/link"
import { HexBackdrop } from "./hex-backdrop"

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden border-b border-border"
    >
      <HexBackdrop />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
        <div
          data-reveal
          className="inline-flex items-center gap-2 border border-border-strong bg-surface/60 px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-accent"
        >
          <span className="h-1.5 w-1.5 animate-pulse bg-accent" />
          Connected-product compliance
        </div>

        <h1
          data-reveal
          data-reveal-delay="60"
          className="mt-6 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.04] tracking-tight text-foreground md:text-[68px]"
        >
          Product Cybersecurity Experts
        </h1>

        <p
          data-reveal
          data-reveal-delay="120"
          className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted md:text-lg"
        >
          Leading consultancy for EU Cyber Resilience Act compliance, FDA
          medical device cybersecurity requirements, UN R155 automotive
          homologation, and ISO 21434 road vehicle cybersecurity management.
        </p>

        <div data-reveal data-reveal-delay="180" className="mt-9">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-accent bg-accent px-5 py-2.5 font-mono text-[13px] uppercase tracking-[0.14em] text-background transition-opacity hover:opacity-90"
          >
            Schedule Consultation
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Instrument-cluster readout strip */}
        <dl
          data-reveal
          data-reveal-delay="240"
          className="mt-16 grid max-w-3xl grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4"
        >
          {[
            { k: "Frameworks", v: "EU CRA · R155" },
            { k: "Domains", v: "AUTO · MED · IOT" },
            { k: "Capabilities", v: "06" },
            { k: "Status", v: "OPERATIONAL" },
          ].map((s) => (
            <div key={s.k} className="bg-background p-4">
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-2">
                {s.k}
              </dt>
              <dd className="mt-1.5 font-mono text-[13px] text-accent">
                {s.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
