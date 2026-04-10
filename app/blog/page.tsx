import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import { CATEGORY_LABELS } from "@/lib/constants";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Calendar, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on web accessibility, development, SEO, and AI-powered coding from 30+ years of experience.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <>
      <Navbar />
      <main id="main-content" className="px-6 pt-28 pb-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Accessibility insights, development guides, and lessons from 30+
            years in the field.
          </p>

          {/* Categories */}
          {categories.length > 0 && (
            <nav
              className="mt-8 flex flex-wrap gap-2"
              aria-label="Blog categories"
            >
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/blog/categories/${cat}`}
                  className="rounded-full border border-border px-4 py-1.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                >
                  {CATEGORY_LABELS[cat]}
                </Link>
              ))}
            </nav>
          )}

          {/* Posts */}
          {posts.length === 0 ? (
            <p className="mt-12 text-muted-foreground">
              Blog posts coming soon. Check back for insights on accessibility,
              web development, and agentic AI.
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
                        {CATEGORY_LABELS[post.frontmatter.category]}
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
