# MAD Software v3 — Next.js Starter Kit

A production-ready Next.js starter kit with a 57+ component design system, design tokens, dark mode, page templates, and everything you need to ship fast.

## Quick Start

```bash
# Clone the repo
git clone https://github.com/madsoftwaredev/v3.git
cd v3

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the homepage.

## What's Included

### Design System

- **57+ UI components** — Buttons, Cards, Dialogs, Tables, Forms, Menus, and more
- **Design tokens** — oklch colors, spacing scale, radius scale, shadows, typography
- **Dark mode** — Class-based via `next-themes`, system preference detection
- **Token compliance** — Every component uses CSS variables, zero hardcoded values

### Page Templates

| Route              | Description                                          |
| ------------------ | ---------------------------------------------------- |
| `/`                | SaaS landing page (hero, features, FAQ, CTA, footer) |
| `/kitchen-sink`    | Component showcase with 20 categorized sections      |
| `/login`           | Login form with Zod validation                       |
| `/register`        | Registration form with password confirmation         |
| `/forgot-password` | Password reset flow with success state               |
| `/dashboard`       | Dashboard with stats cards and activity table        |
| `/settings`        | Tabbed settings (profile, appearance, notifications) |
| `/blog`            | Blog listing with cards                              |
| `/blog/[slug]`     | Blog post detail with prose styling                  |

### Tech Stack

| Category   | Technology                                         |
| ---------- | -------------------------------------------------- |
| Framework  | Next.js 16, React 19, TypeScript 5                 |
| Styling    | Tailwind CSS v4, oklch design tokens               |
| Components | Radix UI primitives, CVA variants, shadcn patterns |
| Forms      | React Hook Form + Zod + @hookform/resolvers        |
| Data       | TanStack Query, TanStack Table                     |
| State      | nuqs (URL state), usehooks-ts (client hooks)       |
| Animation  | Framer Motion, tw-animate-css                      |
| Dates      | date-fns                                           |
| Testing    | Vitest + React Testing Library, Playwright         |
| DX         | Prettier, ESLint, Husky, lint-staged               |

## Project Structure

```
src/
├── app/
│   ├── globals.css              # DESIGN TOKENS — edit this to rebrand
│   ├── layout.tsx               # Root layout (providers, fonts, toaster)
│   ├── page.tsx                 # Homepage
│   ├── loading.tsx              # Root loading state
│   ├── error.tsx                # Global error boundary
│   ├── not-found.tsx            # Custom 404
│   ├── sitemap.ts               # Dynamic sitemap generation
│   ├── robots.ts                # robots.txt generation
│   ├── (home)/_sections/        # Homepage sections
│   ├── (auth)/                  # Auth pages (login, register, forgot-password)
│   ├── (dashboard)/             # Dashboard + settings (sidebar layout)
│   ├── (marketing)/             # Blog pages (navbar layout)
│   └── kitchen-sink/            # Component showcase
├── components/
│   ├── ui/                      # 57+ UI components with barrel export
│   ├── layout/                  # Container, Section, Stack
│   ├── theme-provider.tsx       # next-themes wrapper
│   └── query-provider.tsx       # TanStack Query wrapper
├── hooks/
│   └── index.ts                 # Re-exports from usehooks-ts
├── lib/
│   ├── utils.ts                 # cn() helper
│   ├── constants.ts             # Site config, navigation links
│   ├── types.ts                 # Utility types
│   ├── metadata.ts              # createMetadata() helper
│   └── schemas.ts               # Zod validation schemas
└── test/
    ├── setup.ts                 # Vitest setup
    └── test-utils.tsx           # Custom render with providers
```

## How to Rebrand

1. Open `src/app/globals.css`
2. Edit the oklch color values under `:root` (light) and `.dark` (dark)
3. Update `src/lib/constants.ts` with your site name, URL, and navigation
4. Replace `src/app/favicon.ico` with your favicon
5. Done — every component automatically picks up the new tokens

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Run ESLint with auto-fix
npm run format       # Format with Prettier
npm run format:check # Check formatting
npm run typecheck    # TypeScript type checking
npm run check        # Run lint + typecheck + format:check
npm run test         # Run Vitest in watch mode
npm run test:run     # Run Vitest once
npm run test:e2e     # Run Playwright E2E tests
```

## Adding a Component

1. Create `src/components/ui/my-component.tsx`
2. Use design tokens (never hardcode colors/spacing)
3. Add TypeScript types and JSDoc documentation
4. Export from `src/components/ui/index.ts`
5. Add a demo section in `src/app/kitchen-sink/_sections/`

## Deployment

Deploy to [Vercel](https://vercel.com) with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/madsoftwaredev/v3)

Or build and deploy anywhere that supports Node.js:

```bash
npm run build
npm run start
```

## License

MIT — see [LICENSE](./LICENSE) for details.
