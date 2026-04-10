import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogPost, BlogFrontmatter } from "@/types/blog";
import type { BlogCategory } from "@/lib/constants";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files
    .map((filename) => {
      const slug = filename.replace(".mdx", "");
      const filePath = path.join(CONTENT_DIR, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      const frontmatter = data as BlogFrontmatter;

      if (!frontmatter.published) return null;

      return {
        slug,
        frontmatter,
        content,
        readingTime: readingTime(content).text,
      };
    })
    .filter(Boolean) as BlogPost[];

  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const frontmatter = data as BlogFrontmatter;

  return {
    slug,
    frontmatter,
    content,
    readingTime: readingTime(content).text,
  };
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return getAllPosts().filter((p) => p.frontmatter.category === category);
}

export function getAllCategories(): BlogCategory[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map((p) => p.frontmatter.category));
  return Array.from(categories) as BlogCategory[];
}
