# API Route File Organization

> How API routes scale as the app grows.

## Structure Per Resource

Each API resource gets its own directory:

```
src/app/api/
├── health/route.ts                  # Simple health check
├── auth/
│   ├── login/route.ts               # POST /api/auth/login
│   └── register/route.ts            # POST /api/auth/register
├── users/
│   ├── route.ts                     # GET /api/users, POST /api/users
│   ├── [id]/route.ts                # GET/PATCH/DELETE /api/users/:id
│   └── _lib.ts                      # Shared validation, auth checks
├── posts/
│   ├── route.ts                     # GET /api/posts, POST /api/posts
│   ├── [slug]/route.ts              # GET /api/posts/:slug
│   └── _lib.ts                      # Post-specific helpers
└── _lib/                            # Shared across ALL API routes
    ├── auth.ts                      # verifyToken(), requireAuth()
    ├── errors.ts                    # errorResponse(), notFoundResponse()
    └── pagination.ts                # parsePagination(), paginatedResponse()
```

## Rules

- **One `route.ts` per URL path.** Never multiple resources in one file.
- **Nested routes** for sub-resources: `api/users/[id]/posts/route.ts`.
- **`_lib.ts`** for resource-specific shared logic (underscore = not a route).
- **`api/_lib/`** for cross-resource utilities (auth, pagination, error helpers).
- **Schemas** stay in `src/lib/schemas.ts` (or `schemas/{domain}.ts`), not in API route dirs.

## When to Extract

| Signal                       | Action                                  |
| ---------------------------- | --------------------------------------- |
| `route.ts` > 250 lines       | Extract business logic to `_lib.ts`     |
| `_lib.ts` > 250 lines        | Split into `_lib/{concern}.ts` + barrel |
| Same auth check in 3+ routes | Extract to `api/_lib/auth.ts`           |
| Same error pattern repeated  | Extract to `api/_lib/errors.ts`         |
