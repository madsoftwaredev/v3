"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, type ReactNode } from "react";

/**
 * TanStack Query provider with sensible defaults for a starter kit.
 *
 * Defaults:
 * - 5 min stale time (avoids constant refetching)
 * - No refetch on window focus (less aggressive)
 * - 1 retry on failure
 *
 * Wrap your app layout with this provider to enable `useQuery` / `useMutation`
 * everywhere in the tree.
 */
export function QueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000,
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      }),
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
