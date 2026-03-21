"use client";

import { motion } from "framer-motion";
import { CountUp } from "@/components/animations/CountUp";

interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  color?: string;
}

export function StatBlock({ stats }: { stats: Stat[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-10"
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          className="relative border border-white/10 rounded-xl bg-[#0d0d12]/80 p-5 text-center overflow-hidden group hover:border-white/20 transition-colors"
        >
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${stat.color || "from-[#0d9488]/5 to-transparent"}`} />
          <div className="relative">
            <p className="text-2xl sm:text-3xl font-bold text-white font-space-grotesk">
              <CountUp to={stat.value} prefix={stat.prefix} suffix={stat.suffix} duration={1.5} />
            </p>
            <p className="text-white/40 text-xs sm:text-sm mt-1">{stat.label}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
