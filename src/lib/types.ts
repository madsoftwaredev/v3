import type { ReactNode } from "react";

/** Shorthand for components that accept children */
export type WithChildren<T = object> = T & { children: ReactNode };

/** Shorthand for components that accept an optional className */
export type WithClassName<T = object> = T & { className?: string };

/**
 * Flatten complex intersection types into a readable hover preview.
 *
 * @example
 * type Result = Prettify<{ a: string } & { b: number }>;
 * // Result: { a: string; b: number }
 */
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

/**
 * Stricter version of Omit that enforces keys exist on T.
 *
 * @example
 * type Without = StrictOmit<{ a: string; b: number }, "a">;
 * // { b: number }
 */
export type StrictOmit<T, K extends keyof T> = Omit<T, K>;

/** Extract the resolved value from a Promise type */
export type Awaited<T> = T extends Promise<infer U> ? U : T;

/** Make specific keys of T required while keeping the rest unchanged */
export type RequiredKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;
