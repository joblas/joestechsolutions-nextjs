import type { PostMeta } from './types';

export interface SearchResult extends PostMeta {
  score: number;
}

/**
 * Search posts by query string.
 * Searches title, excerpt, tags, and pillar.
 * Posts must be passed in - this is a client-safe function.
 */
export function searchPosts(query: string, posts: PostMeta[]): SearchResult[] {
  const searchTerms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);

  if (searchTerms.length === 0) {
    return [];
  }

  const results: SearchResult[] = [];

  for (const post of posts) {
    let score = 0;
    const titleLower = post.title.toLowerCase();
    const excerptLower = (post.excerpt || '').toLowerCase();
    const pillarLower = post.pillar.toLowerCase();
    const tagsLower = (post.tags || []).map(t => t.toLowerCase());

    for (const term of searchTerms) {
      // Title matches (highest weight)
      if (titleLower.includes(term)) {
        score += 10;
        // Bonus for exact word match
        if (titleLower.split(/\s+/).includes(term)) {
          score += 5;
        }
      }

      // Excerpt matches
      if (excerptLower.includes(term)) {
        score += 5;
      }

      // Pillar matches
      if (pillarLower.includes(term)) {
        score += 3;
      }

      // Tag matches
      for (const tag of tagsLower) {
        if (tag.includes(term)) {
          score += 7;
        }
      }
    }

    if (score > 0) {
      results.push({ ...post, score });
    }
  }

  // Sort by score descending
  return results.sort((a, b) => b.score - a.score);
}
