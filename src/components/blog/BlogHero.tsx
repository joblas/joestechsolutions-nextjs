import Link from 'next/link';
import type { PostMeta } from '@/lib/blog/types';
import { getPillarBySlug } from '@/lib/blog/pillars';
import { cn } from '@/lib/utils';

interface BlogHeroProps {
  posts: PostMeta[];
  className?: string;
}

function HeroCard({ post, isMain = false }: { post: PostMeta; isMain?: boolean }) {
  const pillar = getPillarBySlug(post.pillar);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        'group relative flex flex-col rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 transition-all hover:border-white/20 hover:bg-white/[0.08]',
        isMain && 'lg:p-8'
      )}
    >
      <div className="flex flex-wrap items-center gap-2 mb-3">
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
        <span className="inline-block rounded-md bg-white/10 px-2 py-0.5 text-xs font-medium text-white/70 capitalize">
          {post.type}
        </span>
      </div>

      <h3
        className={cn(
          'font-semibold text-white group-hover:text-[#0EA5E9] transition-colors',
          isMain ? 'text-2xl lg:text-3xl mb-3' : 'text-lg mb-2'
        )}
      >
        {post.title}
      </h3>

      <p
        className={cn(
          'text-white/70 line-clamp-2',
          isMain ? 'text-base lg:text-lg' : 'text-sm'
        )}
      >
        {post.excerpt}
      </p>

      <div className="mt-auto pt-4">
        <span className="text-sm text-[#0EA5E9] group-hover:underline">
          Read more →
        </span>
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
    <div className={cn('grid gap-4 lg:gap-6', className)}>
      {posts.length === 1 ? (
        <HeroCard post={mainPost} isMain />
      ) : posts.length === 2 ? (
        <div className="grid gap-4 lg:gap-6 md:grid-cols-2">
          <HeroCard post={mainPost} isMain />
          <HeroCard post={sidePosts[0]} />
        </div>
      ) : (
        <div className="grid gap-4 lg:gap-6 lg:grid-cols-2">
          <HeroCard post={mainPost} isMain />
          <div className="grid gap-4 lg:gap-6">
            {sidePosts.map((post) => (
              <HeroCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
