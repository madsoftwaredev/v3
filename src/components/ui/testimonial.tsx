import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialProps extends HTMLAttributes<HTMLDivElement> {
  /** Quote text */
  quote: string;
  /** Author name */
  author: string;
  /** Author role/title */
  role?: string;
  /** Author avatar URL */
  avatarSrc?: string;
  /** Author initials for fallback */
  initials?: string;
}

/**
 * Testimonial card — client quote with avatar.
 *
 * @example
 * <Testimonial
 *   quote="This design system saved us weeks of work."
 *   author="Jane Doe"
 *   role="CTO at Acme"
 *   initials="JD"
 * />
 */
const Testimonial = ({
  quote,
  author,
  role,
  avatarSrc,
  initials,
  className,
  ...props
}: TestimonialProps) => (
  <div className={cn("bg-card rounded-xl border p-6 shadow-sm", className)} {...props}>
    <blockquote className="text-foreground text-sm leading-relaxed">
      &ldquo;{quote}&rdquo;
    </blockquote>
    <div className="mt-4 flex items-center gap-3">
      <Avatar className="h-9 w-9">
        {avatarSrc && <AvatarImage src={avatarSrc} alt={author} />}
        <AvatarFallback className="text-xs">
          {initials ?? author.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-medium">{author}</p>
        {role && <p className="text-muted-foreground text-xs">{role}</p>}
      </div>
    </div>
  </div>
);

export { Testimonial };
export type { TestimonialProps };
