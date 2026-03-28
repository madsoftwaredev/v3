"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

/**
 * Global error boundary — catches runtime errors in the app.
 * This is a client component (required by Next.js error boundaries).
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to your error reporting service (e.g., Sentry, LogRocket)
    console.error("Global error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="text-destructive/30 text-5xl font-bold">Error</p>
      <h1 className="mt-4 text-2xl font-semibold tracking-tight">Something went wrong</h1>
      <p className="text-muted-foreground mt-2 max-w-md text-sm">
        An unexpected error occurred. Please try again or contact support if the problem persists.
      </p>
      {error.digest && (
        <p className="text-muted-foreground mt-2 font-mono text-xs">Error ID: {error.digest}</p>
      )}
      <div className="mt-8">
        <Button onClick={reset}>Try again</Button>
      </div>
    </div>
  );
}
