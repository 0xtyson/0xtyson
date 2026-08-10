"use client"

import { useMemo, useState } from "react"
import Link from "next/link"

/**
 * CRA scope + classification tool.
 * Four questions produce a determination with a live decision trail that
 * cites the CRA articles / annexes behind each step.
 */

type Answer = "yes" | "no" | null

type TrailEntry = {
  label: string
  value: string
  citation: string
  tone: "neutral" | "accent" | "warn" | "muted"
}

const QUESTIONS = [
  {
    id: "digital",
    q: "Does the product have digital elements?",
    help: "Hardware or software placed on the EU market whose intended use includes a direct or indirect data connection to a device or network.",
    citation: "CRA Art. 3(1) — definition of ‘product with digital elements’",
  },
  {
    id: "commercial",
    q: "Is it made available on the EU market in the course of a commercial activity?",
    help: "Free and open-source software developed or supplied outside a commercial activity is out of scope.",
    citation: "CRA Art. 2 & Recital 18 — scope and FOSS exclusion",
  },
  {
    id: "classII",
    q: "Is it a Class II important product (e.g. OS, firewalls, or industrial IAM)?",
    help: "Annex III lists important products. Class II covers higher-risk categories such as operating systems and firewalls.",
    citation: "CRA Annex III — important products, Class II",
  },
  {
    id: "critical",
    q: "Is it a critical product (e.g. hardware security modules, smart meter gateways)?",
    help: "Annex IV lists critical products that may require European cybersecurity certification.",
    citation: "CRA Annex IV — critical products",
  },
] as const

function classify(answers: Record<string, Answer>) {
  const trail: TrailEntry[] = []

  // Q1 digital elements
  if (answers.digital === "no") {
    trail.push({
      label: "Scope",
      value: "Out of scope",
      citation: "CRA Art. 3(1)",
      tone: "muted",
    })
    return {
      result: "OUT OF SCOPE",
      summary:
        "Without digital elements the product is not a ‘product with digital elements’ and the CRA does not apply.",
      tone: "muted" as const,
      trail,
    }
  }
  if (answers.digital === "yes") {
    trail.push({
      label: "Digital elements",
      value: "Present",
      citation: "CRA Art. 3(1)",
      tone: "accent",
    })
  }

  // Q2 commercial activity
  if (answers.commercial === "no") {
    trail.push({
      label: "Commercial activity",
      value: "No — FOSS/non-commercial",
      citation: "CRA Art. 2, Recital 18",
      tone: "muted",
    })
    return {
      result: "LIKELY OUT OF SCOPE",
      summary:
        "Products supplied outside a commercial activity are generally excluded. Confirm whether monetisation or commercial support applies.",
      tone: "muted" as const,
      trail,
    }
  }
  if (answers.commercial === "yes") {
    trail.push({
      label: "Market placement",
      value: "Commercial",
      citation: "CRA Art. 2",
      tone: "accent",
    })
  }

  // Q4 critical takes precedence
  if (answers.critical === "yes") {
    trail.push({
      label: "Classification",
      value: "Critical product",
      citation: "CRA Annex IV",
      tone: "warn",
    })
    return {
      result: "CRITICAL",
      summary:
        "Critical products may require a European cybersecurity certificate in addition to conformity assessment. Third-party involvement is expected.",
      tone: "warn" as const,
      trail,
    }
  }

  // Q3 class II important
  if (answers.classII === "yes") {
    trail.push({
      label: "Classification",
      value: "Important — Class II",
      citation: "CRA Annex III",
      tone: "warn",
    })
    return {
      result: "IMPORTANT · CLASS II",
      summary:
        "Class II important products require a third-party (Notified Body) conformity assessment, or conformity to a harmonised standard applied in full.",
      tone: "warn" as const,
      trail,
    }
  }

  if (
    answers.digital === "yes" &&
    answers.commercial === "yes" &&
    answers.classII === "no" &&
    answers.critical === "no"
  ) {
    trail.push({
      label: "Classification",
      value: "Default category",
      citation: "CRA Art. 32 — conformity assessment",
      tone: "accent",
    })
    return {
      result: "DEFAULT",
      summary:
        "Default products may use internal control (self-assessment) against the Annex I essential requirements, with technical documentation retained.",
      tone: "accent" as const,
      trail,
    }
  }

  return null
}

const toneClass: Record<TrailEntry["tone"], string> = {
  neutral: "text-foreground/80",
  accent: "text-accent",
  warn: "text-warn",
  muted: "text-muted",
}

const resultToneClass = {
  accent: "border-accent/50 text-accent",
  warn: "border-warn/50 text-warn",
  muted: "border-border-strong text-muted",
}

export function CraCheckTool({ compact = false }: { compact?: boolean }) {
  const [answers, setAnswers] = useState<Record<string, Answer>>({
    digital: null,
    commercial: null,
    classII: null,
    critical: null,
  })

  const outcome = useMemo(() => classify(answers), [answers])
  const answered = Object.values(answers).filter(Boolean).length

  function set(id: string, value: Answer) {
    setAnswers((prev) => ({ ...prev, [id]: value }))
  }

  function reset() {
    setAnswers({ digital: null, commercial: null, classII: null, critical: null })
  }

  // In compact mode, only show the first two questions as a teaser.
  const visibleQuestions = compact ? QUESTIONS.slice(0, 2) : QUESTIONS

  return (
    <div className="grid gap-px border border-border bg-border lg:grid-cols-[1.4fr_1fr]">
      {/* Questions column */}
      <div className="bg-surface p-6 md:p-8">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-accent">
            Scope &amp; Classification
          </span>
          <span className="font-mono text-[11px] tabular-nums text-muted-2">
            {answered.toString().padStart(2, "0")}/
            {QUESTIONS.length.toString().padStart(2, "0")}
          </span>
        </div>

        <ol className="mt-6 space-y-5">
          {visibleQuestions.map((question, i) => {
            const value = answers[question.id]
            return (
              <li
                key={question.id}
                className="border-t border-border pt-5 first:border-t-0 first:pt-0"
              >
                <div className="flex gap-3">
                  <span className="font-mono text-[11px] tabular-nums text-muted-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-medium leading-snug text-foreground">
                      {question.q}
                    </p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                      {question.help}
                    </p>
                    <p className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.1em] text-muted-2">
                      {question.citation}
                    </p>

                    <div className="mt-3 flex gap-2" role="group" aria-label={question.q}>
                      {(["yes", "no"] as const).map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          aria-pressed={value === opt}
                          onClick={() => set(question.id, opt)}
                          className={`min-w-16 border px-3 py-1.5 font-mono text-[12px] uppercase tracking-[0.12em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                            value === opt
                              ? "border-accent bg-accent-dim text-accent"
                              : "border-border-strong text-muted hover:border-accent/40 hover:text-foreground"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>

        {compact ? (
          <Link
            href="/cra-check"
            className="mt-7 inline-flex items-center gap-2 border border-accent bg-accent px-4 py-2 font-mono text-[12px] uppercase tracking-[0.14em] text-background transition-opacity hover:opacity-90"
          >
            Open full CRA check
            <span aria-hidden="true">→</span>
          </Link>
        ) : (
          answered > 0 && (
            <button
              type="button"
              onClick={reset}
              className="mt-7 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-2 underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Reset
            </button>
          )
        )}
      </div>

      {/* Decision trail column */}
      <div className="bg-background p-6 md:p-8">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-2">
          Decision Trail
        </span>

        {outcome ? (
          <div className="mt-5">
            <div
              className={`inline-flex items-center border px-3 py-1.5 font-mono text-[12px] uppercase tracking-[0.14em] ${resultToneClass[outcome.tone]}`}
            >
              {outcome.result}
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-muted">
              {outcome.summary}
            </p>

            <ul className="mt-6 space-y-3 border-t border-border pt-5">
              {outcome.trail.map((entry, i) => (
                <li key={i} className="font-mono text-[11px] leading-relaxed">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="uppercase tracking-[0.12em] text-muted-2">
                      {entry.label}
                    </span>
                    <span className={toneClass[entry.tone]}>{entry.value}</span>
                  </div>
                  <p className="mt-0.5 text-muted-2">{entry.citation}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="mt-5 font-mono text-[12px] leading-relaxed text-muted-2">
            {compact
              ? "Answer the questions to preview your determination. The full tool covers Annex III/IV classification."
              : "Awaiting input. Answer each question to build a cited determination."}
          </p>
        )}

        {!compact && (
          <p className="mt-8 border-t border-border pt-5 font-mono text-[10.5px] leading-relaxed text-muted-2">
            Guidance only — not legal advice. Final classification depends on
            the full product context and the applicable Annex I essential
            requirements.
          </p>
        )}
      </div>
    </div>
  )
}
