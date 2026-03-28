# Skill: Creating Forms

> How to create validated forms with Zod + React Hook Form in this project.

## Sub-docs

- [field-patterns.md](./field-patterns.md) — Controller + Field rendering patterns for each input type

## Overview

Forms follow a 4-step pattern: **Schema → Hook → Fields → Submit.**

Stack: `zod` (validation) + `react-hook-form` (state) + `@hookform/resolvers` (bridge) + `<Field>` components (UI).

## Step 1: Define the Schema

**Check first:** If `src/lib/schemas.ts` has >10 schemas, create `src/lib/schemas/{domain}.ts` instead.

```tsx
// src/lib/schemas.ts (or schemas/{domain}.ts)
import { z } from "zod";

/** Contact form — name, email, message */
export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
export type ContactValues = z.infer<typeof contactSchema>;
```

**Naming:** Schema = `{name}Schema` (camelCase). Type = `{Name}Values` (PascalCase). Error messages = human-readable sentences.

## Step 2: Wire the Form Hook

```tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { contactSchema, type ContactValues } from "@/lib/schemas";

export default function ContactPage() {
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  function onSubmit(data: ContactValues) {
    // TODO: Replace with useApiMutation or server action
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      {/* Fields — see field-patterns.md */}
    </form>
  );
}
```

**Always provide `defaultValues`** — prevents uncontrolled-to-controlled warnings.

## Step 3: Render Fields

See [field-patterns.md](./field-patterns.md) for the full Controller + Field pattern.

## Step 4: Submit Button

```tsx
<Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
  {form.formState.isSubmitting ? "Submitting..." : "Submit"}
</Button>
```

## File Organization (Anti-Bloat)

| What           | Where it starts        | When to split           | How to split                           |
| -------------- | ---------------------- | ----------------------- | -------------------------------------- |
| Schemas        | `src/lib/schemas.ts`   | >10 schemas             | `src/lib/schemas/{domain}.ts` + barrel |
| Server actions | `src/lib/actions.ts`   | >5 actions              | `src/lib/actions/{domain}.ts` + barrel |
| Form types     | Co-located with schema | When shared by 3+ files | Move to `lib/types.ts`                 |

Import paths stay the same via barrel: `import { loginSchema } from "@/lib/schemas"`.

## Checklist

- [ ] Schema defined with JSDoc (check file size before adding to `schemas.ts`)
- [ ] Type exported as `{Name}Values`
- [ ] Page has `"use client"` directive
- [ ] `useForm` has `resolver: zodResolver(schema)` and `defaultValues`
- [ ] Each field uses `<Controller>` + `<Field>` pattern
- [ ] All inputs have `id={field.name}` and `aria-invalid`
- [ ] Submit button disabled during submission
- [ ] `autoComplete` set on relevant inputs
- [ ] File under 250 lines (extract multi-step forms into `_components/`)
