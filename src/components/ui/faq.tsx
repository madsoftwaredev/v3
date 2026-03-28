import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps extends HTMLAttributes<HTMLDivElement> {
  /** Section title */
  title?: string;
  /** Section description */
  description?: string;
  /** FAQ items */
  items: FaqItem[];
}

/**
 * FAQ section — styled accordion for common questions.
 *
 * @example
 * <FaqSection
 *   title="Frequently Asked Questions"
 *   items={[{ question: "How does it work?", answer: "..." }]}
 * />
 */
const FaqSection = ({
  title = "Frequently Asked Questions",
  description,
  items,
  className,
  ...props
}: FaqSectionProps) => (
  <div className={cn("mx-auto max-w-3xl", className)} {...props}>
    <div className="mb-8 text-center">
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      {description && <p className="text-muted-foreground mt-2">{description}</p>}
    </div>
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem key={i} value={`faq-${i}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

export { FaqSection };
export type { FaqSectionProps, FaqItem };
