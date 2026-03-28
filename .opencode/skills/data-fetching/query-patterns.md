# TanStack Query Patterns

> useApiQuery for reads, useApiMutation for writes.

## Reading Data: `useApiQuery`

```tsx
"use client";

import { useApiQuery } from "@/hooks";

function UserList() {
  const {
    data: users,
    isLoading,
    error,
  } = useApiQuery<User[]>(
    ["users"], // queryKey
    "/api/users", // endpoint
  );

  if (isLoading) return <Skeleton className="h-20 w-full" />;
  if (error) return <p className="text-destructive">{error.message}</p>;

  return (
    <ul>
      {users?.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
```

**With params:**

```tsx
const { data } = useApiQuery<Post[]>(
  ["posts", { page, status }], // key includes params
  "/api/posts",
  { params: { page, status } }, // fetch options
);
```

**With TanStack Query options:**

```tsx
const { data } = useApiQuery<User>(
  ["user", userId],
  `/api/users/${userId}`,
  {},
  { enabled: !!userId, staleTime: 60_000 },
);
```

## Writing Data: `useApiMutation`

```tsx
"use client";

import { useApiMutation } from "@/hooks";
import { toast } from "sonner";

function CreateUserButton() {
  const create = useApiMutation<User, CreateUserInput>("POST", "/api/users", {
    invalidate: [["users"]],
    onSuccess: () => toast.success("Created!"),
    onError: (error) => toast.error(error.message),
  });

  return (
    <Button onClick={() => create.mutate({ name: "Jane" })} disabled={create.isPending}>
      {create.isPending ? "Creating..." : "Create"}
    </Button>
  );
}
```

**With forms:**

```tsx
const update = useApiMutation<User, ProfileValues>("PATCH", "/api/profile", {
  invalidate: [["user"]],
  onSuccess: () => toast.success("Saved!"),
});

function onSubmit(data: ProfileValues) {
  update.mutate(data);
}
```

## Query Key Conventions

```tsx
["users"][("users", userId)][("users", { role: "admin" })][("posts", { page, limit })]; // All users // Single user // Filtered list // Paginated
```

- First element: resource name (plural noun)
- Second: ID (single item) or filter object (list)
- Include all variables that affect the response
