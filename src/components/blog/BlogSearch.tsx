'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { searchPosts, SearchResult } from '@/lib/blog/search';
import { PILLARS } from '@/lib/blog/pillars';
import type { PillarSlug } from '@/lib/blog/types';
import { cn } from '@/lib/utils';
import type { PostMeta } from '@/lib/blog/types';

interface BlogSearchProps {
  isOpen: boolean;
  onClose: () => void;
  posts: PostMeta[];
}

export function BlogSearch({ isOpen, onClose, posts }: BlogSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        const searchResults = searchPosts(query, posts);
        setResults(searchResults);
        setSelectedIndex(0);
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query, posts]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(i => Math.min(i + 1, results.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(i => Math.max(i - 1, 0));
        break;
      case 'Enter':
        if (results[selectedIndex]) {
          window.location.href = `/blog/${results[selectedIndex].slug}`;
        }
        break;
    }
  }, [isOpen, onClose, results, selectedIndex]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Scroll selected item into view
  useEffect(() => {
    const selectedEl = resultsRef.current?.children[selectedIndex];
    if (selectedEl) {
      selectedEl.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative mx-auto max-w-2xl mt-[20vh] px-4">
        <div className="rounded-xl border border-white/10 bg-[#0d0d12] shadow-2xl overflow-hidden">
          {/* Search Input */}
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search posts..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-white placeholder-white/50 px-12 py-4 text-lg focus:outline-none border-b border-white/10"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1">
              <kbd className="hidden sm:inline-block px-2 py-1 text-xs text-white/40 bg-white/5 rounded border border-white/10">
                ESC
              </kbd>
            </div>
          </div>

          {/* Results */}
          <div ref={resultsRef} className="max-h-[60vh] overflow-y-auto">
            {query && results.length === 0 && (
              <div className="p-8 text-center">
                <p className="text-white/60 mb-2">No results for &ldquo;{query}&rdquo;</p>
                <p className="text-sm text-white/40">Try different keywords or browse categories</p>
              </div>
            )}

            {results.map((result, index) => {
              const pillar = PILLARS[result.pillar as PillarSlug] || PILLARS['local-ai'];
              return (
                <Link
                  key={result.slug}
                  href={`/blog/${result.slug}`}
                  className={cn(
                    'flex items-start gap-4 p-4 transition-colors',
                    index === selectedIndex
                      ? 'bg-white/10'
                      : 'hover:bg-white/5'
                  )}
                  onClick={onClose}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `${pillar.color}20`,
                          color: pillar.color
                        }}
                      >
                        {pillar.name}
                      </span>
                      <span className="text-xs text-white/40 capitalize">
                        {result.type}
                      </span>
                    </div>
                    <h3 className="text-white font-medium truncate">
                      {result.title}
                    </h3>
                    {result.excerpt && (
                      <p className="text-sm text-white/60 line-clamp-1 mt-1">
                        {result.excerpt}
                      </p>
                    )}
                  </div>
                  <svg
                    className="w-4 h-4 text-white/30 shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              );
            })}
          </div>

          {/* Footer */}
          {!query && (
            <div className="p-4 border-t border-white/10">
              <div className="flex items-center justify-between text-xs text-white/40">
                <span>Type to search posts</span>
                <div className="hidden sm:flex items-center gap-2">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-white/5 rounded border border-white/10">↑</kbd>
                    <kbd className="px-1.5 py-0.5 bg-white/5 rounded border border-white/10">↓</kbd>
                    to navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-white/5 rounded border border-white/10">↵</kbd>
                    to select
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
