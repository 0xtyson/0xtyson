import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { RevealObserver } from "@/components/reveal-observer"
import { Eyebrow } from "@/components/eyebrow"
import { ContactForm } from "@/components/contact-form"

const SITE_URL = "https://productcybersecurity.com"

export const metadata: Metadata = {
  title: "Contact | The Product Cybersecurity Group",
  description:
    "Schedule a consultation on EU Cyber Resilience Act, FDA medical device cybersecurity, UN R155 homologation, or ISO/SAE 21434 compliance. Email info@productcybersecurity.com.",
  alternates: { canonical: `${SITE_URL}/contact` },
}

const DETAILS = [
  { k: "Email", v: "info@productcybersecurity.com", href: "mailto:info@productcybersecurity.com" },
  { k: "Blog", v: "blog.productcybersecurity.com", href: "https://blog.productcybersecurity.com" },
  { k: "Entity", v: "The Product Cybersecurity Group LLC" },
]

export default function ContactPage() {
  return (
    <>
      <RevealObserver />
      <SiteHeader />
      <main id="main">
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 pb-14 pt-16 md:pt-20">
            <div data-reveal>
              <Eyebrow index="00">Contact</Eyebrow>
              <h1 className="mt-5 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl">
                Schedule a consultation
              </h1>
              <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted md:text-lg">
                Tell us the regulation and the timeline you&apos;re working
                toward. We&apos;ll map the technical work required to meet it.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
          <div className="grid gap-px border border-border bg-border lg:grid-cols-[1fr_1.6fr]">
            <div data-reveal className="bg-background p-6 md:p-8">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-2">
                Direct
              </span>
              <dl className="mt-6 space-y-6">
                {DETAILS.map((d) => (
                  <div key={d.k}>
                    <dt className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-2">
                      {d.k}
                    </dt>
                    <dd className="mt-1.5 text-sm text-foreground">
                      {d.href ? (
                        <a
                          href={d.href}
                          className="text-accent underline-offset-4 transition-colors hover:underline"
                        >
                          {d.v}
                        </a>
                      ) : (
                        d.v
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-10 border-t border-border pt-6 font-mono text-[10.5px] leading-relaxed text-muted-2">
                We typically respond within two business days. Guidance
                provided is not legal advice.
              </p>
            </div>

            <div data-reveal data-reveal-delay="80" className="bg-surface p-6 md:p-8">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-accent">
                Send a message
              </span>
              <div className="mt-6 [&>form]:border-0 [&>form]:bg-transparent [&>form]:p-0">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
