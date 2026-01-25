import { getAllPostsMeta, getFeaturedPosts, getPostsMetaByType } from '@/lib/blog/posts';
import { PostCard } from '@/components/blog/PostCard';
import { BlogHero } from '@/components/blog/BlogHero';
import { CategoryNav } from '@/components/blog/CategoryNav';
import { SearchButton } from '@/components/blog/SearchButton';
import { PostGrid } from '@/components/blog/PostGrid';
import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

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
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#030712]">
      {/* Cinematic Background Pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#0EA5E9]/10 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 pt-32 pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* Header Section */}
          <FadeIn>
            <div className="flex flex-col items-center text-center mb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0EA5E9]/10 text-[#0EA5E9] text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0EA5E9] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0EA5E9]"></span>
                </span>
                Engineering & AI Blog
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold font-space-grotesk tracking-tight text-gray-900 dark:text-white mb-6">
                Insights for the <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4]">
                  AI Era
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl font-light leading-relaxed mb-10">
                Practical guides, deep dives, and experiments on local AI,
                automation, and the future of software engineering.
              </p>

              <div className="w-full max-w-xl flex flex-col sm:flex-row gap-4 justify-center items-center">
                <SearchButton posts={posts} />
              </div>

              <div className="mt-8">
                <CategoryNav className="justify-center" />
              </div>
            </div>
          </FadeIn>

          {/* Featured Section */}
          {featuredPosts.length > 0 && (
            <FadeIn delay={0.2}>
              <div className="mb-24">
                <div className="flex items-end justify-between mb-8 px-2">
                  <h2 className="text-3xl font-bold font-space-grotesk text-gray-900 dark:text-white">
                    Featured Stories
                  </h2>
                </div>
                <BlogHero posts={featuredPosts} />
              </div>
            </FadeIn>
          )}

          {/* Detailed Sections Grid */}
          <div className="space-y-24">

            {/* Latest Guides */}
            {latestGuides.length > 0 && (
              <FadeIn delay={0.3}>
                <section>
                  <div className="flex items-center justify-between mb-8 px-2 border-l-4 border-[#0EA5E9] pl-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Latest Guides
                      </h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Step-by-step tutorials and technical walkthroughs.
                      </p>
                    </div>
                    <Link
                      href="/blog/guides"
                      className="group flex items-center text-sm font-semibold text-gray-600 hover:text-[#0EA5E9] dark:text-gray-400 dark:hover:text-[#0EA5E9] transition-colors"
                    >
                      View All
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                  <PostGrid posts={latestGuides} />
                </section>
              </FadeIn>
            )}

            {/* Latest Articles */}
            {latestArticles.length > 0 && (
              <FadeIn delay={0.4}>
                <section>
                  <div className="flex items-center justify-between mb-8 px-2 border-l-4 border-[#06B6D4] pl-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Latest Articles
                      </h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Opinion pieces, news analysis, and thoughts.
                      </p>
                    </div>
                    <Link
                      href="/blog/articles"
                      className="group flex items-center text-sm font-semibold text-gray-600 hover:text-[#06B6D4] dark:text-gray-400 dark:hover:text-[#06B6D4] transition-colors"
                    >
                      View All
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                  <PostGrid posts={latestArticles} />
                </section>
              </FadeIn>
            )}

            {/* All Posts Fallback */}
            {latestGuides.length === 0 && latestArticles.length === 0 && posts.length > 0 && (
              <FadeIn delay={0.3}>
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 px-2">
                    All Posts
                  </h2>
                  <PostGrid posts={posts} />
                </section>
              </FadeIn>
            )}
          </div>

          {/* Empty State */}
          {posts.length === 0 && (
            <FadeIn delay={0.2}>
              <div className="py-24 text-center">
                <p className="text-xl text-gray-500 font-light">
                  The archives are currently empty. Check back soon.
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </div>
  );
}
