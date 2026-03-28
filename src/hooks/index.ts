/**
 * Custom Hooks Barrel Export
 *
 * Re-exports from usehooks-ts for convenience, plus project-specific hooks.
 *
 * @example
 * import { useMediaQuery, useDebounce, useApiQuery } from "@/hooks";
 */

// --- Data fetching (TanStack Query wrappers) ---
export { useApiQuery, useApiMutation } from "./use-api-query";

// --- From usehooks-ts (client-side utility hooks) ---
export { useMediaQuery } from "usehooks-ts";
export { useDebounceValue as useDebounce } from "usehooks-ts";
export { useCopyToClipboard } from "usehooks-ts";
export { useLocalStorage } from "usehooks-ts";
export { useIsClient } from "usehooks-ts";
export { useEventListener } from "usehooks-ts";
export { useOnClickOutside } from "usehooks-ts";
export { useInterval } from "usehooks-ts";
export { useToggle } from "usehooks-ts";
