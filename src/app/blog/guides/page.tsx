import { getPostsMetaByType } from '@/lib/blog/posts';
import { PostCard } from '@/components/blog/PostCard';
import { CategoryNav } from '@/components/blog/CategoryNav';
import { FadeIn } from '@/components/animations/FadeIn';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Guides | Joe's Tech Solutions Blog",
  description: 'Step-by-step guides and tutorials on AI, local models, and automation.',
  alternates: {
    canonical: '/blog/guides',
  },
  openGraph: {
    title: "Guides | Joe's Tech Solutions Blog",
    description: 'Step-by-step guides and tutorials on AI, local models, and automation.',
    url: 'https://joestechsolutions.com/blog/guides',
  },
};

export default function GuidesPage() {
  const guides = getPostsMetaByType('guide');

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628] via-[#0d0d12] to-[#0d0d12]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#0EA5E9] rounded-full blur-[120px] animate-glow" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 font-space-grotesk">
                Guides
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto font-light mb-8">
                Step-by-step tutorials and how-to guides to help you master AI tools and workflows.
              </p>
              <CategoryNav className="justify-center" />
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            {guides.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {guides.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            ) : (
              <p className="text-center text-white/60 text-lg">
                No guides yet. Check back soon!
              </p>
            )}
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
