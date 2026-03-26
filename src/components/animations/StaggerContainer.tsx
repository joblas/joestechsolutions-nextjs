"use client";

import { ReactNode, useRef, useEffect, useState, Children, isValidElement, cloneElement, ReactElement } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  className = "",
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: "-100px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child as ReactElement<{ isVisible?: boolean; delay?: number }>, {
            isVisible,
            delay: index * staggerDelay,
          });
        }
        return child;
      })}
    </div>
  );
}

export function StaggerItem({ children, className = "", isVisible, delay = 0 }: { children: ReactNode; className?: string; isVisible?: boolean; delay?: number }) {
  return (
    <div
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s cubic-bezier(0.21, 0.47, 0.32, 0.98) ${delay}s, transform 0.5s cubic-bezier(0.21, 0.47, 0.32, 0.98) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
