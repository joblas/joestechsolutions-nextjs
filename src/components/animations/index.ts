/**
 * Premium Animation Components
 * Ultra-smooth, Apple-style animations for Next.js
 *
 * Based on the following animation principles:
 * - Spring physics with soft damping (16-20)
 * - Cubic-bezier easing: (0.16, 1, 0.3, 1)
 * - Back.out with overshoot for "rubbery" feel
 * - Expo.out for fast text reveals
 * - Scroll-triggered viewport animations
 * - GPU-accelerated transforms
 */

// Core Animation Utilities
export * from "@/lib/animations";

// Hero Components
export { HeroGlow } from "./HeroGlow";
export { StaggeredNav, NavItem } from "./StaggeredNav";

// Card Components
export { FloatingCard, FloatingCards } from "./FloatingCards";
export {
  FeatureCard,
  FeatureCardGrid,
  FeatureHeadline,
  FeatureSubtext,
  FeatureIcon,
} from "./FeatureCard";

// Graph & Data Visualization
export { AnimatedGraph, StarRating, AnimatedCounter } from "./AnimatedGraph";

// AI & Interactive Components
export {
  AICard,
  AICardGrid,
  ToggleSwitch,
  ChartBar,
  ChartGrid,
  PulsingIcon,
} from "./AICard";

// Background & Effects
export {
  PremiumBackground,
  SectionDivider,
  GlassCard,
  ShadowHalo,
} from "./PremiumBackground";

// Legacy Components (already in your codebase)
export { FadeIn } from "./FadeIn";
export { StaggerContainer, StaggerItem } from "./StaggerContainer";
export { AnimatedCard } from "./AnimatedCard";
export { CountUp } from "./CountUp";
export { MagneticButton } from "./MagneticButton";
export { ParallaxSection } from "./ParallaxSection";
export { ParallaxBackground } from "./ParallaxBackground";
