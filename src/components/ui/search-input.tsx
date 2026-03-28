"use client";

import { Search, X } from "lucide-react";
import { type InputHTMLAttributes, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  /** Controlled value */
  value?: string;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Called when the clear button is clicked */
  onClear?: () => void;
}

/**
 * Search input with icon and clear button.
 *
 * @example
 * <SearchInput placeholder="Search..." onChange={setQuery} />
 */
const SearchInput = ({
  className,
  value: controlledValue,
  onChange,
  onClear,
  ...props
}: SearchInputProps) => {
  const [internalValue, setInternalValue] = useState("");
  const value = controlledValue ?? internalValue;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInternalValue(newValue);
      onChange?.(newValue);
    },
    [onChange],
  );

  const handleClear = useCallback(() => {
    setInternalValue("");
    onChange?.("");
    onClear?.();
  }, [onChange, onClear]);

  return (
    <div className={cn("relative", className)}>
      <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
      <input
        type="search"
        className="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent py-1 pr-8 pl-9 text-sm shadow-sm transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        value={value}
        onChange={handleChange}
        {...props}
      />
      {value && (
        <button
          type="button"
          onClick={handleClear}
          className="text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2 rounded-sm p-0.5"
          aria-label="Clear search"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  );
};

export { SearchInput };
export type { SearchInputProps };
