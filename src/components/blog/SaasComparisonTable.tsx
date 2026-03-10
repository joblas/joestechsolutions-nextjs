"use client";

import { motion } from "framer-motion";
import { Mail, Users, FileText, Receipt, Activity, Search, LayoutGrid, Share2, Compass, PenTool, X, Bot } from "lucide-react";

const rows = [
  { need: "Email triage + drafts", oldTool: "Superhuman", cost: 30, agent: "Agent + Gmail API", icon: Mail },
  { need: "CRM / pipeline", oldTool: "HubSpot", cost: 50, agent: "Supabase + agent", icon: Users },
  { need: "Content calendar", oldTool: "Notion + Buffer", cost: 25, agent: "Muse agent + cron", icon: FileText },
  { need: "Invoice generation", oldTool: "FreshBooks", cost: 30, agent: "Stripe API + agent", icon: Receipt },
  { need: "Uptime monitoring", oldTool: "Better Uptime", cost: 20, agent: "Heartbeat agent", icon: Activity },
  { need: "SEO monitoring", oldTool: "Ahrefs (lite)", cost: 99, agent: "Beacon + Search Console", icon: Search },
  { need: "Project management", oldTool: "Linear", cost: 16, agent: "GitHub Issues + agent", icon: LayoutGrid },
  { need: "Social scheduling", oldTool: "Buffer", cost: 15, agent: "Draft queue + approval", icon: Share2 },
  { need: "Competitive research", oldTool: "Manual (hours)", cost: 0, agent: "Radar + web search", icon: Compass },
  { need: "Client proposals", oldTool: "Google Docs", cost: 0, agent: "Template + gen script", icon: PenTool },
];

const totalOld = rows.reduce((s, r) => s + r.cost, 0);

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

export function SaasComparisonTable() {
  return (
    <div className="my-10">
      {/* Desktop / tablet */}
      <div className="hidden sm:block relative border border-white/10 rounded-2xl overflow-hidden bg-[#0d0d12]/80 backdrop-blur-sm">
        {/* Header */}
        <div className="grid grid-cols-[1fr_140px_80px_1fr] gap-0 bg-white/[0.03] border-b border-white/10 px-6 py-4">
          <span className="text-white/50 text-xs font-semibold uppercase tracking-wider">What I Needed</span>
          <span className="text-white/50 text-xs font-semibold uppercase tracking-wider">Old Tool</span>
          <span className="text-white/50 text-xs font-semibold uppercase tracking-wider text-right">Cost/mo</span>
          <span className="text-white/50 text-xs font-semibold uppercase tracking-wider text-right">Now Handled By</span>
        </div>
        {/* Rows */}
        {rows.map((row, i) => {
          const Icon = row.icon;
          return (
            <motion.div
              key={row.need}
              custom={i}
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-[1fr_140px_80px_1fr] gap-0 px-6 py-3.5 border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors"
            >
              <span className="flex items-center gap-3 text-white/80 text-sm">
                <Icon className="w-4 h-4 text-[#0EA5E9] shrink-0" />
                {row.need}
              </span>
              <span className="flex items-center gap-2 text-white/40 text-sm">
                <X className="w-3 h-3 text-red-400/60" />
                {row.oldTool}
              </span>
              <span className="text-right text-white/40 text-sm tabular-nums">
                {row.cost > 0 ? `$${row.cost}` : <span className="text-white/20">—</span>}
              </span>
              <span className="flex items-center justify-end gap-2 text-[#06B6D4] text-sm font-medium">
                <Bot className="w-3.5 h-3.5 shrink-0" />
                {row.agent}
              </span>
            </motion.div>
          );
        })}
        {/* Total */}
        <motion.div
          custom={rows.length}
          variants={rowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-[1fr_140px_80px_1fr] gap-0 px-6 py-4 bg-white/[0.03]"
        >
          <span className="text-white font-semibold text-sm">Total</span>
          <span />
          <span className="text-right text-red-400 font-bold text-sm line-through decoration-red-400/50">${totalOld}</span>
          <span className="text-right text-emerald-400 font-bold text-sm">$0 extra*</span>
        </motion.div>
        {/* Footnote */}
        <div className="px-6 py-3 bg-white/[0.02] border-t border-white/[0.05]">
          <p className="text-white/40 text-xs">
            * Runs on existing Claude Max subscription ($100/mo) used for daily development work — zero marginal cost for the agent system.
          </p>
        </div>
      </div>

      {/* Mobile cards */}
      <div className="sm:hidden space-y-3">
        {rows.map((row, i) => {
          const Icon = row.icon;
          return (
            <motion.div
              key={row.need}
              custom={i}
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border border-white/10 rounded-xl bg-[#0d0d12]/80 p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon className="w-4 h-4 text-[#0EA5E9]" />
                <span className="text-white text-sm font-medium">{row.need}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-white/40 flex items-center gap-1">
                  <X className="w-3 h-3 text-red-400/60" />
                  {row.oldTool} {row.cost > 0 && <span className="text-red-400/80">(${row.cost}/mo)</span>}
                </span>
                <span className="text-[#06B6D4] font-medium flex items-center gap-1">
                  <Bot className="w-3 h-3" />
                  {row.agent}
                </span>
              </div>
            </motion.div>
          );
        })}
        {/* Mobile total */}
        <motion.div
          custom={rows.length}
          variants={rowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border border-white/10 rounded-xl bg-gradient-to-r from-[#0EA5E9]/10 to-[#8B5CF6]/10 p-4"
        >
          <div className="flex justify-between items-center mb-2">
            <div>
              <p className="text-white/50 text-xs">Old SaaS stack</p>
              <p className="text-red-400 font-bold text-lg line-through decoration-red-400/50">${totalOld}/mo</p>
            </div>
            <div className="text-right">
              <p className="text-white/50 text-xs">AI agents</p>
              <p className="text-emerald-400 font-bold text-lg">$0 extra*</p>
            </div>
          </div>
          <p className="text-white/40 text-xs border-t border-white/10 pt-2">
            * Runs on existing Claude Max subscription used for daily dev work
          </p>
        </motion.div>
      </div>
    </div>
  );
}
