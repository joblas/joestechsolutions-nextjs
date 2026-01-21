import type { PostMeta } from '@/lib/blog/types';
import { PostCard } from './PostCard';
import { cn } from '@/lib/utils';

interface PostGridProps {
  posts: PostMeta[];
  className?: string;
  columns?: 2 | 3 | 4;
}

export function PostGrid({ posts, className, columns = 4 }: PostGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-white/60 text-lg">No posts yet. Check back soon!</p>
      </div>
    );
  }

  const gridCols = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-6',
        gridCols[columns],
        className
      )}
    >
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
