"use client"

import { useMemo } from "react"

/**
 * Full-bleed hex-dump layer for the hero. Sits at ~8% opacity behind the
 * headline with a slow vertical scan line passing over it.
 * Rows are static text; only the drift + scan line animate.
 */

function makeRow(offset: number): string {
  // Deterministic pseudo-random bytes so SSR and client markup match.
  let seed = offset * 2654435761
  const rand = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff
    return seed / 0x7fffffff
  }
  const addr = (offset * 16).toString(16).padStart(8, "0")
  const bytes: string[] = []
  const ascii: string[] = []
  for (let i = 0; i < 16; i++) {
    const b = Math.floor(rand() * 256)
    bytes.push(b.toString(16).padStart(2, "0"))
    ascii.push(b >= 32 && b < 127 ? String.fromCharCode(b) : ".")
  }
  const grouped =
    bytes.slice(0, 8).join(" ") + "  " + bytes.slice(8).join(" ")
  return `${addr}  ${grouped}  |${ascii.join("")}|`
}

export function HexBackdrop() {
  const rows = useMemo(() => {
    const count = 80
    return Array.from({ length: count }, (_, i) => makeRow(i))
  }, [])

  const block = rows.join("\n")

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Drifting hex rows at low opacity */}
      <div className="absolute inset-0 opacity-[0.08]">
        <pre
          className="absolute left-0 top-0 m-0 w-full whitespace-pre font-mono text-[11px] leading-[1.5] text-foreground [animation:hexdrift_60s_linear_infinite]"
          style={{ letterSpacing: "0.02em" }}
        >
          {block + "\n" + block}
        </pre>
      </div>

      {/* Slow scan line traveling top -> bottom */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-x-0 h-40 [animation:scanline_7s_linear_infinite]"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(255,176,32,0.06) 45%, rgba(255,176,32,0.10) 50%, rgba(255,176,32,0.06) 55%, transparent)",
          }}
        />
      </div>

      {/* Vignette so the headline stays fully legible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 40%, transparent 40%, #0a0a0b 92%)",
        }}
      />
    </div>
  )
}
