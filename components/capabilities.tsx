import { Eyebrow } from "./eyebrow"

type Capability = {
  name: string
  desc: string
  items: string[]
}

const CAPABILITIES: Capability[] = [
  {
    name: "Firmware Analysis",
    desc: "Comprehensive binary analysis of embedded firmware to identify security weaknesses, hardcoded credentials, and vulnerable components.",
    items: ["Binary reverse engineering", "SBOM generation", "Cryptographic assessment"],
  },
  {
    name: "Vulnerability Assessment",
    desc: "Systematic identification and classification of security vulnerabilities in IoT devices and their firmware.",
    items: ["CVE identification", "Zero-day research", "Risk prioritization"],
  },
  {
    name: "Compliance Services",
    desc: "Navigate complex regulatory requirements with expert guidance on product cybersecurity standards and certification preparation.",
    items: ["EU Cyber Resilience Act", "FDA cybersecurity", "UN R155 & ISO 21434"],
  },
  {
    name: "Penetration Testing",
    desc: "Simulated attacks on your IoT ecosystem to validate security controls and identify real-world attack vectors.",
    items: ["Network penetration", "Physical testing", "Red team exercises"],
  },
  {
    name: "Architecture Review",
    desc: "Security-focused evaluation of your product architecture, communication protocols, and cloud integration points.",
    items: ["Threat modeling", "Protocol analysis", "Secure design review"],
  },
  {
    name: "Security Training",
    desc: "Customized training programs for engineering teams on secure firmware development and IoT security best practices.",
    items: ["Secure SDLC", "Code review skills", "Incident response"],
  },
]

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 md:py-28"
    >
      <div data-reveal className="max-w-2xl">
        <Eyebrow index="03">Capabilities</Eyebrow>
        <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          The technical work beneath the regulations.
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted">
          Six services that produce the evidence, findings, and hardening each
          compliance program depends on.
        </p>
      </div>

      <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {CAPABILITIES.map((c, i) => (
          <article
            key={c.name}
            data-reveal
            data-reveal-delay={(i % 3) * 60}
            className="flex flex-col bg-surface p-6 transition-colors hover:bg-surface-2"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] tabular-nums text-muted-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="h-1.5 w-1.5 bg-accent/60" aria-hidden="true" />
            </div>
            <h3 className="mt-4 font-display text-lg font-medium text-foreground">
              {c.name}
            </h3>
            <p className="mt-2.5 flex-1 text-pretty text-sm leading-relaxed text-muted">
              {c.desc}
            </p>
            <ul className="mt-5 space-y-1.5 border-t border-border pt-4">
              {c.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 font-mono text-[11px] text-foreground/75"
                >
                  <span className="text-accent" aria-hidden="true">
                    ·
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
