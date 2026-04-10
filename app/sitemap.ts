import type { MetadataRoute } from "next";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import { COMPANY } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const categories = getAllCategories();

  const blogEntries = posts.map((post) => ({
    url: `${COMPANY.url}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const categoryEntries = categories.map((cat) => ({
    url: `${COMPANY.url}/blog/categories/${cat}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [
    {
      url: COMPANY.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${COMPANY.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...blogEntries,
    ...categoryEntries,
  ];
}
