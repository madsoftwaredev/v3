import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/constants";
import { getPostBySlug, posts } from "../_data";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

/** Generate static params for all known blog posts */
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

/** Dynamic metadata per blog post */
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — ${siteConfig.name}`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

/**
 * Blog post detail page — renders markdown-like content with prose styling.
 * Replace `getPostBySlug` with a TanStack Query hook for dynamic content.
 */
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Back link */}
      <Button variant="ghost" size="sm" asChild className="mb-8">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to blog
        </Link>
      </Button>

      {/* Header */}
      <header className="space-y-4">
        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <time dateTime={post.publishedAt}>
            {format(new Date(post.publishedAt), "MMMM d, yyyy")}
          </time>
          <span>&middot;</span>
          <span>{post.readingTime}</span>
          <span>&middot;</span>
          <span>{post.author}</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
        <p className="text-muted-foreground text-lg">{post.excerpt}</p>
        <div className="flex gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      <Separator className="my-8" />

      {/* Content — rendered as pre-formatted text blocks (replace with MDX or rich text) */}
      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4">
        {post.content.split("\n\n").map((paragraph, i) => {
          if (paragraph.startsWith("## ")) {
            return (
              <h2 key={i} className="mt-8 text-2xl font-semibold tracking-tight">
                {paragraph.replace("## ", "")}
              </h2>
            );
          }
          if (paragraph.startsWith("```")) {
            const lines = paragraph.split("\n");
            const code = lines.slice(1, -1).join("\n");
            return (
              <pre
                key={i}
                className="bg-muted overflow-x-auto rounded-lg p-4 text-sm leading-relaxed"
              >
                <code>{code}</code>
              </pre>
            );
          }
          return (
            <p key={i} className="leading-7">
              {paragraph}
            </p>
          );
        })}
      </div>
    </article>
  );
}
