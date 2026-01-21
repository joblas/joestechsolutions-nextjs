import { notFound } from 'next/navigation';
import { getPostsMetaByPillar } from '@/lib/blog/posts';
import { getPillarBySlug, isValidPillarSlug, PILLAR_SLUGS } from '@/lib/blog/pillars';
import { PostCard } from '@/components/blog/PostCard';
import { CategoryNav } from '@/components/blog/CategoryNav';
import { FadeIn } from '@/components/animations/FadeIn';
import type { Metadata } from 'next';
import type { PillarSlug } from '@/lib/blog/types';

interface CategoryPageProps {
  params: Promise<{ pillar: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { pillar: pillarSlug } = await params;
  
  if (!isValidPillarSlug(pillarSlug)) {
    return { title: 'Category Not Found' };
  }
  
  const pillar = getPillarBySlug(pillarSlug);
  
  return {
    title: `${pillar.name} | Joe's Tech Solutions Blog`,
    description: pillar.description,
    alternates: {
      canonical: `/blog/category/${pillarSlug}`,
    },
    openGraph: {
      title: `${pillar.name} | Joe's Tech Solutions Blog`,
      description: pillar.description,
      url: `https://joestechsolutions.com/blog/category/${pillarSlug}`,
    },
  };
}

export function generateStaticParams() {
  return PILLAR_SLUGS.map((pillar) => ({ pillar }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { pillar: pillarSlug } = await params;
  
  if (!isValidPillarSlug(pillarSlug)) {
    notFound();
  }

  const pillar = getPillarBySlug(pillarSlug);
  const posts = getPostsMetaByPillar(pillarSlug as PillarSlug);
  
  // Separate guides and articles
  const guides = posts.filter((p) => p.type === 'guide');
  const articles = posts.filter((p) => p.type === 'article');

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628] via-[#0d0d12] to-[#0d0d12]" />
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] animate-glow"
            style={{ backgroundColor: pillar.color }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <div 
                className="inline-block rounded-full px-4 py-1.5 text-sm font-medium mb-4"
                style={{ 
                  backgroundColor: `${pillar.color}20`,
                  color: pillar.color,
                }}
              >
                Category
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 font-space-grotesk">
                {pillar.name}
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto font-light mb-8">
                {pillar.description}
              </p>
              <CategoryNav className="justify-center" activePillar={pillarSlug} />
            </div>
          </FadeIn>

          {/* Guides Section */}
          {guides.length > 0 && (
            <FadeIn delay={0.15}>
              <div className="mb-16">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Guides <span className="text-white/50 text-lg font-normal">({guides.length})</span>
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {guides.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
              </div>
            </FadeIn>
          )}

          {/* Articles Section */}
          {articles.length > 0 && (
            <FadeIn delay={0.25}>
              <div className="mb-16">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Articles <span className="text-white/50 text-lg font-normal">({articles.length})</span>
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {articles.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
              </div>
            </FadeIn>
          )}

          {posts.length === 0 && (
            <FadeIn delay={0.15}>
              <p className="text-center text-white/60 text-lg">
                No posts in this category yet. Check back soon!
              </p>
            </FadeIn>
          )}
        </div>
      </section>
    </div>
  );
}
