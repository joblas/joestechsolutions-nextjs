import Link from 'next/link';
import { getAllPostsMeta } from '@/lib/blog/posts';
import { PostCard } from '@/components/blog/PostCard';
import { FadeIn } from '@/components/animations/FadeIn';

export default function BlogNotFound() {
  const recentPosts = getAllPostsMeta().slice(0, 3);

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628] via-[#0d0d12] to-[#0d0d12]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-500 rounded-full blur-[120px] animate-glow" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="text-8xl font-bold text-white/10 mb-4 font-space-grotesk">
                404
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-space-grotesk">
                Post Not Found
              </h1>
              <p className="text-xl text-white/60 max-w-lg mx-auto mb-8">
                Sorry, we couldn&apos;t find the blog post you&apos;re looking for. 
                It may have been moved or deleted.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Blog
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors"
                >
                  Go Home
                </Link>
              </div>
            </div>
          </FadeIn>

          {recentPosts.length > 0 && (
            <FadeIn delay={0.2}>
              <div className="mt-16">
                <h2 className="text-xl font-semibold text-white mb-6 text-center">
                  Check out our recent posts
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {recentPosts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </section>
    </div>
  );
}
