import { getPostsMetaByPillar, getPostsMetaByType } from '@/lib/blog/posts';
import { PostCard } from './PostCard';
import type { PostMeta, PillarSlug, ContentType } from '@/lib/blog/types';

interface RelatedPostsProps {
  currentSlug: string;
  pillar: PillarSlug;
  type: ContentType;
  limit?: number;
}

export function RelatedPosts({ currentSlug, pillar, type, limit = 3 }: RelatedPostsProps) {
  // Get posts from same pillar, excluding current
  let related = getPostsMetaByPillar(pillar)
    .filter((p) => p.slug !== currentSlug)
    .slice(0, limit);

  // If not enough, fill with same type
  if (related.length < limit) {
    const sameType = getPostsMetaByType(type)
      .filter((p) => p.slug !== currentSlug && !related.find((r) => r.slug === p.slug))
      .slice(0, limit - related.length);
    related = [...related, ...sameType];
  }

  if (related.length === 0) {
    return null;
  }

  return (
    <div className="mt-16 pt-8 border-t border-gray-200 dark:border-white/10">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Related Posts</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
