import { Spinner } from "@/components/ui/spinner";

/** Root loading state — shown during route transitions at the app level. */
export default function RootLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Spinner className="h-8 w-8" />
    </div>
  );
}
