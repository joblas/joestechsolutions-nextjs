export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number; // minutes
  author: string;
  tags: string[];
  content: string; // HTML or markdown string
  seo: {
    title: string;
    description: string;
    ogImage?: string;
  };
}

// Import all blog posts
import { post as privateAiPost } from "@/content/blog/why-your-business-needs-private-ai";
import { post as agentArchitecturePost } from "@/content/blog/22-agent-ai-team-architecture";

export const allPosts: BlogPost[] = [privateAiPost, agentArchitecturePost];

export function getAllPosts(): BlogPost[] {
  return allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((post) => post.slug === slug);
}
