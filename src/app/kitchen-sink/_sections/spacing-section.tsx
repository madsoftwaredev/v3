/**
 * Spacing scale visualization — shows the Tailwind spacing tokens.
 */
const spacingValues = [
  { token: "1", px: "4px" },
  { token: "2", px: "8px" },
  { token: "3", px: "12px" },
  { token: "4", px: "16px" },
  { token: "6", px: "24px" },
  { token: "8", px: "32px" },
  { token: "12", px: "48px" },
  { token: "16", px: "64px" },
  { token: "20", px: "80px" },
  { token: "24", px: "96px" },
] as const;

const radiusValues = [
  { class: "rounded-sm", label: "sm" },
  { class: "rounded-md", label: "md" },
  { class: "rounded-lg", label: "lg" },
  { class: "rounded-xl", label: "xl" },
  { class: "rounded-2xl", label: "2xl" },
  { class: "rounded-full", label: "full" },
] as const;

export const SpacingSection = () => (
  <div className="space-y-8">
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Spacing Scale</h3>
      <div className="space-y-2">
        {spacingValues.map((s) => (
          <div key={s.token} className="flex items-center gap-4">
            <span className="text-muted-foreground w-16 shrink-0 font-mono text-xs">
              {s.token} ({s.px})
            </span>
            <div className="bg-primary/20 h-4 rounded-sm" style={{ width: s.px }} />
          </div>
        ))}
      </div>
    </div>

    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Border Radius</h3>
      <div className="flex flex-wrap gap-4">
        {radiusValues.map((r) => (
          <div key={r.class} className="space-y-2 text-center">
            <div className={`bg-primary/20 border-primary/40 h-16 w-16 border-2 ${r.class}`} />
            <p className="text-muted-foreground font-mono text-xs">{r.label}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Shadows</h3>
      <div className="flex flex-wrap gap-6">
        {["shadow-sm", "shadow", "shadow-md", "shadow-lg", "shadow-xl"].map((s) => (
          <div key={s} className="space-y-2 text-center">
            <div className={`bg-card h-16 w-16 rounded-lg ${s}`} />
            <p className="text-muted-foreground font-mono text-xs">{s.replace("shadow-", "")}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
