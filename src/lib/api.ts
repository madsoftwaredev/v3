import { siteConfig } from "./constants";

/**
 * Standardized API error — thrown by the fetch client on non-2xx responses.
 * Contains the HTTP status, a human-readable message, and optional error details.
 */
export class ApiError extends Error {
  constructor(
    public readonly status: number,
    message: string,
    public readonly details?: unknown,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

/** Options for the fetch client — extends RequestInit with typed JSON body. */
interface FetchOptions extends RequestInit {
  /** JSON body — automatically serialized and sets Content-Type header. */
  json?: unknown;
  /** Query parameters — appended to the URL. */
  params?: Record<string, string | number | boolean | undefined>;
}

/**
 * Typed fetch client with error handling, JSON parsing, and base URL support.
 *
 * Uses the native `fetch` API — no axios, no external dependencies.
 * Pairs with TanStack Query for caching, retries, and background refetching.
 *
 * @example
 * // GET request
 * const users = await api<User[]>("/api/users");
 *
 * @example
 * // POST with JSON body
 * const user = await api<User>("/api/users", {
 *   method: "POST",
 *   json: { name: "Jane", email: "you@example.com" },
 * });
 *
 * @example
 * // With query params
 * const posts = await api<Post[]>("/api/posts", {
 *   params: { page: 1, limit: 10, published: true },
 * });
 */
export async function api<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
  const { json, params, headers: customHeaders, ...fetchOptions } = options;

  // Build URL with query params
  const url = new URL(endpoint, siteConfig.url);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        url.searchParams.set(key, String(value));
      }
    });
  }

  // Build headers
  const headers = new Headers(customHeaders);
  if (json && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }
  // TODO: Add auth header here when you have an auth provider
  // const token = getToken();
  // if (token) headers.set("Authorization", `Bearer ${token}`);

  const response = await fetch(url.toString(), {
    ...fetchOptions,
    headers,
    body: json ? JSON.stringify(json) : fetchOptions.body,
  });

  // Handle non-2xx responses
  if (!response.ok) {
    let details: unknown;
    try {
      details = await response.json();
    } catch {
      // Response body isn't JSON — that's fine
    }

    const message =
      (details && typeof details === "object" && "message" in details
        ? String((details as { message: string }).message)
        : null) ?? `API error: ${response.status} ${response.statusText}`;

    throw new ApiError(response.status, message, details);
  }

  // Handle 204 No Content
  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}
