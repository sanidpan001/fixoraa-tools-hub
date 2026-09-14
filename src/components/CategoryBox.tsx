import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ToolCard } from "@/components/ToolCard";
import type { Category, Tool } from "@/data/tools";

// This component is for Category Box - click expands to show tools.
// To change animation speed, edit transition duration in motion.div.
export function CategoryBox({ category, expanded, onToggle, visibleTools }: { category: Category; expanded: boolean; onToggle: () => void; visibleTools: Tool[] }) {
  const Icon = category.icon;
  return <motion.article layout initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} whileHover={expanded ? {} : { y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 150, damping: 20 }} className={`overflow-hidden rounded-[24px] border border-border bg-card p-6 shadow-warm-sm hover:shadow-warm md:p-8 ${expanded ? "md:col-span-2 lg:col-span-3" : ""}`}>
    <Button variant="ghost" onClick={onToggle} aria-expanded={expanded} aria-controls={`${category.id}-panel`} className="h-auto w-full justify-start rounded-2xl p-0 text-left hover:bg-transparent">
      <span className="flex w-full items-start gap-4"><span className={`grid size-14 shrink-0 place-items-center rounded-full ${category.color === "green" ? "bg-secondary/15 text-secondary" : category.color === "gold" ? "bg-vintage-gold/20 text-vintage-brown" : "bg-primary/15 text-primary"}`}><Icon className="size-6" /></span><span className="min-w-0 flex-1"><span className="flex flex-wrap items-center gap-2"><span className="font-display text-xl font-bold text-foreground">{category.name}</span><span className="rounded-full bg-surface-soft px-2.5 py-1 text-xs font-semibold text-vintage-brown">{category.count} tools</span></span><span className="mt-1 block whitespace-normal text-sm font-normal text-muted-foreground">{category.description}</span><span className="mt-3 block whitespace-normal text-xs font-semibold text-vintage-brown">{category.preview}</span></span><motion.span animate={{ rotate: expanded ? 180 : 0 }}><ChevronDown className="size-5 text-primary" /></motion.span></span>
    </Button>
    <AnimatePresence initial={false}>{expanded && <motion.div id={`${category.id}-panel`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ height: { type: "spring", stiffness: 120, damping: 22 }, opacity: { duration: .5 } }} className="overflow-hidden"><div className="mt-7 border-t border-border pt-6"><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{visibleTools.map((tool) => <ToolCard key={tool.slug} tool={tool} />)}</div>{visibleTools.length === 0 && <p className="py-8 text-center text-sm text-muted-foreground">No matching tools in this category.</p>}</div></motion.div>}</AnimatePresence>
  </motion.article>;
}
