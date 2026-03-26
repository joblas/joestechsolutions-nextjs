"use client";

import { useRef, useEffect } from "react";

interface GradientOrb {
  size: number;
  color: string;
  initialX: string;
  initialY: string;
  blur: number;
  speedX?: number;
  speedY?: number;
}

interface ParallaxBackgroundProps {
  orbs?: GradientOrb[];
  opacity?: number;
}

const defaultOrbs: GradientOrb[] = [
  {
    size: 600,
    color: "#0d9488",
    initialX: "20%",
    initialY: "10%",
    blur: 150,
    speedX: 0.3,
    speedY: 0.5,
  },
  {
    size: 500,
    color: "#2dd4bf",
    initialX: "80%",
    initialY: "60%",
    blur: 130,
    speedX: -0.2,
    speedY: 0.4,
  },
  {
    size: 400,
    color: "#0d9488",
    initialX: "50%",
    initialY: "80%",
    blur: 120,
    speedX: 0.4,
    speedY: -0.3,
  },
];

export function ParallaxBackground({
  orbs = defaultOrbs,
  opacity = 0.3,
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const orbRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = Math.min(Math.max((viewH - rect.top) / (viewH + rect.height), 0), 1);

      orbs.forEach((orb, index) => {
        const el = orbRefs.current[index];
        if (!el) return;
        const xOff = progress * (orb.speedX || 0) * 200;
        const yOff = progress * (orb.speedY || 0) * 300;
        el.style.transform = `translate(${xOff}px, ${yOff}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [orbs]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0d0d12] to-[#0d0d12]" />
      <div className="absolute inset-0" style={{ opacity }}>
        {orbs.map((orb, index) => (
          <div
            key={index}
            ref={(el) => { orbRefs.current[index] = el; }}
            className="absolute rounded-full"
            style={{
              width: orb.size,
              height: orb.size,
              left: orb.initialX,
              top: orb.initialY,
              backgroundColor: orb.color,
              filter: `blur(${orb.blur}px)`,
              willChange: "transform",
            }}
          />
        ))}
      </div>
    </div>
  );
}
