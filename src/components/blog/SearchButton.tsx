'use client';

import { useState, useEffect } from 'react';
import { BlogSearch } from './BlogSearch';
import type { PostMeta } from '@/lib/blog/types';

interface SearchButtonProps {
  posts: PostMeta[];
  className?: string;
}

export function SearchButton({ posts, className }: SearchButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Handle Cmd/Ctrl + K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors ${className}`}
        aria-label="Search posts"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="text-sm hidden sm:inline">Search</span>
        <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-xs bg-white/5 rounded border border-white/10">
          ⌘K
        </kbd>
      </button>

      <BlogSearch posts={posts} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
