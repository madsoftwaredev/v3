"use client";

import { useState } from "react";
import {
  AlignCenter, AlignLeft, AlignRight, Bold, ChevronsUpDown, Italic, Underline,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

/**
 * Composable primitives — Popover, Collapsible, Toggle, HoverCard.
 */
export const ComposableSection = () => {
  const [collapsibleOpen, setCollapsibleOpen] = useState(false);

  return (
    <div className="space-y-8">
      {/* Popover */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Popover</h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="width">Width</Label>
                  <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="height">Height</Label>
                  <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <Separator />

      {/* Collapsible */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Collapsible</h3>
        <Collapsible open={collapsibleOpen} onOpenChange={setCollapsibleOpen} className="w-full max-w-sm space-y-2">
          <div className="flex items-center justify-between space-x-4">
            <h4 className="text-sm font-semibold">3 items tagged</h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border px-4 py-2 text-sm font-mono">@radix-ui/react-collapsible</div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-2 text-sm font-mono">@radix-ui/react-popover</div>
            <div className="rounded-md border px-4 py-2 text-sm font-mono">@radix-ui/react-toggle</div>
          </CollapsibleContent>
        </Collapsible>
      </div>

      <Separator />

      {/* Toggle */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Toggle</h3>
        <div className="flex gap-2">
          <Toggle aria-label="Toggle bold"><Bold className="h-4 w-4" /></Toggle>
          <Toggle aria-label="Toggle italic"><Italic className="h-4 w-4" /></Toggle>
          <Toggle aria-label="Toggle underline"><Underline className="h-4 w-4" /></Toggle>
        </div>
        <div className="flex gap-2">
          <Toggle variant="outline" aria-label="Toggle bold"><Bold className="h-4 w-4" /></Toggle>
          <Toggle variant="outline" aria-label="Toggle italic"><Italic className="h-4 w-4" /></Toggle>
        </div>
      </div>

      <Separator />

      {/* Toggle Group */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Toggle Group</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Single select</p>
            <ToggleGroup type="single" variant="outline">
              <ToggleGroupItem value="left" aria-label="Align left"><AlignLeft className="h-4 w-4" /></ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center"><AlignCenter className="h-4 w-4" /></ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right"><AlignRight className="h-4 w-4" /></ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Multi select</p>
            <ToggleGroup type="multiple" variant="outline">
              <ToggleGroupItem value="bold" aria-label="Bold"><Bold className="h-4 w-4" /></ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Italic"><Italic className="h-4 w-4" /></ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Underline"><Underline className="h-4 w-4" /></ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </div>

      <Separator />

      {/* Hover Card */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Hover Card</h3>
        <p className="text-sm text-muted-foreground">
          Hover over{" "}
          <HoverCard>
            <HoverCardTrigger asChild>
              <a href="#" className="font-medium text-primary underline underline-offset-4">@madsoftware</a>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex gap-4">
                <Avatar>
                  <AvatarFallback>MS</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">MAD Software</h4>
                  <p className="text-sm text-muted-foreground">Building great software for great people.</p>
                  <p className="text-xs text-muted-foreground">Joined December 2025</p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          {" "}to see a preview card.
        </p>
      </div>
    </div>
  );
};
