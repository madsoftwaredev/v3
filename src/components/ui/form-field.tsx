import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
  /** Label text */
  label: string;
  /** HTML for attribute — links label to input */
  htmlFor?: string;
  /** Error message */
  error?: string;
  /** Help text below the input */
  description?: string;
  /** Whether the field is required */
  required?: boolean;
  /** The form control */
  children: ReactNode;
}

/**
 * Form field wrapper — label + input + error/description.
 *
 * @example
 * <FormField label="Email" htmlFor="email" error={errors.email} required>
 *   <Input id="email" type="email" />
 * </FormField>
 */
const FormField = ({
  label,
  htmlFor,
  error,
  description,
  required,
  children,
  className,
  ...props
}: FormFieldProps) => (
  <div className={cn("space-y-2", className)} {...props}>
    <Label htmlFor={htmlFor}>
      {label}
      {required && <span className="text-destructive ml-1">*</span>}
    </Label>
    {children}
    {description && !error && (
      <p className="text-xs text-muted-foreground">{description}</p>
    )}
    {error && (
      <p className="text-xs text-destructive">{error}</p>
    )}
  </div>
);

export { FormField };
export type { FormFieldProps };
