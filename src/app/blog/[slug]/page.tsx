import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/blog/posts';
import { getPillarBySlug } from '@/lib/blog/pillars';
import { MDXContent } from '@/components/blog/MDXContent';
import { FadeIn } from '@/components/animations/FadeIn';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Joe's Tech Solutions`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://joestechsolutions.com/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'Joe'],
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

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628] via-[#0d0d12] to-[#0d0d12]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#0EA5E9] rounded-full blur-[120px] animate-glow" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className={cn(
                    'inline-block rounded-full px-3 py-1 text-sm font-medium',
                    pillar.bgClass,
                    pillar.textClass,
                    pillar.darkBgClass,
                    pillar.darkTextClass
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

              <div className="flex items-center gap-4 text-white/60">
                <time dateTime={post.date}>{formattedDate}</time>
                <span>·</span>
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="text-white/90">
              <MDXContent source={post.content} />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
