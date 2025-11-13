"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { navContainerVariants, navItemVariants } from "@/lib/animations";

interface StaggeredNavProps {
  children: ReactNode;
  className?: string;
}

interface NavItemProps {
  children: ReactNode;
  className?: string;
}

/**
 * Staggered Navigation Container
 * Animates nav items sequentially with smooth fade-in from top
 */
export function StaggeredNav({ children, className = "" }: StaggeredNavProps) {
  return (
    <motion.nav
      variants={navContainerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.nav>
  );
}

/**
 * Individual Nav Item
 * Each item fades in and slides down
 */
export function NavItem({ children, className = "" }: NavItemProps) {
  return (
    <motion.div variants={navItemVariants} className={className}>
      {children}
    </motion.div>
  );
}
