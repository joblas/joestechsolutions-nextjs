"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

interface Orb {
  size: number;
  color: string;
  initialX: string;
  initialY: string;
  blur: number;
  speedX?: number;
  speedY?: number;
  opacity?: number;
}

interface PremiumBackgroundProps {
  orbs?: Orb[];
  opacity?: number;
  className?: string;
}

/**
 * Premium Background Component
 * Dark gradient with floating glowing orbs
 * Parallax movement on scroll for depth
 */
export function PremiumBackground({
  orbs = [
    {
      size: 800,
      color: "#0d9488",
      initialX: "30%",
      initialY: "20%",
      blur: 200,
      speedX: 0.2,
      speedY: 0.3,
      opacity: 0.3,
    },
    {
      size: 600,
      color: "#2dd4bf",
      initialX: "70%",
      initialY: "60%",
      blur: 180,
      speedX: -0.15,
      speedY: 0.25,
      opacity: 0.25,
    },
  ],
  opacity = 1,
  className = "",
}: PremiumBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = Math.min(Math.max((viewH - rect.top) / (viewH + rect.height), 0), 1);

      orbs.forEach((orb, index) => {
        const el = orbRefs.current[index];
        if (!el) return;
        const xOff = progress * (orb.speedX || 0) * 200;
        const yOff = progress * (orb.speedY || 0) * 200;
        el.style.transform = `translate(calc(-50% + ${xOff}px), calc(-50% + ${yOff}px))`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [orbs]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#050505] to-[#000]" />

      {/* Floating orbs with parallax */}
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          ref={(el) => { orbRefs.current[index] = el; }}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.initialX,
            top: orb.initialY,
            background: `radial-gradient(circle, ${orb.color}${Math.floor((orb.opacity || 0.3) * 255).toString(16).padStart(2, '0')}, transparent 70%)`,
            filter: `blur(${orb.blur}px)`,
            opacity: opacity,
            transform: "translate(-50%, -50%)",
            willChange: "transform",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [orb.opacity || 0.3, (orb.opacity || 0.3) * 1.2, orb.opacity || 0.3],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

/**
 * Section Divider with Expand Animation
 * Line expands from center outward
 */
interface SectionDividerProps {
  color?: string;
  className?: string;
}

export function SectionDivider({
  color = "#0d9488",
  className = "",
}: SectionDividerProps) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      className={`h-px mx-auto ${className}`}
      style={{
        background: `linear-gradient(to right, transparent, ${color}, transparent)`,
        transformOrigin: "center",
      }}
    />
  );
}

/**
 * Glass Card with Depth
 * Frosted glass effect with soft shadows
 */
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlassCard({
  children,
  className = "",
  glowColor = "#0d9488",
}: GlassCardProps) {
  return (
    <div className={`relative group ${className}`}>
      {/* Glow on hover */}
      <div
        className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{
          background: `linear-gradient(135deg, ${glowColor}40, transparent)`,
        }}
      />

      {/* Glass card */}
      <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
        {/* Subtle top highlight */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {children}
      </div>
    </div>
  );
}

/**
 * Ambient Shadow Halo
 * Soft shadow that creates floating depth
 */
interface ShadowHaloProps {
  color?: string;
  intensity?: number;
  spread?: number;
  className?: string;
}

export function ShadowHalo({
  color = "#000",
  intensity = 0.3,
  spread = 40,
  className = "",
}: ShadowHaloProps) {
  return (
    <div
      className={`absolute inset-0 -z-10 ${className}`}
      style={{
        background: `radial-gradient(ellipse, ${color}${Math.floor(intensity * 255).toString(16).padStart(2, '0')}, transparent 70%)`,
        filter: `blur(${spread}px)`,
        transform: "translateY(12px) scale(0.95)",
      }}
    />
  );
}
