export function Eyebrow({
  index,
  children,
}: {
  index: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
      <span className="text-accent">{index}</span>
      <span className="h-px w-6 bg-border-strong" aria-hidden="true" />
      <span>{children}</span>
    </div>
  )
}
