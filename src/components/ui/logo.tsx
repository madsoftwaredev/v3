import { cn } from "@/lib/utils";

interface LogoProps {
  /** Size in pixels (renders as a square). Defaults to 28. */
  size?: number;
  className?: string;
}

/**
 * v3 brand logo — black rounded-rect, white "v3", red dot period.
 * Mirrors the favicon at src/app/icon.svg.
 *
 * @example
 * <Logo size={32} />
 */
const Logo = ({ size = 28, className }: LogoProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    aria-label="v3 logo"
    className={cn("shrink-0", className)}
  >
    <rect width="32" height="32" rx="8" fill="#0a0a0a" />
    <text
      x="14"
      y="23"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="18"
      fontWeight="800"
      fill="white"
      textAnchor="middle"
    >
      v3
    </text>
    <circle cx="25" cy="20.5" r="2.5" fill="#ef4444" />
  </svg>
);

export { Logo };
export type { LogoProps };
