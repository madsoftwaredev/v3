# Server Actions

> `"use server"` functions for mutations without a REST endpoint.

## When to Use Server Actions vs. API Routes

| Server Actions          | API Routes                           |
| ----------------------- | ------------------------------------ |
| Form submissions        | REST APIs for multiple clients       |
| One-off mutations       | Mobile apps / third-party consumers  |
| No caching needed       | HTTP caching, pagination headers     |
| Simpler (no route file) | More control (status codes, headers) |

## Pattern

```tsx
// src/lib/actions.ts
"use server";

import { z } from "zod";
import { contactSchema } from "./schemas";

type ActionResult<T = void> =
  | { success: true; message: string; data?: T }
  | { success: false; error: string };

export async function submitContact(data: z.infer<typeof contactSchema>): Promise<ActionResult> {
  // Validate server-side (defense in depth)
  const parsed = contactSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }

  // TODO: Replace with real logic
  // await sendEmail({ ... });

  return { success: true, message: "Message sent." };
}
```

## Calling from Client Components

```tsx
"use client";

import { submitContact } from "@/lib/actions";
import { toast } from "sonner";

async function onSubmit(data: ContactValues) {
  const result = await submitContact(data);
  if (result.success) toast.success(result.message);
  else toast.error(result.error);
}
```

## Return Type Convention

Every server action returns `ActionResult`:

```tsx
{ success: true, message: "..." }        // Happy path
{ success: true, message: "...", data }   // With data
{ success: false, error: "..." }          // Validation or runtime error
```

## File Organization

Actions start in `src/lib/actions.ts`. At >5 actions, split by domain:

```
src/lib/actions/
├── auth.ts           # loginAction, registerAction
├── profile.ts        # updateProfileAction
├── contact.ts        # submitContact
└── index.ts          # Barrel: export * from "./auth"; etc.
```
