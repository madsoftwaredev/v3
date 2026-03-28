# Skill: Design Token System

> How the design token system works and how to add/modify tokens.

## Architecture

All tokens live in `src/app/globals.css`. The flow is:

```
:root / .dark (CSS vars)  →  @theme inline (Tailwind registration)  →  Components (Tailwind classes)
```

**Never hardcode colors in components.** Always use token-based Tailwind classes.

## File Structure in globals.css

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  /* Maps CSS vars to Tailwind utilities */
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  /* ... */
}

:root {
  /* Light mode values (oklch) */
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
}

.dark {
  /* Dark mode values (oklch) */
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

## Token Categories

| Category         | Tokens                                      | Tailwind Classes                                               |
| ---------------- | ------------------------------------------- | -------------------------------------------------------------- |
| **Surfaces**     | `background`, `card`, `popover`             | `bg-background`, `bg-card`, `bg-popover` + `text-*-foreground` |
| **Actions**      | `primary`, `secondary`                      | `bg-primary text-primary-foreground`                           |
| **Muted/Accent** | `muted`, `accent`                           | `bg-muted text-muted-foreground`, `bg-accent`                  |
| **Semantic**     | `destructive`, `success`, `warning`, `info` | `bg-destructive`, `bg-success`, etc.                           |
| **Overlay**      | `overlay`                                   | `bg-overlay`                                                   |
| **Borders**      | `border`, `input`, `ring`                   | `border-border`, `border-input`, `ring-ring`                   |
| **Charts**       | `chart-1` through `chart-5`                 | `bg-chart-1`, `text-chart-2`, etc.                             |
| **Radius**       | `--radius` base                             | `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`         |

## Color Format: oklch

All colors use the oklch color space for perceptual uniformity:

```css
--primary: oklch(0.205 0 0); /* lightness chroma hue */
--destructive: oklch(0.577 0.245 27.325); /* with chroma and hue */
--overlay: oklch(0 0 0 / 80%); /* with alpha */
```

Use oklch when adding new colors. HSL and hex are not used.

## How to Add a New Semantic Color

Example: adding a `--brand` color.

### 1. Add values to `:root` and `.dark`:

```css
:root {
  --brand: oklch(0.55 0.2 265);
  --brand-foreground: oklch(0.985 0 0);
}

.dark {
  --brand: oklch(0.65 0.22 265);
  --brand-foreground: oklch(0.145 0 0);
}
```

### 2. Register in `@theme inline`:

```css
@theme inline {
  --color-brand: var(--brand);
  --color-brand-foreground: var(--brand-foreground);
}
```

### 3. Use in components:

```tsx
<div className="bg-brand text-brand-foreground">Branded content</div>
```

That's it. Tailwind v4 automatically creates `bg-brand`, `text-brand`, `border-brand`, etc.

## How to Add a New Animation

### 1. Define the keyframes in `@theme inline`:

```css
@theme inline {
  --animate-bounce-in: bounce-in 0.3s ease-out;

  @keyframes bounce-in {
    0% {
      transform: scale(0.9);
      opacity: 0;
    }
    50% {
      transform: scale(1.02);
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
}
```

### 2. Use in components:

```tsx
<div className="animate-bounce-in">Content</div>
```

## How to Rebrand

1. Open `src/app/globals.css`
2. Change oklch values in `:root` (light) and `.dark` (dark)
3. Update `src/lib/constants.ts` with your brand name, URL, etc.
4. Every component automatically picks up new tokens

## Common Mistakes to Avoid

| Wrong                 | Right                     | Why                                                   |
| --------------------- | ------------------------- | ----------------------------------------------------- |
| `bg-[#1a1a2e]`        | `bg-primary`              | Hardcoded color won't update on rebrand               |
| `text-gray-500`       | `text-muted-foreground`   | Gray scale isn't semantic                             |
| `border-[1px]`        | `border`                  | Border color comes from `border-border` in base layer |
| `rounded-[10px]`      | `rounded-lg`              | Radius scale is tokenized                             |
| `bg-black/80`         | `bg-overlay`              | Overlay color is a token                              |
| `focus:ring-blue-500` | `focus-visible:ring-ring` | Ring color is tokenized                               |

## Token Compliance Check

Before committing, verify no hardcoded values snuck in:

```bash
# Check for hardcoded colors (should return 0 results in components)
grep -r "bg-\[#" src/components/ src/app/
grep -r "text-\[#" src/components/ src/app/
grep -r "border-\[#" src/components/ src/app/
```
