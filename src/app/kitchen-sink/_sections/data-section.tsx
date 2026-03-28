"use client";

import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

/**
 * Data display components — tabs, accordion, separator.
 */
export const DataSection = () => (
  <div className="space-y-8">
    {/* Tabs */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Tabs</h3>
      <Tabs defaultValue="account" className="w-full">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="mt-4">
          <p className="text-sm text-muted-foreground">
            Manage your account settings and preferences here.
          </p>
        </TabsContent>
        <TabsContent value="password" className="mt-4">
          <p className="text-sm text-muted-foreground">
            Change your password and security settings.
          </p>
        </TabsContent>
        <TabsContent value="notifications" className="mt-4">
          <p className="text-sm text-muted-foreground">
            Configure how you receive notifications.
          </p>
        </TabsContent>
      </Tabs>
    </div>

    <Separator />

    {/* Accordion */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Accordion</h3>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is a design system?</AccordionTrigger>
          <AccordionContent>
            A design system is a collection of reusable components, guided by clear
            standards, that can be assembled to build any number of applications.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Why use design tokens?</AccordionTrigger>
          <AccordionContent>
            Design tokens are the visual design atoms of the design system — specifically,
            they are named entities that store visual design attributes. They ensure
            consistency across platforms and make theming trivial.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How do I customize the theme?</AccordionTrigger>
          <AccordionContent>
            Edit the CSS variables in <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">globals.css</code>.
            Change the oklch values under <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">:root</code> for
            light mode and <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">.dark</code> for dark mode.
            All components automatically pick up the new values.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
);
