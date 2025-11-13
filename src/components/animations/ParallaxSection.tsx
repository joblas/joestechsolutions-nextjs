"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number; // Multiplier for parallax effect (0.5 = half speed, 2 = double speed)
  direction?: "up" | "down";
}

export function ParallaxSection({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Calculate the transform range based on speed and direction
  const speedMultiplier = direction === "down" ? -1 : 1;
  const yRange = 100 * speed * speedMultiplier;

  const y = useTransform(scrollYProgress, [0, 1], [-yRange, yRange]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
