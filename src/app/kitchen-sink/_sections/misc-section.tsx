"use client";

import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext,
} from "@/components/ui/carousel";
import {
  Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

/**
 * Miscellaneous — Aspect Ratio, Carousel, Sheet/Drawer.
 */
export const MiscSection = () => (
  <div className="space-y-8">
    {/* Aspect Ratio */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Aspect Ratio</h3>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground font-mono">16:9</p>
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg flex items-center justify-center">
            <span className="text-sm text-muted-foreground">16:9</span>
          </AspectRatio>
        </div>
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground font-mono">4:3</p>
          <AspectRatio ratio={4 / 3} className="bg-muted rounded-lg flex items-center justify-center">
            <span className="text-sm text-muted-foreground">4:3</span>
          </AspectRatio>
        </div>
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground font-mono">1:1</p>
          <AspectRatio ratio={1} className="bg-muted rounded-lg flex items-center justify-center">
            <span className="text-sm text-muted-foreground">1:1</span>
          </AspectRatio>
        </div>
      </div>
    </div>

    <Separator />

    {/* Carousel */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Carousel</h3>
      <div className="mx-auto max-w-md">
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 5 }, (_, i) => (
              <CarouselItem key={i}>
                <div className="flex aspect-video items-center justify-center rounded-lg border bg-card p-6">
                  <span className="text-3xl font-bold text-muted-foreground">{i + 1}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>

    <Separator />

    {/* Sheet / Drawer */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Sheet / Drawer</h3>
      <div className="flex flex-wrap gap-3">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Right Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Sheet Title</SheetTitle>
              <SheetDescription>
                This is a slide-in panel from the right edge. Use it for settings, filters, or detail views.
              </SheetDescription>
            </SheetHeader>
            <div className="py-4">
              <p className="text-sm text-muted-foreground">Sheet content goes here.</p>
            </div>
          </SheetContent>
        </Sheet>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Left Sheet</Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Left Panel</SheetTitle>
              <SheetDescription>
                Sheets can slide in from any edge.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </div>
);
