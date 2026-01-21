/**
 * Blog Content Loader
 * Functions to load and parse MDX blog content
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Post, PostMeta, PostFrontmatter, ContentType, PillarSlug } from './types';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');
const WORDS_PER_MINUTE = 200;

/**
 * Calculate reading time in minutes
 */
function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

/**
 * Extract slug from filename (removes date prefix and extension)
 * e.g., "2025-01-20-my-post.mdx" -> "my-post"
 * or "my-post.mdx" -> "my-post"
 */
function getSlugFromFilename(filename: string): string {
  const withoutExt = filename.replace(/\.mdx?$/, '');
  // Remove date prefix if present (YYYY-MM-DD-)
  const withoutDate = withoutExt.replace(/^\d{4}-\d{2}-\d{2}-/, '');
  return withoutDate;
}

/**
 * Check if we're in production mode
 */
function isProduction(): boolean {
  return process.env.NODE_ENV === 'production';
}

/**
 * Load a single post from a file path
 */
function loadPostFromFile(
  filePath: string,
  folder: 'guides' | 'articles'
): Post | null {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    const frontmatter = data as PostFrontmatter;

    // Skip drafts in production
    if (isProduction() && frontmatter.draft) {
      return null;
    }

    const filename = path.basename(filePath);
    const slug = getSlugFromFilename(filename);

    return {
      ...frontmatter,
      slug,
      content,
      folder,
      readingTime: calculateReadingTime(content),
    };
  } catch {
    console.error(`Failed to load post from ${filePath}`);
    return null;
  }
}

/**
 * Get all MDX files from a directory
 */
function getMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => path.join(dir, file));
}

/**
 * Get all posts from both guides and articles folders
 */
export function getAllPosts(): Post[] {
  const guidesDir = path.join(CONTENT_DIR, 'guides');
  const articlesDir = path.join(CONTENT_DIR, 'articles');

  const guideFiles = getMdxFiles(guidesDir);
  const articleFiles = getMdxFiles(articlesDir);

  const guides = guideFiles
    .map((file) => loadPostFromFile(file, 'guides'))
    .filter((post): post is Post => post !== null);

  const articles = articleFiles
    .map((file) => loadPostFromFile(file, 'articles'))
    .filter((post): post is Post => post !== null);

  const allPosts = [...guides, ...articles];

  // Sort by date descending (newest first)
  return allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Get all post metadata (without content) for list views
 */
export function getAllPostsMeta(): PostMeta[] {
  return getAllPosts().map(({ content: _, ...meta }) => meta);
}

/**
 * Get a single post by slug (searches both guides and articles)
 */
export function getPostBySlug(slug: string): Post | null {
  const guidesDir = path.join(CONTENT_DIR, 'guides');
  const articlesDir = path.join(CONTENT_DIR, 'articles');

  // Search in guides first
  const guideFiles = getMdxFiles(guidesDir);
  for (const file of guideFiles) {
    const filename = path.basename(file);
    if (getSlugFromFilename(filename) === slug) {
      return loadPostFromFile(file, 'guides');
    }
  }

  // Then search in articles
  const articleFiles = getMdxFiles(articlesDir);
  for (const file of articleFiles) {
    const filename = path.basename(file);
    if (getSlugFromFilename(filename) === slug) {
      return loadPostFromFile(file, 'articles');
    }
  }

  return null;
}

/**
 * Get posts by content type (guide or article)
 */
export function getPostsByType(type: ContentType): Post[] {
  return getAllPosts().filter((post) => post.type === type);
}

/**
 * Get post metadata by content type
 */
export function getPostsMetaByType(type: ContentType): PostMeta[] {
  return getPostsByType(type).map(({ content: _, ...meta }) => meta);
}

/**
 * Get posts by pillar
 */
export function getPostsByPillar(pillar: PillarSlug): Post[] {
  return getAllPosts().filter((post) => post.pillar === pillar);
}

/**
 * Get post metadata by pillar
 */
export function getPostsMetaByPillar(pillar: PillarSlug): PostMeta[] {
  return getPostsByPillar(pillar).map(({ content: _, ...meta }) => meta);
}

/**
 * Get featured posts
 */
export function getFeaturedPosts(limit: number = 3): PostMeta[] {
  const allPosts = getAllPostsMeta();
  const featured = allPosts.filter((post) => post.featured);

  // If we have enough featured posts, return them
  if (featured.length >= limit) {
    return featured.slice(0, limit);
  }

  // Otherwise, fill with most recent posts
  const nonFeatured = allPosts.filter((post) => !post.featured);
  return [...featured, ...nonFeatured].slice(0, limit);
}

/**
 * Get all unique tags from all posts
 */
export function getAllTags(): string[] {
  const allPosts = getAllPosts();
  const tagSet = new Set<string>();

  allPosts.forEach((post) => {
    post.tags?.forEach((tag) => tagSet.add(tag));
  });

  return Array.from(tagSet).sort();
}

/**
 * Get posts by tag
 */
export function getPostsByTag(tag: string): PostMeta[] {
  return getAllPostsMeta().filter((post) =>
    post.tags?.includes(tag)
  );
}
