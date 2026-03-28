import { Bell, CreditCard, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
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
        <p className="text-sm text-muted-foreground">
          Cards use the <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">card</code> and{" "}
          <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">card-foreground</code> tokens.
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
        <p className="text-sm text-muted-foreground">
          Use CardFooter for action buttons at the bottom.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" size="sm">Cancel</Button>
        <Button size="sm">Save</Button>
      </CardFooter>
    </Card>

    {/* Card with icon */}
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <CreditCard className="h-5 w-5 text-primary" />
          </div>
          <div>
            <CardTitle className="text-base">Payments</CardTitle>
            <CardDescription>Manage billing</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Icons add visual hierarchy to cards.
        </p>
      </CardContent>
    </Card>

    {/* Notification card */}
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-info/10">
            <Bell className="h-5 w-5 text-info" />
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
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
            <Settings className="h-5 w-5 text-muted-foreground" />
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
        <p className="text-xs text-success">+20.1% from last month</p>
      </CardContent>
    </Card>
  </div>
);
