"use client";

import { Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Spinner } from "@/components/ui/spinner";
import { EmptyState } from "@/components/ui/empty-state";
import { ErrorFallback } from "@/components/ui/error-boundary-fallback";
import { Separator } from "@/components/ui/separator";

/**
 * Extended feedback — Progress, Spinner, Empty State, Error Fallback.
 */
export const ExtendedFeedbackSection = () => (
  <div className="space-y-8">
    {/* Progress */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Progress</h3>
      <div className="max-w-md space-y-4">
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>Uploading...</span>
            <span className="text-muted-foreground">25%</span>
          </div>
          <Progress value={25} />
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>Processing...</span>
            <span className="text-muted-foreground">60%</span>
          </div>
          <Progress value={60} />
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>Complete</span>
            <span className="text-muted-foreground">100%</span>
          </div>
          <Progress value={100} />
        </div>
      </div>
    </div>

    <Separator />

    {/* Spinner */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Spinner</h3>
      <div className="flex items-center gap-6">
        <div className="space-y-2 text-center">
          <Spinner size="sm" />
          <p className="text-muted-foreground text-xs">sm</p>
        </div>
        <div className="space-y-2 text-center">
          <Spinner size="md" />
          <p className="text-muted-foreground text-xs">md</p>
        </div>
        <div className="space-y-2 text-center">
          <Spinner size="lg" />
          <p className="text-muted-foreground text-xs">lg</p>
        </div>
      </div>
    </div>

    <Separator />

    {/* Empty State */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Empty State</h3>
      <div className="rounded-lg border">
        <EmptyState
          icon={<Inbox className="h-10 w-10" />}
          title="No messages yet"
          description="When you receive messages, they'll appear here."
          action={<Button>Compose Message</Button>}
        />
      </div>
    </div>

    <Separator />

    {/* Error Fallback */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Error Fallback</h3>
      <div className="rounded-lg border">
        <ErrorFallback
          message="Failed to load the dashboard data. Please check your connection and try again."
          onRetry={() => {}}
        />
      </div>
    </div>
  </div>
);
