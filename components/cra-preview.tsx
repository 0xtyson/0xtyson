import { Eyebrow } from "./eyebrow"
import { CraCheckTool } from "./cra-check-tool"

export function CraPreview() {
  return (
    <section
      id="cra-check"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 md:py-28"
    >
      <div data-reveal className="max-w-2xl">
        <Eyebrow index="02">CRA Scope Check</Eyebrow>
        <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Am I in scope — and which category?
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted">
          A quick determination with the article and annex citations behind
          every step. Preview it here, then open the full four-question tool.
        </p>
      </div>

      <div data-reveal data-reveal-delay="80" className="mt-12">
        <CraCheckTool compact />
      </div>
    </section>
  )
}
