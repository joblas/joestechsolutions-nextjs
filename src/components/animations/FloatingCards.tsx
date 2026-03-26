"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import { stackedCardVariants, floatingCardVariants } from "@/lib/animations";

interface FloatingCardsProps {
  cards: Array<{
    content: ReactNode;
    className?: string;
  }>;
  stacked?: boolean;
  parallax?: boolean;
  className?: string;
}

/**
 * Floating Cards Component
 * Creates Apple VisionOS-style floating glass panels
 * Supports both single cards and stacked layers with depth
 */
export function FloatingCards({
  cards,
  stacked = false,
  parallax = true,
  className = "",
}: FloatingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {cards.map((card, index) => {
        // Parallax effect - foreground moves faster than background
        const yOffset = parallax
          ? useTransform(
              scrollYProgress,
              [0, 1],
              [0, -(index + 1) * 30]
            )
          : undefined;

        const variants = stacked
          ? stackedCardVariants(index)
          : floatingCardVariants;

        return (
          <motion.div
            key={index}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={parallax ? { y: yOffset } : undefined}
            className={`
              ${stacked ? "absolute inset-0" : ""}
              ${card.className || ""}
            `}
          >
            {/* Soft drop shadow for depth */}
            <div className="relative">
              <div
                className="absolute inset-0 bg-black/20 rounded-3xl blur-xl"
                style={{
                  transform: `translateY(${index * 4 + 8}px)`,
                  opacity: stacked ? 0.3 - index * 0.08 : 0.2,
                }}
              />

              {/* Card content */}
              <div className="relative bg-gradient-to-br from-[#1c1c26]/90 to-[#0d0d12]/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                {card.content}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/**
 * Single Floating Card
 * Simplified version for individual cards
 */
interface SingleFloatingCardProps {
  children: ReactNode;
  className?: string;
  parallaxSpeed?: number;
}

export function FloatingCard({
  children,
  className = "",
  parallaxSpeed = -20,
}: SingleFloatingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, parallaxSpeed]);

  return (
    <motion.div
      ref={cardRef}
      variants={floatingCardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      style={{ y }}
      className={`relative ${className}`}
    >
      {/* Shadow for depth */}
      <div className="absolute inset-0 bg-black/20 rounded-3xl blur-xl transform translate-y-2 opacity-30" />

      {/* Glass-like card */}
      <div className="relative bg-gradient-to-br from-[#1c1c26]/90 to-[#0d0d12]/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
        {children}
      </div>
    </motion.div>
  );
}
