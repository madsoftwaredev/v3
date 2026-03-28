import { Bell, CreditCard, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

/**
 * Card component variants — default, with actions, with icon.
 */
export const CardsSection = () => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {/* Basic card */}
    <Card>
      <CardHeader>
        <CardTitle>Basic Card</CardTitle>
        <CardDescription>A simple card with title and description.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">
          Cards use the <code className="bg-muted rounded px-1 py-0.5 font-mono text-xs">card</code>{" "}
          and{" "}
          <code className="bg-muted rounded px-1 py-0.5 font-mono text-xs">card-foreground</code>{" "}
          tokens.
        </p>
      </CardContent>
    </Card>

    {/* Card with actions */}
    <Card>
      <CardHeader>
        <CardTitle>With Actions</CardTitle>
        <CardDescription>Card with footer buttons.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">
          Use CardFooter for action buttons at the bottom.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" size="sm">
          Cancel
        </Button>
        <Button size="sm">Save</Button>
      </CardFooter>
    </Card>

    {/* Card with icon */}
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
            <CreditCard className="text-primary h-5 w-5" />
          </div>
          <div>
            <CardTitle className="text-base">Payments</CardTitle>
            <CardDescription>Manage billing</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">Icons add visual hierarchy to cards.</p>
      </CardContent>
    </Card>

    {/* Notification card */}
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="bg-info/10 flex h-10 w-10 items-center justify-center rounded-lg">
            <Bell className="text-info h-5 w-5" />
          </div>
          <div>
            <CardTitle className="text-base">Notifications</CardTitle>
            <CardDescription>3 unread messages</CardDescription>
          </div>
        </div>
      </CardHeader>
    </Card>

    {/* Settings card */}
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-lg">
            <Settings className="text-muted-foreground h-5 w-5" />
          </div>
          <div>
            <CardTitle className="text-base">Settings</CardTitle>
            <CardDescription>Configure your app</CardDescription>
          </div>
        </div>
      </CardHeader>
    </Card>

    {/* Stat card */}
    <Card>
      <CardHeader>
        <CardDescription>Total Revenue</CardDescription>
        <CardTitle className="text-3xl">$45,231.89</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-success text-xs">+20.1% from last month</p>
      </CardContent>
    </Card>
  </div>
);
