/**
 * Mock blog data — placeholder for your CMS or API.
 *
 * Replace this with TanStack Query hooks fetching from your real API/CMS:
 *
 * @example
 * const { data: posts } = useQuery({
 *   queryKey: ["posts"],
 *   queryFn: () => fetch("/api/posts").then(r => r.json()),
 * });
 */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "getting-started-with-design-tokens",
    title: "Getting Started with Design Tokens",
    excerpt:
      "Learn how design tokens create a single source of truth for your entire UI. Change one variable, and your whole app updates.",
    content: `Design tokens are the atomic building blocks of a design system. They represent the smallest design decisions — colors, spacing, typography, shadows — as named variables.

## Why Design Tokens?

Instead of hardcoding \`#1a1a2e\` across 47 files, you define \`--primary\` once in your CSS. When the brand color changes, you update one line.

This starter kit uses oklch color space for perceptual uniformity. That means a \`lightness: 0.5\` blue and a \`lightness: 0.5\` red actually look equally bright to the human eye.

## How It Works Here

All tokens live in \`globals.css\` under \`:root\` (light mode) and \`.dark\` (dark mode). The \`@theme inline\` block in Tailwind v4 registers them as utilities.

\`\`\`css
:root {
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
}
\`\`\`

Every component references these tokens via Tailwind classes like \`bg-primary\` and \`text-primary-foreground\`. Zero hardcoded values.`,
    author: "MAD Software",
    publishedAt: "2026-03-15",
    readingTime: "4 min read",
    tags: ["Design Systems", "CSS", "Tokens"],
  },
  {
    slug: "building-forms-with-zod-and-react-hook-form",
    title: "Building Forms with Zod and React Hook Form",
    excerpt:
      "The definitive pattern for type-safe, validated forms in Next.js. Zod schemas, React Hook Form, and our Field components.",
    content: `Forms are the most common source of bugs in web applications. Type mismatches, missing validation, inconsistent error display — the list goes on.

## The Stack

- **Zod** for schema definition and validation
- **React Hook Form** for performant form state management
- **@hookform/resolvers** to connect them together

## Define Once, Validate Everywhere

\`\`\`typescript
// src/lib/schemas.ts
export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
\`\`\`

The same schema validates on the client (React Hook Form) and can be reused on the server (API routes, server actions).

## Wire It Up

\`\`\`tsx
const form = useForm<LoginValues>({
  resolver: zodResolver(loginSchema),
  defaultValues: { email: "", password: "" },
});
\`\`\`

That's it. Type-safe, validated, and the error messages come from your Zod schema.`,
    author: "MAD Software",
    publishedAt: "2026-03-20",
    readingTime: "5 min read",
    tags: ["Forms", "Validation", "React"],
  },
  {
    slug: "tanstack-query-patterns-for-nextjs",
    title: "TanStack Query Patterns for Next.js",
    excerpt:
      "Server state management done right. Caching, deduplication, background refetching, and optimistic updates.",
    content: `TanStack Query (formerly React Query) is the standard for managing server state in React applications. It handles caching, background refetching, stale-while-revalidate, and much more.

## Setup

Wrap your app with \`QueryProvider\` (already done in this starter kit's root layout).

## Basic Query

\`\`\`tsx
import { useQuery } from "@tanstack/react-query";

function UserProfile({ userId }: { userId: string }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => fetch(\`/api/users/\${userId}\`).then(r => r.json()),
  });

  if (isLoading) return <Skeleton />;
  if (error) return <ErrorFallback error={error} />;
  return <ProfileCard user={data} />;
}
\`\`\`

## Mutations

\`\`\`tsx
const mutation = useMutation({
  mutationFn: (data: ProfileValues) => fetch("/api/profile", {
    method: "PATCH",
    body: JSON.stringify(data),
  }),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["user"] });
    toast.success("Profile updated!");
  },
});
\`\`\`

The key insight: queries are for reading, mutations are for writing. TanStack Query handles the cache invalidation between them.`,
    author: "MAD Software",
    publishedAt: "2026-03-25",
    readingTime: "6 min read",
    tags: ["React", "Data Fetching", "TanStack Query"],
  },
];

/** Find a single blog post by slug */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
