import type { PostMeta } from '@/lib/blog/types';
import { PostCard } from './PostCard';
import { cn } from '@/lib/utils';

interface PostGridProps {
  posts: PostMeta[];
  className?: string;
}

export function PostGrid({ posts, className }: PostGridProps) {
  if (posts.length === 0) {
    return (
      <p className="text-muted-foreground text-center py-8">
        No posts found.
      </p>
    );
  }

  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4',
        className
      )}
    >
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
