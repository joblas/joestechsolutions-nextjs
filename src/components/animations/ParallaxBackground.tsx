"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
    color: "#0EA5E9",
    initialX: "20%",
    initialY: "10%",
    blur: 150,
    speedX: 0.3,
    speedY: 0.5,
  },
  {
    size: 500,
    color: "#06B6D4",
    initialX: "80%",
    initialY: "60%",
    blur: 130,
    speedX: -0.2,
    speedY: 0.4,
  },
  {
    size: 400,
    color: "#0EA5E9",
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

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0d0d12] to-[#0d0d12]" />
      <div className="absolute inset-0" style={{ opacity }}>
        {orbs.map((orb, index) => {
          const x = useTransform(
            scrollYProgress,
            [0, 1],
            [0, (orb.speedX || 0) * 200]
          );
          const y = useTransform(
            scrollYProgress,
            [0, 1],
            [0, (orb.speedY || 0) * 300]
          );

          return (
            <motion.div
              key={index}
              className="absolute rounded-full"
              style={{
                width: orb.size,
                height: orb.size,
                left: orb.initialX,
                top: orb.initialY,
                backgroundColor: orb.color,
                filter: `blur(${orb.blur}px)`,
                x,
                y,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
