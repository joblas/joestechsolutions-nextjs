/**
 * Premium Animation Utilities
 * Based on Apple-style smooth, spring-based animations
 */

import { Variants, Transition } from "framer-motion";

// ============================================
// EASING FUNCTIONS
// ============================================

/**
 * Apple-style spring easing - soft, natural feel
 * Usage: For hero sections, large movements
 */
export const appleSpring: Transition = {
  type: "spring",
  damping: 16,
  stiffness: 100,
  mass: 0.8,
};

/**
 * Soft cubic-bezier - smooth entrance animations
 * Based on: cubic-bezier(0.16, 1, 0.3, 1)
 */
export const smoothEase = [0.16, 1, 0.3, 1] as const;

/**
 * Back ease out - slight overshoot effect
 * Creates a "rubbery" feel like the reference video
 */
export const backOut = [0.34, 1.56, 0.64, 1] as const;

/**
 * Expo out - fast reveal, smooth slow down
 * Perfect for text reveals
 */
export const expoOut = [0.19, 1, 0.22, 1] as const;

/**
 * Gentle ease - subtle movements
 */
export const gentleEase = [0.25, 0.46, 0.45, 0.94] as const;

// ============================================
// ANIMATION VARIANTS
// ============================================

/**
 * Hero Glow Animation
 * Subtle expanding glow behind headline text
 */
export const heroGlowVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: smoothEase,
    },
  },
};

/**
 * Staggered Navigation Fade
 * Nav items appear sequentially from top
 */
export const navItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: smoothEase,
    },
  },
};

export const navContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

/**
 * Floating UI Card Animation
 * Cards appear from bottom-right with 3D depth
 */
export const floatingCardVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    y: 30,
    x: 30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.75,
      ease: smoothEase,
    },
  },
};

/**
 * Stacked Cards with Depth
 * Creates layered effect with varying blur
 */
export const stackedCardVariants = (index: number): Variants => ({
  hidden: {
    opacity: 0,
    scale: 0.92,
    y: 30,
    filter: `blur(${index * 2}px)`,
  },
  visible: {
    opacity: 1 - index * 0.15,
    scale: 1 - index * 0.02,
    y: index * 12,
    filter: `blur(${index * 0.5}px)`,
    transition: {
      duration: 0.75,
      delay: index * 0.08,
      ease: smoothEase,
    },
  },
});

/**
 * Feature Card Slide Up
 * Cards slide from below viewport on scroll
 */
export const featureCardVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.97,
    y: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: backOut,
    },
  },
};

/**
 * Text Slide Up Animation
 * Headlines slide up from below
 */
export const textSlideUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: expoOut,
    },
  },
};

/**
 * Subtext Fade
 * Appears slightly after headline
 */
export const subtextVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.12,
      ease: expoOut,
    },
  },
};

/**
 * Icon Pop Animation
 * Icons scale up with slight bounce
 */
export const iconPopVariants: Variants = {
  hidden: {
    scale: 0.85,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
};

/**
 * Graph Line Draw Animation
 * SVG path reveals from left to right
 */
export const graphLineVariants: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: 1.5,
        ease: smoothEase,
      },
      opacity: {
        duration: 0.3,
      },
    },
  },
};

/**
 * Graph Node Pop
 * Nodes appear along the line
 */
export const graphNodeVariants = (delay: number): Variants => ({
  hidden: {
    scale: 0.4,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay,
      duration: 0.4,
      ease: backOut,
    },
  },
});

/**
 * Counter Fade In
 * Numeric values fade and slide up
 */
export const counterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: gentleEase,
    },
  },
};

/**
 * Star Rating Stagger
 * Stars animate one by one
 */
export const starContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

export const starVariants: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 200,
    },
  },
};

/**
 * Outbound AI Card (Heavy Spring)
 * Cards with rubbery easing and heavy feel
 */
export const aiCardVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 80,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 100,
      mass: 1.2,
    },
  },
};

/**
 * Toggle Switch Slide
 * Smooth left-right toggle animation
 */
export const toggleVariants: Variants = {
  off: {
    x: 0,
  },
  on: {
    x: 20,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 300,
    },
  },
};

/**
 * Chart Bar Growth
 * Bars animate from 0% to full height
 */
export const chartBarVariants = (delay: number): Variants => ({
  hidden: {
    scaleY: 0,
    originY: 1,
  },
  visible: {
    scaleY: 1,
    transition: {
      delay,
      duration: 0.8,
      ease: expoOut,
    },
  },
});

/**
 * Icon Pulse (Subtle)
 * Very soft breathing animation
 */
export const iconPulseVariants: Variants = {
  initial: {
    scale: 1,
  },
  pulse: {
    scale: [1, 1.04, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: gentleEase,
    },
  },
};

/**
 * Label Slide Up
 * Text labels fade and slide upward
 */
export const labelSlideVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: gentleEase,
    },
  },
};

/**
 * Divider Line Expand
 * Line expands from center to full width
 */
export const dividerVariants: Variants = {
  hidden: {
    scaleX: 0,
    originX: 0.5,
  },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: expoOut,
    },
  },
};

/**
 * Button Hover Glow
 * Glossy highlight sweep across button
 */
export const buttonGlowVariants: Variants = {
  initial: {
    x: "-100%",
  },
  hover: {
    x: "100%",
    transition: {
      duration: 0.6,
      ease: smoothEase,
    },
  },
};

// ============================================
// SCROLL TRANSITION VARIANTS
// ============================================

/**
 * Hero Fade on Scroll
 * Hero section fades upward as user scrolls
 */
export const heroScrollVariants: Variants = {
  initial: {
    opacity: 1,
    y: 0,
  },
  scrolled: {
    opacity: 0.3,
    y: -50,
  },
};

/**
 * Parallax Layer Variants
 * Different layers move at different speeds
 */
export const parallaxVariants = (speed: number): Variants => ({
  initial: {
    y: 0,
  },
  scrolled: (scrollProgress: number) => ({
    y: scrollProgress * speed,
  }),
});

// ============================================
// STAGGER CONFIGURATIONS
// ============================================

export const staggerConfig = {
  fast: {
    staggerChildren: 0.06,
  },
  medium: {
    staggerChildren: 0.1,
  },
  slow: {
    staggerChildren: 0.15,
  },
};

// ============================================
// VIEWPORT SETTINGS
// ============================================

export const viewportSettings = {
  default: {
    once: true,
    margin: "-100px",
  },
  repeated: {
    once: false,
    margin: "-50px",
  },
  eager: {
    once: true,
    margin: "0px",
  },
};
