import Link from "next/link"
import { HexBackdrop } from "./hex-backdrop"

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden border-b border-border"
    >
      <HexBackdrop />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-24 md:pb-32 md:pt-32">
        <div
          data-reveal
          className="inline-flex items-center gap-2 border border-border-strong bg-surface/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted"
        >
          <span className="h-1.5 w-1.5 animate-pulse bg-accent" />
          Product security &amp; regulatory readiness
        </div>

        <h1
          data-reveal
          data-reveal-delay="60"
          className="mt-6 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl"
        >
          Cybersecurity compliance for connected and embedded products.
        </h1>

        <p
          data-reveal
          data-reveal-delay="120"
          className="mt-6 max-w-xl text-pretty leading-relaxed text-muted md:text-lg"
        >
          I take teams from ambiguous regulatory obligations to defensible,
          audit-ready evidence — mapping the work to the standards that gate
          your market access.
        </p>

        <div
          data-reveal
          data-reveal-delay="180"
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Link
            href="#regulations"
            className="border border-accent bg-accent px-5 py-2.5 font-mono text-[13px] uppercase tracking-[0.14em] text-background transition-opacity hover:opacity-90"
          >
            View regulations
          </Link>
          <Link
            href="#contact"
            className="border border-border-strong px-5 py-2.5 font-mono text-[13px] uppercase tracking-[0.14em] text-foreground transition-colors hover:border-accent/50 hover:text-accent"
          >
            Book an assessment
          </Link>
        </div>

        {/* Instrument-cluster readout strip */}
        <dl
          data-reveal
          data-reveal-delay="240"
          className="mt-16 grid max-w-2xl grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4"
        >
          {[
            { k: "Frameworks", v: "04" },
            { k: "Capabilities", v: "06" },
            { k: "Domains", v: "AUTO · MED · IOT" },
            { k: "Status", v: "OPERATIONAL" },
          ].map((s) => (
            <div key={s.k} className="bg-background p-4">
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-2">
                {s.k}
              </dt>
              <dd className="mt-1.5 font-mono text-sm text-accent">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
