import type { BlogCategory } from "@/lib/constants";

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  category: BlogCategory;
  tags: string[];
  image?: string;
  published: boolean;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
  readingTime: string;
}
