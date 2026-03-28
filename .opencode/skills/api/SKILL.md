# Skill: API Routes

> How to create Next.js API route handlers.

## Sub-docs

- [file-organization.md](./file-organization.md) — Directory structure, shared utilities, scaling

## File Convention

```
src/app/api/
├── health/route.ts           # GET /api/health
├── users/route.ts            # GET, POST /api/users
├── users/[id]/route.ts       # GET, PATCH, DELETE /api/users/:id
└── posts/route.ts            # GET, POST /api/posts
```

## Basic Route Handler

```tsx
import { NextResponse } from "next/server";

/** GET /api/users — returns all users. */
export async function GET() {
  const users = []; // TODO: fetch from database
  return NextResponse.json(users);
}

/** POST /api/users — creates a new user. */
export async function POST(request: Request) {
  const body = await request.json();
  const parsed = createUserSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { message: parsed.error.issues[0]?.message ?? "Validation failed" },
      { status: 400 },
    );
  }

  const user = { id: crypto.randomUUID(), ...parsed.data };
  return NextResponse.json(user, { status: 201 });
}
```

## Dynamic Route

File: `src/app/api/users/[id]/route.ts`

```tsx
interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(_request: Request, { params }: RouteParams) {
  const { id } = await params;
  // Fetch, validate, return
}
```

**Key:** `params` is a `Promise` in Next.js 16 — always `await`.

## Response Conventions

```tsx
NextResponse.json(data); // 200 OK
NextResponse.json(newItem, { status: 201 }); // 201 Created
new NextResponse(null, { status: 204 }); // 204 No Content
NextResponse.json({ message: "Not found" }, { status: 404 }); // Error
```

**Error shape:** Always `{ message: string }`. The `api()` client reads this.

## Validation

Use Zod schemas from `src/lib/schemas.ts`:

```tsx
const parsed = schema.safeParse(body);
if (!parsed.success) {
  return NextResponse.json(
    { message: parsed.error.issues[0]?.message ?? "Validation failed" },
    { status: 400 },
  );
}
```

## Extraction Rule (Anti-Bloat)

If a `route.ts` exceeds 250 lines, extract into co-located helpers:

```
src/app/api/users/
├── route.ts          # Thin handlers — validate, call service, return response
├── [id]/route.ts     # Dynamic route handlers
└── _lib.ts           # Shared: validation helpers, auth checks, business logic
```

If `_lib.ts` itself exceeds 250 lines:

```
src/app/api/users/
├── route.ts
├── [id]/route.ts
└── _lib/
    ├── validation.ts
    ├── service.ts
    └── index.ts      # Barrel
```

## Checklist

- [ ] Route at `src/app/api/{resource}/route.ts`
- [ ] Exports named HTTP methods (`GET`, `POST`, `PATCH`, `DELETE`)
- [ ] Request body validated with Zod
- [ ] Errors return `{ message: string }`
- [ ] Dynamic params awaited (`Promise<{ id: string }>`)
- [ ] JSDoc on each handler
- [ ] Unused `request` prefixed: `_request: Request`
- [ ] File under 250 lines (extract to `_lib.ts` if needed)
