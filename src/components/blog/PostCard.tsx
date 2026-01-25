import Link from 'next/link';
import Image from 'next/image';
import type { PostMeta } from '@/lib/blog/types';
import { getPillarBySlug } from '@/lib/blog/pillars';
import { cn } from '@/lib/utils';
import { Clock, ArrowRight } from 'lucide-react';

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
        'group relative flex flex-col h-full overflow-hidden rounded-2xl transition-all duration-500 border',
        // Default State (Light/Dark mode neutral)
        'bg-white dark:bg-white/5 border-gray-200 dark:border-white/10',
        // Hover State (The "Light to Dark" inversion requested)
        'hover:bg-[#0A1628] hover:border-[#0EA5E9]/50 hover:shadow-2xl hover:shadow-[#0EA5E9]/20 hover:-translate-y-2',
        className
      )}
    >
      {/* Featured Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800">
        {post.featuredImage ? (
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        ) : (
          <div
            className={cn(
              'absolute inset-0 flex items-center justify-center transition-colors duration-500',
              'bg-gray-50 dark:bg-white/5 group-hover:bg-white/5'
            )}
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: `linear-gradient(135deg, ${pillar.color} 0%, transparent 100%)`,
              }}
            />
            <span className="text-4xl opacity-30 grayscale group-hover:grayscale-0 transition-all duration-500">
              📝
            </span>
          </div>
        )}

        {/* Pillar Badge (Overlaid) */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className={cn(
              'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md shadow-sm transition-all duration-300',
              'bg-white/90 text-gray-900 group-hover:bg-[#0EA5E9] group-hover:text-white'
            )}
          >
            {pillar.name}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Date & Read Time */}
        <div className="flex items-center gap-3 text-xs font-medium text-gray-500 mb-3 group-hover:text-gray-400 transition-colors">
          <time dateTime={post.date}>{formattedDate}</time>
          <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-gray-600" />
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {post.readingTime} min read
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-3 line-clamp-2 transition-colors duration-300 group-hover:text-white">
          {post.title}
        </h3>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-sm text-gray-600 line-clamp-3 mb-6 flex-1 transition-colors duration-300 group-hover:text-gray-400">
            {post.excerpt}
          </p>
        )}

        {/* Call to Action */}
        <div className="mt-auto flex items-center text-sm font-semibold text-[#0EA5E9] group-hover:text-[#38BDF8] transition-colors">
          Read Article
          <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
