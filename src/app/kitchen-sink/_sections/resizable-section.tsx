"use client";

import {
  ResizablePanelGroup, ResizablePanel, ResizableHandle,
} from "@/components/ui/resizable";

/**
 * Resizable panels — split pane layouts.
 */
export const ResizableSection = () => (
  <div className="space-y-8">
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Horizontal Panels</h3>
      <div className="rounded-lg border">
        <ResizablePanelGroup orientation="horizontal" className="min-h-48">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Panel A</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Panel B</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>

    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Three Panels with Nested</h3>
      <div className="rounded-lg border">
        <ResizablePanelGroup orientation="horizontal" className="min-h-48">
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Sidebar</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={75}>
            <ResizablePanelGroup orientation="vertical">
              <ResizablePanel defaultSize={60}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Content</span>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={40}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Terminal</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  </div>
);
