'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

type SortOption = 'newest' | 'oldest' | 'a-z';

interface SortDropdownProps {
  basePath: string;
  className?: string;
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'a-z', label: 'A-Z' },
];

export function SortDropdown({ basePath, className }: SortDropdownProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSort = (searchParams.get('sort') as SortOption) || 'newest';

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    
    if (newSort === 'newest') {
      params.delete('sort');
    } else {
      params.set('sort', newSort);
    }
    
    // Reset to page 1 when sorting
    params.delete('page');
    
    const queryString = params.toString();
    router.push(queryString ? `${basePath}?${queryString}` : basePath);
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <label htmlFor="sort-select" className="text-sm text-white/60">
        Sort by:
      </label>
      <select
        id="sort-select"
        value={currentSort}
        onChange={handleSortChange}
        className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value} className="bg-[#0d0d12]">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
