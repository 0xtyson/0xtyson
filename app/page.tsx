import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { RevealObserver } from "@/components/reveal-observer"
import { Hero } from "@/components/hero"
import { Regulations } from "@/components/regulations"
import { CraPreview } from "@/components/cra-preview"
import { Capabilities } from "@/components/capabilities"
import { Process } from "@/components/process"
import { ClosingCta } from "@/components/closing-cta"
import { PcbDivider } from "@/components/pcb-divider"

export default function HomePage() {
  return (
    <>
      <RevealObserver />
      <SiteHeader />
      <main id="main">
        <Hero />
        <Regulations />
        <PcbDivider label="SCOPE" />
        <CraPreview />
        <PcbDivider label="CAPABILITIES" />
        <Capabilities />
        <PcbDivider label="PROCESS" />
        <Process />
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  )
}
