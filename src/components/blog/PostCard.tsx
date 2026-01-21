import Link from 'next/link';
import Image from 'next/image';
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
        'group block rounded-xl border bg-card overflow-hidden transition-all duration-300',
        'hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1',
        className
      )}
    >
      {/* Featured Image */}
      <div className="relative aspect-video bg-muted overflow-hidden">
        {post.featuredImage ? (
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div 
            className={cn(
              'absolute inset-0 flex items-center justify-center',
              'bg-gradient-to-br from-muted to-muted/50'
            )}
            style={{
              background: `linear-gradient(135deg, ${pillar.color}20 0%, ${pillar.color}05 100%)`,
            }}
          >
            <span className="text-4xl opacity-30">📝</span>
          </div>
        )}
      </div>

      <div className="p-4">
        {/* Pillar Tag + Type Badge */}
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

        {/* Title */}
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {post.excerpt}
          </p>
        )}

        {/* Date + Reading Time */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <time dateTime={post.date}>{formattedDate}</time>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {post.readingTime} min read
          </span>
        </div>
      </div>
    </Link>
  );
}
