"use client";

import {
  ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem,
  ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub,
  ContextMenuSubTrigger, ContextMenuSubContent, ContextMenuCheckboxItem,
} from "@/components/ui/context-menu";
import {
  Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem,
  MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubTrigger,
  MenubarSubContent, MenubarCheckboxItem,
} from "@/components/ui/menubar";
import { Separator } from "@/components/ui/separator";

/**
 * Menu components — Context Menu, Menubar.
 */
export const MenusSection = () => (
  <div className="space-y-8">
    {/* Context Menu */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Context Menu</h3>
      <ContextMenu>
        <ContextMenuTrigger className="flex h-36 w-full max-w-sm items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuItem>
            Back <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Forward <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Reload <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>Save Page As...</ContextMenuItem>
              <ContextMenuItem>Create Shortcut...</ContextMenuItem>
              <ContextMenuItem>Developer Tools</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem checked>Show Bookmarks Bar</ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>

    <Separator />

    {/* Menubar */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Menubar</h3>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New Tab <MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
            <MenubarItem>New Window <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Email Link</MenubarItem>
                <MenubarItem>Messages</MenubarItem>
                <MenubarItem>Notes</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>Print <MenubarShortcut>⌘P</MenubarShortcut></MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Undo <MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
            <MenubarItem>Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut></MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Cut <MenubarShortcut>⌘X</MenubarShortcut></MenubarItem>
            <MenubarItem>Copy <MenubarShortcut>⌘C</MenubarShortcut></MenubarItem>
            <MenubarItem>Paste <MenubarShortcut>⌘V</MenubarShortcut></MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem checked>Show Toolbar</MenubarCheckboxItem>
            <MenubarCheckboxItem>Show Sidebar</MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem>Toggle Fullscreen</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  </div>
);
