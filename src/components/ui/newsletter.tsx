"use client";

import type { FormEvent, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NewsletterProps extends Omit<HTMLAttributes<HTMLDivElement>, "onSubmit"> {
  /** Headline */
  title?: string;
  /** Description */
  description?: string;
  /** Button text */
  buttonText?: string;
  /** Submit handler */
  onSubmit?: (email: string) => void;
}

/**
 * Newsletter signup — email input with submit button.
 *
 * @example
 * <Newsletter
 *   title="Stay updated"
 *   description="Get the latest news delivered to your inbox."
 *   onSubmit={(email) => subscribe(email)}
 * />
 */
const Newsletter = ({
  title = "Stay updated",
  description,
  buttonText = "Subscribe",
  onSubmit,
  className,
  ...props
}: NewsletterProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    onSubmit?.(email);
  };

  return (
    <div className={cn("mx-auto max-w-md text-center", className)} {...props}>
      <h3 className="text-xl font-semibold">{title}</h3>
      {description && <p className="text-muted-foreground mt-1 text-sm">{description}</p>}
      <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
        <Input
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          className="flex-1"
        />
        <Button type="submit">{buttonText}</Button>
      </form>
    </div>
  );
};

export { Newsletter };
export type { NewsletterProps };
