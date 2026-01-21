/**
 * Blog Content Types
 * Foundation types for the AI education blog
 */

/**
 * Content type - distinguishes evergreen guides from timely articles
 */
export type ContentType = 'guide' | 'article';

/**
 * Content pillar - the five topic categories
 */
export type PillarSlug = 'local-ai' | 'prompting' | 'tutorials' | 'news' | 'experiments';

/**
 * Pillar definition with metadata
 */
export interface Pillar {
  slug: PillarSlug;
  name: string;
  description: string;
  color: string;
  /** Tailwind bg class for light mode */
  bgClass: string;
  /** Tailwind text class for light mode */
  textClass: string;
  /** Tailwind bg class for dark mode */
  darkBgClass: string;
  /** Tailwind text class for dark mode */
  darkTextClass: string;
}

/**
 * Post frontmatter - the metadata at the top of each MDX file
 */
export interface PostFrontmatter {
  /** Post title */
  title: string;
  /** Publication date (ISO string or Date) */
  date: string;
  /** Content type: guide or article */
  type: ContentType;
  /** Content pillar for categorization */
  pillar: PillarSlug;
  /** Short description for cards and SEO */
  excerpt: string;
  /** Whether to feature this post prominently */
  featured?: boolean;
  /** Featured image URL or path */
  featuredImage?: string;
  /** Tags for additional categorization */
  tags?: string[];
  /** Whether the post is a draft (excluded in production) */
  draft?: boolean;
  /** Author name (defaults to 'Joe') */
  author?: string;
}

/**
 * Full post with computed properties
 */
export interface Post extends PostFrontmatter {
  /** URL slug derived from filename */
  slug: string;
  /** Estimated reading time in minutes */
  readingTime: number;
  /** Raw MDX content (without frontmatter) */
  content: string;
  /** Source folder: 'guides' or 'articles' */
  folder: 'guides' | 'articles';
}

/**
 * Post metadata without content - for list views
 */
export type PostMeta = Omit<Post, 'content'>;

/**
 * Sort options for post lists
 */
export type PostSortOption = 'newest' | 'oldest' | 'a-z';

/**
 * Filter options for post queries
 */
export interface PostFilters {
  type?: ContentType;
  pillar?: PillarSlug;
  featured?: boolean;
  includeDrafts?: boolean;
}

/**
 * Paginated post result
 */
export interface PaginatedPosts {
  posts: PostMeta[];
  totalPosts: number;
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

/**
 * Search result item
 */
export interface SearchResult {
  post: PostMeta;
  /** Relevance score (higher = more relevant) */
  score: number;
  /** Matched fields */
  matches: ('title' | 'excerpt' | 'tags' | 'content')[];
}
