"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { submitContact, type ContactState } from "@/app/contact/actions"

const initialState: ContactState = { status: "idle", message: "" }

const REGULATIONS = [
  "EU CRA",
  "UN R155/R156",
  "FDA Premarket",
  "ISO/SAE 21434",
  "Not sure yet",
]

const fieldClass =
  "mt-2 w-full border border-border-strong bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-2 transition-colors focus:border-accent focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"

const labelClass =
  "font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-2"

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center gap-2 border border-accent bg-accent px-5 py-2.5 font-mono text-[13px] uppercase tracking-[0.14em] text-background transition-opacity hover:opacity-90 disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send message"}
      {!pending && <span aria-hidden="true">→</span>}
    </button>
  )
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState)

  return (
    <form action={formAction} className="border border-border bg-surface p-6 md:p-8">
      {/* Honeypot */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label>
          Company website
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-accent">*</span>
          </label>
          <input id="name" name="name" required className={fieldClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClass}
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="org" className={labelClass}>
            Organization
          </label>
          <input id="org" name="org" className={fieldClass} placeholder="Company" />
        </div>
        <div>
          <label htmlFor="regulation" className={labelClass}>
            Regulation
          </label>
          <select id="regulation" name="regulation" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {REGULATIONS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-y`}
          placeholder="Tell us about your product and your deadline."
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <SubmitButton />
        {state.status !== "idle" && (
          <p
            role="status"
            aria-live="polite"
            className={`font-mono text-[12px] ${
              state.status === "success" ? "text-accent" : "text-warn"
            }`}
          >
            {state.message}
          </p>
        )}
      </div>
    </form>
  )
}
