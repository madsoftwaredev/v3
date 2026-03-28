import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Dashboard",
  description: "Overview of your application metrics.",
});

/** Placeholder stats — replace with real data from your API / TanStack Query hooks */
const stats = [
  { label: "Total Revenue", value: "$45,231.89", change: "+20.1%", icon: DollarSign },
  { label: "Subscriptions", value: "+2,350", change: "+180.1%", icon: Users },
  { label: "Sales", value: "+12,234", change: "+19%", icon: CreditCard },
  { label: "Active Now", value: "+573", change: "+201", icon: Activity },
];

/** Placeholder recent activity — replace with real data */
const recentActivity = [
  {
    id: "1",
    user: "Olivia Martin",
    email: "__VG_EMAIL_f0ffe97fc3f7__",
    action: "Signed up",
    date: "2 min ago",
  },
  {
    id: "2",
    user: "Jackson Lee",
    email: "__VG_EMAIL_9dac66e1f6a1__",
    action: "Upgraded plan",
    date: "1 hour ago",
  },
  {
    id: "3",
    user: "Isabella Nguyen",
    email: "__VG_EMAIL_82b5f47ed5c3__",
    action: "Made a purchase",
    date: "3 hours ago",
  },
  {
    id: "4",
    user: "William Kim",
    email: "__VG_EMAIL_1f2e3d4c5b6a__",
    action: "Downloaded report",
    date: "5 hours ago",
  },
  {
    id: "5",
    user: "Sofia Davis",
    email: "__VG_EMAIL_a7b8c9d0e1f2__",
    action: "Updated profile",
    date: "1 day ago",
  },
];

/**
 * Dashboard overview page — stats cards + recent activity table.
 * Replace placeholder data with TanStack Query hooks connected to your API.
 */
export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground text-sm">Overview of your application metrics.</p>
      </div>

      {/* Stats grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription className="text-sm font-medium">{stat.label}</CardDescription>
              <stat.icon className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-muted-foreground text-xs">{stat.change} from last month</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest actions from your users.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Action</TableHead>
                <TableHead className="text-right">When</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentActivity.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{row.user}</p>
                      <p className="text-muted-foreground text-xs">{row.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>{row.action}</TableCell>
                  <TableCell className="text-muted-foreground text-right">{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
