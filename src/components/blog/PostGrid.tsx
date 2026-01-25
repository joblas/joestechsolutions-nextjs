import type { PostMeta } from '@/lib/blog/types';
import { PostCard } from './PostCard';
import { cn } from '@/lib/utils';
import { FileText } from 'lucide-react';

interface PostGridProps {
  posts: PostMeta[];
  className?: string;
  columns?: 2 | 3 | 4;
}

export function PostGrid({ posts, className, columns = 4 }: PostGridProps) {
  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center rounded-2xl border border-dashed border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/5">
        <div className="p-4 bg-white dark:bg-white/10 rounded-full mb-4 shadow-xs">
          <FileText className="w-8 h-8 text-gray-400 dark:text-gray-500" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
          No posts found
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          We couldn't find any articles matching your criteria.
        </p>
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
        'grid grid-cols-1 gap-6 lg:gap-8',
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
