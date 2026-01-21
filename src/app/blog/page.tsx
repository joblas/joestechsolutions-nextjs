import { getAllPostsMeta, getFeaturedPosts, getPostsMetaByType } from '@/lib/blog/posts';
import { PostCard } from '@/components/blog/PostCard';
import { BlogHero } from '@/components/blog/BlogHero';
import { CategoryNav } from '@/components/blog/CategoryNav';
import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';
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
  const featuredPosts = getFeaturedPosts(3);
  const latestGuides = getPostsMetaByType('guide').slice(0, 4);
  const latestArticles = getPostsMetaByType('article').slice(0, 4);

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
                Blog
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto font-light mb-8">
                Practical guides and insights on AI, local models, and automation
                to help you work smarter with technology.
              </p>
              <CategoryNav className="justify-center" />
            </div>
          </FadeIn>

          {featuredPosts.length > 0 && (
            <FadeIn delay={0.15}>
              <div className="mb-16">
                <h2 className="text-2xl font-semibold text-white mb-6">Featured</h2>
                <BlogHero posts={featuredPosts} />
              </div>
            </FadeIn>
          )}

          {/* Latest Guides Section */}
          {latestGuides.length > 0 && (
            <FadeIn delay={0.25}>
              <div className="mb-16">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-white">Latest Guides</h2>
                  <Link
                    href="/blog/guides"
                    className="text-sm text-[#0EA5E9] hover:text-[#0EA5E9]/80 transition-colors font-medium"
                  >
                    View All Guides →
                  </Link>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {latestGuides.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
              </div>
            </FadeIn>
          )}

          {/* Latest Articles Section */}
          {latestArticles.length > 0 && (
            <FadeIn delay={0.35}>
              <div className="mb-16">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-white">Latest Articles</h2>
                  <Link
                    href="/blog/articles"
                    className="text-sm text-[#0EA5E9] hover:text-[#0EA5E9]/80 transition-colors font-medium"
                  >
                    View All Articles →
                  </Link>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {latestArticles.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
              </div>
            </FadeIn>
          )}

          {/* Fallback: All Posts (shown if no guides or articles) */}
          {latestGuides.length === 0 && latestArticles.length === 0 && posts.length > 0 && (
            <FadeIn delay={0.3}>
              <h2 className="text-2xl font-semibold text-white mb-6">All Posts</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {posts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </FadeIn>
          )}

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
