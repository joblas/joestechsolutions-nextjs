import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getPostBySlug, getAllPosts } from '@/lib/blog/posts';
import { getPillarBySlug } from '@/lib/blog/pillars';
import { MDXContent } from '@/components/blog/MDXContent';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { PostNavigation } from '@/components/blog/PostNavigation';
import { ShareButtons } from '@/components/blog/ShareButtons';
import { BlogCTA } from '@/components/blog/BlogCTA';
import { FadeIn } from '@/components/animations/FadeIn';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} | Joe's Tech Solutions`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://joestechsolutions.com/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'Joe'],
      images: post.featuredImage ? [post.featuredImage] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.featuredImage ? [post.featuredImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const pillar = getPillarBySlug(post.pillar);
  const author = post.author || 'Joe';

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen">
      <article className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628] via-[#0d0d12] to-[#0d0d12]" />
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] animate-glow"
            style={{ backgroundColor: pillar.color }}
          />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            {/* Header */}
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className={cn(
                    'inline-block rounded-full px-3 py-1 text-sm font-medium',
                    pillar.bgClass, pillar.textClass,
                    pillar.darkBgClass, pillar.darkTextClass
                  )}
                >
                  {pillar.name}
                </span>
                <span className="inline-block rounded-md bg-muted px-2.5 py-1 text-sm font-medium text-muted-foreground capitalize">
                  {post.type}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-space-grotesk">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {author}
                </span>
                <time dateTime={post.date} className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formattedDate}
                </time>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readingTime} min read
                </span>
              </div>

              {/* Share Buttons */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <ShareButtons url={`/blog/${slug}`} title={post.title} />
              </div>
            </header>

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
          </FadeIn>

          {/* Content */}
          <FadeIn delay={0.2}>
            <div className="prose prose-invert prose-lg max-w-none">
              <MDXContent source={post.content} />
            </div>
          </FadeIn>

          {/* CTA Section */}
          <FadeIn delay={0.25}>
            <BlogCTA variant="both" />
          </FadeIn>

          {/* Navigation */}
          <FadeIn delay={0.3}>
            <PostNavigation currentSlug={slug} type={post.type} />
          </FadeIn>

          {/* Related Posts */}
          <FadeIn delay={0.4}>
            <RelatedPosts
              currentSlug={slug}
              pillar={post.pillar}
              type={post.type}
            />
          </FadeIn>
        </div>
      </article>
    </div>
  );
}
