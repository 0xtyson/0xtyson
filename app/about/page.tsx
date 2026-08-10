import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { RevealObserver } from "@/components/reveal-observer"
import { Eyebrow } from "@/components/eyebrow"
import { PcbDivider } from "@/components/pcb-divider"

const SITE_URL = "https://productcybersecurity.com"

export const metadata: Metadata = {
  title: "About | The Product Cybersecurity Group",
  description:
    "The Product Cybersecurity Group is a compliance consultancy for connected-product security — bridging legal regulatory requirements and the technical reality of firmware across EU CRA, UN R155/R156, FDA premarket, and ISO/SAE 21434.",
  alternates: { canonical: `${SITE_URL}/about` },
}

const PRINCIPLES = [
  {
    n: "01",
    title: "Regulation first, technique second",
    body: "We scope the legal obligation before touching a binary, so effort maps to the requirements that actually gate your market access.",
  },
  {
    n: "02",
    title: "Evidence over assertion",
    body: "Every finding is documented to survive a Notified Body review — traceable from Essential Requirement to test result.",
  },
  {
    n: "03",
    title: "Engineering fluency",
    body: "We speak firmware, protocols, and cryptography as fluently as legal text, and we translate cleanly between them.",
  },
  {
    n: "04",
    title: "Lifecycle, not launch",
    body: "Vulnerability handling and update management keep products compliant after they ship, not just at conformity.",
  },
]

const DOMAINS = [
  { k: "Automotive", v: "UN R155/R156 · ISO/SAE 21434" },
  { k: "Medical", v: "FDA premarket · IEC 62443" },
  { k: "IoT & Industrial", v: "EU CRA · EN 303 645" },
]

export default function AboutPage() {
  return (
    <>
      <RevealObserver />
      <SiteHeader />
      <main id="main">
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 pb-14 pt-16 md:pt-20">
            <div data-reveal>
              <Eyebrow index="00">About</Eyebrow>
              <h1 className="mt-5 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl">
                We bridge legal requirements and the binary reality of firmware.
              </h1>
              <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted md:text-lg">
                The Product Cybersecurity Group LLC is a compliance consultancy
                for connected-product security. We work with manufacturers
                across automotive, medical, and IoT to turn ambiguous
                regulatory obligations into defensible, audit-ready evidence.
              </p>
            </div>

            <dl
              data-reveal
              data-reveal-delay="80"
              className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-3"
            >
              {DOMAINS.map((d) => (
                <div key={d.k} className="bg-surface p-5">
                  <dt className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-2">
                    {d.k}
                  </dt>
                  <dd className="mt-2 font-mono text-[13px] text-accent">
                    {d.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div data-reveal className="max-w-2xl">
            <Eyebrow index="01">Operating Principles</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground">
              How we work
            </h2>
          </div>

          <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <article
                key={p.n}
                data-reveal
                data-reveal-delay={(i % 2) * 60}
                className="bg-surface p-6 md:p-8"
              >
                <span className="font-mono text-2xl font-medium tabular-nums text-accent">
                  {p.n}
                </span>
                <h3 className="mt-4 font-display text-xl font-medium text-foreground">
                  {p.title}
                </h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <PcbDivider label="CONTACT" />

        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div
            data-reveal
            className="flex flex-col items-start justify-between gap-6 border border-border bg-surface p-8 md:flex-row md:items-center"
          >
            <div className="max-w-xl">
              <h2 className="font-display text-2xl font-medium text-foreground">
                Bring us your deadline.
              </h2>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">
                Tell us the regulation and the timeline, and we&apos;ll map the
                work required to meet it.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 border border-accent bg-accent px-5 py-2.5 font-mono text-[13px] uppercase tracking-[0.14em] text-background transition-opacity hover:opacity-90"
            >
              Schedule Consultation
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
