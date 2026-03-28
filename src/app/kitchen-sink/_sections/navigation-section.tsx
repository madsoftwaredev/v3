"use client";

import { GitBranch, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Separator } from "@/components/ui/separator";

/**
 * Navigation components — Navbar, Footer, Breadcrumbs.
 */
export const NavigationSection = () => (
  <div className="space-y-8">
    {/* Navbar */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Navbar</h3>
      <div className="overflow-hidden rounded-lg border">
        <Navbar
          brand={<span className="text-lg font-bold">MAD</span>}
          links={[
            { href: "#", label: "Home" },
            { href: "#", label: "About" },
            { href: "#", label: "Services" },
            { href: "#", label: "Contact" },
          ]}
          actions={<Button size="sm">Get Started</Button>}
          className="relative"
        />
      </div>
    </div>

    <Separator />

    {/* Breadcrumbs */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Breadcrumbs</h3>
      <div className="space-y-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Widget Pro</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbEllipsis />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Category</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Current Page</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>

    <Separator />

    {/* Footer */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Footer</h3>
      <div className="overflow-hidden rounded-lg border">
        <Footer
          brand="MAD Software"
          description="Building great software for great people."
          linkGroups={[
            {
              title: "Product",
              links: [
                { href: "#", label: "Features" },
                { href: "#", label: "Pricing" },
                { href: "#", label: "Changelog" },
              ],
            },
            {
              title: "Company",
              links: [
                { href: "#", label: "About" },
                { href: "#", label: "Blog" },
                { href: "#", label: "Careers" },
              ],
            },
            {
              title: "Legal",
              links: [
                { href: "#", label: "Privacy" },
                { href: "#", label: "Terms" },
              ],
            },
          ]}
          socials={
            <>
              <Button variant="ghost" size="icon">
                <GitBranch className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <MessageCircle className="h-4 w-4" />
              </Button>
            </>
          }
          copyright="© 2026 MAD Software. All rights reserved."
        />
      </div>
    </div>
  </div>
);
