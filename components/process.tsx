import { Eyebrow } from "./eyebrow"

const STEPS = [
  {
    n: "01",
    title: "Regulatory Classification",
    body: "We analyze your product against the legal text (EU CRA, UN R155) to determine your exact category — Critical, Important, or Default — ensuring you don't over-engineer compliance.",
  },
  {
    n: "02",
    title: "Gap Analysis",
    body: "A dual-layer assessment: scanning firmware against technical standards (IEC 62443, EN 303 645) while mapping findings directly to legal Essential Requirements.",
  },
  {
    n: "03",
    title: "Defensible Documentation",
    body: "We deliver the evidence required for your Declaration of Conformity. You receive a technical risk assessment and a legal roadmap prepared for Notified Body reviews.",
  },
  {
    n: "04",
    title: "Remediation & Lifecycle",
    body: "Compliance doesn't end at launch. We help implement fixes and establish the Vulnerability Handling processes required to keep your product on the market.",
  },
]

export function Process() {
  return (
    <section
      id="process"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 md:py-28"
    >
      <div data-reveal className="max-w-2xl">
        <Eyebrow index="04">Our Approach</Eyebrow>
        <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Engineering Meets Legal Compliance
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted">
          We bridge the gap between abstract legal requirements and the binary
          reality of your firmware.
        </p>
      </div>

      <ol className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2">
        {STEPS.map((s, i) => (
          <li
            key={s.n}
            data-reveal
            data-reveal-delay={(i % 2) * 60}
            className="bg-surface p-6 md:p-8"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-2xl font-medium tabular-nums text-accent">
                {s.n}
              </span>
              <span
                className="h-px flex-1 translate-y-[-4px] bg-border-strong"
                aria-hidden="true"
              />
            </div>
            <h3 className="mt-5 font-display text-xl font-medium text-foreground">
              {s.title}
            </h3>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">
              {s.body}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}
