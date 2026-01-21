import Link from 'next/link';
import { getAllPillars } from '@/lib/blog/pillars';
import { cn } from '@/lib/utils';

interface CategoryNavProps {
  className?: string;
  /** Currently active pillar slug (for highlighting) */
  activePillar?: string;
}

export function CategoryNav({ className, activePillar }: CategoryNavProps) {
  const pillars = getAllPillars();

  return (
    <nav className={cn('flex flex-wrap gap-2', className)}>
      {pillars.map((pillar) => {
        const isActive = activePillar === pillar.slug;
        
        return (
          <Link
            key={pillar.slug}
            href={`/blog/category/${pillar.slug}`}
            className={cn(
              'inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all',
              'border border-transparent hover:scale-105',
              // Default state
              !isActive && [
                pillar.bgClass,
                pillar.textClass,
                pillar.darkBgClass,
                pillar.darkTextClass,
                'hover:border-current/20',
              ],
              // Active state - more prominent
              isActive && [
                'ring-2 ring-offset-2 ring-offset-background',
                pillar.bgClass,
                pillar.textClass,
                pillar.darkBgClass,
                pillar.darkTextClass,
              ]
            )}
          >
            {pillar.name}
          </Link>
        );
      })}
    </nav>
  );
}
