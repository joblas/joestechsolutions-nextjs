import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface CalloutProps {
  type?: 'info' | 'warning' | 'tip' | 'danger';
  title?: string;
  children: ReactNode;
}

const styles = {
  info: {
    bg: 'bg-blue-500/10 border-blue-500/30',
    icon: '💡',
    title: 'text-blue-400',
  },
  warning: {
    bg: 'bg-amber-500/10 border-amber-500/30',
    icon: '⚠️',
    title: 'text-amber-400',
  },
  tip: {
    bg: 'bg-emerald-500/10 border-emerald-500/30',
    icon: '✨',
    title: 'text-emerald-400',
  },
  danger: {
    bg: 'bg-red-500/10 border-red-500/30',
    icon: '🚨',
    title: 'text-red-400',
  },
};

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const style = styles[type];

  return (
    <div className={cn('my-6 rounded-lg border p-4', style.bg)}>
      <div className="flex gap-3">
        <span className="text-xl">{style.icon}</span>
        <div>
          {title && (
            <p className={cn('font-semibold mb-1', style.title)}>{title}</p>
          )}
          <div className="text-white/80 text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
}
