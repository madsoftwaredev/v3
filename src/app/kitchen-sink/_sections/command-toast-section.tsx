"use client";

import { useState, useEffect } from "react";
import {
  Calculator, Calendar, CreditCard, Settings, Smile, User,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Command, CommandInput, CommandList, CommandEmpty,
  CommandGroup, CommandItem, CommandSeparator, CommandShortcut,
  CommandDialog,
} from "@/components/ui/command";
import { Separator } from "@/components/ui/separator";

/**
 * Command palette and toast notifications.
 */
export const CommandToastSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [inlineVisible, setInlineVisible] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setDialogOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="space-y-8">
      {/* Command (inline) */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Command Palette (inline)</h3>
        {inlineVisible ? (
          <Command className="rounded-lg border shadow-md max-w-md">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem><Calendar className="mr-2 h-4 w-4" /> Calendar</CommandItem>
                <CommandItem><Smile className="mr-2 h-4 w-4" /> Search Emoji</CommandItem>
                <CommandItem><Calculator className="mr-2 h-4 w-4" /> Calculator</CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem><User className="mr-2 h-4 w-4" /> Profile <CommandShortcut>⌘P</CommandShortcut></CommandItem>
                <CommandItem><CreditCard className="mr-2 h-4 w-4" /> Billing <CommandShortcut>⌘B</CommandShortcut></CommandItem>
                <CommandItem><Settings className="mr-2 h-4 w-4" /> Settings <CommandShortcut>⌘S</CommandShortcut></CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        ) : (
          <Button variant="outline" onClick={() => setInlineVisible(true)}>
            Show Inline Command Palette
          </Button>
        )}
      </div>

      {/* Command Dialog */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Command Dialog (⌘K)</h3>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => setDialogOpen(true)}>
            Open Command Palette
            <kbd className="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium text-muted-foreground">
              ⌘K
            </kbd>
          </Button>
        </div>
        <CommandDialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem><Calendar className="mr-2 h-4 w-4" /> Calendar</CommandItem>
              <CommandItem><Smile className="mr-2 h-4 w-4" /> Search Emoji</CommandItem>
              <CommandItem><Calculator className="mr-2 h-4 w-4" /> Calculator</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem><User className="mr-2 h-4 w-4" /> Profile</CommandItem>
              <CommandItem><Settings className="mr-2 h-4 w-4" /> Settings</CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>

      <Separator />

      {/* Toast */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Toast Notifications</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" onClick={() => toast("Event has been created")}>
            Default Toast
          </Button>
          <Button variant="outline" onClick={() => toast.success("Successfully saved!")}>
            Success
          </Button>
          <Button variant="outline" onClick={() => toast.error("Something went wrong")}>
            Error
          </Button>
          <Button variant="outline" onClick={() => toast.warning("Please review your input")}>
            Warning
          </Button>
          <Button variant="outline" onClick={() => toast.info("New update available")}>
            Info
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast("Event created", {
                description: "Monday, January 3rd at 6:00 PM",
                action: { label: "Undo", onClick: () => {} },
              })
            }
          >
            With Action
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              const id = toast.loading("Loading...");
              setTimeout(() => toast.success("Done!", { id }), 2000);
            }}
          >
            Loading → Success
          </Button>
        </div>
      </div>
    </div>
  );
};
