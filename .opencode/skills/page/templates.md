# Page Templates

> Copy-paste templates for every page type.

## Server Component Page

Most pages are server components (no `"use client"`).

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Page Title",
  description: "Description for OG tags and SEO.",
});

/**
 * Brief description of what this page shows.
 */
export default function MyPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Page Title</h1>
        <p className="text-muted-foreground text-sm">Page description.</p>
      </div>
      {/* Content */}
    </div>
  );
}
```

## Client Component Page

Use `"use client"` only when the page uses hooks, forms, or event handlers.

```tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mySchema, type MyValues } from "@/lib/schemas";

// NOTE: Client components cannot export metadata.

export default function MyClientPage() {
  const form = useForm<MyValues>({
    resolver: zodResolver(mySchema),
    defaultValues: {
      /* ... */
    },
  });

  function onSubmit(data: MyValues) {
    /* ... */
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Form Title</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Controller fields — see form skill */}
        </form>
      </CardContent>
    </Card>
  );
}
```

## Dynamic Route Page

For `[slug]` or `[id]` params:

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getItemBySlug(slug);
  if (!item) return {};
  return { title: item.title, description: item.excerpt };
}

export default async function ItemPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getItemBySlug(slug);
  if (!item) notFound();

  return <article>{/* render item */}</article>;
}
```

## Layout Template

```tsx
import type { ReactNode } from "react";

export default function MyLayout({ children }: { children: ReactNode }) {
  return (
    <div className="layout-classes">
      {/* Header, sidebar, etc. */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
```

**Patterns by route group:**

- **(auth):** `min-h-screen flex flex-col items-center justify-center`, `max-w-sm`
- **(dashboard):** `flex h-screen overflow-hidden`, sidebar `hidden lg:block`, main `overflow-y-auto`
- **(marketing):** `<Navbar>` + `<main className="flex-1">`

## Loading State Template

Every route should have a `loading.tsx` that matches the page structure:

```tsx
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function PageLoading() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-72" />
      </div>
      <Card>
        <CardHeader>
          <Skeleton className="h-5 w-36" />
        </CardHeader>
        <CardContent className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-12 w-full" />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
```

**Rule:** Skeleton layout must visually match the actual page to prevent layout shift.

## Error & Not Found

- `error.tsx` — `"use client"`, receives `{ error, reset }`, shows retry button
- `not-found.tsx` — server component, shows 404 message and navigation buttons
