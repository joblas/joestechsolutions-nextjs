"use client";

import { ReactNode, useRef, useEffect } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

export function ParallaxSection({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const speedMultiplier = direction === "down" ? -1 : 1;
    const yRange = 100 * speed * speedMultiplier;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      // progress: 0 when element enters bottom, 1 when exits top
      const progress = Math.min(Math.max((viewH - rect.top) / (viewH + rect.height), 0), 1);
      const y = -yRange + progress * 2 * yRange;
      el.style.transform = `translateY(${y}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed, direction]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
