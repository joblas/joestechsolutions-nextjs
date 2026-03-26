import { ReactNode } from "react";

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
 * Pure CSS animation — no framer-motion needed
 */
export function HeroGlow({
  children,
  glowColor = "#0d9488",
  glowIntensity = 0.4,
  className = "",
}: HeroGlowProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Glow layer behind text */}
      <div
        className="absolute inset-0 -z-10 animate-[hero-glow_1.2s_cubic-bezier(0.16,1,0.3,1)_forwards] opacity-0 scale-[0.8]"
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
