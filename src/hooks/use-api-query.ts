import {
  useQuery,
  useMutation,
  useQueryClient,
  type UseQueryOptions,
  type UseMutationOptions,
} from "@tanstack/react-query";
import { api, type ApiError } from "@/lib/api";

/**
 * Generic query hook — wraps `useQuery` with the project's `api()` client.
 * Handles typed responses and `ApiError` for error states.
 *
 * @example
 * // Fetch a list of users
 * const { data, isLoading, error } = useApiQuery<User[]>(
 *   ["users"],
 *   "/api/users",
 * );
 *
 * @example
 * // Fetch with query params
 * const { data } = useApiQuery<Post[]>(
 *   ["posts", { page, limit }],
 *   "/api/posts",
 *   { params: { page, limit } },
 * );
 *
 * @example
 * // With additional TanStack Query options
 * const { data } = useApiQuery<User>(
 *   ["user", userId],
 *   `/api/users/${userId}`,
 *   {},
 *   { enabled: !!userId, staleTime: 10_000 },
 * );
 */
export function useApiQuery<T>(
  queryKey: unknown[],
  endpoint: string,
  fetchOptions?: { params?: Record<string, string | number | boolean | undefined> },
  queryOptions?: Omit<UseQueryOptions<T, ApiError>, "queryKey" | "queryFn">,
) {
  return useQuery<T, ApiError>({
    queryKey,
    queryFn: () => api<T>(endpoint, fetchOptions),
    ...queryOptions,
  });
}

/**
 * Generic mutation hook — wraps `useMutation` with the project's `api()` client.
 * Automatically invalidates related queries on success.
 *
 * @example
 * // Create a new user
 * const createUser = useApiMutation<User, CreateUserInput>(
 *   "POST",
 *   "/api/users",
 *   { invalidate: ["users"] },
 * );
 *
 * // In a form handler:
 * createUser.mutate({ name: "Jane", email: "you@example.com" });
 *
 * @example
 * // Update with callbacks
 * const updateProfile = useApiMutation<User, ProfileValues>(
 *   "PATCH",
 *   "/api/profile",
 *   {
 *     invalidate: ["user"],
 *     onSuccess: () => toast.success("Profile updated!"),
 *   },
 * );
 */
export function useApiMutation<TResponse, TInput = void>(
  method: "POST" | "PUT" | "PATCH" | "DELETE",
  endpoint: string,
  options?: {
    /** Query keys to invalidate on success */
    invalidate?: unknown[][];
  } & Omit<UseMutationOptions<TResponse, ApiError, TInput>, "mutationFn">,
) {
  const queryClient = useQueryClient();
  const { invalidate, ...mutationOptions } = options ?? {};

  return useMutation<TResponse, ApiError, TInput>({
    mutationFn: (input) =>
      api<TResponse>(endpoint, {
        method,
        json: input,
      }),
    onSettled: () => {
      if (invalidate) {
        invalidate.forEach((key) => queryClient.invalidateQueries({ queryKey: key }));
      }
    },
    ...mutationOptions,
  });
}
