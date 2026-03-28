import { format } from "date-fns";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { createMetadata } from "@/lib/metadata";
import { posts } from "./_data";

export const metadata = createMetadata({
  title: "Blog",
  description: "Articles about design systems, React, and modern web development.",
});

/**
 * Blog listing page — displays all posts as cards.
 * Replace the `posts` import with a TanStack Query hook fetching from your API/CMS.
 */
export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
        <p className="text-muted-foreground">
          Articles about design systems, React, and modern web development.
        </p>
      </div>

      <Separator className="my-8" />

      <div className="space-y-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
            <Card className="hover:bg-accent/50 transition-colors">
              <CardHeader>
                <div className="text-muted-foreground flex items-center gap-2 text-xs">
                  <time dateTime={post.publishedAt}>
                    {format(new Date(post.publishedAt), "MMMM d, yyyy")}
                  </time>
                  <span>&middot;</span>
                  <span>{post.readingTime}</span>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
