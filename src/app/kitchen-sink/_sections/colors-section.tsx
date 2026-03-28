/**
 * Design token color swatches — shows every semantic color in the system.
 */
const colorTokens = [
  { name: "background", fg: "foreground" },
  { name: "card", fg: "card-foreground" },
  { name: "popover", fg: "popover-foreground" },
  { name: "primary", fg: "primary-foreground" },
  { name: "secondary", fg: "secondary-foreground" },
  { name: "muted", fg: "muted-foreground" },
  { name: "accent", fg: "accent-foreground" },
  { name: "destructive", fg: "destructive-foreground" },
  { name: "success", fg: "success-foreground" },
  { name: "warning", fg: "warning-foreground" },
  { name: "info", fg: "info-foreground" },
] as const;

const utilityTokens = [
  { name: "border", label: "Border" },
  { name: "input", label: "Input" },
  { name: "ring", label: "Ring" },
] as const;

export const ColorsSection = () => (
  <div className="space-y-6">
    <div>
      <h3 className="mb-3 text-lg font-semibold">Semantic Colors</h3>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {colorTokens.map((token) => (
          <div key={token.name} className="space-y-1.5">
            <div
              className="flex h-16 items-end rounded-lg border p-2"
              style={{ backgroundColor: `var(--${token.name})` }}
            >
              <span
                className="font-mono text-xs font-medium"
                style={{ color: `var(--${token.fg})` }}
              >
                {token.name}
              </span>
            </div>
            <p className="text-muted-foreground font-mono text-xs">--{token.name}</p>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h3 className="mb-3 text-lg font-semibold">Utility Colors</h3>
      <div className="grid grid-cols-3 gap-3">
        {utilityTokens.map((token) => (
          <div key={token.name} className="space-y-1.5">
            <div
              className="h-12 rounded-lg border"
              style={{ backgroundColor: `var(--${token.name})` }}
            />
            <p className="text-muted-foreground font-mono text-xs">--{token.name}</p>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h3 className="mb-3 text-lg font-semibold">Chart Colors</h3>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((n) => (
          <div key={n} className="flex-1 space-y-1.5">
            <div className="h-12 rounded-lg" style={{ backgroundColor: `var(--chart-${n})` }} />
            <p className="text-muted-foreground text-center font-mono text-xs">chart-{n}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
