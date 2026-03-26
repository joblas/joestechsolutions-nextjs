import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedCard({ children, className = "" }: AnimatedCardProps) {
  return (
    <div
      className={`transition-transform duration-300 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] hover:scale-[1.02] hover:-translate-y-2 active:scale-[0.98] ${className}`}
    >
      {children}
    </div>
  );
}
