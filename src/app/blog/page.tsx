import { getAllPostsMeta } from '@/lib/blog/posts';
import { PostCard } from '@/components/blog/PostCard';
import { FadeIn } from '@/components/animations/FadeIn';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog | Joe's Tech Solutions",
  description: 'Practical AI guides, tutorials, and insights to help you leverage AI technology in your business.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: "Blog | Joe's Tech Solutions",
    description: 'Practical AI guides, tutorials, and insights to help you leverage AI technology in your business.',
    url: 'https://joestechsolutions.com/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628] via-[#0d0d12] to-[#0d0d12]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#0EA5E9] rounded-full blur-[120px] animate-glow" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 font-space-grotesk">
                Blog
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
                Practical guides and insights on AI, local models, and automation 
                to help you work smarter with technology.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </FadeIn>

          {posts.length === 0 && (
            <FadeIn delay={0.2}>
              <p className="text-center text-white/60 text-lg">
                No posts yet. Check back soon!
              </p>
            </FadeIn>
          )}
        </div>
      </section>
    </div>
  );
}
