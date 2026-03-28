"use client";

import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

/**
 * Field — wrapper for a form field with label, description, and error support.
 * Works with React Hook Form's Controller and Zod validation.
 *
 * Uses `data-invalid` attribute for styling invalid states.
 *
 * @example
 * <Controller
 *   name="email"
 *   control={form.control}
 *   render={({ field, fieldState }) => (
 *     <Field data-invalid={fieldState.invalid}>
 *       <FieldLabel htmlFor={field.name}>Email</FieldLabel>
 *       <Input {...field} id={field.name} />
 *       <FieldDescription>Your work email address.</FieldDescription>
 *       {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
 *     </Field>
 *   )}
 * />
 */
function Field({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("space-y-2", className)} data-slot="field" {...props} />;
}

/** Label for a field — adds a red asterisk when `data-required` is set on the parent Field. */
function FieldLabel({ className, ...props }: ComponentProps<typeof Label>) {
  return (
    <Label
      className={cn("data-[invalid]:text-destructive", className)}
      data-slot="field-label"
      {...props}
    />
  );
}

/** Help text below a field — hidden when field has errors. */
function FieldDescription({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn("text-muted-foreground text-xs", className)}
      data-slot="field-description"
      {...props}
    />
  );
}

interface FieldErrorProps extends ComponentProps<"p"> {
  /** Array of error objects from react-hook-form fieldState */
  errors?: Array<{ message?: string } | undefined>;
}

/** Displays validation error messages for a field. */
function FieldError({ errors, className, ...props }: FieldErrorProps) {
  const messages = errors
    ?.filter(Boolean)
    .map((e) => e?.message)
    .filter(Boolean);

  if (!messages?.length) return null;

  return (
    <p
      className={cn("text-destructive text-xs font-medium", className)}
      role="alert"
      data-slot="field-error"
      {...props}
    >
      {messages[0]}
    </p>
  );
}

export { Field, FieldLabel, FieldDescription, FieldError };
