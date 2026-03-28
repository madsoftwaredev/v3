"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { SearchInput } from "@/components/ui/search-input";
import { FileUpload } from "@/components/ui/file-upload";
import { FormField } from "@/components/ui/form-field";
import { Separator } from "@/components/ui/separator";

/**
 * Extended form controls — Radio Group, Slider, Search, File Upload, Form Field.
 */
export const ExtendedFormsSection = () => (
  <div className="space-y-8">
    {/* Radio Group */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Radio Group</h3>
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </div>
      </RadioGroup>
    </div>

    <Separator />

    {/* Slider */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Slider</h3>
      <div className="space-y-6 max-w-md">
        <div className="space-y-2">
          <Label>Volume</Label>
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
        <div className="space-y-2">
          <Label>Price Range</Label>
          <Slider defaultValue={[25, 75]} max={100} step={5} />
        </div>
      </div>
    </div>

    <Separator />

    {/* Search Input */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Search Input</h3>
      <div className="max-w-md">
        <SearchInput placeholder="Search components..." />
      </div>
    </div>

    <Separator />

    {/* File Upload */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">File Upload</h3>
      <div className="max-w-md">
        <FileUpload accept="image/*,.pdf" maxSize={5 * 1024 * 1024} />
      </div>
    </div>

    <Separator />

    {/* Form Field */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Form Field (with validation)</h3>
      <div className="max-w-md space-y-4">
        <FormField label="Username" htmlFor="ff-username" required description="Choose a unique username.">
          <Input id="ff-username" placeholder="johndoe" />
        </FormField>
        <FormField label="Email" htmlFor="ff-email" required error="Please enter a valid email address.">
          <Input id="ff-email" type="email" placeholder="john@example.com" className="border-destructive" />
        </FormField>
        <FormField label="Bio" htmlFor="ff-bio" description="Optional. Tell us about yourself.">
          <Input id="ff-bio" placeholder="I'm a developer..." />
        </FormField>
      </div>
    </div>
  </div>
);
