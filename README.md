# MAD Software v3 — Next.js Starter Kit

Skip the boilerplate. Start with a complete design system, page templates, form validation, data fetching, and dark mode — all wired together and ready to customize.

This is the starter kit we use at [MAD Software](https://madsoftware.co) to launch new projects. It gives you a working SaaS app shell with 58 UI components, 9 page templates, and opinionated DX tooling so you can focus on your product instead of setup.

## Get Started

```bash
git clone https://github.com/madsoftwaredev/v3.git my-app
cd my-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). You'll see a fully styled landing page. Every page — auth, dashboard, blog, settings — is already built and working.

## Make It Yours

### 1. Rebrand (5 minutes)

The entire color system lives in one file. Change it and every component updates automatically.

1. Open `src/app/globals.css` — edit the oklch values under `:root` and `.dark`
2. Update `src/lib/constants.ts` with your app name, URL, and navigation links
3. Replace `src/app/icon.svg` with your favicon

That's it. No hunting through 58 component files.

### 2. Add Pages

Every page follows the same pattern: a server component in `src/app/` with co-located components in `_components/` and data in `_data.ts`. Route groups keep layouts clean:

- `(auth)/` — centered card layout, no navbar (login, register, forgot-password)
- `(dashboard)/` — sidebar layout with responsive collapse (dashboard, settings)
- `(marketing)/` — shared navbar layout (blog)

Create a new page:

```tsx
// src/app/(dashboard)/billing/page.tsx
import type { Metadata } from "next";

import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Billing",
  description: "Manage your subscription and payment methods.",
});

export default function BillingPage() {
  return <div>Your billing page</div>;
}
```

### 3. Build Forms

Forms use React Hook Form + Zod. Define a schema, use the `<Form>` components, and validation just works — including accessible error messages.

```tsx
// 1. Define schema in src/lib/schemas.ts
export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
});

// 2. Use it in your page
const form = useForm<z.infer<typeof contactSchema>>({
  resolver: zodResolver(contactSchema),
});
```

### 4. Fetch Data

Two patterns, depending on where you need data:

**Client-side** — TanStack Query wrappers in `src/hooks/use-api-query.ts`:

```tsx
const { data, isLoading } = useApiQuery<User[]>("/api/users", ["users"]);
```

**Server-side** — Server actions in `src/lib/actions.ts`:

```tsx
const result = await submitContactForm(formData);
```

The typed fetch client in `src/lib/api.ts` handles errors, auth headers, and base URL configuration.

### 5. Use Components

All 58 components are exported from a single barrel file. Import what you need:

```tsx
import { Button, Card, CardContent, CardHeader, CardTitle, Badge } from "@/components/ui";
```

Browse everything at [/kitchen-sink](http://localhost:3000/kitchen-sink) — it's a live component showcase with every variant.

## Tech Stack

| Category   | Technology                                         |
| ---------- | -------------------------------------------------- |
| Framework  | Next.js 16, React 19, TypeScript 5 (strict)        |
| Styling    | Tailwind CSS v4, oklch design tokens               |
| Components | Radix UI primitives, CVA variants, shadcn patterns |
| Forms      | React Hook Form + Zod + @hookform/resolvers        |
| Data       | TanStack Query, TanStack Table                     |
| State      | nuqs (URL state), usehooks-ts (client hooks)       |
| Animation  | Framer Motion, tw-animate-css                      |
| Dates      | date-fns                                           |
| Testing    | Vitest + React Testing Library, Playwright         |
| DX         | Prettier, ESLint, Husky, lint-staged               |

## Page Templates

| Route              | What it is                                           |
| ------------------ | ---------------------------------------------------- |
| `/`                | SaaS landing page (hero, features, FAQ, CTA, footer) |
| `/kitchen-sink`    | Live component showcase                              |
| `/login`           | Login with Zod validation                            |
| `/register`        | Registration with password confirmation              |
| `/forgot-password` | Password reset with success state                    |
| `/dashboard`       | Stats cards + activity table                         |
| `/settings`        | Tabbed settings (profile, appearance, notifications) |
| `/blog`            | Blog listing with cards                              |
| `/blog/[slug]`     | Blog post with prose styling                         |

## Scripts

```bash
npm run dev          # Dev server at localhost:3000
npm run build        # Production build
npm run check        # Lint + typecheck + format check (run before committing)
npm run test:run     # Unit tests (Vitest)
npm run test:e2e     # E2E tests (Playwright)
```

The pre-commit hook runs ESLint + Prettier on staged files automatically via Husky + lint-staged.

## Project Structure

```
src/
├── app/                         # Pages and layouts (App Router)
│   ├── globals.css              # Design tokens — the one file to rebrand
│   ├── (home)/_sections/        # Landing page sections
│   ├── (auth)/                  # Auth pages (centered layout)
│   ├── (dashboard)/             # Dashboard pages (sidebar layout)
│   └── (marketing)/             # Blog pages (navbar layout)
├── components/
│   ├── ui/                      # 58 UI components + barrel index.ts
│   └── layout/                  # Container, Section, Stack
├── hooks/                       # Custom hooks + usehooks-ts re-exports
├── lib/                         # Utilities, schemas, types, constants
└── test/                        # Test setup and helpers
```

**Max 250 lines per file.** When things grow, extract into domain folders with barrel re-exports. See `AGENTS.md` for the full file organization rules.

## AI-Assisted Development

This repo includes rules and skills for AI coding tools:

- **AGENTS.md** — Canonical project rules (code style, conventions, structure)
- **`.opencode/skills/`** — 9 workflow skills (component, page, form, data-fetching, hooks, api, testing, tokens, workflow)
- **Tool-specific configs** — `.cursor/rules/`, `.github/copilot-instructions.md`, `CLAUDE.md`, `.windsurfrules`, `.clinerules`

Load the relevant skill before making changes. The skills contain patterns, examples, and file organization guidance so AI tools produce code that matches the project conventions.

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/madsoftwaredev/v3)

Or deploy anywhere that runs Node.js:

```bash
npm run build
npm run start
```

## License

MIT — see [LICENSE](./LICENSE) for details.
