import RSS from "rss";
import { getAllPosts } from "@/lib/blog";
import { COMPANY } from "@/lib/constants";

export async function GET() {
  const feed = new RSS({
    title: `${COMPANY.name} Blog`,
    description:
      "Insights on web accessibility, development, SEO, and AI-powered coding.",
    site_url: COMPANY.url,
    feed_url: `${COMPANY.url}/rss.xml`,
    language: "en-US",
    copyright: `${COMPANY.founded}-${new Date().getFullYear()} ${COMPANY.name}`,
  });

  const posts = getAllPosts();

  for (const post of posts) {
    feed.item({
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      url: `${COMPANY.url}/blog/${post.slug}`,
      date: post.frontmatter.date,
      author: post.frontmatter.author,
      categories: [post.frontmatter.category],
    });
  }

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
