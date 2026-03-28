"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

/**
 * Collapsible — simpler than accordion, single expandable panel.
 * Use for sidebars, filter groups, and nav trees.
 *
 * @example
 * <Collapsible>
 *   <CollapsibleTrigger>Toggle</CollapsibleTrigger>
 *   <CollapsibleContent>Hidden content</CollapsibleContent>
 * </Collapsible>
 */
const Collapsible = CollapsiblePrimitive.Root;
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
