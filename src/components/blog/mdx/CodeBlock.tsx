'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  children: string;
  className?: string;
  filename?: string;
}

export function CodeBlock({ children, className, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const language = className?.replace('language-', '') || 'text';

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-6 rounded-lg overflow-hidden bg-gray-50 dark:bg-[#1e1e2e] border border-gray-200 dark:border-white/10">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-white/5 border-b border-gray-200 dark:border-white/10">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500/60" />
          </div>
          {filename && (
            <span className="text-xs text-gray-500 dark:text-white/50 ml-2">{filename}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400 dark:text-white/40 uppercase">{language}</span>
          <button
            onClick={handleCopy}
            className="text-xs text-gray-400 hover:text-gray-600 dark:text-white/40 dark:hover:text-white/80 transition-colors"
          >
            {copied ? '✓ Copied' : 'Copy'}
          </button>
        </div>
      </div>

      {/* Code */}
      <pre className="p-4 overflow-x-auto text-sm">
        <code className={cn('text-gray-800 dark:text-white/90', className)}>{children}</code>
      </pre>
    </div>
  );
}
