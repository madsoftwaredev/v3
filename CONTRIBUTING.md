# Contributing

Thanks for your interest in contributing to the MAD Software v3 starter kit.

## Adding a Component

1. **Create the file**: `src/components/ui/my-component.tsx`
2. **Use design tokens**: Reference CSS variables via Tailwind classes (`bg-primary`, `text-muted-foreground`, etc.). Never hardcode colors, spacing, or font sizes.
3. **Follow the pattern**: Use CVA for variants, `cn()` for class merging, Radix primitives when applicable.
4. **Add types + docs**: Every exported component needs TypeScript types and a JSDoc `@example`.
5. **Export it**: Add to `src/components/ui/index.ts` barrel export.
6. **Showcase it**: Add a demo section in `src/app/kitchen-sink/_sections/`.
7. **Test it**: Add a test in `src/components/ui/__tests__/`.

## Component Conventions

- File naming: `kebab-case.tsx` (e.g., `hover-card.tsx`)
- Component naming: `PascalCase` (e.g., `HoverCard`)
- Props interface: `ComponentNameProps` (e.g., `HoverCardProps`)
- Variants: Use `class-variance-authority` (CVA) for multi-variant components
- Composition: Use Radix primitives for accessible interactive components
- Disabled state: Always use `disabled:opacity-50`

## Commits

- One logical change per commit
- Descriptive messages: what and why
- Prefixes: `feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `chore:`

## Before Submitting

```bash
npm run check    # lint + typecheck + format check
npm run test:run # unit tests
```

All checks must pass.
