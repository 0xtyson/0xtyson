/**
 * Thin PCB-trace divider: right-angle turns with small via dots,
 * drawn in the accent color at low opacity.
 */
export function PcbDivider({ label }: { label?: string }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-6" aria-hidden="true">
      <div className="relative">
        <svg
          viewBox="0 0 1200 40"
          width="100%"
          height="40"
          preserveAspectRatio="none"
          className="block text-accent"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.28"
          >
            {/* Main horizontal trace with right-angle jogs */}
            <path d="M0 20 H180 L200 8 H420 L440 20 H760 L780 32 H980 L1000 20 H1200" />
            {/* Secondary branch traces */}
            <path d="M200 8 V4" strokeOpacity="0.2" />
            <path d="M780 32 V36" strokeOpacity="0.2" />
            <path d="M440 20 L460 20" strokeOpacity="0.2" />
          </g>
          {/* Via dots at the corners */}
          <g fill="currentColor">
            {[
              [180, 20],
              [200, 8],
              [420, 8],
              [440, 20],
              [760, 20],
              [780, 32],
              [980, 32],
              [1000, 20],
            ].map(([cx, cy], i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r="2.4" fillOpacity="0.35" />
                <circle cx={cx} cy={cy} r="1" fillOpacity="0.9" />
              </g>
            ))}
          </g>
        </svg>
        {label ? (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-2">
            {label}
          </span>
        ) : null}
      </div>
    </div>
  )
}
