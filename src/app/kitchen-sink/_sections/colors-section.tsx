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
      <h3 className="text-lg font-semibold mb-3">Semantic Colors</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {colorTokens.map((token) => (
          <div key={token.name} className="space-y-1.5">
            <div
              className="h-16 rounded-lg border flex items-end p-2"
              style={{ backgroundColor: `var(--${token.name})` }}
            >
              <span
                className="text-xs font-mono font-medium"
                style={{ color: `var(--${token.fg})` }}
              >
                {token.name}
              </span>
            </div>
            <p className="text-xs text-muted-foreground font-mono">
              --{token.name}
            </p>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-3">Utility Colors</h3>
      <div className="grid grid-cols-3 gap-3">
        {utilityTokens.map((token) => (
          <div key={token.name} className="space-y-1.5">
            <div
              className="h-12 rounded-lg border"
              style={{ backgroundColor: `var(--${token.name})` }}
            />
            <p className="text-xs text-muted-foreground font-mono">
              --{token.name}
            </p>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-3">Chart Colors</h3>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((n) => (
          <div key={n} className="space-y-1.5 flex-1">
            <div
              className="h-12 rounded-lg"
              style={{ backgroundColor: `var(--chart-${n})` }}
            />
            <p className="text-xs text-muted-foreground font-mono text-center">
              chart-{n}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
