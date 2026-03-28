/**
 * Typography scale showcase — every text size and weight.
 */
const typeSizes = [
  { class: "text-xs", label: "xs (12px)" },
  { class: "text-sm", label: "sm (14px)" },
  { class: "text-base", label: "base (16px)" },
  { class: "text-lg", label: "lg (18px)" },
  { class: "text-xl", label: "xl (20px)" },
  { class: "text-2xl", label: "2xl (24px)" },
  { class: "text-3xl", label: "3xl (30px)" },
  { class: "text-4xl", label: "4xl (36px)" },
  { class: "text-5xl", label: "5xl (48px)" },
] as const;

const fontWeights = [
  { class: "font-light", label: "Light (300)" },
  { class: "font-normal", label: "Normal (400)" },
  { class: "font-medium", label: "Medium (500)" },
  { class: "font-semibold", label: "Semibold (600)" },
  { class: "font-bold", label: "Bold (700)" },
] as const;

export const TypographySection = () => (
  <div className="space-y-8">
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Type Scale</h3>
      {typeSizes.map((size) => (
        <div key={size.class} className="flex items-baseline gap-4">
          <span className="text-muted-foreground w-28 shrink-0 font-mono text-xs">
            {size.label}
          </span>
          <p className={size.class}>The quick brown fox jumps over the lazy dog</p>
        </div>
      ))}
    </div>

    <div className="space-y-3">
      <h3 className="text-lg font-semibold">Font Weights</h3>
      {fontWeights.map((weight) => (
        <div key={weight.class} className="flex items-baseline gap-4">
          <span className="text-muted-foreground w-28 shrink-0 font-mono text-xs">
            {weight.label}
          </span>
          <p className={`text-lg ${weight.class}`}>The quick brown fox jumps over the lazy dog</p>
        </div>
      ))}
    </div>

    <div className="space-y-2">
      <h3 className="text-lg font-semibold">Font Families</h3>
      <p className="font-sans">Sans (Geist): The quick brown fox jumps over the lazy dog</p>
      <p className="font-mono">Mono (Geist Mono): The quick brown fox jumps over the lazy dog</p>
    </div>
  </div>
);
