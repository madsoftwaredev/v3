# Field Rendering Patterns

> Exact Controller + Field patterns for each input type.

## Standard Text Input

```tsx
import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

<Controller
  name="email"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid || undefined}>
      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type="email"
        placeholder="you@example.com"
        autoComplete="email"
        aria-invalid={fieldState.invalid}
      />
      <FieldDescription>Your work email address.</FieldDescription>
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>;
```

**Critical details:**

- `data-invalid={fieldState.invalid || undefined}` — `|| undefined` prevents `data-invalid="false"` in DOM.
- `htmlFor={field.name}` and `id={field.name}` — links label to input.
- `{...field}` spread on input — connects to RHF.
- `aria-invalid={fieldState.invalid}` — accessibility.
- `<FieldError errors={[fieldState.error]} />` — wraps error in array.

## Password with Forgot Link

```tsx
<Controller
  name="password"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid || undefined}>
      <div className="flex items-center justify-between">
        <FieldLabel htmlFor={field.name}>Password</FieldLabel>
        <Link
          href="/forgot-password"
          className="text-muted-foreground hover:text-foreground text-xs"
        >
          Forgot password?
        </Link>
      </div>
      <Input
        {...field}
        id={field.name}
        type="password"
        autoComplete="current-password"
        aria-invalid={fieldState.invalid}
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
```

## Textarea

```tsx
<Controller
  name="bio"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid || undefined}>
      <FieldLabel htmlFor={field.name}>Bio</FieldLabel>
      <Textarea {...field} id={field.name} placeholder="Tell us about yourself..." rows={4} />
      <FieldDescription>Max 500 characters.</FieldDescription>
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
```

## Select

```tsx
<Controller
  name="role"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid || undefined}>
      <FieldLabel htmlFor={field.name}>Role</FieldLabel>
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <SelectTrigger id={field.name} aria-invalid={fieldState.invalid}>
          <SelectValue placeholder="Select a role..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="user">User</SelectItem>
        </SelectContent>
      </Select>
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
```

## Field Components Reference

| Component            | Purpose                                     | Key Props                             |
| -------------------- | ------------------------------------------- | ------------------------------------- |
| `<Field>`            | Wrapper div (`space-y-2`)                   | `data-invalid`                        |
| `<FieldLabel>`       | Styled `<Label>`                            | `htmlFor`                             |
| `<FieldDescription>` | Help text (`text-xs text-muted-foreground`) | —                                     |
| `<FieldError>`       | Error msg (`text-xs text-destructive`)      | `errors: Array<{ message?: string }>` |

There's also a simpler `<FormField>` for cases without RHF:

```tsx
<FormField label="Email" htmlFor="email" error={errors.email} required>
  <Input id="email" type="email" />
</FormField>
```
