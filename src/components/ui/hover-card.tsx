"use client";

import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const HoverCard = HoverCardPrimitive.Root;
const HoverCardTrigger = HoverCardPrimitive.Trigger;

/**
 * Hover card content — rich preview panel on hover.
 * Use for user profiles, link previews, and contextual info.
 *
 * @example
 * <HoverCard>
 *   <HoverCardTrigger asChild><a href="#">@user</a></HoverCardTrigger>
 *   <HoverCardContent>Profile preview...</HoverCardContent>
 * </HoverCard>
 */
const HoverCardContent = ({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>) => (
  <HoverCardPrimitive.Content
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 rounded-md border p-4 shadow-md outline-none",
      className,
    )}
    {...props}
  />
);

export { HoverCard, HoverCardTrigger, HoverCardContent };
