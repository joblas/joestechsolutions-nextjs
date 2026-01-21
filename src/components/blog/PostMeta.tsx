import Image from 'next/image';
import { getPillarBySlug } from '@/lib/blog/pillars';
import { cn } from '@/lib/utils';
import type { PostMeta as PostMetaType } from '@/lib/blog/types';

interface PostMetaProps {
  post: PostMetaType & { content?: string };
  className?: string;
}

export function PostMeta({ post, className }: PostMetaProps) {
  const pillar = getPillarBySlug(post.pillar);
  const author = post.author || 'Joe';

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className={cn('mb-8', className)}>
      {/* Featured Image */}
      {post.featuredImage && (
        <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Meta Info Row */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
        {/* Author */}
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          {author}
        </span>

        {/* Date */}
        <time dateTime={post.date} className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {formattedDate}
        </time>

        {/* Reading Time */}
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {post.readingTime} min read
        </span>

        {/* Pillar Tag */}
        <span
          className={cn(
            'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
            pillar.bgClass,
            pillar.textClass,
            pillar.darkBgClass,
            pillar.darkTextClass
          )}
        >
          {pillar.name}
        </span>

        {/* Content Type */}
        <span className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium capitalize">
          {post.type}
        </span>
      </div>
    </div>
  );
}
