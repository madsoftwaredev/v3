"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type AvatarProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>;
type AvatarImageProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>;
type AvatarFallbackProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>;

/** Avatar root — wraps image + fallback. */
const Avatar = ({ className, ...props }: AvatarProps) => (
  <AvatarPrimitive.Root
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
);

/** Avatar image — loads the user photo. */
const AvatarImage = ({ className, ...props }: AvatarImageProps) => (
  <AvatarPrimitive.Image className={cn("aspect-square h-full w-full", className)} {...props} />
);

/** Avatar fallback — shown while image loads or on error. */
const AvatarFallback = ({ className, ...props }: AvatarFallbackProps) => (
  <AvatarPrimitive.Fallback
    className={cn(
      "bg-muted flex h-full w-full items-center justify-center rounded-full text-sm font-medium",
      className,
    )}
    {...props}
  />
);

export { Avatar, AvatarImage, AvatarFallback };
