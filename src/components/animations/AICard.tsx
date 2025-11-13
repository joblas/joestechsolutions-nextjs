"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import {
  aiCardVariants,
  toggleVariants,
  chartBarVariants,
  iconPulseVariants,
  labelSlideVariants,
  staggerConfig,
} from "@/lib/animations";

interface AICardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * AI Card with Heavy Spring Motion
 * Rubbery easing that feels substantial and smooth
 */
export function AICard({ children, className = "", delay = 0 }: AICardProps) {
  return (
    <motion.div
      variants={aiCardVariants}
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
 * Toggle Switch Component
 * Smooth left-right animation
 */
interface ToggleSwitchProps {
  isOn?: boolean;
  onToggle?: (value: boolean) => void;
  label?: string;
  className?: string;
}

export function ToggleSwitch({
  isOn: controlledIsOn,
  onToggle,
  label,
  className = "",
}: ToggleSwitchProps) {
  const [internalIsOn, setInternalIsOn] = useState(false);
  const isOn = controlledIsOn !== undefined ? controlledIsOn : internalIsOn;

  const handleToggle = () => {
    const newValue = !isOn;
    if (onToggle) {
      onToggle(newValue);
    } else {
      setInternalIsOn(newValue);
    }
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {label && (
        <motion.span
          variants={labelSlideVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-sm text-white/70"
        >
          {label}
        </motion.span>
      )}

      <button
        onClick={handleToggle}
        className={`
          relative w-12 h-6 rounded-full transition-colors duration-300
          ${isOn ? "bg-[#0EA5E9]" : "bg-white/10"}
        `}
        aria-label={label || "Toggle switch"}
      >
        <motion.div
          variants={toggleVariants}
          animate={isOn ? "on" : "off"}
          className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-lg"
        />
      </button>
    </div>
  );
}

/**
 * Chart Bar Component
 * Animated bar that grows from bottom to top
 */
interface ChartBarProps {
  value: number;
  maxValue: number;
  label?: string;
  color?: string;
  delay?: number;
  className?: string;
}

export function ChartBar({
  value,
  maxValue,
  label,
  color = "#0EA5E9",
  delay = 0,
  className = "",
}: ChartBarProps) {
  const heightPercent = (value / maxValue) * 100;

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      {/* Bar container */}
      <div className="relative w-12 h-32 bg-white/5 rounded-lg overflow-hidden">
        {/* Animated bar */}
        <motion.div
          variants={chartBarVariants(delay)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute bottom-0 left-0 right-0 rounded-lg"
          style={{
            height: `${heightPercent}%`,
            background: `linear-gradient(to top, ${color}, ${color}AA)`,
            boxShadow: `0 0 20px ${color}40`,
          }}
        />
      </div>

      {/* Label */}
      {label && (
        <motion.span
          variants={labelSlideVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2 }}
          className="text-xs text-white/60"
        >
          {label}
        </motion.span>
      )}
    </div>
  );
}

/**
 * Chart Grid Component
 * Multiple bars with staggered animation
 */
interface ChartGridProps {
  data: Array<{
    value: number;
    label?: string;
    color?: string;
  }>;
  maxValue?: number;
  className?: string;
}

export function ChartGrid({ data, maxValue, className = "" }: ChartGridProps) {
  const calculatedMaxValue = maxValue || Math.max(...data.map((d) => d.value));

  return (
    <div className={`flex gap-4 items-end justify-center ${className}`}>
      {data.map((item, index) => (
        <ChartBar
          key={index}
          value={item.value}
          maxValue={calculatedMaxValue}
          label={item.label}
          color={item.color}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}

/**
 * Pulsing Icon Component
 * Subtle breathing animation
 */
interface PulsingIconProps {
  children: ReactNode;
  className?: string;
}

export function PulsingIcon({ children, className = "" }: PulsingIconProps) {
  return (
    <motion.div
      variants={iconPulseVariants}
      initial="initial"
      animate="pulse"
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * AI Card Grid Container
 * Staggers multiple AI cards
 */
interface AICardGridProps {
  children: ReactNode;
  className?: string;
}

export function AICardGrid({ children, className = "" }: AICardGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: staggerConfig.medium,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
