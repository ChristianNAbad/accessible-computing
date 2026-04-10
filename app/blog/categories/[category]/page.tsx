import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostsByCategory } from "@/lib/blog";
import { BLOG_CATEGORIES, CATEGORY_LABELS, type BlogCategory } from "@/lib/constants";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

interface Props {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const label = CATEGORY_LABELS[category as BlogCategory];
  if (!label) return {};

  return {
    title: `${label} Articles`,
    description: `Blog posts about ${label.toLowerCase()} from Accessible Computing.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  if (!BLOG_CATEGORIES.includes(category as BlogCategory)) {
    notFound();
  }

  const posts = getPostsByCategory(category as BlogCategory);
  const label = CATEGORY_LABELS[category as BlogCategory];

  return (
    <>
      <Navbar />
      <main id="main-content" className="px-6 pt-28 pb-16">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All Posts
          </Link>

          <h1 className="mt-8 text-4xl font-black tracking-tight">
            <span className="gradient-text">{label}</span>
          </h1>

          {posts.length === 0 ? (
            <p className="mt-8 text-muted-foreground">
              No posts in this category yet. Check back soon!
            </p>
          ) : (
            <div className="mt-12 space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Tag className="h-3 w-3" aria-hidden="true" />
                        {label}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3" aria-hidden="true" />
                        {new Date(post.frontmatter.date).toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "long", day: "numeric" }
                        )}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" aria-hidden="true" />
                        {post.readingTime}
                      </span>
                    </div>
                    <h2 className="mt-3 text-xl font-bold tracking-tight transition-colors group-hover:text-primary">
                      {post.frontmatter.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {post.frontmatter.description}
                    </p>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
