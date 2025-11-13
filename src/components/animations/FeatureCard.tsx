"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import {
  featureCardVariants,
  textSlideUpVariants,
  subtextVariants,
  iconPopVariants,
  staggerConfig,
} from "@/lib/animations";

interface FeatureCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Feature Card with Scroll-Triggered Animation
 * Slides up from below viewport with soft spring motion
 */
export function FeatureCard({
  children,
  className = "",
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      variants={featureCardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Feature Card Grid Container
 * Staggers the appearance of multiple cards
 */
interface FeatureCardGridProps {
  children: ReactNode;
  className?: string;
  staggerSpeed?: "fast" | "medium" | "slow";
}

export function FeatureCardGrid({
  children,
  className = "",
  staggerSpeed = "medium",
}: FeatureCardGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: staggerConfig[staggerSpeed],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Animated Feature Card Content Components
 * Individual elements inside the card with micro-animations
 */
interface FeatureContentProps {
  children: ReactNode;
  className?: string;
}

export function FeatureHeadline({
  children,
  className = "",
}: FeatureContentProps) {
  return (
    <motion.h3 variants={textSlideUpVariants} className={className}>
      {children}
    </motion.h3>
  );
}

export function FeatureSubtext({
  children,
  className = "",
}: FeatureContentProps) {
  return (
    <motion.p variants={subtextVariants} className={className}>
      {children}
    </motion.p>
  );
}

export function FeatureIcon({
  children,
  className = "",
}: FeatureContentProps) {
  return (
    <motion.div variants={iconPopVariants} className={className}>
      {children}
    </motion.div>
  );
}
