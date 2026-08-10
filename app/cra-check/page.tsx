import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { RevealObserver } from "@/components/reveal-observer"
import { CraCheckTool } from "@/components/cra-check-tool"
import { Eyebrow } from "@/components/eyebrow"
import { PcbDivider } from "@/components/pcb-divider"

const SITE_URL = "https://productcybersecurity.com"

export const metadata: Metadata = {
  title: "CRA Scope Check | EU Cyber Resilience Act Conformity Assessment & Product Classification",
  description:
    "Free interactive EU Cyber Resilience Act scope and classification tool. Determine whether your product with digital elements is in scope, its CRA product classification (Default, Important Class II, or Critical), and the conformity assessment route — with article and annex citations.",
  alternates: { canonical: `${SITE_URL}/cra-check` },
  openGraph: {
    title: "CRA Scope Check — EU Cyber Resilience Act Classification Tool",
    description:
      "Determine your CRA scope, product classification, and conformity assessment route with cited article and annex references.",
    url: `${SITE_URL}/cra-check`,
    type: "website",
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is my product in scope of the EU Cyber Resilience Act?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A product is in scope of the CRA if it is a product with digital elements (hardware or software with a direct or indirect data connection) made available on the EU market in the course of a commercial activity, per CRA Article 3(1) and Article 2.",
      },
    },
    {
      "@type": "Question",
      name: "What are the CRA product classifications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The CRA distinguishes Default products (self-assessment), Important products in Class I and Class II under Annex III, and Critical products under Annex IV, which may require European cybersecurity certification.",
      },
    },
  ],
}

export default function CraCheckPage() {
  return (
    <>
      <RevealObserver />
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main id="main">
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 pb-14 pt-16 md:pt-20">
            <div data-reveal>
              <Eyebrow index="CRA">Scope &amp; Classification Tool</Eyebrow>
              <h1 className="mt-5 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl">
                EU Cyber Resilience Act scope check
              </h1>
              <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted md:text-lg">
                Answer four questions to determine whether your product with
                digital elements falls under the CRA, its classification, and
                the conformity assessment route — each step cited to the
                article or annex behind it.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
          <div data-reveal>
            <CraCheckTool />
          </div>
        </section>

        <PcbDivider label="NEXT" />

        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div
            data-reveal
            className="flex flex-col items-start justify-between gap-6 border border-border bg-surface p-8 md:flex-row md:items-center"
          >
            <div className="max-w-xl">
              <h2 className="font-display text-2xl font-medium text-foreground">
                Need a defensible determination?
              </h2>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">
                We turn this preliminary result into documented classification
                evidence prepared for Notified Body review.
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
