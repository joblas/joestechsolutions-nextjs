"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef, useEffect } from "react";
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
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!parallax) return;
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = Math.min(Math.max((viewH - rect.top) / (viewH + rect.height), 0), 1);
      cards.forEach((_, index) => {
        const el = cardRefs.current[index];
        if (el) el.style.transform = `translateY(${progress * -(index + 1) * 30}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [parallax, cards]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {cards.map((card, index) => {

        const variants = stacked
          ? stackedCardVariants(index)
          : floatingCardVariants;

        return (
          <motion.div
            key={index}
            ref={(el) => { cardRefs.current[index] = el; }}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
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

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = Math.min(Math.max((viewH - rect.top) / (viewH + rect.height), 0), 1);
      el.style.transform = `translateY(${progress * parallaxSpeed}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [parallaxSpeed]);

  return (
    <motion.div
      ref={cardRef}
      variants={floatingCardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
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
