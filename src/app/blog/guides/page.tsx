import { Suspense } from 'react';
import { getPostsMetaByType } from '@/lib/blog/posts';
import { PostGrid } from '@/components/blog/PostGrid';
import { CategoryNav } from '@/components/blog/CategoryNav';
import { Pagination } from '@/components/blog/Pagination';
import { SortDropdown } from '@/components/blog/SortDropdown';
import { FadeIn } from '@/components/animations/FadeIn';
import type { Metadata } from 'next';
import type { PostMeta } from '@/lib/blog/types';

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

const POSTS_PER_PAGE = 12;

interface GuidesPageProps {
  searchParams: Promise<{ page?: string; sort?: string }>;
}

function sortPosts(posts: PostMeta[], sort: string): PostMeta[] {
  switch (sort) {
    case 'oldest':
      return [...posts].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    case 'a-z':
      return [...posts].sort((a, b) => a.title.localeCompare(b.title));
    case 'newest':
    default:
      return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
}

export default async function GuidesPage({ searchParams }: GuidesPageProps) {
  const params = await searchParams;
  const currentPage = Math.max(1, parseInt(params.page || '1', 10));
  const currentSort = params.sort || 'newest';

  const allGuides = getPostsMetaByType('guide');
  const sortedGuides = sortPosts(allGuides, currentSort);

  const totalPages = Math.ceil(sortedGuides.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedGuides = sortedGuides.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628] via-[#0d0d12] to-[#0d0d12]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#10B981] rounded-full blur-[120px] animate-glow" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 font-space-grotesk">
                Guides
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto font-light mb-4">
                Step-by-step tutorials and how-to guides to help you master AI tools and workflows.
              </p>
              <p className="text-sm text-white/50 mb-8">
                {allGuides.length} {allGuides.length === 1 ? 'guide' : 'guides'} available
              </p>
              <CategoryNav className="justify-center" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex justify-end mb-6">
              <Suspense fallback={<div className="h-10" />}>
                <SortDropdown basePath="/blog/guides" />
              </Suspense>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <PostGrid posts={paginatedGuides} />
          </FadeIn>

          {totalPages > 1 && (
            <FadeIn delay={0.2}>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                basePath="/blog/guides"
                className="mt-12"
              />
            </FadeIn>
          )}
        </div>
      </section>
    </div>
  );
}
