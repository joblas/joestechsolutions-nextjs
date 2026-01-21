import Link from 'next/link';
import type { PostMeta } from '@/lib/blog/types';
import { getPillarBySlug } from '@/lib/blog/pillars';
import { cn } from '@/lib/utils';

interface PostCardProps {
  post: PostMeta;
  className?: string;
}

export function PostCard({ post, className }: PostCardProps) {
  const pillar = getPillarBySlug(post.pillar);
  
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        'group block rounded-lg border bg-card p-4 transition-colors hover:border-primary/50',
        className
      )}
    >
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <span
          className={cn(
            'inline-block rounded-full px-2.5 py-0.5 text-xs font-medium',
            pillar.bgClass,
            pillar.textClass,
            pillar.darkBgClass,
            pillar.darkTextClass
          )}
        >
          {pillar.name}
        </span>
        <span className="inline-block rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground capitalize">
          {post.type}
        </span>
      </div>
      
      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
        {post.title}
      </h3>
      
      <time className="mt-2 block text-sm text-muted-foreground" dateTime={post.date}>
        {formattedDate}
      </time>
    </Link>
  );
}
