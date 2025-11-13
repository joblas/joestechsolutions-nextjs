"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { heroGlowVariants } from "@/lib/animations";

interface HeroGlowProps {
  children: ReactNode;
  glowColor?: string;
  glowIntensity?: number;
  className?: string;
}

/**
 * Hero Glow Component
 * Creates an expanding Gaussian bloom effect behind headline text
 * Mimics Apple-style premium hero animations
 */
export function HeroGlow({
  children,
  glowColor = "#0EA5E9",
  glowIntensity = 0.4,
  className = "",
}: HeroGlowProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Glow layer behind text */}
      <motion.div
        className="absolute inset-0 -z-10"
        variants={heroGlowVariants}
        initial="hidden"
        animate="visible"
        style={{
          background: `radial-gradient(circle, ${glowColor}${Math.floor(glowIntensity * 255).toString(16).padStart(2, '0')} 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />

      {/* Text content */}
      {children}
    </div>
  );
}
