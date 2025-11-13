"use client";

import { motion } from "framer-motion";
import {
  graphLineVariants,
  graphNodeVariants,
  counterVariants,
  starContainerVariants,
  starVariants,
} from "@/lib/animations";

interface DataPoint {
  x: number;
  y: number;
  value?: string | number;
}

interface AnimatedGraphProps {
  dataPoints: DataPoint[];
  width?: number;
  height?: number;
  strokeColor?: string;
  strokeWidth?: number;
  showNodes?: boolean;
  showValues?: boolean;
  className?: string;
}

/**
 * Animated Graph Component
 * Smooth Bézier curve that reveals from left to right
 * With nodes that pop in at key points
 */
export function AnimatedGraph({
  dataPoints,
  width = 600,
  height = 300,
  strokeColor = "#0EA5E9",
  strokeWidth = 3,
  showNodes = true,
  showValues = true,
  className = "",
}: AnimatedGraphProps) {
  // Generate smooth curve path using quadratic bezier
  const generatePath = () => {
    if (dataPoints.length === 0) return "";

    let path = `M ${dataPoints[0].x} ${dataPoints[0].y}`;

    for (let i = 0; i < dataPoints.length - 1; i++) {
      const current = dataPoints[i];
      const next = dataPoints[i + 1];

      // Control point for smooth curve
      const cpX = (current.x + next.x) / 2;
      const cpY = (current.y + next.y) / 2;

      path += ` Q ${cpX} ${current.y}, ${next.x} ${next.y}`;
    }

    return path;
  };

  return (
    <div className={`relative ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="overflow-visible"
      >
        {/* Glossy gradient for line */}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={strokeColor} stopOpacity="0.6" />
            <stop offset="50%" stopColor={strokeColor} stopOpacity="1" />
            <stop offset="100%" stopColor={strokeColor} stopOpacity="0.6" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Animated line */}
        <motion.path
          d={generatePath()}
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
          variants={graphLineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />

        {/* Nodes at data points */}
        {showNodes &&
          dataPoints.map((point, index) => {
            const delay = 0.2 + index * 0.15;

            return (
              <g key={index}>
                {/* Outer glow circle */}
                <motion.circle
                  cx={point.x}
                  cy={point.y}
                  r={12}
                  fill={strokeColor}
                  opacity={0.2}
                  variants={graphNodeVariants(delay)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                />

                {/* Inner circle */}
                <motion.circle
                  cx={point.x}
                  cy={point.y}
                  r={6}
                  fill={strokeColor}
                  stroke="#fff"
                  strokeWidth={2}
                  variants={graphNodeVariants(delay)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                />
              </g>
            );
          })}
      </svg>

      {/* Value labels above nodes */}
      {showValues &&
        dataPoints.map((point, index) => {
          if (!point.value) return null;

          return (
            <motion.div
              key={`value-${index}`}
              variants={counterVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.15 }}
              className="absolute text-sm font-semibold text-white"
              style={{
                left: `${(point.x / width) * 100}%`,
                top: `${(point.y / height) * 100 - 15}%`,
                transform: "translate(-50%, -100%)",
              }}
            >
              {point.value}
            </motion.div>
          );
        })}
    </div>
  );
}

/**
 * Star Rating Component
 * Animated stars that appear one by one
 */
interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: number;
  color?: string;
  className?: string;
}

export function StarRating({
  rating,
  maxStars = 5,
  size = 20,
  color = "#FCD34D",
  className = "",
}: StarRatingProps) {
  return (
    <motion.div
      variants={starContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`flex gap-1 ${className}`}
    >
      {Array.from({ length: maxStars }).map((_, index) => (
        <motion.svg
          key={index}
          variants={starVariants}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={index < rating ? color : "none"}
          stroke={index < rating ? color : "#666"}
          strokeWidth={2}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </motion.svg>
      ))}
    </motion.div>
  );
}

/**
 * Animated Counter Component
 * Fades in with upward motion
 */
interface AnimatedCounterProps {
  value: string | number;
  label?: string;
  className?: string;
}

export function AnimatedCounter({
  value,
  label,
  className = "",
}: AnimatedCounterProps) {
  return (
    <motion.div
      variants={counterVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      <div className="text-3xl font-bold text-white">{value}</div>
      {label && <div className="text-sm text-white/60 mt-1">{label}</div>}
    </motion.div>
  );
}
