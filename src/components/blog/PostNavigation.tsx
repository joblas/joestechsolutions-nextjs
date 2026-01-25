import Link from 'next/link';
import { getPostsMetaByType } from '@/lib/blog/posts';
import type { ContentType } from '@/lib/blog/types';

interface PostNavigationProps {
  currentSlug: string;
  type: ContentType;
}

export function PostNavigation({ currentSlug, type }: PostNavigationProps) {
  const posts = getPostsMetaByType(type);
  const currentIndex = posts.findIndex((p) => p.slug === currentSlug);

  if (currentIndex === -1) return null;

  const prevPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : null;

  if (!prevPost && !nextPost) return null;

  return (
    <nav className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
      <div className="flex justify-between gap-4">
        {prevPost ? (
          <Link
            href={`/blog/${prevPost.slug}`}
            className="group flex-1 p-4 rounded-lg border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-colors"
          >
            <span className="text-sm text-gray-500 dark:text-white/50 flex items-center gap-1 mb-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </span>
            <span className="text-gray-900 dark:text-white group-hover:text-primary transition-colors line-clamp-1">
              {prevPost.title}
            </span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        {nextPost ? (
          <Link
            href={`/blog/${nextPost.slug}`}
            className="group flex-1 p-4 rounded-lg border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-colors text-right"
          >
            <span className="text-sm text-gray-500 dark:text-white/50 flex items-center justify-end gap-1 mb-1">
              Next
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <span className="text-gray-900 dark:text-white group-hover:text-primary transition-colors line-clamp-1">
              {nextPost.title}
            </span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </nav>
  );
}
