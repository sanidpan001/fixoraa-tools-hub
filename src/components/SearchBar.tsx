import { AnimatePresence, motion } from "motion/react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Live search component — focus glow aur animation duration yahin edit karein.
export function SearchBar({ value, onChange, resultCount }: { value: string; onChange: (value: string) => void; resultCount: number }) {
  return <motion.div className="relative mx-auto w-full max-w-[700px]" whileFocusWithin={{ scale: 1.015 }} transition={{ duration: .5 }}>
    <Search className="pointer-events-none absolute left-5 top-1/2 size-5 -translate-y-1/2 text-primary" />
    <input aria-label="Search all tools" value={value} onChange={(event) => onChange(event.target.value)} placeholder="Search tools... e.g. background remover, pdf merger, image compressor" className="h-16 w-full rounded-full border border-border bg-surface-soft pl-14 pr-28 text-sm text-foreground shadow-warm-sm outline-none transition-shadow duration-500 placeholder:text-muted-foreground focus:shadow-search md:text-base" />
    <AnimatePresence>{value && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-2"><span className="hidden text-xs text-muted-foreground sm:inline">{resultCount} found</span><Button aria-label="Clear search" title="Clear search" variant="ghost" size="icon" onClick={() => onChange("")} className="rounded-full"><X /></Button></motion.span>}</AnimatePresence>
  </motion.div>;
}
