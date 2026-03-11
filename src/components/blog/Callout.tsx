"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Lightbulb, AlertTriangle, Zap, Quote } from "lucide-react";

type CalloutVariant = "insight" | "warning" | "tip" | "quote";

const variantStyles: Record<CalloutVariant, { border: string; bg: string; icon: typeof Lightbulb; iconColor: string }> = {
  insight: { border: "border-[#8B5CF6]/30", bg: "bg-[#8B5CF6]/5", icon: Lightbulb, iconColor: "text-[#8B5CF6]" },
  warning: { border: "border-amber-500/30", bg: "bg-amber-500/5", icon: AlertTriangle, iconColor: "text-amber-400" },
  tip: { border: "border-[#0EA5E9]/30", bg: "bg-[#0EA5E9]/5", icon: Zap, iconColor: "text-[#0EA5E9]" },
  quote: { border: "border-[#06B6D4]/30", bg: "bg-[#06B6D4]/5", icon: Quote, iconColor: "text-[#06B6D4]" },
};

export function Callout({
  variant = "insight",
  children,
  attribution,
}: {
  variant?: CalloutVariant;
  children: ReactNode;
  attribution?: string;
}) {
  const style = variantStyles[variant];
  const Icon = style.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`relative ${style.bg} ${style.border} border rounded-xl p-8 my-10`}
    >
      <Icon className={`w-5 h-5 ${style.iconColor} mb-4`} />
      <div className="text-gray-200 text-base leading-loose">{children}</div>
      {attribution && <p className="text-white/50 text-sm mt-4 font-medium">— {attribution}</p>}
    </motion.div>
  );
}
