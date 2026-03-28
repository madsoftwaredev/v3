# Skill: Writing Tests

> How to write unit tests (Vitest + RTL) and E2E tests (Playwright).

## Quick Commands

```bash
npm run test              # Vitest watch mode
npm run test:run          # Vitest single run
npx vitest run path/to/file.test.tsx   # Single file
npm run test:e2e          # Playwright (all)
npx playwright test e2e/smoke.spec.ts  # Single E2E
```

## Test File Locations

| What you're testing                       | Where the test goes                                     |
| ----------------------------------------- | ------------------------------------------------------- |
| UI component (`components/ui/`)           | `src/components/ui/__tests__/{name}.test.tsx`           |
| Utility function (`lib/`)                 | `src/lib/__tests__/{module}.test.ts`                    |
| Custom hook (`hooks/`)                    | `src/hooks/__tests__/{hook}.test.ts`                    |
| Route-specific component (`_components/`) | `src/app/{route}/_components/__tests__/{name}.test.tsx` |
| E2E / integration                         | `e2e/{feature}.spec.ts`                                 |

**Pattern:** `__tests__/` directory as a sibling to the source file. Never put tests far from their source.

## Test Infrastructure

- **Config:** `vitest.config.ts` — jsdom, globals, setup file
- **Setup:** `src/test/setup.ts` — loads `@testing-library/jest-dom/vitest`
- **Utilities:** `src/test/test-utils.tsx` — `renderWithProviders()`, `createTestQueryClient()`

## Unit Test Template

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { MyComponent } from "../my-component";

describe("MyComponent", () => {
  it("renders with default props", () => {
    render(<MyComponent>Hello</MyComponent>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("handles user interaction", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<MyComponent onClick={onClick}>Click</MyComponent>);
    await user.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("applies custom className", () => {
    render(<MyComponent className="custom">Text</MyComponent>);
    expect(screen.getByText("Text")).toHaveClass("custom");
  });
});
```

## Conventions

- Import `describe, expect, it, vi` from `"vitest"` explicitly.
- Import component via **relative path**: `from "../button"` (not `@/`).
- Use `userEvent.setup()` — never `fireEvent`.
- Query by **role** (`getByRole`) — never `getByTestId`.
- Use `.toHaveBeenCalledOnce()` over `.toHaveBeenCalledTimes(1)`.

## What to Test per Component

1. **Renders correctly** — default content visible
2. **Variants** — CVA classes applied (`expect(el.className).toContain("bg-destructive")`)
3. **Interactions** — click handlers fire, disabled prevents interaction
4. **Accessibility** — `aria-*` attributes, `sr-only` text
5. **Composition** — `asChild` renders correctly, `className` merges

## Components Needing Providers

Use `renderWithProviders` from `@/test/test-utils` when a component uses TanStack Query:

```tsx
import { renderWithProviders } from "@/test/test-utils";

it("renders loading state", () => {
  renderWithProviders(<MyQueryComponent />);
  expect(screen.getByRole("status")).toBeInTheDocument();
});
```

## Hook Tests

```tsx
import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useMyHook } from "../use-my-hook";

describe("useMyHook", () => {
  it("returns initial value", () => {
    const { result } = renderHook(() => useMyHook());
    expect(result.current.value).toBe("initial");
  });
});
```

## E2E Test Template

```tsx
import { expect, test } from "@playwright/test";

test.describe("Feature name", () => {
  test("page loads", async ({ page }) => {
    await page.goto("/route");
    await expect(page.getByRole("heading", { name: "Title" })).toBeVisible();
  });
});
```

## File Size Rule

Max 250 lines per test file. If a component has many variants/interactions, split:

- `button.test.tsx` — render, click, disabled, asChild
- `button-variants.test.tsx` — all 9 variant class assertions

## Checklist

- [ ] Test in `__tests__/` directory next to source
- [ ] Queries by role/label, not test IDs
- [ ] User interactions via `userEvent.setup()`
- [ ] Components needing providers use `renderWithProviders`
- [ ] All tests pass: `npm run test:run`
