import { motion, useReducedMotion } from "motion/react";

// Floating vintage background — speed badalne ke liye transition duration edit karein.
export function AnimatedBackground() {
  const reduced = useReducedMotion();
  const blobs = [
    "left-[4%] top-28 size-72 bg-primary/15",
    "right-[2%] top-[32rem] size-80 bg-secondary/15",
    "bottom-32 left-[35%] size-64 bg-vintage-gold/15",
  ];
  return <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    {blobs.map((className, index) => <motion.div key={className} className={`absolute rounded-full blur-[80px] ${className}`} animate={reduced ? {} : { x: [0, 24, -12, 0], y: [0, -28, 16, 0] }} transition={{ duration: 15 + index * 3, repeat: Infinity, ease: "easeInOut" }} />)}
  </div>;
}
