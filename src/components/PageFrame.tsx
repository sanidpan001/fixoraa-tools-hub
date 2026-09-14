import type { ReactNode } from "react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export function PageFrame({ children }: { children: ReactNode }) {
  return <div className="relative min-h-screen overflow-hidden bg-background"><AnimatedBackground /><SiteHeader /><main>{children}</main><SiteFooter /></div>;
}
