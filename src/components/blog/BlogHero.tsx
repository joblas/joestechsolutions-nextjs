import Link from 'next/link';
import Image from 'next/image';
import type { PostMeta } from '@/lib/blog/types';
import { getPillarBySlug } from '@/lib/blog/pillars';
import { cn } from '@/lib/utils';
import { ArrowRight, Sparkles } from 'lucide-react';

interface BlogHeroProps {
  posts: PostMeta[];
  className?: string;
}

function HeroCard({ post, isMain = false, className = "" }: { post: PostMeta; isMain?: boolean; className?: string }) {
  const pillar = getPillarBySlug(post.pillar);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        'group relative flex flex-col justify-end overflow-hidden rounded-2xl border transition-all duration-500',
        'border-gray-200 dark:border-white/10 bg-white dark:bg-white/5',
        // Hover State: Deep Space
        'hover:bg-[#0A1628] hover:border-[#0EA5E9]/50 hover:shadow-2xl hover:shadow-[#0EA5E9]/20 hover:-translate-y-1',
        isMain ? 'min-h-[400px] lg:min-h-[500px]' : 'min-h-[240px]'
      )}
    >
      {/* Background Image / Ambient Gradient */}
      <div className="absolute inset-0 z-0">
        {post.featuredImage ? (
          <>
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 dark:opacity-60 group-hover:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
          </>
        ) : (
          <div
            className="absolute inset-0 transition-opacity duration-500 opacity-20 dark:opacity-10 group-hover:opacity-30"
            style={{
              background: `linear-gradient(135deg, ${pillar.color}40 0%, ${pillar.color}10 100%)`,
            }}
          />
        )}
      </div>

      {/* Content Container */}
      <div className={cn(
        'relative z-10 flex flex-col p-6 lg:p-8 transition-transform duration-500 ease-out',
        isMain ? 'lg:p-10' : ''
      )}>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md shadow-sm',
              pillar.bgClass,
              pillar.textClass,
              pillar.darkBgClass,
              pillar.darkTextClass,
              'bg-white/90 text-gray-900' // Override for consistency over images
            )}
          >
            {isMain && <Sparkles className="w-3 h-3" />}
            {pillar.name}
          </span>
        </div>

        <h3
          className={cn(
            'font-bold font-space-grotesk text-gray-900 dark:text-white mb-3 transition-colors duration-300 group-hover:text-white',
            // If image is present, text is white by default due to overlay
            post.featuredImage && 'text-white',
            isMain ? 'text-3xl lg:text-5xl lg:leading-tight' : 'text-xl lg:text-2xl'
          )}
        >
          {post.title}
        </h3>

        <p
          className={cn(
            'line-clamp-2 text-gray-600 dark:text-gray-300 mb-6 max-w-2xl transition-colors duration-300 group-hover:text-gray-300',
            post.featuredImage && 'text-gray-200',
            isMain ? 'text-lg lg:text-xl' : 'text-sm'
          )}
        >
          {post.excerpt}
        </p>

        <div className={cn(
          'flex items-center text-sm font-bold text-[#0EA5E9] group-hover:text-[#38BDF8] transition-colors',
          post.featuredImage ? 'text-white group-hover:text-[#38BDF8]' : ''
        )}>
          Read Full Article
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

export function BlogHero({ posts, className }: BlogHeroProps) {
  if (posts.length === 0) {
    return null;
  }

  const [mainPost, ...sidePosts] = posts.slice(0, 3);

  return (
    <div className={cn('grid gap-6', className)}>
      {posts.length === 1 ? (
        <HeroCard post={mainPost} isMain />
      ) : posts.length === 2 ? (
        <div className="grid gap-6 md:grid-cols-2">
          <HeroCard post={mainPost} />
          <HeroCard post={sidePosts[0]} />
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7 flex flex-col">
            <HeroCard post={mainPost} isMain className="h-full" />
          </div>
          <div className="lg:col-span-5 flex flex-col gap-6">
            {sidePosts.map((post) => (
              <HeroCard key={post.slug} post={post} className="flex-1" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
