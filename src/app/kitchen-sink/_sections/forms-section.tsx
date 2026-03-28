"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

/**
 * Form controls — inputs, selects, checkboxes, switches.
 */
export const FormsSection = () => (
  <div className="space-y-8">
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="John Doe" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="john@example.com" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="disabled">Disabled</Label>
        <Input id="disabled" placeholder="Can't edit this" disabled />
      </div>

      <div className="space-y-2">
        <Label htmlFor="select-demo">Framework</Label>
        <Select>
          <SelectTrigger id="select-demo">
            <SelectValue placeholder="Select a framework" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="next">Next.js</SelectItem>
            <SelectItem value="remix">Remix</SelectItem>
            <SelectItem value="astro">Astro</SelectItem>
            <SelectItem value="nuxt">Nuxt</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>

    <div className="space-y-2">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Type your message here..." rows={4} />
    </div>

    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Toggles</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox id="checked" defaultChecked />
          <Label htmlFor="checked">Already checked</Label>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox id="disabled-check" disabled />
          <Label htmlFor="disabled-check" className="opacity-50">Disabled checkbox</Label>
        </div>
      </div>
    </div>

    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Switches</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Switch id="notifications" />
          <Label htmlFor="notifications">Enable notifications</Label>
        </div>
        <div className="flex items-center gap-3">
          <Switch id="marketing" defaultChecked />
          <Label htmlFor="marketing">Marketing emails</Label>
        </div>
        <div className="flex items-center gap-3">
          <Switch id="disabled-switch" disabled />
          <Label htmlFor="disabled-switch" className="opacity-50">Disabled switch</Label>
        </div>
      </div>
    </div>
  </div>
);
