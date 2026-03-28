import { ArrowRight, Download, Loader2, Mail, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Button variants and sizes — every combination rendered.
 */
const variants = [
  "default",
  "secondary",
  "destructive",
  "outline",
  "ghost",
  "link",
  "success",
  "warning",
  "info",
] as const;

const sizes = ["sm", "default", "lg", "xl", "icon"] as const;

export const ButtonsSection = () => (
  <div className="space-y-8">
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Variants</h3>
      <div className="flex flex-wrap gap-3">
        {variants.map((variant) => (
          <Button key={variant} variant={variant}>
            {variant}
          </Button>
        ))}
      </div>
    </div>

    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Sizes</h3>
      <div className="flex flex-wrap items-center gap-3">
        {sizes.map((size) => (
          <Button key={size} size={size}>
            {size === "icon" ? <Plus /> : size}
          </Button>
        ))}
      </div>
    </div>

    <div className="space-y-4">
      <h3 className="text-lg font-semibold">With Icons</h3>
      <div className="flex flex-wrap gap-3">
        <Button>
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </Button>
        <Button variant="secondary">
          <Download className="mr-2 h-4 w-4" /> Download
        </Button>
        <Button variant="destructive">
          <Trash2 className="mr-2 h-4 w-4" /> Delete
        </Button>
        <Button variant="outline">
          Next <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>

    <div className="space-y-4">
      <h3 className="text-lg font-semibold">States</h3>
      <div className="flex flex-wrap gap-3">
        <Button disabled>Disabled</Button>
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading
        </Button>
      </div>
    </div>
  </div>
);
