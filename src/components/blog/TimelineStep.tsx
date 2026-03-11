"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function TimelineStep({
  time,
  children,
  index,
}: {
  time: string;
  children: ReactNode;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative flex gap-4 pb-6 last:pb-0"
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className="w-2.5 h-2.5 rounded-full bg-[#0EA5E9] ring-4 ring-[#0EA5E9]/20 shrink-0 mt-1" />
        <div className="w-px flex-1 bg-gradient-to-b from-[#0EA5E9]/30 to-transparent" />
      </div>
      <div className="pb-2">
        <span className="text-[#0EA5E9] text-xs font-mono font-semibold">{time}</span>
        <div className="text-gray-200 text-sm mt-2 leading-loose">{children}</div>
      </div>
    </motion.div>
  );
}
