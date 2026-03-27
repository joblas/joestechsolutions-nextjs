"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ScrollBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Orbs move at different speeds for depth
  const orbOneY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const orbOneX = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const orbOneScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const orbOneOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [0.25, 0.15, 0]);

  const orbTwoY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const orbTwoX = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const orbTwoScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const orbTwoOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [0.2, 0.1, 0]);

  const orbThreeY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const orbThreeOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.15, 0.25, 0]);

  // Grid shifts subtly
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.04, 0.08, 0]);

  // Accent line grows
  const lineWidth = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-[#0d0d12]" />

      {/* Subtle grid pattern */}
      <motion.div
        className="absolute inset-0"
        style={{ y: gridY, opacity: gridOpacity }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      {/* Purple orb — top right, drifts up-right on scroll */}
      <motion.div
        className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full blur-[160px] bg-[#8B5CF6]"
        style={{
          y: orbOneY,
          x: orbOneX,
          scale: orbOneScale,
          opacity: orbOneOpacity,
        }}
      />

      {/* Teal orb — bottom left, drifts up-left */}
      <motion.div
        className="absolute bottom-[-10%] -left-20 w-[400px] h-[400px] rounded-full blur-[140px] bg-[#0b7f73]"
        style={{
          y: orbTwoY,
          x: orbTwoX,
          scale: orbTwoScale,
          opacity: orbTwoOpacity,
        }}
      />

      {/* Small accent orb — center, rises fastest */}
      <motion.div
        className="absolute top-1/2 left-1/3 w-[200px] h-[200px] rounded-full blur-[100px] bg-[#8B5CF6]"
        style={{
          y: orbThreeY,
          opacity: orbThreeOpacity,
        }}
      />

      {/* Horizontal accent line at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/50 to-transparent"
        style={{ width: lineWidth }}
      />
    </div>
  );
}
