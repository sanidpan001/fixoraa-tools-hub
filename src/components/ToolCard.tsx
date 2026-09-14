import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import type { Tool } from "@/data/tools";

// This component is for individual tool links — animation speed transition mein badlein.
export function ToolCard({ tool, compact = false }: { tool: Tool; compact?: boolean }) {
  const openTool = () => window.open(`https://${tool.slug}.fixoraa.tech`, "_blank", "noopener,noreferrer");
  return <motion.button type="button" onClick={openTool} whileHover={{ y: -5, rotate: 1.2 }} whileTap={{ scale: .98 }} transition={{ type: "spring", stiffness: 220, damping: 18 }} className={`group w-full border border-border bg-card text-left shadow-warm-sm transition-shadow hover:shadow-warm ${compact ? "rounded-xl p-3" : "rounded-2xl p-4"}`}>
    <span className="flex items-center gap-3"><motion.span className="grid size-9 shrink-0 place-items-center rounded-xl bg-accent text-primary" whileHover={{ rotate: 5 }}><Sparkles className="size-4" /></motion.span><span className="min-w-0 flex-1"><span className="block truncate font-display text-sm font-semibold text-foreground">{tool.name}</span>{!compact && <span className="mt-1 line-clamp-1 block text-xs text-muted-foreground">{tool.description}</span>}</span><ArrowUpRight className="size-4 shrink-0 text-vintage-brown transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
  </motion.button>;
}
