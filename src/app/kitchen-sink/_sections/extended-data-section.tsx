"use client";

import { CheckCircle, Circle, Clock, GitCommit, Rocket, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Table, TableHeader, TableBody, TableHead, TableRow, TableCell, TableCaption,
} from "@/components/ui/table";
import {
  DescriptionList, DescriptionListItem, DescriptionTerm, DescriptionDetails,
} from "@/components/ui/description-list";
import {
  Timeline, TimelineItem, TimelineTitle, TimelineDescription, TimelineTime,
} from "@/components/ui/timeline";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

/**
 * Extended data display — Table, Description List, Timeline, Scroll Area.
 */
export const ExtendedDataSection = () => (
  <div className="space-y-8">
    {/* Table */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Table</h3>
      <Table>
        <TableCaption>A list of recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            { id: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
            { id: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
            { id: "INV003", status: "Paid", method: "Bank Transfer", amount: "$350.00" },
            { id: "INV004", status: "Failed", method: "Credit Card", amount: "$450.00" },
            { id: "INV005", status: "Paid", method: "PayPal", amount: "$550.00" },
          ].map((inv) => (
            <TableRow key={inv.id}>
              <TableCell className="font-medium">{inv.id}</TableCell>
              <TableCell>
                <Badge variant={inv.status === "Paid" ? "success" : inv.status === "Failed" ? "destructive" : "warning"}>
                  {inv.status}
                </Badge>
              </TableCell>
              <TableCell>{inv.method}</TableCell>
              <TableCell className="text-right">{inv.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>

    <Separator />

    {/* Description List */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Description List</h3>
      <DescriptionList>
        <DescriptionListItem>
          <DescriptionTerm>Full name</DescriptionTerm>
          <DescriptionDetails>John Doe</DescriptionDetails>
        </DescriptionListItem>
        <DescriptionListItem>
          <DescriptionTerm>Email</DescriptionTerm>
          <DescriptionDetails>john@example.com</DescriptionDetails>
        </DescriptionListItem>
        <DescriptionListItem>
          <DescriptionTerm>Role</DescriptionTerm>
          <DescriptionDetails>Senior Engineer</DescriptionDetails>
        </DescriptionListItem>
        <DescriptionListItem>
          <DescriptionTerm>Status</DescriptionTerm>
          <DescriptionDetails><Badge variant="success">Active</Badge></DescriptionDetails>
        </DescriptionListItem>
      </DescriptionList>
    </div>

    <Separator />

    {/* Timeline */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Timeline</h3>
      <Timeline>
        <TimelineItem icon={<Rocket className="h-4 w-4" />}>
          <TimelineTitle>Project launched</TimelineTitle>
          <TimelineDescription>Deployed v1.0 to production.</TimelineDescription>
          <TimelineTime>March 2026</TimelineTime>
        </TimelineItem>
        <TimelineItem icon={<Star className="h-4 w-4" />}>
          <TimelineTitle>1,000 users reached</TimelineTitle>
          <TimelineDescription>Hit our first major milestone.</TimelineDescription>
          <TimelineTime>February 2026</TimelineTime>
        </TimelineItem>
        <TimelineItem icon={<GitCommit className="h-4 w-4" />}>
          <TimelineTitle>Beta release</TimelineTitle>
          <TimelineDescription>Opened beta access to early adopters.</TimelineDescription>
          <TimelineTime>January 2026</TimelineTime>
        </TimelineItem>
        <TimelineItem icon={<Circle className="h-4 w-4" />} isLast>
          <TimelineTitle>Project started</TimelineTitle>
          <TimelineDescription>Initial commit and project setup.</TimelineDescription>
          <TimelineTime>December 2025</TimelineTime>
        </TimelineItem>
      </Timeline>
    </div>

    <Separator />

    {/* Scroll Area */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Scroll Area</h3>
      <ScrollArea className="h-48 w-full rounded-md border p-4">
        <div className="space-y-4">
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle className="h-4 w-4 text-success shrink-0" />
              <div>
                <p className="text-sm font-medium">Item {i + 1}</p>
                <p className="text-xs text-muted-foreground">
                  This is a scrollable list item with some description text.
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  </div>
);
